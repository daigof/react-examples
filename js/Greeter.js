import React from 'react';

const Greeter = React.createClass({
  render() {
    return (
      <div>
        Hello
        {this.props.name}
      </div>
    );
  }
});

export default Greeter;
