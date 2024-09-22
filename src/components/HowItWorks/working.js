import styles from "./working.module.css";
import { CiCirclePlus } from "react-icons/ci";
import { FiArrowRight } from "react-icons/fi";

const Working = () => {
  return (
    <div className={styles.main_working}>
      <div className={styles.working_wrapper}>
        <div className={styles.workingDesc}>
          {/* Image section */}
          <div className={styles.mainImg}>
            <span className={styles.visitMore}>
              <CiCirclePlus />
            </span>
            {/* <div className={styles.edit_previewSection}>
                <img 
                className={styles.previewImg}
                src={require("../../components/photoes/tshirt.png")}
                />
            </div> */}
          </div>
          <div className={styles.textSection}>
            <div className={styles.overviewWrapper}>
              <h2 className={styles.overviewTitle}>
                Easily add your design to a wide range of products
              </h2>
              <p className={styles.overviewText}>
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>
              <a className={styles.productLink}>
                All products
                <span className={styles.arrow}>
                  <FiArrowRight className={styles.rightArrow} />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.Swiper}>
          <div className={styles.div1}>
            <div className={styles.swiperContent}>
              <img
                className={styles.swiperImg}
                src={require("../photoes/custom-products.png")}
              />
              <h6 className={styles.swiperTilte1}>CREATE</h6>
              <h4 className={styles.swiperTitle2}>custom products</h4>
              <p className={styles.swiperDescription}>
                Easily add your design to a wide range of products using our
                free tools
              </p>
            </div>
          </div>
          <div className={styles.div2}>
            <div className={styles.swiperContent}>
              <img
                className={styles.swiperImg}
                src={require("../photoes/your-products.png")}
              />
              <h6 className={styles.swiperTilte1}>SELL</h6>
              <h4 className={styles.swiperTitle2}>on your terms</h4>
              <p className={styles.swiperDescription}>
                You choose the products, sale price, and where to sell
              </p>
            </div>
          </div>

          <div className={styles.div3}>
            <div className={styles.swiperContent}>
              <img
                className={styles.swiperImg}
                src={require("../photoes/fullfillment.png")}
              />
              <h6 className={styles.swiperTilte1}>WE HANDLE</h6>
              <h4 className={styles.swiperTitle2}>fulfillment</h4>
              <p className={styles.swiperDescription}>
                Once an order is placed, we automatically handle all the
                printing and delivery logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
