import React from 'react';
import expedia from '../../assets/images/partners/expedia.png';
import tripadvisor from '../../assets/images/partners/tripadvisor.png';
export default function Partners() {
    return <section className="partners">
        <div>
            <h2>Out Trusted Partners</h2>

            <div className="line">
                <div className="greyLine">
                    <div className="greenLine"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <img src={expedia} alt="expedia" width="60px" />
                </div>
                <div className="col-6">
                    <img src={tripadvisor} alt="trip" width="60px" />
                </div>
            </div>
        </div>
    </section>
}