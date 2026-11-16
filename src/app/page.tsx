import React from 'react';
import type { Metadata } from 'next';
import FooterTwo from '@/components/footers/FooterTwo';
import HeaderTwo from '@/components/headers/HeaderTwo';
import StrickyHeaderTwo from '@/components/headers/StrickyHeaderTwo';
import AboutTwo from '@/features/home-two/AboutTwo';
import ContactTwo from '@/features/home-two/ContactTwo';
import CtaOne from '@/features/home-two/CtaOne';
import FeatureTwo from '@/features/home-two/FeatureTwo';
import FindTransport from '@/features/home-two/FindTransport';
import MainSlider from '@/features/home-two/MainSlider';
import WhyChooseTwo from '@/features/home-two/WhyChooseTwo';

export const metadata: Metadata = {
  title: 'Inland Trucking in Darfur & Western Sudan | Freeny Global Logistics',
  description:
    'Freeny Global Logistics provides inland road transport for goods across Western Sudan, with a focus on Darfur, serving UN agencies, INGOs, and NGOs.',
};

const page = () => {
  return (
    <div className="page-wrapper">
      <HeaderTwo />
      <MainSlider />
      <FeatureTwo />
      <AboutTwo />
      <WhyChooseTwo />
      <CtaOne />
      <FindTransport />
      <ContactTwo />
      <FooterTwo />
      <StrickyHeaderTwo />
    </div>
  );
};

export default page;
