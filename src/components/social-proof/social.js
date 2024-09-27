import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import styles from "./social.module.css";

const Social = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper}>
        <div className={styles.social_decription}>
          <h2 className={styles.title}>
            Trusted by over 8M sellers around the world
          </h2>
          <p className={styles.text}>
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>

        {/* Swiper Container */}
        <div className={styles.socialMediaContainer}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3} // Shows 3 slides at a time
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            //  pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              1024: { slidesPerView: 3 }, // 3 slides for desktop
              768: { slidesPerView: 2 }, // 2 slides for tablet
              640: { slidesPerView: 1 }, // 1 slide for mobile
            }}
          >
            {/* First Slide */}
            <SwiperSlide>
              <div className={styles.social_proofWrapper}>
                <div className={styles.proof_imgContainer}>
                  <div className={styles.img1}></div>
                  <div className={styles.imgtitle}>
                    <h4 className={styles.name}>Robert A. Voltaire</h4>
                    <a className={styles.authorLink}>Store link</a>
                    <div className={styles.starsRemarks}>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                    </div>
                  </div>
                </div>
                <div className={styles.proof_desc}>
                  Printify has been an incredible service for us musicians
                  unable to keep large amount of inventory - now we can create
                  designs previously too expensive to print without having to
                  have 1,000 shirts in our jam space. Thanks Printify!
                </div>
              </div>
            </SwiperSlide>

            {/* Second Slide */}
            <SwiperSlide>
              <div className={styles.social_proofWrapper}>
                <div className={styles.proof_imgContainer}>
                  <div className={styles.img2}></div>
                  <div className={styles.imgtitle}>
                    <h4 className={styles.name}>Quinten Barney</h4>
                    <a className={styles.authorLink}>Etsy Merchant</a>
                    <div className={styles.starsRemarks}>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                    </div>
                  </div>
                </div>
                <div className={styles.proof_desc}>
                  We chose Printify because of their offerings as well as their
                  incredibly low prices. After several years, we’ve come to find
                  that their customer service is also top notch, and their
                  platform just keeps getting better and better.
                </div>
              </div>
            </SwiperSlide>

            {/* Third Slide */}
            <SwiperSlide>
              <div className={styles.social_proofWrapper}>
                <div className={styles.proof_imgContainer}>
                  <div className={styles.img3}></div>
                  <div className={styles.imgtitle}>
                    <h4 className={styles.name}>Nikki</h4>
                    <a className={styles.authorLink}>Store link</a>
                    <div className={styles.starsRemarks}>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                    </div>
                  </div>
                </div>
                <div className={styles.proof_desc}>
                  Printify has been a amazing partner to work with as we grow
                  our business, from the range of merch we can make for our
                  customers to working with our Customer Service team (Hi
                  Martin!) it's truly made the whole process a breeze.
                </div>
              </div>
            </SwiperSlide>

            {/* Fourth Slide */}
            <SwiperSlide>
              <div className={styles.social_proofWrapper}>
                <div className={styles.proof_imgContainer}>
                  <div className={styles.img4}></div>
                  <div className={styles.imgtitle}>
                    <h4 className={styles.name}>Spencer</h4>
                    <a className={styles.authorLink}>Store link</a>
                    <div className={styles.starsRemarks}>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                    </div>
                  </div>
                </div>
                <div className={styles.proof_desc}>
                  Using Printify has been a great experience. Customer service
                  is always very quick to respond and handle any issues that our
                  customers may have. The premium account has more than paid for
                  itself and has increased our margins significantly.
                </div>
              </div>
            </SwiperSlide>

            {/* Fifth Slide */}
            <SwiperSlide>
              <div className={styles.social_proofWrapper}>
                <div className={styles.proof_imgContainer}>
                  <div className={styles.img5}></div>
                  <div className={styles.imgtitle}>
                    <h4 className={styles.name}>April Showers</h4>
                    <a className={styles.authorLink}>Store link</a>
                    <div className={styles.starsRemarks}>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                      <i className={styles.stars}></i>
                    </div>
                  </div>
                </div>
                <div className={styles.proof_desc}>
                  I really appreciate working with Printify on my brand. Afro
                  Unicorn was only supposed to be my design on a white shirt. It
                  is so much more. Printify allows me the time to run the
                  business and not work in the business.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.swiperButtonPrev} ref={prevRef}>
          <SlArrowLeft />
          </div>
          <div className={styles.swiperButtonNext} ref={nextRef}>
          <SlArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
