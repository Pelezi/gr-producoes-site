import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Title from "../../components/common/Title";
import InfoBox from "../../components/common/InfoBox";

import giftsData from "../../db/gift.json";


const Home = () => {
    const [gifts] = useState<any[]>(giftsData);

    return (
        <main className={styles.container}>
            <Title className={styles.title}>Bem-vinda a minha Lista de Presentes</Title>
            <div className={styles.section}>
                {gifts.map((gift) => (
                    <InfoBox
                        key={gift.id}
                        gift={gift}
                    />
                ))}
            </div>
        </main>
    )
};

export default Home;