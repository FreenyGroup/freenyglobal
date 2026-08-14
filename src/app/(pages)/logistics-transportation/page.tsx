'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceDetailsImg1 from '@/assets/images/services/service-details-img-1.jpg';
import ServiceDetailsImgBoxImg1 from '@/assets/images/services/service-details-img-box-img-1.jpg';
import ServiceDetailsImgBoxImg2 from '@/assets/images/services/service-details-img-box-img-2.jpg';
import DefaultBanner from '@/features/default-banner/DefaultBanner';
import TransportSidebar from '@/features/transport/TransportSidebar';
import { faqDataOne, FaqItem } from '@/contents/faqs/Faqs';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Image from 'next/image';

const Page: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number>(2);
  const handleFaqItem = (id: number): void => {
    setActiveFaq(id);
  };
  return (
    <>
      <DefaultBanner
        title="Services"
        subTitle="Logistics & Transportation"
        titleLink="/services"
      />
      <section className="service-details">
        <div className="container">
          <div className="row">
            <TransportSidebar />
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__left">
                <div className="service-details__img">
                  <Image
                    src={ServiceDetailsImg1}
                    style={{ width: '100%', height: 'auto' }}
                    alt=""
                  />
                </div>
                <h3 className="service-details__title-1">
                  Logistics & Transportation
                </h3>
                <p className="service-details__text-1">
                  Freeny Global Logistics provides coordinated
                  transportation and distribution solutions for
                  businesses moving goods across the UAE, GCC, and
                  international markets. We work with a network of
                  trusted carriers, freight partners, and logistics
                  providers to arrange the right transportation
                  solution for each shipment, helping businesses move
                  cargo efficiently while maintaining visibility and
                  control throughout the process.
                </p>
                <p className="service-details__text-2">
                  From road freight and freight forwarding support to
                  warehousing and last-mile distribution, we
                  coordinate the resources needed to move your goods
                  from origin to destination. Our flexible approach
                  allows us to support individual shipments, recurring
                  transportation needs, and growing businesses without
                  the limitations of a traditional one-size-fits-all
                  logistics model.
                </p>
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Road freight coordination across the UAE and
                      GCC.{' '}
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Freight forwarding and cross-border logistics
                      support.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Warehousing and last-mile distribution
                      arrangements.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Flexible transportation solutions tailored to
                      your shipment.
                    </p>
                  </li>
                </ul>
                <div className="service-details__img-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-new-product"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              Coordinated From Pickup to Delivery
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            We manage the logistics process across
                            multiple partners, coordinating
                            transportation and delivery requirements
                            to keep your shipment moving efficiently
                            from origin to destination.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="service-details__img-box-single">
                        <div className="service-details__img-box-content">
                          <div className="service-details__img-box-content-icon-and-title">
                            <div className="service-details__img-box-content-icon">
                              <span className="icon-customer-loyalty"></span>
                            </div>
                            <h3 className="service-details__img-box-content-title">
                              Flexible Solutions for Growing
                              Businesses
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Whether you need transportation for a
                            single shipment or ongoing logistics
                            support, we provide solutions that can
                            adapt to your business and changing
                            operational needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="faq-page__single">
                  <div className="accrodion-grp faq-one-accrodion">
                    {faqDataOne.map((item: FaqItem) => (
                      <FadeInAdvanced
                        key={item.id}
                        variant={
                          item?.id % 2 === 0
                            ? 'fadeInLeft'
                            : 'fadeInRight'
                        }
                        delay={item?.id * 70}
                        distance={30}
                        duration={300}
                        className={`accrodion ${activeFaq === item.id ? 'active' : ''}`}
                      >
                        <div
                          className="accrodion-title"
                          onClick={() => handleFaqItem(item?.id)}
                        >
                          <h4>{item?.question}</h4>
                        </div>
                        <motion.div
                          initial={{ y: -40, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                          }}
                          viewport={{ amount: 0.05 }}
                          className="accrodion-content"
                          style={{
                            display: `${activeFaq === item.id ? 'block' : 'none'}`,
                          }}
                        >
                          <div className="inner">
                            <p>{item?.answer}</p>
                          </div>
                          {/* /.inner */}
                        </motion.div>
                      </FadeInAdvanced>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
