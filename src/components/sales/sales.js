import styles from "./sales.module.css";

const Sales = () => {
return(
    <div className={styles.main_container}>
        <div className={styles.wrapper1}>
            <div className={styles.wrapper2}>
                <h4 className={styles.question}>Are you a large business looking for custom solutions?</h4>
                <a>
                    <button className={`${styles.btn} ${styles.btnSecondary}`}>Talk to sales</button>
                </a>
            </div>
        </div>
    </div>
)
}

export default Sales;