import React, { useEffect, useRef } from "react";
import styles from "./VideoGallery.module.css";
import { NavLink } from "react-router-dom";
import { Video } from "../../services/VideoGalleryService";

interface VideoGalleryProps {
    video: Video;
}

const InfoBox: React.FC<VideoGalleryProps> = ({ video }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const updateVideoWidth = () => {
        if (videoRef.current) {
            const videoWidth = videoRef.current.offsetWidth;
            divRef.current?.style.setProperty('--video-width', `${videoWidth}px`);
        }
    };

    useEffect(() => {
        updateVideoWidth();
        window.addEventListener('resize', updateVideoWidth);
        return () => {
            window.removeEventListener('resize', updateVideoWidth);
        };
    }, []);

    const videoUrl = `${import.meta.env.VITE_AMAZON_CLOUDFRONT_URL}/${video.path}/${video.fileName}`;

    return (
        <div ref={divRef} className={video.orientation === "portrait" ? styles.videoPortrait : styles.videoLandscape}>
            <video
                ref={videoRef}
                controls
                controlsList="nodownload"
                preload="metadata"
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
            <p className={styles.title}>{video.title}</p>
        </div>
    );
};

export default InfoBox;