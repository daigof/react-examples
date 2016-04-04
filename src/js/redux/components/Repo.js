import React, {PropTypes} from 'react'

const Repo = ({name}) => (
  <li>
    {name}
  </li>
)

Repo.propTypes = {
  name: PropTypes.string.isRequired
}

export default Repo
