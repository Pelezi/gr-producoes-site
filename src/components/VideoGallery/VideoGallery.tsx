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

    useEffect(() => {
        if (videoRef.current) {
            const videoWidth = videoRef.current.offsetWidth;
            divRef.current?.style.setProperty('--video-width', `${videoWidth}px`);
        }
    }, []);

    return (
        <div ref={divRef} className={video.orientation === "portrait" ? styles.videoPortrait : styles.videoLandscape}>
            <video ref={videoRef} controls controlsList="nodownload" >
                <source src={video.url} type="video/mp4" />
            </video>
            <p className={styles.title}>{video.title}</p>
        </div>
    );
};

export default InfoBox;