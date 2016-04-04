import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import GithubList from '../components/GithubList'

const mapStateToProps = (state, ownProps) => {
  return {
    // active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onClick: () => {
    //   dispatch(setVisibilityFilter(ownProps.filter))
    // }
  }
}

const GithubListContainer = connect(mapStateToProps, mapDispatchToProps)(GithubList)

export default GithubListContainer
