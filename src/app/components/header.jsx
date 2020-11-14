import React from 'react';
import { Button } from 'react-bootstrap';

export default function Header() {
    return <section className="header p-0">
        <div className="header-wrapper d-flex justify-content-between align-items-center">
            <span>
                <a href="/home">ServiceAMP</a>
            </span>

            <Button variant="none">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </Button>
        </div>
    </section>
}