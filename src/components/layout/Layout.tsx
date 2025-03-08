import React, { useState, useEffect } from "react";

import Menu from "./Menu";
import Footer from "./Footer";
import Loading from "../common/Loading/Loading";

import styles from "./Layout.module.css";
import { useNavigate } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        const handleDOMContentLoaded = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        const handleTimeout = () => {
            setLoading(false);
        };

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
        } else {
            handleDOMContentLoaded();
        }

        window.addEventListener("load", handleLoad);
        const timeoutId = setTimeout(handleTimeout, 5000);

        return () => {
            window.removeEventListener("load", handleLoad);
            document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <Loading isLoading={loading} />
            <div className={`${styles.container} ${loading ? styles.hidden : ""}`}>
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