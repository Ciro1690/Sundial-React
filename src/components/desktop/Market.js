import React from 'react';
import pb from '../../assets/Pacific-Beach-Tuesday-Farmers-Market.png';
import northpark from '../../assets/northpark.webp';

const Market = () => {
    return (
        <div className="mb-5">
            <h1 className="display-4 text-center mb-3">Farmer's Markets</h1>
            <div class="button-container m-3">
                <div class="img-with-text text-center">
                    <a href="http://www.pacificbeachmarket.com" target="blank">
                        <img id="home-button" src={pb} alt="pbmarket"/>
                    </a>
                    <h3>Pacific Beach</h3>
                    <h3>Tuesdays from 2pm to 6pm</h3>
                </div>
                <div class="img-with-text text-center">
                    <a href="https://www.northparkfarmersmarket.com/" target="blank">
                        <img src={northpark} alt="northparkmarket"/>
                    </a>
                    <h3>North Park</h3>
                    <h3>Thursdays from 3pm to 7:30pm</h3>
                </div>
                <div class="img-with-text text-center">
                    <a href="https://www.littleitalysd.com/events/mercato" target="blank">
                        <img src="https://images.squarespace-cdn.com/content/v1/5ebd838e38577b205a4bef14/1589487846936-SHECNEF6556QLSW16Y7Q/ke17ZwdGBToddI8pDm48kPdUvUQeyHl2ruHzVjJPJyRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyQPigxurFmHCzkBgcSdN6qfEse3cilkNihMdmbszPyXYYI75kx4WCUQAPkxALqA18/Little+Italy+Mercato+logo?format=500w" alt="littleitaly"/>
                    </a>
                    <h3>Little Italy</h3>
                    <h3>Saturdays from 8am to 2pm</h3>
                </div>
            </div>
        </div>
    )
}

export default Market;