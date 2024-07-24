import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const studentsData = {
  extracurricularActivities: [
    "Music",
    "Dance",
    "Drama",
    "Art",
    "Sports",
    "Robotics",
    "Debate Club",
    "Science Club"
  ],
  clubsAndSocieties: [
    "Literary Society",
    "Environmental Club",
    "Astronomy Club",
    "Coding Club"
  ],
  achievements: [
    "John Smith - National Level Math Olympiad Winner",
    "Sarah Lee - Gold Medalist in State Swimming Championship",
    "Tech Innovators Club - Winners of Inter-School Robotics Competition"
  ],
  studentCouncil: {
    president: "Amy Parker, Grade 12",
    vicePresident: "Rajiv Mehta, Grade 11",
    secretary: "Lisa Wong, Grade 10"
  }
};

const Students = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <Typography variant="h2" className="text-teal-700 text-center font-bold mb-12">
          Students
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="h-full" style={{ backgroundColor: '#e0f7fa' }}>
              <CardContent>
                <Typography variant="h4" className="text-teal-600 mb-4">
                  Life at Springdale
                </Typography>
                <Typography variant="h5" className="text-gray-800 mb-4">
                  Extracurricular Activities
                </Typography>
                <ul className="list-none list-inside text-lg text-gray-700">
                  {studentsData.extracurricularActivities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full" style={{ backgroundColor: '#fce4ec' }}>
              <CardContent>
                <Typography variant="h5" className="text-gray-800 mb-4">
                  Clubs and Societies
                </Typography>
                <ul className="list-none list-inside text-lg text-gray-700">
                  {studentsData.clubsAndSocieties.map((club, index) => (
                    <li key={index}>{club}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full" style={{ backgroundColor: '#f3e5f5' }}>
              <CardContent>
                <Typography variant="h5" className="text-gray-800 mb-4">
                  Achievements
                </Typography>
                <ul className="list-none list-inside text-lg text-gray-700">
                  {studentsData.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full" style={{ backgroundColor: '#ffecb3' }}>
              <CardContent>
                <Typography variant="h5" className="text-gray-800 mb-4">
                  Student Council
                </Typography>
                <Typography variant="body1" className="text-lg text-gray-700">
                  <strong>President:</strong> {studentsData.studentCouncil.president}
                </Typography>
                <Typography variant="body1" className="text-lg text-gray-700">
                  <strong>Vice President:</strong> {studentsData.studentCouncil.vicePresident}
                </Typography>
                <Typography variant="body1" className="text-lg text-gray-700">
                  <strong>Secretary:</strong> {studentsData.studentCouncil.secretary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Students;
