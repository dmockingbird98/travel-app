import React from 'react';
import china from '../../assets/images/places/china.jpg';
import london from '../../assets/images/places/london.jpg';
import cuba from '../../assets/images/places/cuba.jpg';
import bali from '../../assets/images/places/bali.jpg';
import paris from '../../assets/images/places/paris.jpg';
import dubai from '../../assets/images/places/dubai.jpg';

export default function Places() {
    return <section className="places">
        <div><h2>Incredible Places</h2></div>
        <div className="row">
            <div className="col-4 place china">
                <div className="place-wrapper">
                    <p>dsadas</p>
                </div>
            </div>
            <div className="col-4 place london">
                <div className="place-wrapper">
                    <p>dsadas</p>
                </div>
            </div>
            <div className="col-4 place cuba">
                <div className="place-wrapper">
                    <p>dsadas</p>
                </div>
            </div>
            <div className="col-4 place bali">
                <div className="place-wrapper">
                    <p>dsadas</p>
                </div>
            </div>
            <div className="col-4 place paris">
                <div className="place-wrapper">
                    <p>dsadas</p>
                </div>
            </div>
            <div className="col-4 place dubai">
                <div className="place-wrapper">
                    <p>dsadas</p>
                </div>
            </div>

            {/* 

            <div className="col-4 place">
                <img src={london} alt="london" width="100%" />
            </div>
            <div className="col-4">
                <img src={cuba} alt="cuba" width="100%" />
            </div>
            <div className="col-4">
                <img src={bali} alt="bali" width="100%" />
            </div>
            <div className="col-4">
                <img src={paris} alt="paris" width="100%" />
            </div>
            <div className="col-4">
                <img src={dubai} alt="dubai" width="100%" /> */}
            {/* </div> */}
        </div>
    </section>
}