import React from 'react';

const Arrow = ({ color="white" }) => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.379883 4.5129L2.79047 2.22107C2.81806 2.19484 2.86115 2.19416 2.88955 2.21951L4.25396 3.43734C4.28278 3.46306 4.32664 3.46193 4.3541 3.43476L6.97061 0.845398"
          stroke={color} stroke-width="1.09687"/>
    <path d="M4.86572 0.845398H6.97095V2.95062" stroke={color} stroke-width="1.09687"/>
  </svg>

);

export default Arrow;