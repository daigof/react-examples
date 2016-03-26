import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div className='row'>
    <div className='col col-md-4'>
      Show: {' '}
      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>
      {' '}
      <FilterLink filter='SHOW_ACTIVE'>
        Active
      </FilterLink>
      {' '}
      <FilterLink filter='SHOW_COMPLETED'>
        Completed
      </FilterLink>
    </div>
  </div>
)

export default Footer
