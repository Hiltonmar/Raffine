'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { usePlausible } from 'next-plausible';
import { match } from 'ts-pattern';

import backgroundPattern from '@documenso/assets/images/background-pattern.png';
import { useFeatureFlags } from '@documenso/lib/client-only/providers/feature-flag';
import { cn } from '@documenso/ui/lib/utils';
import { Button } from '@documenso/ui/primitives/button';

import { Widget } from './widget';

export type HeroProps = {
  className?: string;
  [key: string]: unknown;
};

const BackgroundPatternVariants: Variants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,

    transition: {
      delay: 1,
      duration: 1.2,
    },
  },
};

const HeroTitleVariants: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Hero = ({ className, ...props }: HeroProps) => {
  const event = usePlausible();

  const { getFlag } = useFeatureFlags();

  const heroMarketingCTA = getFlag('marketing_landing_hero_cta');

  const onSignUpClick = () => {
    const el = document.getElementById('email');

    if (el) {
      const { top } = el.getBoundingClientRect();

      window.scrollTo({
        top: top - 120,
        behavior: 'smooth',
      });

      requestAnimationFrame(() => {
        el.focus();
      });
    }
  };

  return (
    <motion.div className={cn('relative', className)} {...props}>
      <div className="absolute -inset-24 -z-10">
        <motion.div
          className="flex h-full w-full origin-top-right items-center justify-center"
          variants={BackgroundPatternVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src={backgroundPattern}
            alt="background pattern"
            className="-mr-[50vw] -mt-[15vh] h-full scale-125 object-cover dark:contrast-[70%] dark:invert dark:sepia md:scale-150 lg:scale-[175%]"
          />
        </motion.div>
      </div>

      <div className="relative">
        <motion.h2
          variants={HeroTitleVariants}
          initial="initial"
          animate="animate"
          className="text-center text-4xl font-bold leading-tight tracking-tight lg:text-[64px]"
        >
          Document signing,
          <span className="block" /> finally digital.
        </motion.h2>

        <motion.div
          variants={HeroTitleVariants}
          initial="initial"
          animate="animate"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          <Button
            type="button"
            variant="outline"
            className="rounded-full bg-transparent backdrop-blur-sm"
            onClick={onSignUpClick}
          >
            Get the Early Adopters Plan
            <span className="bg-primary dark:text-background -mr-2.5 ml-2.5 rounded-full px-2 py-1.5 text-xs">
              $10/mo. x 3 months!
            </span>
          </Button>
        </motion.div>

        {match(heroMarketingCTA)
          .with('spm', () => (
            <motion.div
              variants={HeroTitleVariants}
              initial="initial"
              animate="animate"
              className="border-primary bg-background hover:bg-muted mx-auto mt-8 w-60 rounded-xl border transition-colors duration-300"
            >
              <Link href="/singleplayer" className="block px-4 py-2 text-center">
                <h2 className="text-muted-foreground text-xs font-semibold">
                  Introducing Signature Request Mode
                </h2>

                <h1 className="text-foreground mt-1.5 font-medium leading-5">
                  Self sign for free!
                </h1>
              </Link>
            </motion.div>
          ))
          .with('productHunt', () => (
            <motion.div
              variants={HeroTitleVariants}
              initial="initial"
              animate="animate"
              className="mt-8 flex flex-col items-center justify-center gap-x-6 gap-y-4"
            >
              <Link
                href="https://www.producthunt.com/posts/documenso?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-documenso"
                target="_blank"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=395047&theme=light&period=daily"
                  alt="Documenso - The open source DocuSign alternative | Product Hunt"
                  style={{ width: '250px', height: '54px' }}
                />
              </Link>
            </motion.div>
          ))
          .otherwise(() => null)}

        <motion.div
          className="mt-12"
          variants={{
            initial: {
              scale: 0.2,
              opacity: 0,
            },
            animate: {
              scale: 1,
              opacity: 1,
              transition: {
                ease: 'easeInOut',
                delay: 0.5,
                duration: 0.8,
              },
            },
          }}
          initial="initial"
          animate="animate"
        >
          <Widget className="mt-12">
            <strong>HOW RAFFINE WORKS</strong>
            <p className="w-full max-w-[70ch]">
              Sending a document for signing with Raffine is a breeze! Here's a step-by-step guide
              on how to get started. First, log in to your Raffine account and navigate to the
              dashboard. There, you'll find an option to upload your document directly from your
              computer or choose a file from your cloud storage. Once you've selected the document
              you want to send for signing, click on the "Next" button to proceed to the next step.
            </p>

            <p className="w-full max-w-[70ch]">
              In the next step, you'll be prompted to add the recipients who need to sign the
              document. You can enter their email addresses and customize the signing order if
              required. Additionally, you have the option to include a personalized message to
              provide any specific instructions or context for the recipients. Once you've added the
              recipients and reviewed the details, click on the "Next" button to move to the final
              step.
            </p>

            <p className="w-full max-w-[70ch]">
              In the final step, you can specify the signing fields that need to be completed by the
              recipients, such as signature, initials, date, or any custom fields. You can drag and
              drop the fields onto the document at the appropriate locations. Raffine makes it easy
              to position and resize the fields to ensure a neat and professional appearance. Once
              you've added all the necessary fields, click on the "Send" button to initiate the
              document for signing.
            </p>

            <p className="w-full max-w-[70ch]">
              Sit back and relax as Raffine takes care of the rest, sending email notifications to
              the recipients and guiding them through the signing process. You can track the
              progress of the document and receive notifications when it has been successfully
              signed by all parties involved.
            </p>

            <p className="w-full max-w-[70ch]">
              Today we invite you to join us and experience the sweet simplicity of Raffine's
              digital signing solution. Sign up now and enjoy the ease of paperless signing!
            </p>

            <div className="flex h-24 items-center">
              <p className={cn('text-5xl [font-family:var(--font-caveat)]')}>The Raffine Team</p>
            </div>

            <div>
              <strong>Hilton Marumure</strong>
              <p className="mt-1">Co-Founder: Raffine</p>
            </div>
          </Widget>
        </motion.div>
      </div>
    </motion.div>
  );
};
