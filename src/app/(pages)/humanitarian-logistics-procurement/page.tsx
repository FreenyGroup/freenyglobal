'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceDetailsImg1 from '@/assets/images/services/service-details-img-3.jpg';
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
        subTitle="International Transport"
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
                  Humanitarian Logistics & Procurement
                </h3>
                <p className="service-details__text-1">
                  Freeny Global Logistics provides procurement and
                  logistics coordination for organizations that need
                  to move essential goods efficiently and reliably. We
                  help coordinate the journey from sourcing and
                  procurement through transportation and distribution,
                  connecting organizations with trusted logistics
                  partners to support the delivery of critical
                  supplies across regions and international borders.
                </p>
                <p className="service-details__text-2">
                  Humanitarian supply chains often involve complex
                  procurement requirements, multiple transportation
                  partners, international trade considerations, and
                  time-sensitive deliveries. Our approach brings these
                  moving parts together through organized
                  coordination, helping organizations manage the
                  logistics process and move essential goods toward
                  the people and communities they are intended to
                  serve.
                </p>
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Procurement and sourcing support for essential
                      goods.{' '}
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      International transportation and freight
                      coordination.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>Cross-border logistics and customs support.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Distribution and last-mile delivery
                      coordination.
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
                              From Procurement to Beneficiary
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            We coordinate the movement of essential
                            goods from sourcing and procurement
                            through transportation and distribution to
                            help ensure supplies reach their intended
                            destination.
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
                              Reliable Support for Complex Logistics
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            We bring together trusted logistics
                            providers and transportation partners to
                            help organizations navigate the challenges
                            of moving critical supplies across regions
                            and borders.
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
