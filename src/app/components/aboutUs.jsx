import React from 'react';
import china from '../../assets/images/news/china-news.jpg';
import surf from '../../assets/images/news/surfing-news.jpg'
export default function AboutUs() {
    return <section className="aboutUs">

        <div className="about-container">
            <div className="about-wrapper row">
                <div className="item col-sm-12 col-md-6 col-lg-4">
                    <h4>About Us</h4>
                    <p>We always find the best solutions for our customers.</p>
                </div>
                <div className="item col-sm-12 col-md-6 col-lg-2">
                    <h4>Learn More</h4>
                    <div>
                        <p>Paris</p>
                        <p>London</p>
                        <p>Rome</p>
                        <p>Dubai</p>
                        <p>Berlin</p>
                    </div>
                </div>
                <div className="item col-sm-12 col-md-6 col-lg-2">
                    <h4>Menu</h4>
                    <div>
                        <p>Our Most Popular Packges</p>
                        <p>Incredible Places</p>
                    </div>
                </div>
                <div className="item col-sm-12 col-md-6 col-lg-4">
                    <h4>News</h4>
                    <div className="d-flex flex-column align-items-center">
                        <div className="content d-flex">
                            <img src={surf} alt="surf" width="70px" />
                            <div className="text-content">
                                <div>How to look after your skin on a holiday</div>
                                <div>February 20, 2018</div>
                            </div>
                        </div>

                        <div className="content d-flex">
                            <img src={china} alt="china" width="70px" />
                            <div className="text-content">
                                <div>Travel Guide to China</div>
                                <div>June 10, 2018</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}