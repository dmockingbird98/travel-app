import React from 'react';

export default function Home() {
    return <>
        <section className="home p-0">
            <div className="home-wrapper d-flex align-items-center justify-content-center">
                <div className="overlay"></div>
                <div className="home-wrapper-title d-flex align-items-center flex-column">
                    <h3>Web Layout Design</h3>
                    <h2>Open Your Eyes To</h2>
                    <h1>The World</h1>
                    <div className="learn-more"><a href="/home/learn">LEARN MORE</a></div>
                </div>
            </div>
        </section>
    </>
}