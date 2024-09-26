import styles from "./financial.module.css";

const Finance = () => {
  return (
    <div className={styles.financial}>
      <div className={styles.financialWrapper}>
        <div className={styles.description}>
          <div className={styles.description_wrapper}>
            <h2 className={styles.title}>Make Money, Risk-Free</h2>
            <p className={styles.title2}>
              You pay for fulfillment only when you make a sale
            </p>
            <div className={styles.explaination_table}>
              <div className={styles.table_row}>
                <p>You sell a t-shirt</p>
                <p>$ 30</p>
              </div>
              <div className={styles.table_row}>
                <p>You pay for its production</p>
                <p>$ 12</p>
              </div>
              <div className={styles.table_row}>
                <h5>Your profit</h5>
                <h5>$ 18</h5>
              </div>
            </div>
            <a className={styles.start_selling}>
              <button className={styles.btn}>Start selling</button>
            </a>
            <p className={styles.financial_adv}>
              100% Free to use · 900+ Products · Largest print network
            </p>
          </div>
        </div>
        <div className={styles.img_section}></div>
      </div>
    </div>
  );
};

export default Finance;
