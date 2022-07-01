import React, { FC } from "react";

interface Props {
  providers: Array<
    [React.JSXElementConstructor<React.PropsWithChildren<any>>, object?]
  >;
  children: React.ReactNode;
}

export const ComposeProvider: FC<Props> = ({ children, providers }) => {
  const composed = providers.reduceRight(
    (acc, [Provider, props]) => <Provider {...props}>{acc}</Provider>,
    children
  );

  return <>{composed}</>;
};