import React, { useEffect, useState } from "react";

import styles from "./FashionFilm.module.css";

import Title from "../../components/common/Title";
import InfoBox from "../../components/common/InfoBox";
import VideoGallery from "../../components/VideoGallery";

import giftsData from "../../db/gift.json";
import videosData from "../../db/videos.json";

import backgroundVideo from "../../Assets/video/VIDEO ABERTURA SITE .mp4"
import Gabriel from "../../Assets/img/Gabriel.jpg"
import Thiago from "../../Assets/img/Thiago.jpg"
import Lucas from "../../Assets/img/Lucas.jpg"
import ClientCarousel from "../../components/common/ClientCarousel";

import WhatsappWhite from "../../Assets/img/whatsapp.png";

const Home = () => {
    const [videos] = useState<any[]>(videosData);

    return (
        <div>
            <div className={styles.backgroundVideo}>
                <iframe src="https://player.vimeo.com/video/1061469613?h=45bf0722d8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="VIDEO 02 LIVE SHOP"></iframe>
            </div>
            <main className={styles.container}>
                <p className={styles.highlights}>Trabalhos em destaque</p>
                <p className={styles.downArrow}>▼</p>
                <div className={styles.section}>
                    <div className={styles.videoGallery}>
                        {videos
                            .filter(video => video.page == "fashion")
                            .map((filteredVideo) => (
                                <VideoGallery
                                    key={filteredVideo.id}
                                    video={filteredVideo}
                                />
                            ))}
                    </div>
                </div>
                <div className={styles.section}>

                </div>
                <div className={`${styles.section} ${styles.contact}`}>
                        <a
                            href="https://wa.me/558181880305?text=Ol%C3%A1%2C%20quero%20entender%20mais%20sobre%20os%20Fashion%20Films"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.contactInfo}
                        >
                            <img className={styles.whatsappButton} src={WhatsappWhite} alt="" />
                        <p>Vamos criar algo único?</p>
                        </a>
                </div>
            </main>
        </div>
    )
};

export default Home;