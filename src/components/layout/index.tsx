import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen sm:flex sm:justify-center ">
      <div className="w-fullsm:max-w-screen-sm">{children}</div>
    </div>
  );
};

export default Layout;
