'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceDetailsImg1 from '@/assets/images/services/service-details-img-2.jpg';
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
        subTitle="Inland Trucking in Western Sudan"
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
                  Inland Trucking for Western Sudan
                </h3>
                <p className="service-details__text-1">
                  Freeny Global Logistics provides inland road
                  transport for goods across Western Sudan, with a
                  particular focus on Darfur. We support UN agencies,
                  international NGOs (INGOs), and NGOs with the
                  movement of operational and humanitarian cargo.
                </p>
                <p className="service-details__text-2">
                  Share the cargo details, pickup point, destination,
                  and requested timing with our team to discuss your
                  transport requirements. Freight brokerage,
                  procurement, and logistics consultancy are also
                  available as complementary services.
                </p>
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Inland road transport across Western Sudan, with
                      a focus on Darfur.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Transport support for UN agencies, INGOs, and
                      NGOs.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Movement of operational and humanitarian goods.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Procurement, freight brokerage, and consultancy
                      as additional services.
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
                              Share Your Route Requirements
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Tell us what needs to move, where it will
                            be collected, its destination, and the
                            timing you need. Our team can discuss the
                            transport requirements with you.
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
                              Transport for Aid Organizations
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            We provide inland goods transport for UN
                            agencies, INGOs, and NGOs operating in
                            Western Sudan, especially Darfur.
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
