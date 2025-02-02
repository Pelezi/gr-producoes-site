import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Title from "../../components/common/Title";
import InfoBox from "../../components/common/InfoBox";

import giftsData from "../../db/gift.json";

import backgroundVideo from "../../Assets/video/DI 02.mp4"

const Home = () => {
    const [gifts] = useState<any[]>(giftsData);

    return (
        <div>
            <div className={styles.backgroundVideo}>
                <video autoPlay loop muted>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className={styles.gradientBottom}></div>
            </div>
            <main className={styles.container}>
                <Title className={styles.title}>
                    Transformando <strong>momentos</strong> em <strong>histórias visuais únicas</strong>
                </Title>
                <p className={styles.highlights}>Trabalhos em destaque</p>
                <p className={styles.downArrow}>▼</p>
                <div className={styles.section}>
                    {gifts.map((gift) => (
                        <InfoBox
                            key={gift.id}
                            gift={gift}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
};

export default Home;