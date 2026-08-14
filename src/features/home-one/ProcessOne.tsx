'use client';

import TextAnimation from '@/components/elements/TextAnimation';

export default function ProcessOne() {
  return (
    <section className="process-one">
      <div className="process-one__map"> </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style2">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-1">
              <i className="fas fa-plane"></i>
            </div>
            <h6 className="section-title__tagline">
              Working Process
            </h6>
            <span className="section-title__tagline-border"></span>
            <div className="section-title__shape-2">
              <i className="fas fa-plane"></i>
            </div>
          </div>
          <h3 className="section-title__title">
            <TextAnimation animationStyle="style2">
              We Aim to Contribute Well
              <br /> to <span>Your Company</span>
            </TextAnimation>
          </h3>
        </div>
        <div className="process-one__inner">
          <ul className="process-one__list list-unstyled">
            <li>
              <div className="process-one__icon">
                <span className="icon-phone-call"></span>
                <div className="process-one__count"></div>
              </div>
              <h4 className="process-one__title">
                Tell Us What You Need
              </h4>
              <p className="process-one__text">
                Share your shipment, procurement, or supply chain
                requirements with our team so we can understand your
                goals and priorities.
              </p>
              <div className="process-one__shpae-1"></div>
            </li>
            <li>
              <div className="process-one__icon">
                <span className="icon-box1"></span>
                <div className="process-one__count"></div>
              </div>
              <h4 className="process-one__title">
                Build the Right Solution
              </h4>
              <p className="process-one__text">
                We assess your needs and develop a practical logistics
                solution tailored to your cargo, destination,
                timeline, and budget.
              </p>
              <div className="process-one__shpae-1"></div>
            </li>
            <li>
              <div className="process-one__icon">
                <span className="icon-packaging"></span>
                <div className="process-one__count"></div>
              </div>
              <h4 className="process-one__title">
                Coordinate & Manage
              </h4>
              <p className="process-one__text">
                We coordinate with our trusted network of carriers,
                freight partners, and logistics providers to manage
                the process from origin to destination.
              </p>
              <div className="process-one__shpae-1"></div>
            </li>
            <li>
              <div className="process-one__icon">
                <span className="icon-truck"></span>
                <div className="process-one__count"></div>
              </div>
              <h4 className="process-one__title">
                Deliver With Confidence
              </h4>
              <p className="process-one__text">
                We keep your shipment moving efficiently while
                maintaining clear communication and reliable
                coordination through final delivery.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
