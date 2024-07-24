import React from "react";
import { FaChalkboard, FaBookOpen, FaLaptop, FaUserGraduate } from "react-icons/fa";

const Academics = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <section className="text-center py-12 bg-white shadow-lg rounded-lg mb-12">
          <h2 className="text-4xl font-bold mb-6 text-teal-700">
            Academics
          </h2>
          <p className="text-xl text-gray-600">
            Excellence in education through a well-rounded curriculum and innovative teaching methodologies.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-teal-700">
            Curriculum
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">
                Primary (Grades 1-5)
              </h4>
              <ul className="list-none list-inside text-gray-700 space-y-2">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">
                Secondary (Grades 6-10)
              </h4>
              <ul className="list-none list-inside text-gray-700 space-y-2">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl">
              <h4 className="text-2xl font-semibold mb-4 text-teal-600">
                Senior Secondary (Grades 11-12)
              </h4>
              <h5 className="text-xl font-semibold mb-3 text-teal-500">
                Science Stream
              </h5>
              <ul className="list-none list-inside text-gray-700 space-y-2 mb-4">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
              <h5 className="text-xl font-semibold mb-3 text-teal-500">
                Commerce Stream
              </h5>
              <ul className="list-none list-inside text-gray-700 space-y-2">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-teal-700">
            Teaching Methodologies
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </section>

        <section>
          <h3 className="text-3xl font-semibold mb-6 text-teal-700">
            Educational Resources
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white shadow-lg rounded-lg flex items-center space-x-4 transition transform hover:scale-105 hover:shadow-2xl">
              <FaLaptop className="text-teal-600 text-4xl" />
              <div>
                <h4 className="text-2xl font-semibold text-teal-600">
                  Digital Classrooms
                </h4>
                <p className="text-gray-700 text-lg">
                  Interactive smart boards and digital content.
                </p>
              </div>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg flex items-center space-x-4 transition transform hover:scale-105 hover:shadow-2xl">
              <FaBookOpen className="text-teal-600 text-4xl" />
              <div>
                <h4 className="text-2xl font-semibold text-teal-600">
                  Interactive Learning
                </h4>
                <p className="text-gray-700 text-lg">
                  Engaging modules for all subjects.
                </p>
              </div>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg flex items-center space-x-4 transition transform hover:scale-105 hover:shadow-2xl">
              <FaUserGraduate className="text-teal-600 text-4xl" />
              <div>
                <h4 className="text-2xl font-semibold text-teal-600">
                  Online Platforms
                </h4>
                <p className="text-gray-700 text-lg">
                  Access to a variety of educational websites and tools.
                </p>
              </div>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg flex items-center space-x-4 transition transform hover:scale-105 hover:shadow-2xl">
              <FaChalkboard className="text-teal-600 text-4xl" />
              <div>
                <h4 className="text-2xl font-semibold text-teal-600">
                  Traditional Techniques
                </h4>
                <p className="text-gray-700 text-lg">
                  Proven teaching methods combined with modern technology.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
