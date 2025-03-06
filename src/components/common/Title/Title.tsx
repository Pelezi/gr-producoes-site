import React from "react";

import styles from "./Title.module.css";

interface TitleProps {
    className?: string;
    children: React.ReactNode;
    subTitle?: string;
}

const title: React.FC<TitleProps> = ({ className = styles.title, children, subTitle }) => {
    return (
        <div className={styles.titleContainer}>
            <p className={styles.subTitle} >{subTitle}</p>
            <h1 className={className}>{children}</h1>
        </div>
    );
};

export default title;