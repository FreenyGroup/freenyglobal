import type { Metadata } from 'next';

import DefaultBanner from '@/features/default-banner/DefaultBanner';
import AboutOne from '@/features/home-one/AboutOne';
import ServicesOne from '@/features/home-one/ServicesOne';
import SlidingTextOne from '@/features/home-one/SlidingTextOne';
import FindTransport from '@/features/home-two/FindTransport';
import ProcessOne from '@/features/home-one/ProcessOne';
import TeamOne from '@/features/home-one/TeamOne';
import FaqOne from '@/features/home-one/FaqOne';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Freeny Global Logistics | Darfur & Western Sudan',
  description:
    'Learn about Freeny Global Logistics and its focus on inland road transport for UN agencies, INGOs, and NGOs in Western Sudan and Darfur.',
};

const page: React.FC = () => {
  return (
    <>
      <DefaultBanner title="About" />
      <AboutOne />
      <SlidingTextOne />
      <ServicesOne />
      <FindTransport />
      <ProcessOne />
      <TeamOne />
      <FaqOne />
    </>
  );
};

export default page;
