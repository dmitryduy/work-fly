import React from "react";

interface IComposeProviderProps {
  providers: Array<
    [React.JSXElementConstructor<React.PropsWithChildren<any>>, object?]
  >;
  children: React.ReactNode;
}

export function ComposeProvider(props: IComposeProviderProps) {
  const { children, providers } = props;
  const composed = providers.reduceRight(
    (acc, [Provider, props]) => <Provider {...props}>{acc}</Provider>,
    children
  );

  return <>{composed}</>;
}
