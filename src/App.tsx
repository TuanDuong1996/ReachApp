import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import "./styles/common.css";
import "./styles/index.css";
import "./styles/main.css";

import RouterContainer from "./RouterContainer";
import { RootPathProvider } from "./hooks/useRootPath";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export function App() {
  const match = useRouteMatch();

  
  return (
    <QueryClientProvider client={queryClient}>
      <RootPathProvider rootPath={match.path}>
        <RouterContainer />
      </RootPathProvider>
    </QueryClientProvider>
  );
}
