import ServicesOne11 from '@/assets/images/services/services-one-1-1.jpg';
import ServicesOne12 from '@/assets/images/services/services-one-1-2.jpg';
import ServicesOne13 from '@/assets/images/services/services-one-1-3.jpg';
import { StaticImageData } from 'next/image';

export interface ServiceItem {
  id: number;
  count: string;
  title: string;
  link: string;
  image: string | StaticImageData;
  iconClass: string;
  text: string;
}
export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Logistics & Transportation',
    link: '/logistics-transportation',
    image: ServicesOne11,
    iconClass: 'icon-worldwide-shipping',
    count: '01',
    text: 'Transportation coordination, freight forwarding support, warehousing, last-mile delivery',
  },
  {
    id: 2,
    title: 'Logistics Consultancy',
    link: '/logistics-consultancy',
    image: ServicesOne12,
    iconClass: 'icon-shipment',
    count: '02',
    text: 'Supply-chain assessment, cost optimization, compliance, network design',
  },
  {
    id: 3,
    title: 'Freight Brokerage',
    link: '/freight-brokerage',
    image: ServicesOne13,
    iconClass: 'icon-delivery-man',
    count: '03',
    text: 'Shipper/carrier matching, rate negotiation, load booking, documentation',
  },
];

export interface ServiceThreeItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
  animationVariant: 'fadeInLeft' | 'fadeInUp' | 'fadeInRight';
  delay: number;
}

export const servicesThreeData: ServiceThreeItem[] = [
  {
    id: 1,
    icon: 'icon-worldwide-shipping',
    title: 'International Shipping',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    link: '/international-transport',
    animationVariant: 'fadeInLeft',
    delay: 100,
  },
  {
    id: 2,
    icon: 'icon-shipment',
    title: 'Ocean Freight',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    link: '/ocean-transport',
    animationVariant: 'fadeInUp',
    delay: 200,
  },
  {
    id: 3,
    icon: 'icon-delivery-man',
    title: 'Rail Freight',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    link: '/emergency-transport',
    animationVariant: 'fadeInRight',
    delay: 300,
  },
];
