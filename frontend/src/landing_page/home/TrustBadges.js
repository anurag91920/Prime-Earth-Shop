import React from 'react';
import './TrustBadges.css';
import { FaLock, FaBox, FaHeadset } from 'react-icons/fa'; // Font Awesome icons

function TrustBadges() {
  const badges = [
    {
      id: 1,
      icon: <FaLock />,
      title: 'SECURE PAYMENT',
      subtitle: 'All our payments our SSL secured',
    },
    {
      id: 2,
      icon: <FaBox />,
      title: 'DELIVERED WITH CARE',
      subtitle: 'Super fast shipping to your door',
    },
    {
      id: 3,
      icon: <FaHeadset />,
      title: 'EXCELLENT SERVICE',
      subtitle: 'Live chat and phone support',
    },
  ];

  return (
    <div className="trust-badges-container">
      {badges.map(({ id, icon, title, subtitle }) => (
        <div key={id} className="badge">
          <div className="icon-circle">{icon}</div>
          <div className="badge-text">
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrustBadges;
