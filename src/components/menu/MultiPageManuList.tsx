'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuItem } from '@/contents/navmenu/navType';
import { servicesList } from '@/contents/navmenu/navItem';

const MultiPageManuList: React.FC = () => {
  const currentPath = usePathname();
  const findLocation = (array: MenuItem[]): boolean => {
    return array.some((item) => item?.url === currentPath);
  };
  return (
    <ul className="main-menu__list">
      <li className={currentPath === '/' ? 'current' : ''}>
        <Link href="/">Home</Link>
      </li>
      <li className={currentPath === '/about' ? 'current' : ''}>
        <Link href="/about">About</Link>
      </li>
      <li
        className={`dropdown ${findLocation(servicesList) ? 'current' : ''}`}
      >
        <a href="#">Services</a>
        <ul className="shadow-box">
          {servicesList.map((item: MenuItem) => (
            <li
              key={item?.id}
              className={currentPath === item?.url ? 'current' : ''}
            >
              <Link href={item?.url}>{item?.text}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={currentPath === '/contact' ? 'current' : ''}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MultiPageManuList;
