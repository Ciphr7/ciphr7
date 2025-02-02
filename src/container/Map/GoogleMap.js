import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66169.11023476975!2d-93.98193301670776!3d29.977763438534787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863eb113bb684e19%3A0x88a55c17bca8417!2sPort%20Neches%2C%20TX%2C%20USA!5e1!3m2!1sen!2sbz!4v1738454561124!5m2!1sen!2sbz"  aria-hidden="false"></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
