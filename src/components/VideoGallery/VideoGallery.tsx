import React, { useEffect, useState } from "react";
import styles from "./VideoGallery.module.css";
import { NavLink } from "react-router-dom";
import { Video } from "../../services/VideoGalleryService";

interface VideoGalleryProps {
    video: Video;
}

const InfoBox: React.FC<VideoGalleryProps> = ({ video }) => {

    return (
        <div className={video.orientation === "portrait" ? styles.videoPortrait : styles.videoLandscape}>
            <iframe src={video.url} allow="autoplay"></iframe>
            <p className={styles.title}>{video.title}</p>
        </div>
    );
};

export default InfoBox;