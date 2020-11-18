import React from 'react';

export default function Subscribe() {
    return <section className="subscribe">
        <div className="subscribe-wrapper">
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <p>Join Our Subscribe List</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <form>
                        <label className="label">
                            <input type="email" placeholder="type ypur email..." />
                            <div className="btn">
                                <button>SEND</button>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </section>
}