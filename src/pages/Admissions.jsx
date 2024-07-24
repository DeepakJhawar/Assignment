import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Admissions = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-12">
          Admissions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">
              Admission Process
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Admission forms are available for download. Submit the completed
              form along with required documents at the school office. Our team
              will review the application and contact you for the next steps.
            </p>
            <ul className="list-none list-inside text-lg text-gray-700">
              <li>Download the admission form from our website.</li>
              <li>Complete the form and gather the required documents.</li>
              <li>Submit the form and documents at the school office.</li>
              <li>Wait for our team to contact you regarding the next steps.</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">
              Admission Criteria
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Admission is based on merit and the availability of seats.
              Entrance tests may be conducted for certain grades to assess the
              student's proficiency.
            </p>
            <ul className="list-none list-inside text-lg text-gray-700">
              <li>Merit-based selection process.</li>
              <li>Availability of seats.</li>
              <li>Entrance tests for certain grades.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <h3 className="text-3xl font-semibold text-teal-600 mb-4">
            Important Dates
          </h3>
          <ul className="list-none list-inside text-lg text-gray-700">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-teal-600 mb-4">
            Frequently Asked Questions
          </h3>
          <Accordion sx={{ backgroundColor: '#e0f2f1', boxShadow: 3, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: '#004d40', color: '#fff' }}
            >
              <Typography className="text-lg font-semibold">
                What documents are required for admission?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b2dfdb' }}>
              <Typography>
                Required documents include the completed admission form, birth
                certificate, previous school records, and a passport-sized
                photograph.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: '#e0f2f1', boxShadow: 3, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{ backgroundColor: '#004d40', color: '#fff' }}
            >
              <Typography className="text-lg font-semibold">
                Is there an age limit for admissions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b2dfdb' }}>
              <Typography>
                Yes, students must meet the age criteria for the grade they are
                applying to. Please refer to our admission guidelines for detailed
                information.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: '#e0f2f1', boxShadow: 3, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              sx={{ backgroundColor: '#004d40', color: '#fff' }}
            >
              <Typography className="text-lg font-semibold">
                Are there any scholarships available?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b2dfdb' }}>
              <Typography>
                Yes, we offer merit-based scholarships for outstanding
                students. Please contact the school office for more details on
                scholarship applications.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: '#e0f2f1', boxShadow: 3, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
              sx={{ backgroundColor: '#004d40', color: '#fff' }}
            >
              <Typography className="text-lg font-semibold">
                Can we visit the school before applying?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b2dfdb' }}>
              <Typography>
                Yes, we encourage prospective parents and students to visit
                our campus. Please schedule a visit by contacting the school
                office.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: '#e0f2f1', boxShadow: 3, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
              sx={{ backgroundColor: '#004d40', color: '#fff' }}
            >
              <Typography className="text-lg font-semibold">
                What is the medium of instruction?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b2dfdb' }}>
              <Typography>
                The medium of instruction at Springdale Public School is
                English. We also offer language classes in regional languages.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: '#e0f2f1', boxShadow: 3, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
              sx={{ backgroundColor: '#004d40', color: '#fff' }}
            >
              <Typography className="text-lg font-semibold">
                What extracurricular activities are offered?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b2dfdb' }}>
              <Typography>
                We offer a variety of extracurricular activities including
                sports, music, dance, art, and various clubs to foster holistic
                development.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: '#e0f2f1', boxShadow: 3, mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7a-content"
              id="panel7a-header"
              sx={{ backgroundColor: '#004d40', color: '#fff' }}
            >
              <Typography className="text-lg font-semibold">
                How can I track the status of my admission application?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#b2dfdb' }}>
              <Typography>
                You can track the status of your application by logging into
                the admissions portal on our website. You will also receive email
                updates regarding the status of your application.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
