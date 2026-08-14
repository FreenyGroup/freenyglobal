import React from 'react';
import ContactMain from '@/features/contact/ContactMain';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Contact Us | Freeny Global Logistics - Connecting Global Markets - Delivering Excellence',
};

const page: React.FC = () => {
  return (
    <>
      <DefaultBanner title="Contact" />
      <ContactMain />
    </>
  );
};

export default page;
