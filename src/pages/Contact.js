import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const EMAILJS_USER = 'dyhu0-g5cWev2NsJF';
const EMAILJS_SERVICE_ID = 'service_9rcmihc';
const EMAILJS_TEMPLATE_ID = 'template_ogno9us';

const Contact = () => {
    useDocTitle('Normandy Farms - Contact Us')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [topic, setTopic] = useState('')
    const [customSubject, setCustomSubject] = useState('')
    const [errors, setErrors] = useState({})

    useEffect(() => {
        emailjs.init(EMAILJS_USER);
    }, []);

    const clearErrors = () => {
        setErrors({})
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setTopic('')
        setCustomSubject('')
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePhone = (phone) => {
        const phoneNumber = phone.replace(/\D/g, '');
        return phoneNumber.length === 10;
    }

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }

    const handlePhoneChange = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhone(formattedPhoneNumber);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        clearErrors();

        let newErrors = {};

        // Check for empty required fields
        if (!firstName.trim()) newErrors.firstName = 'First name is required';
        if (!lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        if (!phone.trim()) newErrors.phone = 'Phone number is required';
        if (!topic) newErrors.topic = 'Please select a topic';
        if (!customSubject.trim()) newErrors.customSubject = 'Subject is required';
        if (!message.trim()) newErrors.message = 'Message is required';

        // Validate email and phone if they're not empty
        if (email && !validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (phone && !validatePhone(phone)) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        const topicSubject = topic === 'Topic A' ? 'Topic A Subject' : 'Topic B Subject';
        const fullSubject = `[${topicSubject}]: ${customSubject}`;

        const templateParams = {
            from_name: `${firstName} ${lastName}`,
            to_name: 'Your Name',
            subject: fullSubject,
            message: message,
            reply_to: email,
            phone_number: phone,
            topic: topic
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then((response) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                clearInput();
                Notiflix.Report.success(
                    'Success',
                    'Your message has been sent successfully!',
                    'Okay',
                );
            }, (error) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'send message';
                Notiflix.Report.failure(
                    'An error occurred',
                    'Failed to send the message. Please try again later.',
                    'Okay',
                );
            });
    }

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                <form onSubmit={sendEmail}>

                    <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input 
                                        name="first_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="First Name*" 
                                        value={firstName}
                                        onChange={(e)=> setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.firstName && 
                                        <p className="text-red-500 text-sm">{errors.firstName}</p>
                                    }
                                </div>
                                
                                <div>
                                    <input 
                                        name="last_name" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e)=> setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.lastName && 
                                        <p className="text-red-500 text-sm">{errors.lastName}</p>
                                    }
                                </div>

                                <div>
                                    <input 
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" 
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        onKeyUp={clearErrors}   
                                    />
                                    {errors.email && 
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number" 
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="tel" 
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.phone && 
                                        <p className="text-red-500 text-sm">{errors.phone}</p>
                                    }
                                </div>

                                <div>
                                    <select
                                        name="topic"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        onBlur={clearErrors}
                                    >
                                        <option value="">Select a Topic*</option>
                                        <option value="Topic A">Topic A</option>
                                        <option value="Topic B">Topic B</option>
                                    </select>
                                    {errors.topic && 
                                        <p className="text-red-500 text-sm">{errors.topic}</p>
                                    }
                                </div>

                                <div>
                                    <input 
                                        name="custom_subject"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Subject*"
                                        value={customSubject}
                                        onChange={(e)=> setCustomSubject(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.customSubject && 
                                        <p className="text-red-500 text-sm">{errors.customSubject}</p>
                                    }
                                </div>
                        </div>
                        <div className="my-4">
                            <textarea 
                                name="message" 
                                placeholder="Message*" 
                                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                value={message}
                                onChange={(e)=> setMessage(e.target.value)}
                                onKeyUp={clearErrors}
                            ></textarea>
                            {errors.message && 
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            }
                        </div>
                        <div className="my-2 w-1/2 lg:w-2/4">
                            <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
                        <div
                            className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                            <div className="flex flex-col text-white">
                                
                                <div className="flex my-4 w-2/3 lg:w-3/4">
                                    <div className="flex flex-col">
                                        <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Address</h2>
                                        <p className="text-gray-400">PLACEHOLDER_ADDRESS</p>
                                    </div>
                                </div>
                    
                    <div className="flex my-4 w-2/3 lg:w-1/2">
                        <div className="flex flex-col">
                        <i className="fas fa-phone-alt pt-2 pr-2" />
                        </div>

                        <div className="flex flex-col">
                        <h2 className="text-2xl">Phone</h2>
                        <p className="text-gray-400">PLACEHOLDER_PHONE_NUMBER</p>
                        
                            <div className='mt-5'>
                                <h2 className="text-2xl">Email</h2>
                                <p className="text-gray-400">PLACEHOLDER_EMAIL_ADDRESS</p>
                            </div>
                       
                        </div>
                    </div>
                    
                    <div className="flex my-4 w-2/3 lg:w-1/2">
                        <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;