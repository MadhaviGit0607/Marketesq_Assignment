import React from 'react';

const Discover = () => {
  const profiles = [
    {
      name: 'Arjun Raghav',
      rating: '⭐⭐⭐⭐⭐',
      description: 'I am writing this after spending  on my one-month stay at this place in Ladakh...Right from booking to guidng me to the most loving places and providing food and everything was too good.I am extremely happy for this stay..',
      imageUrl: '/path/to/avatar1.jpg',
    },
    {
      name: 'Anand Solanki',
      rating: '⭐⭐⭐⭐⭐',
      description: 'I am writing this about my one-month stay at this place in Ladakh...service was very good.They took care of me very lovingly.I loved their hospitality...',
      imageUrl: '/path/to/avatar2.jpg',
    },
    {
      name: 'Raghavendra',
      rating: '⭐⭐⭐',
      description: 'I am writing this for my one-week stay at this place in Ladakh...i felt like short and sweet experience.',
      imageUrl: '/path/to/avatar1.jpg',
    },
    {
      name: 'Mahendra',
      rating: '⭐⭐⭐⭐',
      description: 'I am writing this on my 3 days stay in Ladakh...they had given me guide who is very patient about explaining about all the things..i am happy ..',
      imageUrl: '/path/to/avatar2.jpg',
    }, {
      name: 'Arjun Mandela',
      rating: '⭐⭐⭐',
      description: 'I am writing this on my 2 days stay in Ladakh...i am satisfied with this service..',
      imageUrl: '/path/to/avatar1.jpg',
    },
    {
      name: 'Suresh',
      rating: '⭐⭐⭐⭐⭐',
      description: 'I am writing this on my one-week stay at this place in Ladakh...',
      imageUrl: '/path/to/avatar2.jpg',
    },
  ];

  return (
    <div className="discover-section">
      <h2>Discover</h2>
      <div className="profile-cards">
        {profiles.map((profile, index) => (
          <div className="profile-card" key={index}>
            <img src={profile.imageUrl} alt={profile.name} className="profile-image" />
            <h3>{profile.name}</h3>
            <p>{profile.rating}</p>
            <p>{profile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
