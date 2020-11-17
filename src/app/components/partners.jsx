import React from 'react';
import expedia from '../../assets/images/partners/expedia.jpg';
import tripadvisor from '../../assets/images/partners/trip.jpg';
export default function Partners() {
    return <section className="partners">
        <div className="partners-wrapper">
            <h2>Out Trusted Partners</h2>

            <div className="line">
                <div className="greyLine">
                    <div className="greenLine"></div>
                </div>
            </div>

            <div className="parts">
                <a href="https://mobirise.com/">
                    <img src={expedia} alt="expedia" width="100%" />
                </a>
                <a href="https://mobirise.com/">
                    <img src={tripadvisor} alt="trip" width="100%" />
                </a>
            </div>
        </div>
    </section>
}