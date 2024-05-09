import * as S from './styles';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { UrlObject } from 'url';
import { sizes, variants } from './styles';
import Link from 'next/link';
export type Url = string | UrlObject;

type ButtonProps = {
  children: ReactNode;
  size: keyof typeof sizes;
  variant: keyof typeof variants;
  href?: Url;
} & ComponentPropsWithoutRef<'button'>;

const Button = ({
  children,
  size,
  variant,
  disabled,
  href,
  ...rest
}: ButtonProps) => {
  if (!disabled && href) {
    return (
      <S.Button
        as={Link}
        disabled={disabled}
        size={size}
        variant={variant}
        href={href}
        {...rest}
      >
        {children}
      </S.Button>
    );
  }

  return (
    <S.Button size={size} variant={variant} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
