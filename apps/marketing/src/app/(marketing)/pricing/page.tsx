'use client';

import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@documenso/ui/primitives/accordion';
import { Button } from '@documenso/ui/primitives/button';

import { PricingTable } from '~/components/(marketing)/pricing-table';

export type PricingPageProps = {
  searchParams?: {
    planId?: string;
    email?: string;
    name?: string;
    cancelled?: string;
  };
};

export default function PricingPage() {
  return (
    <div className="mt-6 sm:mt-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold lg:text-5xl">Pricing</h1>

        <p className="text-foreground mt-4 text-lg leading-normal">
          Designed for every stage of your journey.
        </p>
        <p className="text-foreground text-lg leading-normal">
          Get started today for FREE (no credit card required).
        </p>
      </div>

      <div className="mt-12">
        <PricingTable />
      </div>

      <div className="mx-auto mt-36 max-w-2xl">
        <h2 className="text-center text-2xl font-semibold">
          None of these work for you? Try our free plan!
        </h2>

        <p className="text-muted-foreground mt-4 text-center leading-relaxed">
          Our free plan offers you the perfect opportunity to get a feel for our digital signing
          solution. Experience the convenience, efficiency, and security of our platform without any
          cost. Join other satisfied users who have embraced digital signing. Don't miss out – sign
          up for our free plan today and start sending docs.
        </p>

        <div className="mt-4 flex justify-center">
          <Button variant="outline" size="lg" className="rounded-full hover:cursor-pointer" asChild>
            <Link href="/singleplayer" target="_blank">
              Get Started
            </Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-36 max-w-2xl">
        {/* FAQ Section */}

        <h2 className="text-4xl font-semibold">FAQs</h2>

        <Accordion type="multiple" className="mt-8">
          <AccordionItem value="plan-differences">
            <AccordionTrigger className="text-left text-lg font-semibold">
              How does digital signing work?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Digital signing utilizes cryptographic technology to create a unique digital signature
              for a document. This signature is generated using a private key that is securely
              stored and associated with your identity. When the document is signed, the signature
              is encrypted and embedded within the document. Verification of the digital signature
              confirms the document's integrity and authenticity, ensuring that any tampering or
              modifications can be detected.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="data-handling">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Is digital signing legally binding?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Yes, digital signatures are legally binding in many jurisdictions around the world.
              They are recognized as valid and enforceable in various industries and sectors,
              including business, finance, government, and more. We adhere to industry standards and
              best practices to ensure the legal validity and compliance of our digital signing
              solution.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="should-use-cloud">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Is my digital signature secure?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              At Raffine, we prioritize the utmost security of your digital signature. We implement
              robust security measures, including encryption protocols, secure storage, and
              stringent access controls. Your private key is securely stored, and we employ
              industry-standard cryptographic algorithms to protect the integrity of your digital
              signature, ensuring that it cannot be tampered with or forged.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-to-contribute">
            <AccordionTrigger className="text-left text-lg font-semibold">
              What file types does your platform support for signing?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Our platform supports a wide range of file types, including popular formats such as
              PDF, Microsoft Word documents, Excel spreadsheets, PowerPoint presentations, and more.
              You can seamlessly sign and manage documents in the formats you commonly use in your
              business or personal workflows.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="can-i-use-documenso-commercially">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Can I sign documents on mobile devices?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Absolutely! Our platform is designed to be mobile-friendly and accessible on
              smartphones and tablets. With our user-friendly interface and responsive design, you
              can conveniently sign documents on the go, whether you're using an iOS or Android
              device.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-prefer-documenso">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Can I invite others to sign documents electronically?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              Yes, our platform allows you to easily invite others to sign documents electronically.
              You can send signing requests to individuals or multiple recipients, specifying their
              roles and signing order if necessary. Collaborators can add their signatures and any
              required information from anywhere, eliminating the need for physical documents and
              manual coordination.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="where-can-i-get-support">
            <AccordionTrigger className="text-left text-lg font-semibold">
              Where can I get support?
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground max-w-prose text-sm leading-relaxed">
              We are happy to assist you at{' '}
              <Link
                className="text-documenso-700 font-bold"
                target="_blank"
                href="mailto:raffinezw@gmail.com"
              >
                raffine@gmail.com
              </Link>{' '}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
