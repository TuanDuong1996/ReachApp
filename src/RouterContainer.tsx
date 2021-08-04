// @ts-ignore
import { useCurrentUser } from "@reach/core";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import { AppRoute } from "./helpers/routes";
import { useRootPath } from "./hooks/useRootPath";
import { IncidentDetail } from "./pages/IncidentDetail";
import { Incidents } from "./pages/Incidents";
import InValidPage from "./pages/InValidPage";
import { CreateIncident } from "./pages/NewIncident";
import { useGetUserQuery } from "./services/queries/useGetUserQuery";

export interface RouterContainerProps {}

function RouterContainer(props: RouterContainerProps) {
  const [isAccountValid, setIsAccountValid] = useState(true);

  const { path } = useRootPath();

  const user = useCurrentUser();

  const { isLoading, error } = useGetUserQuery(user.mail, {
    onSuccess: (data) => setIsAccountValid(!!data),
  });

  if (isLoading) return <Loading />;

  if (!isLoading && (error || !isAccountValid || !user)) {
    return <InValidPage />;
  }

  return (
    <Switch>
      <Route component={CreateIncident} path={path + AppRoute.new} exact />
      <Route component={Incidents} path={path + AppRoute.list} exact />
      <Route component={IncidentDetail} path={path + AppRoute.detail()} exact />
    </Switch>
  );
}

export default RouterContainer;
