import type { ReactElement } from "react";

const ContainerBox = ({ children }: { children: ReactElement }) => {
  return <div className="container mx-auto px-4">
    {children}
  </div>;
};

export default ContainerBox;
