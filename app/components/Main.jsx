var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <h2>Main component</h2>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;
