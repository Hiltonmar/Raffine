'use client';

import type { HTMLAttributes } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@documenso/assets/logo.png';
import { cn } from '@documenso/ui/lib/utils';
import { ThemeSwitcher } from '@documenso/ui/primitives/theme-switcher';

export type FooterProps = HTMLAttributes<HTMLDivElement>;

const FOOTER_LINKS = [
  { href: '/pricing', text: 'Pricing' },
  { href: '/singleplayer', text: 'Signature Request' },
  { href: 'mailto:raffine@gmail.com', text: 'Support', target: '_blank' },
  { href: '/careers', text: 'Careers' },
  { href: '/privacy', text: 'Privacy' },
  { href: '/Ts & Cs', text: 'Ts & Cs' },
];

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <div className={cn('border-t py-12', className)} {...props}>
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-start justify-between gap-8 px-8">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={LogoImage}
              alt="Documenso Logo"
              className="dark:invert"
              width={170}
              height={0}
            />
          </Link>
        </div>

        <div className="grid w-full max-w-sm grid-cols-2 gap-x-4 gap-y-2 md:w-auto md:gap-x-8">
          {FOOTER_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.target}
              className="text-muted-foreground hover:text-muted-foreground/80 flex-shrink-0 break-words text-sm"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-4 flex w-full max-w-screen-xl flex-wrap items-center justify-between gap-4 px-8 md:mt-12 lg:mt-24">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Raffine, Inc. All rights reserved.
        </p>

        <div className="flex flex-wrap">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
