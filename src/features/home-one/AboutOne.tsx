'use client';

import React from 'react';
import AboutOneShape1 from '@/assets/images/shapes/about-one-shape-1.png';
import AboutOneShape2 from '@/assets/images/shapes/about-one-shape-2.png';
import AboutOneImg1 from '@/assets/images/services/service-details-img-2.jpg';
import useTransportContext from '@/components/context/useTransportContext';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Image from 'next/image';
import Link from 'next/link';
import TextAnimation from '@/components/elements/TextAnimation';

const AboutOne: React.FC = () => {
  const { handleVideoClick } = useTransportContext();
  return (
    <section className="about-one" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-one__left">
              <FadeInAdvanced
                variant={'slideInLeft'}
                delay={100}
                duration={2500}
              >
                <div className="about-one__img-box">
                  <div className="about-one__img">
                    <Image
                      src={AboutOneImg1}
                      style={{ width: '100%', height: 'auto' }}
                      alt=""
                    />
                  </div>
                  <div className="about-one__review-and-experience-box">
                    <div className="about-one__review-box">
                      <p className="about-one__review-text">
                        Inland Road Transport
                      </p>
                    </div>
                    <div className="about-one__experience-box">
                      <div className="about-one__experience-count">
                        <h3>Darfur</h3>
                      </div>
                      <p className="about-one__experience-count-text">
                        Regional <br /> Focus
                      </p>
                    </div>
                  </div>
                  <div className="about-one__circle-text">
                    <div className="about-one__round-text-box">
                      <div className="inner">
                        <div className="about-one__curved-circle rotate-me">
                          {'INLAND TRUCKING - WESTERN SUDAN - DARFUR'
                            .split('')
                            .map((char, index) => (
                              <span
                                key={index}
                                style={{
                                  transform: `rotate(${index * 9.72}deg)`,
                                  position: 'absolute',
                                  transformOrigin: 'center 7.33333em',
                                  left: '50%',
                                  marginLeft: '-0.4em',
                                }}
                              >
                                {char}
                              </span>
                            ))}
                        </div>
                      </div>
                      <div className="overlay-icon-box">
                        <Link href="/about">
                          <i className="icon-truck"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="about-one__shape-1">
                    <Image
                      src={AboutOneShape1}
                      width={98}
                      height={110}
                      alt="about"
                    />
                  </div>
                  <div className="about-one__shape-2">
                    <Image
                      src={AboutOneShape2}
                      width={131}
                      height={115}
                      alt="about"
                    />
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-one__right">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline-border"></span>
                  <div className="section-title__shape-1">
                    <i className="fas fa-plane"></i>
                  </div>
                  <h6 className="section-title__tagline">ABOUT US</h6>
                  <span className="section-title__tagline-border"></span>
                  <div className="section-title__shape-2">
                    <i className="fas fa-plane"></i>
                  </div>
                </div>
                <h3 className="section-title__title">
                  <TextAnimation animationStyle="style2">
                    Inland Trucking <br />
                    <span>Across Western Sudan</span>
                  </TextAnimation>
                </h3>
              </div>
              <p className="about-one__text">
                Freeny Global Logistics provides inland road transport
                for goods across Western Sudan, with a focus on
                Darfur. We support UN agencies, INGOs, and NGOs moving
                operational and humanitarian cargo. Procurement,
                freight brokerage, and logistics consultancy are
                available as complementary services.
              </p>
              <div className="about-one__point-box">
                <ul className="about-one__point">
                  <li>
                    <div className="about-one__point-icon">
                      <span className="icon-worldwide-shipping-1"></span>
                    </div>
                    <div className="about-one__point-content">
                      <h4>Our Mission</h4>
                      <p>
                        We focus on inland trucking for organizations
                        moving goods across Western Sudan, especially
                        Darfur.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="about-one__point-icon">
                      <span className="icon-24-hours-service"></span>
                    </div>
                    <div className="about-one__point-content">
                      <h4>Our Approach</h4>
                      <p>
                        We discuss cargo, pickup point, destination,
                        and timing to understand each transport
                        request.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="about-one__point-box-two">
                <ul className="about-one__point-two">
                  <li>
                    <div className="icon">
                      <span className="fas fa-check"></span>
                    </div>
                    <div className="text">
                      <p>For UN Agencies, INGOs & NGOs</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-check"></span>
                    </div>
                    <div className="text">
                      <p>Operational & Humanitarian Cargo</p>
                    </div>
                  </li>
                </ul>
                <ul className="about-one__point-two about-one__point-two--three">
                  <li>
                    <div className="icon">
                      <span className="fas fa-check"></span>
                    </div>
                    <div className="text">
                      <p>Focused on Darfur</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-check"></span>
                    </div>
                    <div className="text">
                      <p>Additional Logistics Services</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="about-one__btn-and-author-box">
                <div className="about-one__btn-box">
                  <Link href="/about" className="thm-btn">
                    Read More
                    <span>
                      <i className="icon-right-arrow"></i>
                    </span>
                  </Link>
                </div>
                <div className="about-one__author-box">
                  <div className="about-one__author-details">
                    <div className="about-one__author-content">
                      <h4>Mohamed Freeny</h4>
                      <p>Chairman of the Board</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
