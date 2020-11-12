import React from 'react';
import {Card, Accordion} from 'react-bootstrap';
import lagoon from '../../assets/images/places/lagoon.jpg';
export default function Assurance(){
    return     <section className="assurance">
                    <div>
                        <img src={lagoon} alt="lagoon" width="200px" />
                        <div>
                            <h2>Why Choose Us</h2>
                            <h4>Our company is committed to helping its clients</h4>
                            <div>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0"> TRAVEL ARRANGEMENTS </Accordion.Toggle> 
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Much of our customers have full-time jobs and do not intend to organize their journey. Allow us fret about booking your transportation, resort, dishes, tourist attractions, and also whatever else. We will certainly deal with you to make a custom-tailored scenic tour as well as handle all of the headache entailed. Don't hesitate to try Web Layout Design.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">CHEAP FLIGHTS</Accordion.Toggle> 
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Can be your finest source for locating terrific ticket offers and affordable flights to your favorite locations worldwide. Our innovative search technology makes intending your following vacation easy and convenient. If you're trying to find budget-friendly plane tickets or vacation packages, you can find all of it below. What do you like the most in Web Layout Design?</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>


                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">HAND-PICKED TOURS</Accordion.Toggle> 
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>If you already have actually a journey prepared but need a bus, air travel, tickets to an event, a location to stay, or someplace to or eat, give us a cal! We have connections and partnerships all over North America. We know what vendors to make use of and which to prevent. Even during times of high need, we have actually had the ability to find lodgings for our clients.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>


                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">PRIVATE GUIDE</Accordion.Toggle> 
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>We promote tourist guide with a specialist permit or tour guiding certificate, ensuring you have the best possible scenic tour experience in numerous countries. Depend on our neighborhood specialists to craft the ideal private tour, custom excursion or shore expedition! Web Service Layout Design would help you to orgonise your site.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>


                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">SPECIAL ACTIVITIES</Accordion.Toggle> 
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Special interest tourist is the arrangement of personalized tourist activities that deal with the details rate of interests of teams as well as individuals. In this case, tourism is embarked on to satisfy a particular rate of interest or need. It has been suggested that Special rate of interest tourism includes 4 main experiences.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>


                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">BEST PRICE GARUNTEE</Accordion.Toggle> 
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>On the occasion that you discover a reduced cost on our website or on another Europe country-based web site prior to booking or making a down payment with our company, we will match the rival's price. The Small Cost Guarantee is subject to the terms listed here.</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                        </div>
                    </div>
    </section>
}