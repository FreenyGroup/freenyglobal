import React from 'react';
import FooterTwo from '@/components/footers/FooterTwo';
import HeaderTwo from '@/components/headers/HeaderTwo';
import StrickyHeaderTwo from '@/components/headers/StrickyHeaderTwo';
import AboutTwo from '@/features/home-two/AboutTwo';
import ContactTwo from '@/features/home-two/ContactTwo';
import CounterTwo from '@/features/home-two/CounterTwo';
import CtaOne from '@/features/home-two/CtaOne';
import FeatureTwo from '@/features/home-two/FeatureTwo';
import FindTransport from '@/features/home-two/FindTransport';
import MainSlider from '@/features/home-two/MainSlider';
import OfficeLocation from '@/features/home-two/OfficeLocation';
import TestimonialTwo from '@/features/home-two/TestimonialTwo';
import WhyChooseTwo from '@/features/home-two/WhyChooseTwo';

const page = () => {
  return (
    <div className="page-wrapper">
      <HeaderTwo />
      <MainSlider />
      <FeatureTwo />
      <AboutTwo />
      <WhyChooseTwo />
      <CtaOne />
      <OfficeLocation />
      <CounterTwo />
      <FindTransport />
      <TestimonialTwo />
      <ContactTwo />
      <FooterTwo />
      <StrickyHeaderTwo />
    </div>
  );
};

export default page;
