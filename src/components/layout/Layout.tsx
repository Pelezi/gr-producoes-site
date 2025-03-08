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
    const [debugInfo, setDebugInfo] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setDebugInfo("Page opened");
        const handleLoad = () => {
            setDebugInfo("Page loaded");
            setTimeout(() => {
                setDebugInfo("Setting loading to false");
                setLoading(false);
            }, 1000);
        };
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <Loading isLoading={loading} />
                    <div className={styles.debug}>{debugInfo}</div>
                </>
            ) : (
                <div className={styles.container}>
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
            )}
        </>
    );
};

export default Layout;