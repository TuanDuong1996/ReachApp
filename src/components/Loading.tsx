import React from "react";

export interface LoadingProps {
  loading?: boolean;
}

function Loading({ loading = true }: LoadingProps) {
  if (loading)
    return (
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  return null;
}

export default Loading;
