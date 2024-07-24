import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const facultyProfiles = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualification: 'M.Ed',
    experience: '20 years of experience in educational administration',
    image: 'images/male.jpeg',
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    qualification: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
    image: 'images/male.jpeg',
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    qualification: 'M.A. in English',
    experience: '10 years of teaching experience',
    image: 'images/female.jpeg',
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
    image: 'images/male.jpeg',
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    qualification: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
    image: 'images/female.jpeg',
  },
  {
    name: 'David Wilson',
    position: 'Computer Science Teacher',
    qualification: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
    image: 'images/male.jpeg',
  },
];

const Faculty = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-12">
          Faculty Profiles
        </h2>
        <Grid container spacing={4}>
          {facultyProfiles.map((profile, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={profile.image}
                  alt={profile.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {profile.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {profile.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.qualification}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profile.experience}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Faculty;
