import React, {PropTypes} from 'react'

const Link = ({active, children, onClick}) => {
  if (active) {
    return <button className='btn btn-success btn-xs active disabled'>{children}</button>
  }

  return (
    <button href='#'
      className='btn btn-primary btn-xs'
      onClick={e => {
        e.preventDefault()
        onClick()
      }}>
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
