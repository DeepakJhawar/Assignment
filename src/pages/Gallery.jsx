import React, { useState } from 'react';

const photos = [
  { src: 'https://cdn-attachments.timesofmalta.com/23a59f73ed21bd55a149b493808a93f39858bd24-1531199032-5b443e38-620x348.jpg', caption: 'Students participating in various sports events.', type: 'Sports', date: '2023-03-15' },
  { src: 'https://th.bing.com/th/id/OIP.KtqNn-O_e-9JIys0SpTeSQHaE7?rs=1&pid=ImgDetMain', caption: 'Students presenting their science projects.', type: 'Exhibition', date: '2023-04-10' },
  { src: 'https://th.bing.com/th/id/OIP.x5AqdgW-b8OOLIsCONxYfAHaEH?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', caption: 'Students performing in the cultural fest.', type: 'Cultural', date: '2023-05-20' },
  { src: 'https://th.bing.com/th/id/OIP.QYJfLh-_JYRzTzCdjh2fEgHaGY?rs=1&pid=ImgDetMain', caption: 'A glimpse of our interactive classrooms.', type: 'Infrastructure', date: '2023-06-05' },
  { src: 'https://th.bing.com/th/id/OIP.clTVOtxBZlN7WRokI1TwUwHaFe?rs=1&pid=ImgDetMain', caption: 'Students reading and studying in the school library.', type: 'Infrastructure', date: '2023-06-15' },
];

const videos = [
  { src: 'https://www.w3schools.com/html/mov_bbb.mp4', caption: 'Virtual tour of Springdale Public School.', type: 'Tour', date: '2023-02-01' },
  { src: 'https://www.w3schools.com/html/movie.mp4', caption: 'Highlights from the Annual Function 2023.', type: 'Function', date: '2023-12-10' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPhotos = photos.filter(photo => !filter || photo.type === filter);
  const filteredVideos = videos.filter(video => !filter || video.type === filter);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-teal-700 mb-12">Gallery</h2>
        
        <div className="mb-8 flex justify-center">
          <select onChange={handleFilterChange} className="p-2 border border-gray-300 rounded">
            <option value="">All</option>
            <option value="Sports">Sports</option>
            <option value="Exhibition">Exhibition</option>
            <option value="Cultural">Cultural</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Tour">Tour</option>
            <option value="Function">Function</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={photo.src} alt={photo.caption} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-lg text-gray-700">{photo.caption}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-teal-600 mt-12 mb-8">Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <video controls className="w-full h-64 object-cover rounded-lg mb-4">
                <source src={video.src} type="video/mp4" />
              </video>
              <p className="text-lg text-gray-700">{video.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
