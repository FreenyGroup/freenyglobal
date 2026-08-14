import FooterTwo from '@/components/footers/FooterTwo';
import HeaderTwo from '@/components/headers/HeaderTwo';
import StrickyHeaderTwo from '@/components/headers/StrickyHeaderTwo';
import React from 'react';

const layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="page-wrapper">
      <HeaderTwo />
      {children}
      <FooterTwo />
      <StrickyHeaderTwo />
    </div>
  );
};

export default layout;
