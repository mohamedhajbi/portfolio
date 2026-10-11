import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import styles from './Button.module.css';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
}

/** Call-to-action rendered as a link (every CTA on this site navigates somewhere). */
export function ButtonLink({ variant = 'primary', className, children, ...rest }: ButtonLinkProps) {
  const isExternal = rest.href?.startsWith('http');
  return (
    <a
      className={cn(styles.button, styles[variant], className)}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
