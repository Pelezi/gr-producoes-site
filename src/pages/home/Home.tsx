import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Title from "../../components/common/Title";


import backgroundVideoDesktop from "../../Assets/video/Video Abertura Site.mp4"
import backgroundVideoMobile from "../../Assets/video/Video Abertura Site_phone.mp4"

import Gabriel from "../../Assets/img/Gabriel.jpg"
import Thiago from "../../Assets/img/Thiago.jpg"
import Lucas from "../../Assets/img/Lucas.jpg"
import ClientCarousel from "../../components/ClientCarousel/ClientCarousel";
import WhatsappContact from "../../components/WhatsappContact/WhatsappContact";

const Home = () => {
    const [backgroundVideo, setBackgroundVideo] = useState<string>(backgroundVideoDesktop);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setBackgroundVideo(backgroundVideoMobile);
        } else {
            setBackgroundVideo(backgroundVideoDesktop);
        }
    }, []);

    return (
        <div>
            <div className={styles.backgroundVideo}>
                <video autoPlay loop muted playsInline>
                    <source src="https://gr-producoes.s3.sa-east-1.amazonaws.com/Video%20Abertura%20Site_phone.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAR72PHS3YMWWSW354%2F20250307%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250307T020450Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJIMEYCIQDqG8uixiUmwFmkyqUcmrTSG%2FewyIZEYpQVHUTMWtpiqQIhAKXCRrskJUlvHjVTt1XDBv%2FU4mPg2SSPMtQv63uG2impKugCCDsQABoMMTM3MDY4MjU0OTYwIgxfj%2F4cJ6IESxTHHuMqxQLbbGq1WcVhatR5ZD7l7MVe5HTkeQwboPX3ipMbklT7bHo5wJcTwXQ%2Fk1MODST20yCeeePQ2JUY7b9FjjaoXdzDL%2BRX6DGHPcc%2FdKIBce1l8nwoJTVVvZhiNZ7cv%2FLY7megLxlSvIfLsCMEwz672yF%2BJQz%2BHO0u60u29jI3KeTKVXj2PfTGRw5Qd1ocnfafrVrC90%2FrNKq0QItOA1axB%2B2smw5smZY9hIEhr5TcbRDcFOqHeAHmlVbxhuhFhfXydwaz3wfDPZQBrFwf6oSDctAezlzUC0Ym5squD%2FQsxOTb4TJWeRyaABQmulktEnAnq1FJ6762MOAm0hD5AhLGEp4DqZ8tjfQbqRDPWME%2BrQEbD6DmYBTCIbOfZeGTMsDa9cRyVbPULXNSoCYDvdmEVuPYFJujz5zZBgjMi%2BICIvGgH82UIz1tMNWlqb4GOrICe%2BDsNaqH4n36Ma7atQZ%2F28HJVj6UkF%2FLjSCVfjhVMn7iLZBUSWkdLUqdbRltp%2Fy8%2BVUKyXwpTYyWt%2F%2BQuKi2J127dETDGHhuA6yRYsydjQK%2FQtvNTQjSIyVU6eQjwX1SvDz64cWVTh6MOtiLnUCX1iYuVeGgFGqT4uxIpjX8GAME%2FiH2TjKb4QLqLnUBx7lCV2onHb9Fsxu6VuA36O7i2FZG6tiacElXZzdWr5izXDIwFEkGw4UHlQOC2OZIDlgdBGx%2Bt8uxje1MgOi9EZ7T08Zk%2F1UKKJZRlZq3tmw1%2Fz0JuyaizBDpTa%2BmI9ANpuHzGE9s1F%2Bdd6F0ZGnQ1NCsZKNiRCsXi4VsTchxFt1zcVmMxY2qt8NARl%2Fqq0nIlIvnLIU5e%2BVcVt0PZ4nTRvf16OZD&X-Amz-Signature=32af287443411858be7c4e493d317a0676e59b4bfc674ef518ca63ca35802561&X-Amz-SignedHeaders=host&response-content-disposition=inline" type="video/mp4" />
                </video>
                <div className={styles.gradientBottom}></div>
            </div>
            <main className={styles.container}>
                <Title className={styles.title}>
                    Transformando <strong>momentos</strong> em <strong>histórias visuais únicas</strong>
                </Title>
                <div className={styles.section}>
                    <p className={styles.text}>Sou Gabriel Rodrigues, filmmaker com mais de cinco anos de experiência no audiovisual e especialista em moda e eventos. Minha jornada profissional é movida pela paixão em transformar histórias em imagens poderosas, capturando a essência de cada projeto com autenticidade e sofisticação.
                        <br />
                        <br />
                        Nos últimos anos, mergulhei no universo da moda, produzindo conteúdos que vão desde campanhas e editoriais até coberturas de desfiles e eventos exclusivos. Com a GR Produções, minha produtora, busco criar narrativas visuais impactantes, unindo técnica, criatividade e um olhar apurado para os detalhes.
                        <br />
                        <br />
                        Se você busca uma produção audiovisual que valorize sua marca, evento ou projeto, estou aqui para trazer sua visão à vida.
                        <br />
                        <br />
                        Vamos criar algo único?</p>
                </div>
                {/* card with name, piture and function */}
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2>Thiago Silva</h2>
                        <img src={Thiago} alt="Gabriel Rodrigues" className={styles.photo} />
                        <p className={styles.role}>Editor | Recém casado | Só tira foto com a esposa</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Gabriel Rodrigues</h2>
                        <img src={Gabriel} alt="Gabriel Rodrigues" className={styles.photo} />
                        <p className={styles.role}>Filmmaker | Fundador | Comanda a coisa toda
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>Lucas</h2>
                        <img src={Lucas} alt="Gabriel Rodrigues" className={styles.photo} />
                        <p className={styles.role}>Técnico | auxiliar de gravação e iluminação</p>
                    </div>
                </div>
                {/* Client logos carousel */}
                <ClientCarousel />
                <WhatsappContact message="Olá, eu vim pelo site e gostaria de conhecer melhor o seu trabalho" />
            </main>
        </div>
    )
};

export default Home;