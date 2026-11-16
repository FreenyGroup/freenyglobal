'use client';

import FadeInAdvanced from '@/components/elements/FadeInAdvanced';
export default function ContactTwo() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="contact-one" id="contact">
      <div className="contact-one__shape-bg"></div>
      <div className="contact-one__bg-img"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="contact-one__right">
              <FadeInAdvanced
                variant={'slideInRight'}
                delay={100}
                duration={2500}
              >
                <div className="contact-one__content">
                  <p className="contact-one__tagline">
                    TRANSPORT ENQUIRY
                  </p>
                  <h2 className="contact-one__title">
                    Request a Quote
                  </h2>
                  <form
                    className="contact-one__form contact-form-validated"
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-one__content-box">
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          required={true}
                        />
                      </div>
                      <div className="contact-one__input-box">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          required={true}
                        />
                      </div>
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                          required={true}
                        />
                      </div>
                      <div className="contact-one__input-box">
                        <input
                          type="text"
                          placeholder="Cargo / Service Requirements"
                          name="subject"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="contact-one__content-bottom">
                      <button type="submit" className="thm-btn">
                        Send Enquiry
                        <span>
                          <i className="icon-right-arrow"></i>
                        </span>
                      </button>
                    </div>
                    <div className="result"></div>
                  </form>
                </div>
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
