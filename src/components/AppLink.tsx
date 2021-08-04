import React from "react";
import { Link, LinkProps, useRouteMatch } from "react-router-dom";
import { useRootPath } from "../hooks/useRootPath";

export interface AppLinkProps extends LinkProps {}

function AppLink({ to, ...props }: AppLinkProps) {
  const { path } = useRootPath();

  return <Link to={path + to} {...props} />;
}

export default AppLink;
