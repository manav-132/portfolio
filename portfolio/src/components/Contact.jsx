import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/submit-form', formData);

            console.log(response.data); // Log response for testing

            // Optionally, show success message or clear form
            alert('Form data submitted successfully!');
            setFormData({ name: '', email: '', comments: '' }); // Clear form fields
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, show error message, etc.
            alert('Failed to submit form. Please try again.');
        }
    };

    return (
        <div id="contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 text-center leading-normal uppercase text-amber-600">
                Connect With Me
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
                <div className="lg:flex gap-6 item-center">
                    <input
                        className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-amber-600 b_glow text-xl text-slate-500"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-amber-600 b_glow text-xl text-slate-500"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <textarea
                    className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-amber-600 b_glow text-xl text-slate-500"
                    placeholder="Comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows="5"
                    required
                ></textarea>
                <button
                    className="neno-button shadow-xl hover:shadow-amber-800/50 text-white border-2 border-amber-600 bg-amber-600 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow text-xl font-bold"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
