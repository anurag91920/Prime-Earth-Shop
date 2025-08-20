import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'JENNIFER LEWIS',
      image: '/media/images/customer1.png', // update image path
      text: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.'
    },
    {
      id: 2,
      name: 'ALICIA HEART',
      image: '/media/images/customer2.png', // update image path
      text: 'Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.'
    },
    {
      id: 3,
      name: 'JUAN CARLOS',
      image: '/media/images/customer3.png', // update image path
      text: 'Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.'
    }
  ];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">WHAT OUR CUSTOMERS SAY</h2>
      <div className="testimonials-grid">
        {testimonials.map(({ id, name, image, text }) => (
          <div className="testimonial-card" key={id}>
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">{text}</p>
            <div className="customer-info">
              <img src={image} alt={name} className="customer-img" />
              <p className="customer-name">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
