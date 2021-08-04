import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

type ContextTypes = {
  path?: string;
  setPath?: (val: string) => void;
};

const PathContext = createContext<ContextTypes>({});

export const RootPathProvider = ({ children, rootPath }) => {
  const [path, setPath] = useState(rootPath);

  return (
    <PathContext.Provider value={{ path, setPath }}>
      {children}
    </PathContext.Provider>
  );
};

export const useRootPath = () => {
  const { path } = useContext(PathContext);

  return {
    path,
  };
};
