import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }
  handleClick() {
    const {id} = this.props;
    this.props.handleCompleteTodo(id);
  }

  render() {
    const {complete, text} = this.props;

    const icon = complete
      ? "\u2714"
      : "\u2716";

    return (
      <li>
        <span class={complete
          ? 'text-success'
        : 'text-primary'}>{text}</span>
        &nbsp;&nbsp;
        <span class={complete
          ? 'text-success'
        : 'text-danger'} style={{
          cursor: 'pointer'
        }} onClick={this.handleClick.bind(this)}>{icon}</span>
      </li>
    );
  }
}
