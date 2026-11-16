import CtaOneImg1 from '@/assets/images/resources/cta-one-img-1.png';
import CtaOneShape2 from '@/assets/images/shapes/cta-one-shape-2.png';
import CtaOneShape3 from '@/assets/images/shapes/cta-one-shape-3.png';
import Image from 'next/image';
import Link from 'next/link';

export default function CtaOne() {
  return (
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__inner">
          <div className="cta-one__img">
            <Image src={CtaOneImg1} width={302} height={500} alt="" />
          </div>
          <div className="cta-one__content">
            <div className="cta-one__shape-1"></div>
            <div className="cta-one__shape-bg"></div>
            <div className="cta-one__shape-2 float-bob-y">
              <Image
                src={CtaOneShape2}
                width={675}
                height={444}
                alt="shape"
              />
            </div>
            <div className="cta-one__shape-3 float-bob-x">
              <Image
                src={CtaOneShape3}
                width={216}
                height={151}
                alt="shape"
              />
            </div>
            <h2>
              Need Goods <span>Transported</span> in Darfur?
            </h2>
            <p>
              Talk with Freeny Global Logistics about inland road
              transport <br />
              across Western Sudan, with a focus on Darfur. <br />
              Share your cargo, origin, destination, and timing <br />
              so we can discuss the transport requirements.
            </p>
            <div className="cta-one__btn-box">
              <Link href="/contact" className="thm-btn">
                Discuss a Shipment
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
