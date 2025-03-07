import React from "react";
import styles from "./Loading.module.css";

import logo from "../../assets/img/GrProducoesWhite.png";

interface LoadingProps {
    isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
    return (
        <div className={`${styles.loadingContainer} ${!isLoading ? styles.fadeOut : ""}`}>
            <img className={styles.spinner} src={logo} alt="" />
        </div>
    );
};

export default Loading;
