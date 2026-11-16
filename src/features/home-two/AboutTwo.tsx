'use client';
import AboutTwoShape1 from '@/assets/images/shapes/about-two-shape-1.png';
import AboutTwoShape2 from '@/assets/images/shapes/about-two-shape-2.png';
import AboutTwoShape3 from '@/assets/images/shapes/about-two-shape-3.png';
import AboutTwoShape4 from '@/assets/images/shapes/about-two-shape-4.png';
import AboutTwoImg1 from '@/assets/images/resources/about-two-img-1.jpg';
import AboutTwoImg2 from '@/assets/images/services/service-details-img-2.jpg';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutTwo() {
  return (
    <>
      {/*About Two Start*/}
      <section className="about-two" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__left">
                <FadeInAdvanced
                  variant={'slideInLeft'}
                  delay={100}
                  duration={2500}
                >
                  <div className="about-two__img-box">
                    <div className="about-two__img">
                      <Image
                        src={AboutTwoImg1}
                        width={350}
                        height={330}
                        alt="Road freight truck at a logistics terminal"
                      />
                    </div>
                    <div className="about-two__img-two">
                      <Image
                        src={AboutTwoImg2}
                        width={382}
                        height={360}
                        alt="Cargo trucks ready for transport"
                      />
                    </div>
                    <div className="about-two__counter">
                      <div className="shape1">
                        <Image
                          src={AboutTwoShape1}
                          width={129}
                          height={130}
                          alt=""
                        />{' '}
                      </div>

                      <p>
                        Focused on <br />
                        Darfur
                      </p>
                    </div>
                    <div className="about-two__shape-2 float-bob-x">
                      <Image
                        src={AboutTwoShape2}
                        width={67}
                        height={102}
                        alt="shape"
                      />
                    </div>
                    <div className="about-two__shape-3">
                      <Image
                        src={AboutTwoShape3}
                        width={111}
                        height={174}
                        alt="shape"
                      />
                    </div>
                    <div className="about-two__shape-4 float-bob-y">
                      <Image
                        src={AboutTwoShape4}
                        width={104}
                        height={72}
                        alt="shape"
                      />
                    </div>
                  </div>
                </FadeInAdvanced>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two__right">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-border"></span>
                    <div className="section-title__shape-1">
                      <i className="fas fa-plane"></i>
                    </div>
                    <h6 className="section-title__tagline">
                      ABOUT US
                    </h6>
                    <span className="section-title__tagline-border"></span>
                    <div className="section-title__shape-2">
                      <i className="fas fa-plane"></i>
                    </div>
                  </div>
                  <h3 className="section-title__title">
                    Moving Goods Across Western Sudan
                  </h3>
                </div>
                <p className="about-two__text">
                  Freeny Global Logistics provides inland road
                  transport for goods across Western Sudan, with a
                  focus on Darfur. We support UN agencies, INGOs, and
                  NGOs moving operational and humanitarian cargo.
                  Procurement, freight brokerage, and logistics
                  consultancy remain available as complementary
                  services.
                </p>
                <div className="about-two__point-box-one mt-4">
                  <ul className="about-two__point-one">
                    <li>
                      <div className="icon">
                        <span className="fas fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Inland Road Transport</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Focused on Darfur</p>
                      </div>
                    </li>
                  </ul>
                  <ul className="about-two__point-one about-two__point-one--two">
                    <li>
                      <div className="icon">
                        <span className="fas fa-check"></span>
                      </div>
                      <div className="text">
                        <p>Supporting UN Agencies & NGOs</p>
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
                <div className="about-two__btn-and-author-box">
                  <div className="about-two__btn-box">
                    <Link href="/about" className="thm-btn">
                      Read More
                      <span>
                        <i className="icon-right-arrow"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="about-two__author-box">
                    <div className="about-two__author-details">
                      <div className="about-two__author-content">
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
      {/*About Two End*/}
    </>
  );
}
