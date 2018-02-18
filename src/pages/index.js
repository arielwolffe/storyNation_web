import React from "react";
import Link from "gatsby-link";
import styles from "../layouts/index.module.css";

const IndexPage = () => (
    <div className={styles.container}>

        <div className={styles.description}>
   
            <h3 className={styles.quote}>
                  “The Future of learning is technology for the imagination”
            </h3>
        
            <p>
            StoryNation is an application designed and developed to encourage creative writing and enhance imagination in children. It's aim is to stimulate a child’s imagination by encouraging them to write their own story and see it come to life in the form of playback animation. StoryNation is the only application that enables readers to write their own stories in a fun and engaging way.
            </p>

            <div className={styles.videoContainer}>
                <iframe src="https://player.vimeo.com/video/256311511" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

            </div>
        </div>

    </div>
);

export default IndexPage;
