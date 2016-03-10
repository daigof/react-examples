import React from 'react';

class RouteParams extends React.Component {

  render() {
    console.log(this.props);
    const {params} = this.props;
    const {query} = this.props.location;
    let queryParams = "";
    Object.keys(query).forEach((key, index) => {
      queryParams += `
      Key: ${key}
      Value: ${query[key]}
      `;
    });
    return (
      <div>
        <h2>RouteParams</h2>
        <div class="well well-sm">
          Params: {params.exId}
        </div>
        <div class="well well-sm">
          Query: {queryParams}
        </div>
      </div>
    );
  }
}

export default RouteParams;
