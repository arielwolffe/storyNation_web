import React from "react";
import Link from "gatsby-link";
import styles from "../layouts/contact.module.css";
import {FormGroup, ControlLabel,  FieldGroup, FormControl, Checkbox, Button } from "react-bootstrap";


const Contact = () => (
    <div className={styles.container}>

        <div>
            <h4>
              Are you an investor, developer or simply interested to know more about StoryNation?
            </h4>
            <p>
                    Give us a Shout!
            </p>
            <form className={styles.contactForm} action="https://formspree.io/arielwolffe@gmail.com" method="POST">                      
                
                <FormGroup>
                    <ControlLabel className={styles.formLabel}> Name </ControlLabel>
                    <FormControl
                        type="text"
                        name="Name"
                        placeholder="Enter you name"
                        className={styles.formInput}
                    />
                </FormGroup>

                <FormGroup>
                    <ControlLabel className={styles.formLabel}> Email </ControlLabel>
                    <FormControl
                        id="formControlsEmail"
                        type="email"
                        label="Email address"
                        placeholder="Enter your email"
                        name="Email"
                        className={styles.formInput}
                    />
                </FormGroup>

                <FormGroup>
                    <FormControl 
                        componentClass="textarea" 
                        placeholder="Leave your message here..." 
                        name="Message" 
                        className={styles.formInputlg}
                        rows="5"
                        cols="55"/>
                </FormGroup>

                <Button type="submit" value="Send" className={styles.formbtn}>Submit</Button>

            </form>
        </div>
    </div>
);
    
export default Contact;