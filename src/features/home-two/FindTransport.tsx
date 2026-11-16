import Link from 'next/link';

export default function FindTransport() {
  return (
    <section className="find-transport">
      <div className="find-transport__shape-bg"></div>
      <div className="container">
        <div className="find-transport__inner">
          <div className="find-transport__title-box">
            <h3 className="find-transport__title">
              Planning an Inland Shipment
              <br /> Across Western Sudan?
            </h3>
          </div>
          <div className="find-transport__btn-and-call">
            <div className="find-transport__call-us">
              <div className="icon">
                <span className="icon-phone-call"></span>
              </div>
              <div className="content">
                <span>Contact Our Team</span>
                <p>
                  <a href="tel:+15714059196">+1 (571) 405 9196</a>
                </p>
              </div>
            </div>
            <div className="find-transport__btn-box">
              <Link href="/contact" className="thm-btn">
                Get a Quote
                <span>
                  <i className="icon-right-arrow"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
