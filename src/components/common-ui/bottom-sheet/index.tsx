import { ReactNode } from 'react';

type BottomSheetProps = {
  children: ReactNode;
};

const BottomSheet = ({ children }: BottomSheetProps) => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2  z-10 shadow-top-sm px-5 py-7 w-full xs:max-w-screen-xs bg-primary-06">
      {children}
    </div>
  );
};

export default BottomSheet;
