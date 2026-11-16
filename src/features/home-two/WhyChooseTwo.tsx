'use client';

import WhyChooseTwoImg1 from '@/assets/images/services/service-details-img-2.jpg';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import TextAnimation from '@/components/elements/TextAnimation';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseTwo() {
  return (
    <section className="why-choose-two mt-4">
      <div className="why-choose-two__pattern"></div>
      <div className="why-choose-two__bg-box">
        <div className="why-choose-two__shape-bg"></div>
      </div>
      <FadeInAdvanced className="why-choose-two__img">
        <Image
          src={WhyChooseTwoImg1}
          width={850}
          height={500}
          alt="Cargo trucks lined up for road transport"
        />
      </FadeInAdvanced>
      <div className="why-choose-two__client-box">
        <div className="why-choose-two__client-content">
          <div className="why-choose-two__client-count">
            <h3>Darfur</h3>
          </div>
          <p className="why-choose-two__client-text">Regional Focus</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="why-choose-two__left">
              <div className="why-choose-two__title-box">
                <div className="section-title text-left sec-title-animation animation-style1">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline-border"></span>
                    <div className="section-title__shape-1">
                      <i className="fas fa-plane"></i>
                    </div>
                    <h6 className="section-title__tagline">
                      Why Choose us
                    </h6>
                    <span className="section-title__tagline-border"></span>
                    <div className="section-title__shape-2">
                      <i className="fas fa-plane"></i>
                    </div>
                  </div>
                  <h3 className="section-title__title">
                    <TextAnimation animationStyle="style1">
                      Inland Transport
                      <br />
                      <span>Freeny Global Logistics!</span>
                    </TextAnimation>
                  </h3>
                </div>
                <p className="why-choose-two__text">
                  Our focus is moving goods by road across Western
                  Sudan, especially Darfur. We work with UN agencies,
                  INGOs, and NGOs to understand cargo, origin,
                  destination, and timing, then coordinate a suitable
                  transport plan.
                </p>
              </div>
              <div className="why-choose-two__point-box">
                <ul className="why-choose-two__point">
                  <li>
                    <div className="why-choose-two__icon">
                      <span className="icon-international-shipping"></span>
                    </div>
                    <div className="why-choose-two__content">
                      <h4>
                        Darfur-Focused <br /> Transport
                      </h4>
                      <p>
                        Inland trucking is our primary service, with
                        operations focused on Darfur and Western
                        Sudan.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why-choose-two__icon">
                      <span className="icon-professional-services"></span>
                    </div>
                    <div className="why-choose-two__content">
                      <h4>
                        For Aid Organizations
                      </h4>
                      <p>
                        We support UN agencies, international NGOs,
                        and other non-governmental organizations with
                        goods transport.
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="why-choose-two__point why-choose-two__point--two">
                  <li>
                    <div className="why-choose-two__icon">
                      <span className="icon-protection"></span>
                    </div>
                    <div className="why-choose-two__content">
                      <h4>
                        Cargo-First <br /> Planning
                      </h4>
                      <p>
                        Each transport request starts with the cargo,
                        collection point, destination, and requested
                        schedule.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why-choose-two__icon">
                      <span className="icon-tracking"></span>
                    </div>
                    <div className="why-choose-two__content">
                      <h4>
                        Complementary <br /> Services
                      </h4>
                      <p>
                        Procurement, freight brokerage, and
                        consultancy remain available when they support
                        a client's transport needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="why-choose-two__btn-box">
                <Link href="/about" className="thm-btn">
                  Read More
                  <span>
                    <i className="icon-right-arrow"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
