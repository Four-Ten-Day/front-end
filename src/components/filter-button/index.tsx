import { ComponentPropsWithoutRef } from 'react';

type FilterButtonProps = {
  size: keyof typeof sizes;
  active: boolean;
} & ComponentPropsWithoutRef<'button'>;

const base =
  'flex flex-col justify-center items-center w-[168px] text-h3 rounded-medium border';

const sizes = {
  S: 'gap-2 h-[72px]',
  L: 'gap-8 h-48',
};

const FilterButton = ({ size, active, children }: FilterButtonProps) => {
  return (
    <button
      className={[
        base,
        sizes[size],
        `${
          active
            ? 'border-primary-01 text-primary-06 bg-primary-01'
            : 'border-primary-04 text-primary-04'
        }`,
      ].join(' ')}
    >
      {children}
    </button>
  );
};

export default FilterButton;
