import React from 'react';
import { Link } from "react-router-dom";

const IntroTwo = () => {
    return (
        <div className="intro-section section bg-video" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Video Background */}
            <video
                src={`${process.env.PUBLIC_URL}/videos/video-1.mp4`}
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />
            
            {/* Content */}
            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                    <div className="col align-self-center">
                        <div className="intro-content-two text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                            <a href="https://app.ciphr7.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={process.env.PUBLIC_URL + "images/logo/c7D.png"}
                                    className="img-fluid"
                                    style={{ width: "80px", height: "80px" }}
                                    alt=""
                                />
                            </a>
                            <h2 className="title">Designing awesome brands & experiences</h2>
                            <div className="desc">
                                <p>
                                    We are an agency located in Texas and Belize. We think strategy, craft design,
                                    develop digital and create motion. To forward your brand and business.
                                </p>
                            </div>
                            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary">
                                Get Started
                            </Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-outline-white btn-hover-primary">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroTwo;
