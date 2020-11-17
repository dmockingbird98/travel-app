import React from 'react';

export default function Contacts() {
    return <section className="contacts">
        <div className="contact-wrapper">
            <h2>Our Contact</h2>
            <div className="line">
                <div className="greyLine">
                    <div className="greenLine"></div>
                </div>
            </div>

            <div className="row conts">
                <div className="col-sm-12 col-md-12 col-lg-4 info">
                    <span className="icon-location"></span>
                    <h4>Address</h4>
                    <p>6834 Hollywood Blvd - Los Angeles CA</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 info">
                    <span className="icon-phone"></span>
                    <h4>Phone</h4>
                    <p>+1234 567 890</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 info">
                    <span className="icon-envelope-o"></span>
                    <h4>E-mail</h4>
                    <p>testmail@demo.com</p>
                </div>
            </div>
        </div>
    </section>
}