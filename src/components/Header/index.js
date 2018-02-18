import React from "react";
import Link from "gatsby-link";
import logo from "../../assets/images/Storynation-Logo.jpg";
import styles from "../../layouts/header.module.css";

const Header = () => (
    <div className={styles.headerContainer}>
        <div className={styles.menuLinks}>
            <Link to="/about">
            About
            </Link>
            <Link to="/awards">
            Awards
            </Link>
            <Link to="/contact">
            Contact
            </Link>
            <Link to="/team">
            Team
            </Link>
        </div>

        <div>
            <Link to="/">
                <img src={logo} className={styles.logo}/>
            </Link>
        </div>
      
    </div>
);

export default Header;
