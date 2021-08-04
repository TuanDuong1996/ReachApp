import { stringify } from "qs";
import { useEffect, useState } from "react";
import { useQuery, UseQueryOptions } from "react-query";
import { snRequest } from "../../helpers/request";
import { ServiceNowEndpoint } from "../endpoint";
import { APIErrorResponse, IncidentEntity } from "../types.interface";

export type GetIncidentDetailQueryResponse = IncidentEntity;
export type GetIncidentDetailQueryOptions = UseQueryOptions<
  GetIncidentDetailQueryFunc,
  APIErrorResponse,
  GetIncidentDetailQueryResponse
>;
export type GetIncidentDetailQueryFunc = () => GetIncidentDetailQueryResponse;

export const sysparm_fields =
  "sys_id,number,short_description,assigned_to,opened_at,urgency,comments,description";

export function useGetIncidentDetailQuery(
  id: string,
  options?: GetIncidentDetailQueryOptions
) {
  return useQuery<
    GetIncidentDetailQueryFunc,
    APIErrorResponse,
    GetIncidentDetailQueryResponse
  >({
    queryKey: ["useGetIncidentDetailQuery", id],
    queryFn: () =>
      snRequest
        .get(ServiceNowEndpoint.incident.detail(id), {
          params: {
            sysparm_fields,
            sysparm_display_value: true,
          },
        })
        .then((res) => res.data.result),
    ...options,
  });
}
