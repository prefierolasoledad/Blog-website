import React from "react";
import './PageTwo.css';

const PageTwo=()=>{
    return (
        <section className="page-two-background-content">
            <div id="point-one">
                <aside className="text-section-left">
                    <h1 id="first-point">
                        01
                    </h1>
                    <div id="point-one-detail">
                        <div id="hero-section-heading-part-one">
                            <div style={{width:'60px'}} id="part-one-hl"></div>
                            <h5>
                                GET STARTED
                            </h5>
                        </div>
                        <h1>
                            What level of hiker
                        </h1>
                        <h1>
                            are you?
                        </h1>
                        <p>
                            Determining what level of hiker you are can be an important tool when planning future hikes. 
                            This hiking level guide will help you plan hikes according to different hike ratings set by 
                            various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate,
                             advanced moderate, expert, or expert backpacker? 
                        </p>
                    </div>
                </aside>
                <aside className="image-section-left"></aside>
            </div>
        </section>
    )
}

export default PageTwo;