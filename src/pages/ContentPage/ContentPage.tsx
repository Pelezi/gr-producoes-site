import React, { useState } from "react";

import styles from "./ContentPage.module.css";

import VideoGallery from "../../components/VideoGallery";
import WhatsappContact from "../../components/WhatsappContact/WhatsappContact";

import videosData from "../../db/videos.json";
import { Video } from "../../services/VideoGalleryService";

const ContentPage = ({ page }: { page: string }) => {
    const [videos] = useState<Video[]>(videosData);

    const videoSrc = page === "eventos"
        ? "https://player.vimeo.com/video/1061441072?h=6731a767fe&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1"
        : "https://player.vimeo.com/video/1061469613?h=45bf0722d8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1";

    const whatsappMessage = page === "eventos"
        ? "Olá, eu vim pelo site e quero mais informações sobre os eventos"
        : "Olá, eu vim pelo site e quero mais informações sobre os Fashion Films";

    return (
        <div>
            <div className={styles.backgroundVideo}>
                <iframe src={videoSrc} allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Background Video"></iframe>
            </div>
            <main className={styles.container}>
                <p className={styles.highlights}>Trabalhos em destaque</p>
                <p className={styles.downArrow}>▼</p>
                <div className={styles.section}>
                    <div className={styles.videoGallery}>
                        {videos
                            .filter(video => video.page === page)
                            .map((filteredVideo) => (
                                <VideoGallery
                                    key={filteredVideo.id}
                                    video={filteredVideo}
                                />
                            ))}
                    </div>
                </div>
                <WhatsappContact message={whatsappMessage} />
            </main>
        </div>
    )
};

export default ContentPage;
