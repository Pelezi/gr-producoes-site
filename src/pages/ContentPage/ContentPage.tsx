import React, { useState, useEffect } from "react";

import styles from "./ContentPage.module.css";

import VideoGallery from "../../components/VideoGallery";
import WhatsappContact from "../../components/WhatsappContact/WhatsappContact";

import videosData from "../../db/videos.json";
import { Video } from "../../services/VideoGalleryService";

const ContentPage = ({ page }: { page: string }) => {
    const [videos] = useState<Video[]>(videosData);
    const [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {
        setVideoSrc(`${import.meta.env.VITE_AMAZON_CLOUDFRONT_URL}/videos/Apresentacoes/${page === "eventos"
            ? "Eventos.mp4"
            : "Fashion Film.mp4"
            }`);
    }, [page]);

    let whatsappMessage = page === "eventos"
        ? "Olá, eu vim pelo site e quero mais informações sobre os eventos"
        : "Olá, eu vim pelo site e quero mais informações sobre os Fashion Films";

    return (
        <div>
            <div className={styles.backgroundVideo}>
                {/* <iframe src={videoSrc} allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Background Video"></iframe> */}
                <video
                    key={videoSrc}
                    autoPlay
                    playsInline
                    controls
                    controlsList="nodownload"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
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
