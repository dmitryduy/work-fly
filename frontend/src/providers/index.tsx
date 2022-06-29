import React from "react";

interface IComposeProviderProps {
  components: Array<[React.JSXElementConstructor<React.PropsWithChildren<any>>, {}]>
  children?: React.ReactNode
};

const ComposeProvider = ({ children, components }: IComposeProviderProps) => {
  const composedProvider = components.reduceRight((acc, [ Provider, props ]) => (
    <Provider {...props}>{acc}</Provider>
  ), children);

  return composedProvider;
};

export default ComposeProvider;