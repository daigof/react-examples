import React, {PropTypes} from 'react'
import Repo from './Repo'

const GithubList = ({repoList, onFetchClick}) => {
  let input
  return (
    <div>
      <div className='input-group'>
        <input type='text' className='form-control' ref={node => {
          input = node
        }} value='daigof'/>
        <span className='input-group-btn'>
          <button className='btn btn-success' type='button' onClick={onFetchClick(input.value)}>Fetch</button>
        </span>
      </div>
      <ul>
        {repoList.map(repo => <Repo key={repo.id} {...repo}/>)}
      </ul>
    </div>
  )
}

GithubList.propTypes = {
  repoList: PropTypes
    .arrayOf(PropTypes.shape({name: PropTypes.string.isRequired}).isRequired)
    .isRequired,
  onFetchClick: PropTypes.func.isRequired
}

export default GithubList
