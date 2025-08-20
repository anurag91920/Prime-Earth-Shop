import React from 'react';

import Hero from './Hero';
import Explore from './Explore';
import Testimonials from './Testimonials';
import Purchase from './Purchase';
import TrustBadges from './TrustBadges';

function HomePage () {
    return (
        <>
          <Hero />
          <Explore />
          <Testimonials />
          <Purchase />
          <TrustBadges />
        </>
    );
}

export default HomePage;