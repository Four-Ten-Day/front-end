import { ComponentPropsWithoutRef } from 'react';
import { sizes } from './styles';
import * as S from './styles';

type FilterButtonProps = {
  size: keyof typeof sizes;
  active: boolean;
} & ComponentPropsWithoutRef<'button'>;

const FilterButton = ({
  size,
  active,
  children,
  ...rest
}: FilterButtonProps) => {
  return (
    <S.FilterButton active={active} size={size} {...rest}>
      {children}
    </S.FilterButton>
  );
};

export default FilterButton;
