import React from 'react';
import { Card } from 'react-bootstrap';
import indonesia from '../../assets/images/places/indonesia.jpg';
import england from '../../assets/images/places/england.jpg';
import UAE from '../../assets/images/places/UAE.jpg';
import dominic from '../../assets/images/places/dominicRepublic.jpg';
import italy from '../../assets/images/places/italy.jpg';
import maldives from '../../assets/images/places/maldives.jpg';

export default function Packages() {
    return <section className="packages">
        <div>
            <div>
                <h1>Our Most Popular Packges</h1>
            </div>
            <div className="row">
                <div className="col-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={indonesia} />
                        <Card.Body>
                            <Card.Title>12 Days, 13 Nights</Card.Title>
                            <Card.Text>
                                Indonesia
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={england} />
                        <Card.Body>
                            <Card.Title>6 Days, 7 Nights</Card.Title>
                            <Card.Text>
                                England
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dominic} />
                        <Card.Body>
                            <Card.Title>10 Days, 11 Nights</Card.Title>
                            <Card.Text>
                                Dominican Republic
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={maldives} />
                        <Card.Body>
                            <Card.Title>5 Days, 6 Nights</Card.Title>
                            <Card.Text>
                                Maldives
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={UAE} />
                        <Card.Body>
                            <Card.Title>7 Days, 8 Nights</Card.Title>
                            <Card.Text>
                                Unite Arab Emarites
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={italy} />
                        <Card.Body>
                            <Card.Title>7 Days, 8 Nights</Card.Title>
                            <Card.Text>
                                Italy
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </section>
}