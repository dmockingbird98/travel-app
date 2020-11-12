import React from 'react';

export default function Subscribe() {
    return <section className="subscribe">
        <div className="row">
            <div className="col-6">
                <p>Join Our Subscribe List</p>
            </div>
            <div className="col-6">
                <form>
                    <label>
                        <input type="email" placeholder="type ypur email..." />
                    </label>
                </form>
            </div>
        </div>
    </section>
}