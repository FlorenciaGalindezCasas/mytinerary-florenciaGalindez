import React from 'react'

function Link({to, title}) {
  return (
    <a className='header-link' href={to}>{title}</a>
  )
}

export default Link