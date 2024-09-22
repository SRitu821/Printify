import styles from "./connect.module.css";

const Connect = () => {
  return (
    <div className={styles.connect_container}>
      <div className={styles.connectWraper}>
        <h2 className={styles.connect_title}>Connect your store</h2>
        <p className={styles.connect_text}>
          {" "}
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>

        <div className={styles.connect_desc}>
          <div className={styles.descrip_Area}>
            <div className={styles.background}></div>
            <a className={`${styles.store} ${styles.presta}`}></a>
            <a className={`${styles.store} ${styles.wix}`}></a>
            <a className={`${styles.store} ${styles.woo}`}></a>
            <a className={`${styles.store} ${styles.squarespace}`}></a>
            <a className={`${styles.store} ${styles.shopify}`}></a>
            <a className={`${styles.store} ${styles.more}`}>
              <h2>And more</h2>
            </a>

            <a className={`${styles.store} ${styles.etsy}`}></a>
            <a className={`${styles.store} ${styles.bigCommerce}`}></a>
            <a className={`${styles.store} ${styles.printify}`}></a>
            <a className={`${styles.store} ${styles.api}`}>
              <h2>API</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
