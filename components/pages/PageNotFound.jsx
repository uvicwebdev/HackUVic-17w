import React, { PropTypes } from 'react';

import Navbar from 'parts/Navbar';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  return (
    <div className="container fill-full-page">
      <Navbar />
      <div className="columns cols-md">
        <div className="column col-12 text-center">
          <p>
            Sorry! We couldn't find <code>{location.pathname}</code>.
          </p>
        </div>
      </div>
    </div>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
