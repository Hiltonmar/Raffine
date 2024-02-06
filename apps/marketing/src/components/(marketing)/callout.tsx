'use client';

import { usePlausible } from 'next-plausible';

import { Button } from '@documenso/ui/primitives/button';

export type CalloutProps = {
  starCount?: number;
  [key: string]: unknown;
};

export const Callout = ({ starCount }: CalloutProps) => {
  const event = usePlausible();

  const onSignUpClick = () => {
    const el = document.getElementById('email');

    if (el) {
      const { top } = el.getBoundingClientRect();

      window.scrollTo({
        top: top - 120,
        behavior: 'smooth',
      });

      setTimeout(() => {
        el.focus();
      }, 500);
    }
  };

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
      <Button
        type="button"
        variant="outline"
        className="rounded-full bg-transparent backdrop-blur-sm"
        onClick={onSignUpClick}
      >
        Get the Early Adopters Plan
        <span className="bg-primary dark:text-background -mr-2.5 ml-2.5 rounded-full px-2 py-1.5 text-xs">
          $2/mo for 3 months!
        </span>
      </Button>
    </div>
  );
};
