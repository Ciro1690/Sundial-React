import React from 'react';
import market from '../../assets/farmers_market.png';
import dinner from '../../assets/dinner_parties.png';
import special from '../../assets/special_orders.png';

const About = () => {
    return (
        <div class="button-container mb-5">
            <div class="img-with-text">
                <img id="home-button" src={market} alt="button" />
                <h3 class="text-center">Find me at the Little Italy, Pacific Beach and North Park Farmer's Markets</h3>
            </div>
            <div class="img-with-text">
                <img id="home-button" src={dinner} alt="button" />
                <h3 class="text-center">Need a chef for a day?</h3>
            </div>
            <div class="img-with-text">
                <img id="home-button" src={special} alt="button" />
                <h3 class="text-center">High quality catering, and baked goods for any occasion.</h3>
            </div>
        </div>
    )
}

export default About;