// @ts-ignore
import { Page } from "@reach/chrome";

import React, { FC, useEffect, useReducer } from "react";
import { useCurrentUser } from "@livetiles/reach-components-react";
import { useState } from "react";
import { useGetIncidentsQuery } from "../../services/queries/useGetIncidentsQuery";
import { Container } from "../../components/Container";
import { AppRoute } from "../../helpers/routes";
import PlusCircleSVG from "../../icons/PlusCircleSVG";
import SearchInput from "./SearchInput";
import moment from "moment";
import { IncidentEntity, UrgencyEnum } from "../../services/types.interface";
import Loading from "../../components/Loading";
import AppLink from "../../components/AppLink";

interface QueryParams {
  offset: number;
  search?: string;
}

export const Incidents: FC = () => {
  const user = useCurrentUser();
  const [hasMore, setHasMore] = useState(true);

  const [{ offset, search }, setQuery] = useReducer(
    (s: QueryParams, n: Partial<QueryParams>) => ({ ...s, ...n }),
    {
      offset: 0,
    }
  );

  const [incidents, setIncidents] = useState<IncidentEntity[]>([]);

  useEffect(() => {
    setIncidents([]);
    setQuery({ offset: 0 });
    setHasMore(true);
  }, [search]);

  const { isLoading } = useGetIncidentsQuery(
    {
      opened_by: user.id || "",
      sysparm_offset: offset,
      search,
    },
    {
      onSuccess: (data) => {
        if (data.length < 10) {
          setHasMore(false);
        }

        setIncidents((inc) => [
          ...inc.filter((i) => !data.find((d) => d.sys_id === i.sys_id)),
          ...data,
        ]);
      },
    }
  );

  useEffect(() => {
    document
      .querySelector(".page-content-container")
      .addEventListener("scroll", scrollTracking);

    return () => {
      document
        .querySelector(".page-content-container")
        .removeEventListener("scroll", scrollTracking);
    };
  }, [offset, hasMore, isLoading]);

  function isBottom(el: Element) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  const scrollTracking = () => {
    const el = document.getElementById("incident-scroll-container");

    if (isBottom(el)) {
      !isLoading && hasMore && setQuery({ offset: offset + 10 });
    }
  };

  return (
    <Page title="My Incident"  >
      <Container>
        <div className="flex items-center py-10px">
          <div className="flex-grow">
            <SearchInput
              value={search}
              onChange={(e) => setQuery({ search: e.target.value })}
            />
          </div>
          <div className="pr-2 pl-4">
            <AppLink
              to={AppRoute.new}
              className="text-gray-500 cursor-pointer hover:text-black fill-current"
            >
              <PlusCircleSVG width={20} height={20} />
            </AppLink>
          </div>
        </div>

        {incidents?.map((item) => (
          <AppLink key={item.sys_id} to={AppRoute.detail(item.sys_id)}>
            <div className="my-10px px-10px py-4 border border-gray-400 shadow rounded-sm cursor-pointer bg-white">
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center space-x-2 text-xs rounded-sm ${
                    item.urgency === UrgencyEnum.HIGH
                      ? "text-red-800 bg-red-400"
                      : item.urgency === UrgencyEnum.MEDIUM
                      ? "text-yellow-800 bg-yellow-400"
                      : "text-blue-800 bg-blue-400"
                  }`}
                  style={{ padding: "2px 8px" }}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.urgency === UrgencyEnum.HIGH
                        ? "bg-red-800"
                        : item.urgency === UrgencyEnum.MEDIUM
                        ? "bg-yellow-800"
                        : "bg-blue-800"
                    }`}
                  />
                  <div>
                    {item.urgency === UrgencyEnum.HIGH
                      ? "High"
                      : item.urgency === UrgencyEnum.MEDIUM
                      ? "Medium"
                      : "Low"}
                  </div>
                </div>
                <div className="text-gray-600 text-xs">{item.number}</div>
              </div>
              <div className="mt-2 text-sm">{item.short_description}</div>
              <div className="mt-2 flex space-x-2 items-center">
                <div className="text-xs text-black">Assigned to</div>
                {item.assigned_to && (
                  <div className="space-x-1 flex items-center">
                    {/* <img src={} /> */}
                    <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center">
                      <span className="text-white text-xs uppercase">
                        {item.assigned_to.display_value
                          .split(" ")
                          .map((item) => item[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.assigned_to.display_value}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-300">Created</span>
                <span className="text-xs inline-block ml-2">
                  {moment
                    .utc(item.opened_at, "DD/MM/YYYY HH:mm:ss")
                    .local()
                    .format("MMM-DD-YYYY HH:mm:ss")}
                </span>
              </div>
            </div>
          </AppLink>
        ))}
        {isLoading && (
          <div className="my-20px">
            <Loading />
          </div>
        )}
      </Container>
    </Page>
  );
};
