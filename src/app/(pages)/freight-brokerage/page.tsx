'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceDetailsImg1 from '@/assets/images/services/service-details-img-4.jpg';
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
        subTitle="Freight Brokerage"
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
                  Freight Brokerage
                </h3>
                <p className="service-details__text-1">
                  Freeny Global Logistics bridges the gap between
                  businesses that need to move freight and qualified
                  transportation providers capable of handling it.
                  Through our growing network of vetted and licensed
                  carriers, we identify suitable transportation
                  options, negotiate competitive rates, and coordinate
                  the booking and movement of freight while keeping
                  communication organized between all parties.
                </p>
                <p className="service-details__text-2">
                  Our brokerage service is designed to simplify the
                  process of finding and managing transportation.
                  Instead of spending time searching for carriers,
                  comparing rates, and coordinating documentation,
                  shippers can rely on Freeny Global Logistics to
                  manage the process and connect each load with an
                  appropriate transportation partner.
                </p>
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Matching shipments with vetted and licensed
                      carriers.{' '}
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>Competitive freight rate negotiation.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>Load booking and shipment coordination.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Documentation and carrier communication
                      management.
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
                              A Network You Can Rely On
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            Our network of vetted transportation
                            providers gives shippers access to
                            dependable carrier options suited to their
                            cargo, route, and delivery requirements.
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
                              Efficient Freight Coordination
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            From identifying the right carrier to
                            coordinating the shipment, we simplify the
                            brokerage process so businesses can spend
                            less time managing transportation and more
                            time focusing on their operations.
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
