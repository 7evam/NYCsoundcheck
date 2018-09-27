const React = require('react');
const PropTypes = require('prop-types');

// Contrived example to show how one might use Flow type annotations

function index({}) {
  return (
    <div>
      <p>{}</p>
      <p>
Welcome to
REACT VIEWS
      </p>
    </div>
  );
}

index.propTypes = {
  title: PropTypes.string,
};

module.exports = index;