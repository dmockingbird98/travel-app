import React from 'react';
import china from '../../assets/images/places/china.jpg';
import london from '../../assets/images/places/london.jpg';
import cuba from '../../assets/images/places/cuba.jpg';
import bali from '../../assets/images/places/bali.jpg';
import paris from '../../assets/images/places/paris.jpg';
import dubai from '../../assets/images/places/dubai.jpg';

export default function Places() {
    return <section className="places">
        <h2>Incredible Places</h2>
        <div className="places-wrapper">
            <div className="row m-0 placed">
                <div className="col-sm-12 col-md-4 col-lg-4 place china">
                    <div className="place-wrapper">
                        <p>Place</p>
                        <h2>China</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 place london">
                    <div className="place-wrapper">
                        <p>Place</p>
                        <h2>London</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 place cuba">
                    <div className="place-wrapper">
                        <p>Place</p>
                        <h2>Cuba</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 place bali">
                    <div className="place-wrapper">
                        <p>Place</p>
                        <h2>Bali</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 place paris">
                    <div className="place-wrapper">
                        <p>Place</p>
                        <h2>Paris</h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 place dubai">
                    <div className="place-wrapper">
                        <p>Place</p>
                        <h2>Dubai</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
}