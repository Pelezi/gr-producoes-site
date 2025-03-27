import React from "react";

import styles from "./Home.module.css";

import Title from "../../components/common/Title";

import Gabriel from "../../Assets/img/Gabriel.jpg"
import Thiago from "../../Assets/img/Thiago.jpg"
import Lucas from "../../Assets/img/Lucas.jpg"
import ClientCarousel from "../../components/ClientCarousel/ClientCarousel";
import WhatsappContact from "../../components/WhatsappContact/WhatsappContact";

import conexão from "../../Assets/img/Conexão.png"
import fourk from "../../Assets/img/4k.png"

const Home = () => {

    return (
        <div>
            <div className={styles.backgroundVideo}>
                <video autoPlay loop muted playsInline>
                    <source src={`${import.meta.env.VITE_AMAZON_CLOUDFRONT_URL}/videos/Video Abertura.mp4`} type="video/mp4" />
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
                        <img src={Thiago} alt="Thiago Silva" className={styles.photo} />
                        <p className={styles.role}>Editor | Detalhista | Mestre da pós-produção</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Gabriel Rodrigues</h2>
                        <img src={Gabriel} alt="Gabriel Rodrigues" className={styles.photo} />
                        <p className={styles.role}>Filmmaker | Fundador | Comanda a coisa toda</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Lucas</h2>
                        <img src={Lucas} alt="Lucas" className={styles.photo} />
                        <p className={styles.role}>Técnico | auxiliar de gravação e iluminação</p>
                    </div>
                </div>
                {/* Client logos carousel */}
                <ClientCarousel />
                <div>
                    <Title className={styles.subTitle}>Mais um pouco</Title>
                    <div className={styles.section}>
                        <div className={styles.textSection}>
                            <img src={conexão} alt="" />
                            <div className={styles.text}>
                                <h2>EQUIPE CONECTADA, PROCESSO PERFEITO</h2>
                                <p>
                                    Na GR Produções, acreditamos que a conexão da equipe é o segredo para um material impecável. Do roteiro à entrega final, todos os detalhes passam por um processo colaborativo, garantindo que cada projeto seja único, personalizado e feito com excelência. Aqui, tudo é pensado para que o resultado final seja perfeito e supere expectativas.
                                </p>
                            </div>
                        </div>
                        <div className={styles.textSection}>
                            <img src={fourk} alt="" />
                            <div className={styles.text}>
                                <h2>QUALIDADE 4K: O PADRÃO QUE INSPIRA</h2>
                                <p>
                                Trabalhamos com a qualidade mais avançada do mercado: 4K. Cada frame é cuidadosamente produzido para entregar imagens nítidas, vibrantes e cheias de vida. Com tecnologia de ponta e um olhar criativo, transformamos suas ideias em vídeos que impressionam e encantam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <WhatsappContact message="Olá, eu vim pelo site e gostaria de conhecer melhor o seu trabalho" />
            </main>
        </div>
    )
};

export default Home;