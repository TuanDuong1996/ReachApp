import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
}

export function Container({
  children,
  containerClassName = "p-10px",
  ...props
}: ContainerProps) {
  return (
    <StyledContainer {...(props as any)} id="incident-container">
      <div style={{ maxWidth: "100vw" }} className={containerClassName} id="incident-scroll-container">
        {children}
      </div>
    </StyledContainer>
  );
}
