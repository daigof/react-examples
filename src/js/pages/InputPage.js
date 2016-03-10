import React from 'react';
import InputBinder from '../components/InputBinder';

class InputPage extends React.Component {
  constructor() {
    super();
    this.state = {
      boundTitle: 'Edit Me'
    };
  }
  changeTitle(val) {
    this.setState({boundTitle: val});
  }
  render() {
    const {boundTitle} = this.state;
    return (
      <div>
        <h2>{this.state.boundTitle}</h2>
        <InputBinder changeTitle={this.changeTitle.bind(this)} title={boundTitle}></InputBinder>
      </div>
    );
  }
}

export default InputPage;
