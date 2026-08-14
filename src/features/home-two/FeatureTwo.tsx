'use client';

import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
import Link from 'next/link';

export default function FeatureTwo() {
  return (
    <>
      {/*Feature One Start*/}
      <section className="feature-one">
        <div className="container">
          <div className="row">
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                <div className="feature-one__single">
                  <div className="feature-one__icon">
                    <span className="icon-international-shipping"></span>
                  </div>
                  <div className="feature-one__content">
                    <h3 className="feature-one__title">
                      <Link href="/emergency-transport">
                        Reliable Global Logistics
                      </Link>
                    </h3>
                    <p className="feature-one__text">
                      Move goods with confidence through coordinated
                      transportation and logistics solutions designed
                      to keep shipments secure, efficient, and on
                      schedule.
                    </p>
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={'fadeInLeft'} delay={300}>
                <div className="feature-one__single">
                  <div className="feature-one__icon">
                    <span className="icon-courier-services"></span>
                  </div>
                  <div className="feature-one__content">
                    <h3 className="feature-one__title">
                      <Link href="/ocean-transport">
                        End-to-End Supply Chain Solutions
                      </Link>
                    </h3>
                    <p className="feature-one__text">
                      From procurement and freight coordination to
                      delivery and distribution, we connect every
                      stage of the supply chain to simplify complex
                      logistics.
                    </p>
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={'fadeInRight'} delay={500}>
                <div className="feature-one__single">
                  <div className="feature-one__icon">
                    <span className="icon-delivery-man"></span>
                  </div>
                  <div className="feature-one__content">
                    <h3 className="feature-one__title">
                      <Link href="/personal-delivery">
                        Expert Logistics Consulting
                      </Link>
                    </h3>
                    <p className="feature-one__text">
                      Optimize your supply chain with practical
                      guidance on freight costs, network design,
                      customs, compliance, and operational efficiency.
                    </p>
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <FadeInAdvanced variant={'fadeInRight'} delay={700}>
                <div className="feature-one__single">
                  <div className="feature-one__icon">
                    <span className="icon-24-hours-service"></span>
                  </div>
                  <div className="feature-one__content">
                    <h3 className="feature-one__title">
                      <Link href="/contact">
                        Vetted Carrier Network
                      </Link>
                    </h3>
                    <p className="feature-one__text">
                      Access a reliable network of vetted
                      transportation partners with competitive rates,
                      professional coordination, and dependable
                      shipment management.
                    </p>
                  </div>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Feature One Single End*/}
          </div>
        </div>
      </section>
      {/*Feature One End*/}
    </>
  );
}
