import React, {PropTypes} from 'react';

class InputBinder extends React.Component {

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
    // console.log(e);
  }

  //You need to explicitly bind(this) when using ES6 class syntax :(
  render() {
    return (
      <div>      
        <input onChange={this.handleChange.bind(this)} value={this.props.title}/>
      </div>
    );
  }
}

export default InputBinder;
