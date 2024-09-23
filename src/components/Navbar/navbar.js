import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.Container}>
        <div className={styles.wrapper}>
          {/* Logo Section */}
          <div className={styles.headerLogo}>
            <a href="/"></a>
          </div>

          {/* Navbar content */}
          <nav className={styles.navContent}>
            <div className={styles.nav_wrapper}>
              <div className={styles.items}>
                <a className={styles.navOption} href="#">
                  Catalog
                </a>
              </div>
              <div className={styles.items}>
                <a className={styles.navOption} href="#">
                  How it works
                </a>
                <ul className={styles.dropdown}>
                  <li>
                    <a href="#">How Printify Works</a>
                  </li>
                  <li>
                    <a href="#">Print On Demand</a>
                  </li>
                  <li>
                    <a href="#">Printify Quality Promise</a>
                  </li>
                  <li>
                    <a href="#">What to Sell?</a>
                  </li>
                </ul>
              </div>
              <div className={styles.items}>
                <a className={styles.navOption} href="#">
                  Pricing
                </a>
              </div>
              <div className={styles.items}>
                <a className={styles.navOption} href="#">
                  Blog
                </a>
              </div>
              <div className={styles.items}>
                <a className={styles.navOption} href="#">
                  Services
                </a>
                <ul className={styles.dropdown}>
                  <li>
                    <a href="#">Printify Studio</a>
                  </li>
                  <li>
                    <a href="#">Transfer Products</a>
                  </li>
                  <li>
                    <a href="#">Order In Bulk</a>
                  </li>
                  <li>
                    <a href="#">Experts Program</a>
                  </li>
                </ul>
              </div>
              <div className={styles.items}>
                <a className={styles.navOption} href="#">
                  Use-cases
                </a>
                <ul className={styles.dropdown}>
                  <li>
                    <a href="#">Merch for Fans</a>
                  </li>
                  <li>
                    <a href="#">Merch for eCommerce</a>
                  </li>
                  <li>
                    <a href="#">Merch for Enterprises</a>
                  </li>
                  <li>
                    <a href="#">Grow Your Store</a>
                  </li>
                </ul>
              </div>
              <div className={styles.items}>
                <a className={styles.navOption} href="#">
                  Need help?
                </a>
                <ul className={styles.dropdown}>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                  <li>
                    <a href="#">My Requests</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Log-in and Sign-up Buttons */}
          <div className={styles.headerLink}>
            <a href="#">
              <button className={styles.loginBtn}>Log In</button>
            </a>
            <a href="#">
              <button className={styles.signUpBtn}>Sign up</button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
