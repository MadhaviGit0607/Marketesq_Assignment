import React from 'react';
const Services = () => {
  const services = [
    {
      icon: '📶',
      title: 'High Speed Internet',
      description: 'Optical fiber connection provided...',
    },
    {
      icon: '🍲',
      title: 'Healthy Meals',
      description: 'A healthy breakfast and pleasant dinner will be served..',
    },
    {
      icon: '🏠',
      title: 'Homely Stay',
      description: 'Designed for staying professionals...',
    },
    {
      icon: '🚗',
      title: 'Transportation',
      description: 'Optical fiber connection provided...',
    },
    {
      icon: '🍕',
      title: 'Food Delivery',
      description: 'Optical fiber connection provided...',
    },
    {
      icon: '🏞️',
      title: 'Tourism',
      description: 'Optical fiber connection provided...',
    },
    {
      icon: '💼',
      title: 'Job',
      description: 'Optical fiber connection provided...',
    },
    {
      icon: '🚲',
      title: 'Rental Service',
      description: 'Optical fiber connection provided...',
    },
    {
      icon: '🛍️',
      title: 'Online Shop',
      description: 'Optical fiber connection provided...',
    },
  ];

  return (
    <div className="services-section">
      <h2>Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
