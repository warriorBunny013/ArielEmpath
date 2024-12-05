import React, { useState, useEffect } from "react";
// import { loadStripe } from '@stripe/stripe-js';
// import { motion } from "framer-motion";
// import { API_URL } from "../utils/apiConfig";

// const stripePromise = loadStripe(process.env.REACT_APP_API_PUBLIC_KEY);

function ServicesCards() {
    const [showModal, setShowModal] = useState(false);
    // eslint-disable-next-line
    const [modalContent, setModalContent] = useState({
        title: "",
        description: "",
        price: "",
        cancellationPolicy: "",
        alt: ""
    });
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    useEffect(() => {
        if (showModal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showModal]);

    // const openModal = (title, description, price, cancellationPolicy, alt) => {
    //     setModalContent({ title, description, price, cancellationPolicy, alt });
    //     setShowModal(true);
    // };

    const closeModal = () => {
        setShowModal(false);
    };
    // // const [prices, setPrices] = useState([]);
    // useEffect(() => {
    //     // Fetch prices from the backend API
    //     const fetchPrices = async () => {
    //         try {
    //             // const response = await fetch(`${API_URL}/api/prices`);
    //             // const data = await response.json();
    //             // setPrices(data);
    //         } catch (error) {
    //             console.error('Error fetching prices:', error);
    //         }
    //     };

    //     fetchPrices();
    // }, []);
    const bookingLinks = {
        "10 minutes detailed reading": "https://calendly.com/solsticetarot143/10-minutes-detailed-reading",
        "30 minutes detailed reading": "https://calendly.com/solsticetarot143/30-minutes-detailed-reading",
        "45 minutes detailed reading": "https://calendly.com/solsticetarot143/45-minutes-detailed-reading"
    };

    const handleBookingRedirect = (duration) => {
        const bookingUrl = bookingLinks[duration];
        if (bookingUrl) {
            window.location.href = bookingUrl; // Opens in the same tab
        } else {
            alert("Booking link not available for this duration.");
        }
    };
    const boxes = [
        {
          title: "Tarot Card Reading",
          description: "Unlock insights into your life with a personalized tarot reading",
          backgroundImage: "service1.png",
          buttonText: "Learn More",
        },
        {
          title: "Sidereal Astrology",
          description: "Discover your true cosmic blueprint with sidereal astrology",
          backgroundImage: "service2.png",
          buttonText: "Learn More",
        },
        {
          title: "Psychic Reading",
          description: "Gain clarity and guidance through a powerful psychic reading",
          backgroundImage: "service3.png",
          buttonText: "Learn More",
        },
      ];
    // const cards = [
    //     {
    //         img: "Image-6.png",
    //         type: "love",
    //         title: "10 minutes detailed reading",
    //         description: "10 minutes in-depth and honest insight regarding love-related issues like soulmates, marriage, partnerships, and more.",
    //         price: "45",
    //         cancellationPolicy: "Cancellations must be done at least 24 hours before your scheduled reading in order to avoid a rescheduling fee. Any last-minute cancellations and requests for rescheduling will result in a $75 rescheduling fee. Any no-show appointments result in a loss of your reading and will need to purchase another reading at full price."
    //     },
    //     {
    //         img: "Image.png",
    //         type: "love",
    //         title: "30 minutes detailed reading",
    //         description: "30 minutes in-depth and honest insight regarding love-related issues like soulmates, marriage, partnerships, and more.",
    //         price: "120",
    //         cancellationPolicy: "Cancellations must be done at least 24 hours before your scheduled reading in order to avoid a rescheduling fee. Any last-minute cancellations and requests for rescheduling will result in a $75 rescheduling fee. Any no-show appointments result in a loss of your reading and will need to purchase another reading at full price."
    //     },
    //     {
    //         img: "Image-1.png",
    //         type: "love",
    //         title: "45 minutes detailed reading",
    //         description: "45 minutes in-depth and honest insight regarding love-related issues like soulmates, marriage, partnerships, and more.",
    //         price: "185",
    //         cancellationPolicy: "Cancellations must be done at least 24 hours before your scheduled reading in order to avoid a rescheduling fee. Any last-minute cancellations and requests for rescheduling will result in a $75 rescheduling fee. Any no-show appointments result in a loss of your reading and will need to purchase another reading at full price."
    //     }
    // ];
    // const makePayment = async () => {
    //     const stripe = await stripePromise;

    //     const body = {
    //         products: [{
    //             alt: modalContent.alt,
    //             title: modalContent.title,
    //             price: modalContent.price,
    //         }],
    //         userName: name,
    //         userEmail: email,
    //         userPhone: phone
    //     };

    //     const headers = {
    //         "Content-Type": "application/json"
    //     };

    //     const response = await fetch(`${API_URL}/api/create-checkout-session`, {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify(body)
    //     });

    //     const session = await response.json();

    //     const result = await stripe.redirectToCheckout({
    //         sessionId: session.id
    //     });

    //     if (result.error) {
    //         console.log(result.error.message);
    //     }
    // };
    // const isFormValid = name && email && phone;
    return (
        <div className="flex flex-wrap justify-center">
            {/* <div className="mt-20 m-5 lg:ml-20 text-4xl font-bold tracking-tight text-black font-serif font-extralight flex justify-center">Services</div> */}
            <div
                className="flex gap-5 max-w-screen-xl mx-auto p-5 md:p-8 "
            >
              
                   
                     
            <div className="box-container flex gap-10">
      {boxes.map((box, index) => (
        <div className="box-item bg-purple-100 rounded-lg text-black" key={index}>
          <div className="flip-box">
            <div className="">
            <div
              className="flip-box-front bg-white text-center bg-cover h-20"
              style={{ backgroundImage: `url(${box.backgroundImage})`,  backgroundSize: "contain",
              backgroundRepeat: "no-repeat", // Prevents tiling
              backgroundPosition: "center", // Centers the image in the box
            
            }}
             
            >
            </div>
            </div>
            
            <div
              className="flip-box-back text-center font-serif text-black bgr-[#e7ef8f] bgr-[#abe7c4] bg-green-200  "
            //   style={{ backgroundColor:"#bbb"}}
            >
              <div className="inner color-white ">
                <h3 className="flip-box-header text-3xl text-black">{box.title}</h3>
                <div className="text-black mx-14 pt-5  text-[1rem]">{box.description}</div>
                <button className="flip-box-button hover:bg-black hover:text-white hover:ease-in text-[0.8rem] duration-300"
                onClick={() => (window.location.href = "#services")}
                >{box.buttonText}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
            
                
            </div>


            {showModal && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-full h-full max-w-lg md:max-w-5xl mx-auto my-6">
                            <div className="relative flex flex-col w-full bg-gray-800 rounded-lg shadow-lg outline-none focus:outline-none dark:bg-gray-800">
                                <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200 rounded-t dark:bg-gray-700">
                                    <div className="flex items-center flex-wrap lg:space-x-4">
                                        <div className="flex m-2 items-center">
                                            <span className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-blue-500 rounded-full">1</span>
                                            <span className=" text-white">──</span>
                                            <span className="px-2 py-1 text-sm font-semibold text-white">Select Date and Time</span>
                                        </div>
                                        <div className="flex m-2 items-center">
                                            <span className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-gray-500 rounded-full">2</span>
                                            <span className=" text-white">──</span>
                                            <span className="px-2 py-1 text-sm font-semibold text-gray-500">Payment</span>
                                        </div>
                                        <div className="flex m-2 items-center">
                                            <span className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white bg-gray-500 rounded-full">3</span>
                                            <span className=" text-white">──</span>
                                            <span className="px-2 py-1 text-sm font-semibold text-gray-500">Complete</span>
                                        </div>
                                    </div>
                                    <button
                                        className="ml-auto text-2xl font-semibold bg-transparent border-0 outline-none focus:outline-none"
                                        onClick={closeModal}
                                    >
                                        <span className="block text-3xl text-white bg-transparent outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="text-2xl font-semibold text-white dark:text-white">Order Summary</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-semibold text-gray-400 dark:text-gray-400">Selected Reading:</span>
                                                <span className="text-sm lg:text-xl font-bold text-gray-400 dark:text-gray-300">{modalContent.title}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-semibold text-gray-400 dark:text-gray-400">Type:</span>
                                                <span className="text-sm font-semibold text-gray-300 dark:text-gray-300 capitalize">{modalContent.alt}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-semibold text-gray-400 dark:text-gray-400">Price:</span>
                                                <span className="text-sm font-semibold text-gray-300 dark:text-gray-300">${modalContent.price}</span>
                                            </div>
                                            <div className="mt-6">
                                                <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-400">Description:</h4>
                                                <p className="mt-2 text-sm text-gray-300 dark:text-gray-300">{modalContent.description}</p>
                                            </div>
                                          
                                        </div>
                                        <div className="space-y-4">
                                            {/* <div>
                                                <label className="block text-sm font-medium text-gray-400 dark:text-gray-400" htmlFor="fullname">Full Name</label>
                                                <input 
                                                 className="w-full p-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                 id="fullname" 
                                                 type="text" 
                                                 value={name}
                                                 onChange={(e) => setName(e.target.value)}
                                                 required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 dark:text-gray-400" htmlFor="email">Email Address</label>
                                                <input 
                                                className="w-full p-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                id="email" 
                                                type="email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400" htmlFor="phone">Phone Number</label>
                                                <input 
                                               className="w-full p-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                               id="phone" 
                                               type="text" 
                                               value={phone}
                                               onChange={(e) => setPhone(e.target.value)}
                                               required
                                                />
                                            </div> */}
                                            {/* <p className="text-xs text-gray-400 dark:text-gray-400">Don't worry, your booking information is safe with us.</p> */}
                                            <ul className="list mt-4 space-y-2 list-inside text-white text-sm">
                                             <li>👉 Please note this is a private, one-on-one LIVE reading session, there are no pre-recordings available at this moment.</li>
                                             <li>👉 Please be present during the consultation, as I do not offer refunds for missed sessions.</li>
                                             <li>👉 Please note that cancellations and rescheduling are allowed up to 1 day before the meeting.</li>
                                       {/* <li>If you miss your session, you cannot get a refund.</li> */}
                                     </ul>
                                     <div className="space-y-2 list-inside text-gray-300 text-sm">✅ Kindly email us your booking details if you haven't received a confirmation email after completing your booking</div>
                                            
                                        </div>
                                       
                                    </div>
                                    <div className="mt-6 pt-3">
                                        <div className="p-4 mt-2 border border-gray-300 rounded-lg dark:border-gray-600 bg-gray-900">
                                            <h4 className="text-lg font-bold mb-2 text-white">Cancellation Policy</h4>
                                            <p className="text-sm text-white">{modalContent.cancellationPolicy}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-4 bg-gray-100 border-t border-gray-700 rounded-b dark:bg-gray-700">
                                    <button
                                        className="px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                    <button
    onClick={() => handleBookingRedirect(modalContent.title)}
    type="submit"
    className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    Book Now
</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
                </>
            )}
        </div>
    );
}

export default ServicesCards;
