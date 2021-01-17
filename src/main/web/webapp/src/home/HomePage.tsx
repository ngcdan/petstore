import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Link to="about" className="btn btn-primary btn-lg">
          About
    </Link>
      </Jumbotron>
    </div>
  );
};

export default HomePage;