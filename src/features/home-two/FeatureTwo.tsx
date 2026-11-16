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
                      <Link href="/logistics-transportation">
                        Inland Trucking in Darfur
                      </Link>
                    </h3>
                    <p className="feature-one__text">
                      Road transport for goods across Western Sudan,
                      with a particular focus on Darfur.
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
                      <Link href="/logistics-transportation">
                        Western Sudan Road Transport
                      </Link>
                    </h3>
                    <p className="feature-one__text">
                      Inland trucking to support organizational
                      shipments between agreed pickup and delivery
                      points.
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
                      <Link href="/humanitarian-logistics-procurement">
                        UN & NGO Cargo Support
                      </Link>
                    </h3>
                    <p className="feature-one__text">
                      Transport services for UN agencies, INGOs, and
                      NGOs moving operational and humanitarian goods.
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
                      <Link href="/services">
                        Complementary Logistics Services
                      </Link>
                    </h3>
                    <p className="feature-one__text">
                      Procurement, freight brokerage, and logistics
                      consultancy are available alongside our core
                      transport service.
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
