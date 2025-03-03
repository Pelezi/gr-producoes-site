import React, { useState } from "react";

import styles from "./Eventos.module.css";

import VideoGallery from "../../components/VideoGallery";

import videosData from "../../db/videos.json";

import WhatsappContact from "../../components/WhatsappContact/WhatsappContact";

const Eventos = () => {
    const [videos] = useState<any[]>(videosData);

    return (
        <div>
            <div className={styles.backgroundVideo}>
                <iframe src="https://player.vimeo.com/video/1061441072?h=6731a767fe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="VIDEO 02 LIVE SHOP"></iframe>
            </div>
            <main className={styles.container}>
                <p className={styles.highlights}>Trabalhos em destaque</p>
                <p className={styles.downArrow}>▼</p>
                <div className={styles.section}>
                    <div className={styles.videoGallery}>
                        {videos
                            .filter(video => video.page == "eventos")
                            .map((filteredVideo) => (
                                <VideoGallery
                                    key={filteredVideo.id}
                                    video={filteredVideo}
                                />
                            ))}
                    </div>
                </div>
                <WhatsappContact message="Olá, eu vim pelo site e quero mais informações sobre os eventos" />
            </main>
        </div>
    )
};

export default Eventos;