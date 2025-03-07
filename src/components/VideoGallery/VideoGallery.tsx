import React, { useEffect, useRef } from "react";
import styles from "./VideoGallery.module.css";
import { NavLink } from "react-router-dom";
import { Video } from "../../services/VideoGalleryService";

interface VideoGalleryProps {
    video: Video;
}

const InfoBox: React.FC<VideoGalleryProps> = ({ video }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (iframeRef.current) {
            const iframeWidth = iframeRef.current.offsetWidth;
            divRef.current?.style.setProperty('--iframe-width', `${iframeWidth}px`);
        }
    }, []);

    return (
        <div ref={divRef} className={video.orientation === "portrait" ? styles.videoPortrait : styles.videoLandscape}>
            <iframe ref={iframeRef} src={video.url} allow="autoplay;"></iframe>
            <p className={styles.title}>{video.title}</p>
        </div>
    );
};

export default InfoBox;