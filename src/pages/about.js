import React from "react";
import Link from "gatsby-link";
import styles from "../layouts/about.module.css";
import ipadImg from "../assets/images/Storynation-ipad.jpg";
import inplay from "../assets/images/Storynation-inplay.jpg";



const AboutPage = () => (
    <div className={styles.container}>
        {/* First About Section */}
        <div className={styles.sectionContainer}>
            <div className={styles.section1_copy}>
                <h3 className={styles.heading}>What is StoryNation?</h3>
                <p>
                    StoryNation is an app for schools of children age 4 to 7, who embrace creativity, excitement, and storytelling, StoryNation of all technology platforms, drives and thrives on the imagination to create stories and mini-animation movies because StoryNation is the only application that enables readers to write their own stories in a fun and engaging way.
                </p>
                <h4 className={styles.section1_quote}>
                    Encouraging creativity opens up the doors for future innovators, writers, entrepreneurs, inventors etc. and it starts at a very tender age. Stimulating a child’s imagination, through learning is key to ensuring a sustainable society.
                </h4>
                   
            </div>

            <div className={styles.scetion1_img}>
                <img src={inplay} className={styles.scetion1_img_content}/>
            </div>
        </div>
            

    </div>
);


export default AboutPage;

{/* <div className={styles.description}>
                <p>
                The images that form in the mind of the child while writing a story can be physically visualized allowing for clearer and easier flow of the plot. Seeing a story come to life can also trigger new ideas or additional ideas for the same story, such as a different ending or change in character. 
                    <br />
                    <br />StoryNation would allow the child to personalize their story while changing the plot and characters as they desire.
                </p>

            </div> */}
          