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
                  Logistics Consultancy
                </h3>
                <p className="service-details__text-1">
                  Freeny Global Logistics helps businesses evaluate,
                  improve, and build more efficient supply chain
                  operations. We work with SMEs, manufacturers,
                  distributors, and international businesses to
                  identify logistics challenges, reduce unnecessary
                  costs, and develop practical strategies that improve
                  the way goods move through their operations.
                </p>
                <p className="service-details__text-2">
                  Our consulting services cover supply chain
                  assessment, freight cost optimization, logistics
                  network design, customs, and trade-compliance
                  guidance. By understanding your current operations
                  and business objectives, we provide actionable
                  recommendations designed to improve efficiency,
                  strengthen logistics processes, and create a supply
                  chain that can support long-term growth.
                </p>
                <ul className="service-details__points-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Supply chain assessments and operational
                      analysis.{' '}
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>
                      Freight and transportation cost optimization.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>Logistics network design and planning.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-right-arrow"></span>
                    </div>
                    <p>Customs and trade-compliance guidance.</p>
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
                              Optimize Your Supply Chain
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            We analyze your existing logistics
                            processes to identify inefficiencies,
                            cost-saving opportunities, and practical
                            improvements that can strengthen overall
                            supply chain performance.
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
                              Build for Long-Term Growth
                            </h3>
                          </div>
                          <p className="service-details__img-box-content-text">
                            We help businesses develop scalable
                            logistics strategies that can adapt to
                            changing markets, increasing shipment
                            volumes, and future expansion.
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
