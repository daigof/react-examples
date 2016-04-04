import React, {PropTypes} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
class Layout extends React.Component {
  render () {
    // console.log('layout: ',this.props)
    return (
      <div>
        <Header location={this.props.location}/>
        <div class='container'>
          <div class='row'>
            <div class='col col-lg-12'>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

Layout.propTypes = { location: PropTypes.object.isRequired }

export default Layout
