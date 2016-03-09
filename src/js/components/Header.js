var React = require('react');
var PropTypes = React.PropTypes;
import {IndexLink, Link} from "react-router";

var Header = React.createClass({
  getInitialState: function() {
    return {collapsed: true};
  },

  toggleCollapse: function() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  },

  render: function() {
    const {location} = this.props;
    const {collapsed} = this.state;
    const homeClass = location.pathname === "/"
      ? "active"
      : "";
    const aboutClass = location.pathname.match(/^\/about/)
      ? "active"
      : "";
    const settingsClass = location.pathname.match(/^\/settings/)
      ? "active"
      : "";
    const fluxClass = location.pathname.match(/^\/flux/)
      ? "active"
      : "";
    const navClass = collapsed
      ? "collapse"
      : "";

    return (
      <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <div class="navbar-brand">SPA React</div>
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main" onClick={this.toggleCollapse}>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="navbar-main">
            <ul class="nav navbar-nav">
              <li class={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse}>Home</IndexLink>
              </li>
              <li class={aboutClass}>
                <Link to="about" onClick={this.toggleCollapse}>About</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse}>Settings</Link>
              </li>
              <li class={fluxClass}>
                <Link to="flux" onClick={this.toggleCollapse}>Flux Example</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
