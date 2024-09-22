import styles from "./features.module.css";

const Features = () => {
  return (
    <div className={styles.main_features}>
      <div className={styles.feature_wrapper}>
        <div className={styles.feature_item}>
          <img
            className={styles.feature_icon}
            src={require("../../components/photoes/higher-profits.png")}
          />
          <h4 className={styles.feature_name}>Higher Profits</h4>
          <p className={styles.feature_description}>
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>
        <div className={styles.feature_item}>
          <img
            className={styles.feature_icon}
            src={require("../../components/photoes/robust-scaling.png")}
          />
          <h4 className={styles.feature_name}>Robust Scaling</h4>
          <p className={styles.feature_description}>
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
        <div className={styles.feature_item}>
          <img
            className={styles.feature_icon}
            src={require("../../components/photoes/best-selection.png")}
          />
          <h4 className={styles.feature_name}>Best Selection</h4>
          <p className={styles.feature_description}>
            With 900+ products and top quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
