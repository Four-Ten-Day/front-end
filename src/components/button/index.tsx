import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { UrlObject } from 'url';
type Url = string | UrlObject;

type ButtonProps = {
  children: ReactNode;
  size: keyof typeof sizes;
  variant: keyof typeof varinats;

  href?: Url;
} & ComponentPropsWithoutRef<'button'>;

const base = 'flex justify-center items-center text-h2';

const sizes = {
  S: 'w-[154px] h-14 rounded-small',
  M: 'w-60 h-16 rounded-medium',
  L: 'w-[352px] h-16 rounded-medium',
};

const varinats = {
  contained: 'bg-primary-01 text-primary-06',
  outlined: 'border border-primary-01 text-primary-01',
};

const Button = ({
  children,
  size,
  variant,
  disabled,
  href,
  ...rest
}: ButtonProps) => {
  if (href)
    return (
      <Link
        className={
          [base, sizes[size], varinats[variant]].join(' ') +
          `${disabled ? ' bg-primary-04 text-primary-06 ' : ' '}` +
          rest.className
        }
        href={href}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={
        [base, sizes[size], varinats[variant]].join(' ') +
        `${disabled ? ' bg-primary-04 text-primary-06 ' : ' '}`
      }
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
