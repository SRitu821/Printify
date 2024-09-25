import styles from "./financial.css";

const Finance = ( ) => {
    return(
        <div className={styles.financial}>
            <div className={styles.financialWrapper}>
                <div className={styles.description}>
                    <div className={styles.description_wrapper}>
                        <h2 className={styles.title}>Make Money, Risk-Free</h2>
                        <p className={styles.title2}>You pay for fulfillment only when you make a sale</p>
                    </div>
                </div>
                <div className={styles.img_section}></div>
            </div>
        </div>
    )
}