import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => (
  <div>
    <h3>404 - Sorry Page Not found</h3>
    <Link to="/">Return to Home Page </Link>
  </div>
);
