import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact py-16 mx-10">
      <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-center text-3xl font-bold mb-8">Contact</h2>
        {/* <div className="row gy-4 grid grid-cols-1 sm:grid-cols-3 gap-6 ml-7 justify-center "> */}
        <div className="flex flex-wrap gap-4 justify-center  ">

          <div className="col-lg-6 flex flex-col items-center w-[100%] md:w-[810%] shadow-lg p-4 ">
            <div className="info-item flex flex-col justify-center items-center ">
              <i className="bi bi-map text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-700">Our Address</h3>
              <p>Noor Al Shams
                Flowers & Ornamental Plants Trading L.L.C
                P.O Box No : 42502
                Dubai, U.A.E</p>
            </div>
          </div>
          {/* <div className='grid grid-cols-2 gap-4 md:w-[51%] '> */}
          <div className="w-[100%] col-lg-3 col-md-12 flex flex-col items-center shadow-lg p-4">
            <div className=" info-item flex flex-col justify-center items-center ">
              <i className="bi bi-envelope text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-700">Email Us</h3>
              <a href="mailto:info@forestry.ae" className="">noor2024alshams@gmail.com
              </a>
              <a href="mailto:info@forestry.ae" className="">info@nooralshamsdubai.com
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 flex flex-col items-center shadow-lg p-4 w-[100%]">
            <div className="info-item flex flex-col justify-center items-center ">
              <i className="bi bi-telephone text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-700">Call Us</h3>
              <a href="tel:+971555054975" className=""> +971 555054975</a>
              <a href="tel:+971558270999" className="">+971 558270999</a>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="row gy-4 mt-4">
          <div className="col-lg-6 w-full max-w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462488.0403618354!2d54.94860789291115!3d25.15414268385213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dcf78fa0bb3%3A0x50e8ea0c9b1bc2c6!2sNoor%20Al%20Shams%20Flowers%20and%20Ornamental%20Plants%20Trading!5e0!3m2!1sen!2sin!4v1716214048323!5m2!1sen!2sin"
              frameBorder="0"
              className="w-full h-96 border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
