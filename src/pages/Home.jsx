import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaFlask, FaBook, FaFutbol, FaChalkboardTeacher } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gray-100 min-h-[70vh]">
      <section className="text-center py-8 bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Springdale Public School
        </h2>
        <p className="text-lg text-gray-700">
          Where we nurture young minds for a brighter future.
        </p>
      </section>

      <section className="py-8 px-4">
        <div className="w-full max-w-screen-lg mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={true}
            showThumbs={false}
            interval={3500}
            transitionTime={600}
            className="carousel-container"
          >
            <div className="relative">
              <img
                src="images/Sports-day1.jpg"
                alt="Annual Sports Day"
                className="object-cover w-full h-56 md:h-72 lg:h-96"
              />
              <p className="legend">
                Annual Sports Day - Celebrating Excellence in Sports
              </p>
            </div>
            <div className="relative">
              <img
                src="images/science.jpg"
                alt="Science Exhibition"
                className="object-cover w-full h-56 md:h-72 lg:h-96"
              />
              <p className="legend">
                Science Exhibition - Showcasing Student Innovations
              </p>
            </div>
            <div className="relative">
              <img
                src="images/culture-festival.jpg"
                alt="Cultural Fest"
                className="object-cover w-full h-56 md:h-72 lg:h-96"
              />
              <p className="legend">
                Cultural Fest - Embracing Diversity and Creativity
              </p>
            </div>
          </Carousel>
        </div>
      </section>
      <div className="bg-gray-100 min-h-screen py-8" id="about">
        <div className="container mx-auto px-4">
          <section
            className="relative bg-cover bg-center py-12 text-center text-white rounded-lg shadow-md mb-8"
            style={{
              backgroundImage:
                "url('https://www.greatschools.org/gk/wp-content/uploads/2012/12/Public-schools-fact-and-fiction.jpg')",
            }}
          >
            <div className="bg-black bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-2">About Us</h2>
              <p className="text-md">
                Detailed information about the school's history, vision,
                mission, and values.
              </p>
            </div>
          </section>

          <section className="mb-8 p-6 bg-white shadow-md rounded-lg transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-teal-600">
              History
            </h3>
            <p className="text-md text-gray-700">
              Founded in 1985, Springdale Public School has been dedicated to
              providing quality education and holistic development to students.
            </p>
          </section>

          <section className="mb-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-teal-600">
                Vision
              </h3>
              <p className="text-md text-gray-700">
                To create a learning environment that fosters academic
                excellence, critical thinking, and ethical values.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-teal-600">
                Mission
              </h3>
              <p className="text-md text-gray-700">
                To empower students with the knowledge, skills, and values
                needed to thrive in a dynamic world.
              </p>
            </div>
          </section>

          <section className="mb-8 p-6 bg-white shadow-md rounded-lg transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-teal-600">
              Principal's Message
            </h3>
            <p className="text-md text-gray-700">
              At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white shadow-md rounded-lg transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-teal-600">
              Infrastructure and Facilities
            </h3>
            <ul className="text-md text-gray-700 space-y-2">
              <li className="flex items-center">
                <FaFlask className="text-teal-600 mr-2" />
                State-of-the-art science and computer labs
              </li>
              <li className="flex items-center">
                <FaChalkboardTeacher className="text-teal-600 mr-2" />
                Spacious and well-equipped classrooms
              </li>
              <li className="flex items-center">
                <FaBook className="text-teal-600 mr-2" />
                Library with a vast collection of books and digital resources
              </li>
              <li className="flex items-center">
                <FaFutbol className="text-teal-600 mr-2" />
                Sports facilities including a playground, gymnasium, and
                swimming pool
              </li>
            </ul>
          </section>
        </div>
      </div>
      <section id="contact" className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-teal-800">
            Contact Us
          </h2>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0">
              <h3 className="text-3xl font-semibold mb-4 text-teal-700">
                Get in Touch
              </h3>
              <p className="text-lg mb-2 font-semibold text-gray-800">
                Springdale Public School
              </p>
              <p className="text-lg mb-2 text-gray-700">
                123 Education Lane, Cityville, State, ZIP Code
              </p>
              <p className="text-lg mb-2 text-gray-700">
                Phone: +1 (123) 456-7890
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Email:{" "}
                <a
                  href="mailto:info@springdale.edu"
                  className="text-teal-500 hover:underline"
                >
                  info@springdale.edu
                </a>
              </p>
            </div>

            <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-3xl font-semibold mb-4 text-teal-700">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-teal-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-center mb-6 text-teal-700">
              Our Location
            </h3>
            <div
              className="relative overflow-hidden rounded-lg shadow-lg"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.5974400886226!2d-77.02613548470136!3d38.93428087996807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b47dfb8b1189%3A0x2efbbf6eb38e1a95!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1638819701074!5m2!1sen!2sus"
                className="absolute top-0 left-0 w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
