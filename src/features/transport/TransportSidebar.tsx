'use client';

import React from 'react';
import ServiceDetailsSidebarImg from '@/assets/images/services/service-details-sidebar-img.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type ServiceList = {
  id: number;
  linkUrl: string;
  text: string;
};
const serviceList: ServiceList[] = [
  {
    id: 1,
    linkUrl: '/logistics-transportation',
    text: 'Logistics & Transportation',
  },
  {
    id: 2,
    linkUrl: '/freight-brokerage',
    text: 'Freight Brokerage',
  },
  {
    id: 3,
    linkUrl: '/logistics-consultancy',
    text: 'Logistics Consultancy',
  },
  {
    id: 4,
    linkUrl: '/humanitarian-logistics-procurement',
    text: 'Humanitarian Logistics & Procurement',
  },
];
const TransportSidebar: React.FC = () => {
  const currentPath: string = usePathname();
  return (
    <div className="col-xl-4 col-lg-5">
      <div className="service-details__sidebar">
        <div className="service-details__services-box">
          <h3 className="service-details__services-title">
            Our Services
          </h3>
          <ul className="service-details__services-list list-unstyled">
            {serviceList.map((item) => (
              <li
                key={item?.id}
                className={
                  currentPath === item?.linkUrl ? 'active' : ''
                }
              >
                <Link href={item?.linkUrl}>
                  {item?.text}
                  <span className="icon-next"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="service-details__sidebar-contact">
          <div className="service-details__sidebar-contact-img">
            <div className="inner">
              <Image
                src={ServiceDetailsSidebarImg}
                width={284}
                height={285}
                alt="Team"
              />
            </div>
          </div>

          <div className="service-details__sidebar-contact-content">
            <div className="icon">
              <span className="icon-phone-call"></span>
            </div>
            <h2>
              <a href="tel:585858575084">+58 585 857 5084</a>
            </h2>
            <p>
              If You Need Any Help <br />
              Contact With Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportSidebar;
