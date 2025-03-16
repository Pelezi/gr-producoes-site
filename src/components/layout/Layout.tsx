import React from "react";

import Menu from "./Menu";
import Footer from "./Footer";

import styles from "./Layout.module.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <div className={`${styles.container}`}>
                <div className={styles.main}>
                    <div className={styles.content}>
                        {children}
                        <Analytics />
                        <SpeedInsights />
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.gradient}></div>
                        <Menu />
                    </div>
                    <div className={styles.footer}>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;