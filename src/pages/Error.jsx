import React from 'react'

const Error = ()=> {
  return (
    <div className="errors d-flex flex-column">
      <p>
        Sorry, we can't find that page. You will find lots to explore on the
        home page.
      </p>
      <a className="btn backHome" href="/">
        Home
      </a>
    </div>
  );
}

export default Error