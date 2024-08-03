import React from "react";
import NatureOfTheVillage from './Images/NatureOfTheVillage.jpg';
import './PageThree.css';

const PageThree=()=>{
    return (
        <section className="page-Three-background-content">
            <div id="point-two">
                <aside style={{backgroundImage:`url(${NatureOfTheVillage})`}} className="image-section-left"></aside>
                <aside className="text-section-left">
                    <h1 style={{marginLeft:'100px'}} id="first-point">
                        02
                    </h1>
                    <div style={{marginLeft:'210px'}}  id="point-one-detail">
                        <div id="hero-section-heading-part-one">
                            <div style={{width:'60px'}} id="part-one-hl"></div>
                            <h5>
                                HIKING ESSENTIALS
                            </h5>
                        </div>
                        <h1>
                            Picking the right
                        </h1>
                        <h1>
                            Hiking Gear!
                        </h1>
                        <p>
                            The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things 
                            you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which 
                            will get heavy and chafe wif they get sweaty or wet.
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default PageThree;