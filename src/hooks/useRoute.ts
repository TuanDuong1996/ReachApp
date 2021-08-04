import React from "react";
import { useRouteMatch } from "react-router";

export function useRoute() {
  const params = useRouteMatch();
}
