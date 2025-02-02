import React from "react";

import Menu from "./Menu";

import styles from "./Layout.module.css";
import { useNavigate } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.gradient}></div>
            <div className={styles.main}>
                <div className={styles.content}>
                    {children}
                    <Analytics/>
                    <SpeedInsights/>
                </div>
                <div className={styles.menu}>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Layout;