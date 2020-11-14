import React from 'react';

export default function Contacts() {
    return <section className="contacts">
        <div><h2>Our Contact</h2></div>
        <div className="line">
            <div className="greyLine">
                <div className="greenLine"></div>
            </div>
        </div>

        <div className="row">
            <div className="col-4">
                <div><span className="icon-location"></span></div>
                <h4>Address</h4>
                <p>6834 Hollywood Blvd - Los Angeles CA</p>
            </div>
            <div className="col-4">
                <div><span className="icon-phone"></span></div>
                <h4>Phone</h4>
                <p>+1234 567 890</p>
            </div>
            <div className="col-4">
                <div><span className="icon-envelope-o"></span></div>
                <h4>E-mail</h4>
                <p>testmail@demo.com</p>
            </div>
        </div>
    </section>
}