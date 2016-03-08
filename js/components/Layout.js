import React from 'react';
import InputBinder from './InputBinder';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Initial Title'
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <InputBinder changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
      </div>
    );
  }
}

export default Layout;
