'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import MainSliderMap1 from '@/assets/images/shapes/main-slider-map-1.png';
import Image from 'next/image';
import Link from 'next/link';

const MainSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="main-slider" id="home">
      <div className="swiper-container thm-swiper__slider">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            effect="fade"
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
          >
            <SwiperSlide>
              <div
                className={`swiper-slide ${activeIndex === 0 ? 'swiper-slide-active' : ''}`}
              >
                <div className="main-slider__pattern-bg"></div>
                <div className="main-slider__bg-box">
                  <div className="main-slider__bg bg_11"></div>
                </div>
                <div className="main-slider__shape-1"></div>
                <div className="main-slider__shape-2"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <h4 className="main-slider__sub-title">
                          Inland Trucking for Humanitarian Operations
                        </h4>
                        <h2 className="main-slider__title">
                          Goods on the Road <br />
                          Across <span>Western Sudan</span>
                        </h2>
                        <p className="main-slider__text">
                          Inland transport for UN agencies, INGOs, and
                          NGOs, with a focus on <br /> moving goods
                          across Darfur and Western Sudan.
                        </p>
                        <div className="main-slider__btn-box">
                          <Link
                            href="/logistics-transportation"
                            className="thm-btn"
                          >
                            Explore Transport
                            <span>
                              <i className="icon-right-arrow"></i>
                            </span>
                          </Link>
                        </div>
                        <div className="main-slider__map">
                          <Image
                            src={MainSliderMap1}
                            width={679}
                            height={676}
                            className="float-bob-y"
                            alt="shape"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`swiper-slide ${activeIndex === 1 ? 'swiper-slide-active' : ''}`}
              >
                <div className="main-slider__pattern-bg"></div>
                <div className="main-slider__bg-box">
                  <div className="main-slider__bg bg_12"></div>
                </div>
                <div className="main-slider__shape-1"></div>
                <div className="main-slider__shape-2"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <h4 className="main-slider__sub-title">
                          Supporting Humanitarian Supply Chains
                        </h4>
                        <h2 className="main-slider__title">
                          Cargo Transport <br />
                          Focused on <span>Darfur</span>
                        </h2>
                        <p className="main-slider__text">
                          Practical road transport for organizational
                          and humanitarian goods, <br /> with
                          procurement and logistics support available
                          as complementary services.
                        </p>
                        <div className="main-slider__btn-box">
                          <Link href="/contact" className="thm-btn">
                            Discuss a Shipment
                            <span>
                              <i className="icon-right-arrow"></i>
                            </span>
                          </Link>
                        </div>
                        <div className="main-slider__map">
                          <Image
                            src={MainSliderMap1}
                            width={679}
                            height={676}
                            className="float-bob-y"
                            alt="shape"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className="swiper-pagination"
          id="main-slider-pagination"
        ></div>
      </div>
    </section>
  );
};

export default MainSlider;
