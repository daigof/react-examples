import React, {PropTypes} from 'react';

class InputBinder extends React.Component {

  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
    // console.log(e);
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <input onChange={this.handleChange.bind(this)} value={this.props.title} />
      </div>
    );
  }
}

export default InputBinder;
