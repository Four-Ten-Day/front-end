import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen sm:flex sm:justify-center">
      <div className="w-full sm:max-w-96 ">{children}</div>
    </div>
  );
};

export default Layout;
