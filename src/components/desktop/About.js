import React from 'react';
import elise from '../../assets/elise.jpeg';
import '../../styles/desktop/About.css';

const About = () => {
    return (
        <div class="container mb-3">
            <div class="display-4 text-center mb-3">About Elise</div>
            <div class="row">
                <div class="wrapper col">
                    <img class="col mx-auto" src={elise} alt="elise"/>
                </div>
                <h3 class="text-center col">Elise grew up in Bethlehem, PA where she developed a love for local and sustainable ingredients.
                    After cooking in fine dining restaurants in Philadelphia, she departed for a road trip across the country.<br></br>
                    She started Sundial Pantry in Salida, Colorado in the summer of 2020.
                    She moved to San Diego later on that year and started bringing her delicious food to the local farmer's markets.
                </h3>
            </div>
        </div>
    )
}

export default About;