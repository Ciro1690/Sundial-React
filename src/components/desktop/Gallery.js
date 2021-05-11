import React from 'react';
import '../../styles/desktop/About.css';
import tomato from '../../assets/tomato.jpg';
import plum from '../../assets/plum.jpg';
import plating from '../../assets/plating.jpeg';
import pork from '../../assets/sandwich2.JPG';
import strawberry from '../../assets/strawberry.cake.jpeg';
import pasta from '../../assets/pasta_salad.JPG';
import '../../styles/desktop/Gallery.css';

const Gallery = () => {
    return (
        <div class="container">
            <div class="display-4 text-center mb-3">Gallery</div>
            <div class="gallery-grid">
                <div class="gallery">
                    <img src={tomato} alt="Tomato"/>
                    <div class="desc">Tomato pie</div>
                </div>
                <div class="gallery">
                    <img src={plum} alt="Plum Tart"/>
                    <div class="desc">Plum Tart</div>
                </div>
                <div class="gallery">
                    <img src={plating} alt="Plating"/>
                    <div class="desc">Elise plating a course at a private dinner</div>
                </div>
                <div class="gallery">
                    <img src={pork} alt="Pulled Pork"/>
                    <div class="desc">Pulled pork sandwich with coleslaw</div>
                </div>
                <div class="gallery">
                    <img src={strawberry} alt="Beets"/>
                    <div class="desc">Strawberry Cake</div>
                </div>
                <div class="gallery">
                    <img src={pasta} alt="Pasta Salad"/>
                    <div class="desc">Pasta salad</div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;