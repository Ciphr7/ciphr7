import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur"
    });
    const [responseMessage, setResponseMessage] = useState(null);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('your-name', data.name);
        formData.append('your-email', data.email);
        formData.append('your-subject', data.subject);
        formData.append('your-message', data.message);
        formData.append('_wpcf7_unit_tag', '7ac9431');

        try {
            const response = await fetch("https://app.ciphr7.com/wp-json/contact-form-7/v1/contact-forms/2280/feedback", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            if (result.status === "mail_sent") {
                setResponseMessage("Message sent successfully!");
                reset(); // Clears the form fields
                setTimeout(() => {
                    window.location.reload(); // Refresh the page
                }, 2000); // Delay to show success message
            } else {
                setResponseMessage("Failed to send message. Please try again.");
            }
        } catch (error) {
            setResponseMessage("An error occurred. Please try again.");
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-n6">
                    <div className="col-md-6 col-12 mb-6">
                        <input 
                            type="text" 
                            placeholder="Your Name *" 
                            {...register("name", { required: "Name is required" })} 
                        />
                        {errors?.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-6">
                        <input 
                            type="email" 
                            placeholder="Email *" 
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            })} 
                        />
                        {errors?.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="col-md-12 col-12 mb-6">
                        <input 
                            type="text" 
                            placeholder="Subject *" 
                            {...register("subject", { required: "Subject is required" })} 
                        />
                        {errors?.subject && <p>{errors.subject.message}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea 
                            placeholder="Message" 
                            {...register("message", { required: "Message is required" })}
                        ></textarea>
                        {errors?.message && <p>{errors.message.message}</p>}
                    </div>
                    <div className="col-12 text-center mb-6">
                        <button type="submit" className="btn btn-primary btn-hover-secondary">Submit</button>
                    </div>
                </div>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
};

export default ContactForm;
