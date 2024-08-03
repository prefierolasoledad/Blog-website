import React from "react";
import NautreAtItsPeek from './Images/NatureAtItsPeek.jpg'
import './PageFour.css';

const PageFour=()=>{
    return (
        <section className="page-four-background-content">
            <div id="point-three">
                <aside className="text-section-left">
                    <h1 id="first-point">
                        03
                    </h1>
                    <div id="point-one-detail">
                        <div id="hero-section-heading-part-one">
                            <div style={{width:'60px'}} id="part-one-hl"></div>
                            <h5>
                                WHERE YOU GO IS THE KEY
                            </h5>
                        </div>
                        <h1>
                            Understand Your
                        </h1>
                        <h1>
                            Map & Timing
                        </h1>
                        <p>
                            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, 
                            and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and 
                            know that say, in a mile, I make a right turn at the junction..
                        </p>
                    </div>
                </aside>
                <aside style={{backgroundImage:`url(${NautreAtItsPeek})`}} className="image-section-left"></aside>
            </div>
        </section>
    )
}

export default PageFour;