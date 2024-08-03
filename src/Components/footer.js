import React from "react";
import './Footer.css';

const Footer=()=>{
    return(
        <section className="footer-page">
            {/* <div className="footer-section"> */}
                <div className="follow-us-section">
                    <h1>MNTN</h1>
                    <p>Get out there & discover your next</p>
                    <p>slope, mountain & destination!</p>
                    <p id="copyright">Copyrigth 2023 MNTN, Inc. Terms & Privacy</p>
                </div>
                <div className="links">
                    <div id="more-on-the-blog">
                        <h5>More on The Blog</h5>
                        <p>About MNTN</p>
                        <p>Contributors & Writers</p>
                        <p>Write For Us</p>
                        <p>Contact Us</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div id="more-on-mntn">
                        <h5>More on MNTN</h5>
                        <p>The Team</p>
                        <p>Jobs</p>
                        <p>Press</p>
                    </div>
                </div>
        </section>
    )
}

export default Footer;