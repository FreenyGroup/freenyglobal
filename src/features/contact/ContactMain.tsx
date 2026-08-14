import FadeInAdvanced from '@/components/elements/FadeInAdvanced';

const ContactMain = () => {
  return (
    <>
      <section className="contact-info">
        <div className="container">
          <div className="row">
            {/*Contact Two Single Start*/}
            <div className="col-xl-6 col-lg-6">
              <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <p>Contact Us</p>
                  <h5>
                    <a href="tel:+15714059196">
                      +1 571 405 9196 (USA)
                    </a>
                  </h5>
                  <h5>
                    <a href="tel:+249912142233">
                      +249 912 142 233 (Sudan)
                    </a>
                  </h5>
                  <h5>
                    <a href="tel:+971585500678">
                      +971 58 550 0678 (Dubai, UAE)
                    </a>
                  </h5>
                  <h5>
                    <a href="tel:+966532559754">
                      +966 53 255 9754 (KSA)
                    </a>
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-6 col-lg-6">
              <FadeInAdvanced variant={'fadeInUp'} delay={200}>
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-email"></span>
                  </div>
                  <p>Mail Us</p>
                  <h5>
                    <a href="mailto:tenders@freenygloballogistics.com">
                      info@freenygloballogistics.com
                    </a>
                  </h5>
                  <h5>
                    <a href="mailto:sales@freenygloballogistics.com">
                      sales@freenygloballogistics.com
                    </a>
                  </h5>
                  <h5>
                    <a href="mailto:operations@freenygloballogistics.com">
                      operations@freenygloballogistics.com
                    </a>
                  </h5>
                  <h5>
                    <a href="mailto:businessdevelopment@freenygloballogistics.com">
                      businessdevelopment@freenygloballogistics.com
                    </a>
                  </h5>
                  <h5>
                    <a href="mailto:procurement@freenygloballogistics.com">
                      procurement@freenygloballogistics.com
                    </a>
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-12 col-lg-6">
              <FadeInAdvanced variant={'fadeInRight'} delay={300}>
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-24-hours-service"></span>
                  </div>
                  <p>Working Hours</p>
                  <h5>
                    Monday - Sunday
                    <br /> 7:00 AM - 5:00 PM
                  </h5>
                </div>
              </FadeInAdvanced>
            </div>
            {/*Contact Two Single End*/}
            {/*Contact Two Single Start*/}
            <div className="col-xl-12 col-lg-6">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <FadeInAdvanced variant={'fadeInRight'} delay={400}>
                    <div className="contact-info__single">
                      <div className="contact-info__icon">
                        <span className="icon-location1"></span>
                      </div>
                      <p>Our USA Office</p>
                      <h5>
                        308 Hillwood Ave Suite 350, Falls Church, VA
                        22046
                      </h5>
                    </div>
                  </FadeInAdvanced>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <FadeInAdvanced variant={'fadeInRight'} delay={400}>
                    <div className="contact-info__single">
                      <div className="contact-info__icon">
                        <span className="icon-location1"></span>
                      </div>
                      <p>Our Sudan Office</p>
                      <h5>
                        Building 24, Nile St 3rd Floor, Suite 315,
                        Khartoum Sudan
                      </h5>
                    </div>
                  </FadeInAdvanced>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <FadeInAdvanced variant={'fadeInRight'} delay={400}>
                    <div className="contact-info__single">
                      <div className="contact-info__icon">
                        <span className="icon-location1"></span>
                      </div>
                      <p>Our UAE (Dubai) Office</p>
                      <h5>
                        Ras Al Khaimah Economic Zone (Rakez) P.O. Box:
                        10055 Ras Al Khaimah
                      </h5>
                    </div>
                  </FadeInAdvanced>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <FadeInAdvanced variant={'fadeInRight'} delay={400}>
                    <div className="contact-info__single">
                      <div className="contact-info__icon">
                        <span className="icon-location1"></span>
                      </div>
                      <p>Our Saudi Arabia Office</p>
                      <h5>Abi Zamah, An Nuzah Riyah 12473</h5>
                    </div>
                  </FadeInAdvanced>
                </div>
              </div>
            </div>
            {/*Contact Two Single End*/}
          </div>
        </div>
      </section>
      <section className="contact-page">
        <div className="container">
          <div className="contact-page__inner">
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-page__right">
                  <h3 className="contact-page__form-title">
                    Get A Free Quote
                  </h3>
                  <form className="contact-form-validated contact-page__form">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Phone"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Messege"
                          ></textarea>
                        </div>
                        <div className="contact-page__btn-box">
                          <button
                            type="submit"
                            className="footer-widget__newsletter-btn thm-btn"
                          >
                            Send A Message
                            <span>
                              <i className="icon-right-arrow"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMain;
