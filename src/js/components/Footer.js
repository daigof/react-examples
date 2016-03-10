var React = require('react');
var PropTypes = React.PropTypes;

var Footer = React.createClass({
  render: function() {
    const footerStyle = {
      position: 'fixed',
      bottom: 0,
      left: 0
    };
    return (
      <div class="navbar-fixed-bottom"
        // style={footerStyle}
        >
        <div class="container">
          <footer>Copyrights Diego Fortes &copy; 2016</footer>
        </div>
      </div>
    );
  }

});

module.exports = Footer;
