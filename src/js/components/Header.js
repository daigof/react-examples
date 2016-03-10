var React = require('react');
var PropTypes = React.PropTypes;
import {IndexLink, Link} from "react-router";

var Header = React.createClass({
  //to Allow programmatic navigation
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {collapsed: true, dropdownOpen: false};
  },

  toggleCollapse: function() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  },

  //example of programatic link
  goToSettings: function(e) {
    this.toggleCollapse();
    // console.log(e);
    e.preventDefault();
    // console.log(this.context);
    this.context.router.push({
      pathname: '/settings',
      query: {
        param1: 'sadsad',
        param2: 'thisIsALlMightyParam2'
      }
    });
  },

  toggleDropdownOpen: function(e) {
    // e.preventDefault();
    // console.log(e);
    const dropdownOpen = !this.state.dropdownOpen;
    this.setState({dropdownOpen});
  },

  render: function() {
    const {location} = this.props;
    const {collapsed, dropdownOpen} = this.state;
    const homeClass = location.pathname === "/"
      ? "active"
      : "";
    const reactClass = location.pathname.match(/^\/react-*/)
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
    const dropdownClass = dropdownOpen
      ? "open"
      : "";
    const queryParams = {
      name: "Diego",
      lastName: "Fortes"
    };

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
              <li class={"dropdown " + dropdownClass + " " + reactClass}>
                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded={dropdownOpen} onClick={this.toggleDropdownOpen}>
                  React Examples
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to={{
                      pathname: 'react-route-params/33',
                      query: queryParams
                    }} onClick={this.toggleDropdownOpen}>Route Params & Query</Link>
                  </li>
                  <li>
                    <Link to={{
                      pathname: 'react-input-page'
                    }} onClick={this.toggleDropdownOpen}>Input Page</Link>
                  </li>

                  {/*
                  <li role="separator" class="divider"></li>
                */}

                </ul>
              </li>
              <li class={settingsClass}>
                <a href="#" onClick={this.goToSettings}>Settings</a>
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
