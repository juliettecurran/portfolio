import React from 'react';

const Header = () => {
  return (
    <section>
      <nav className='navbar navbar-expand-lg navbar-dark border border-dark bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href='index.html'>
            <h3 id='navbarName'>Juliette Curran</h3>
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
            <ul className='navbar-nav ms-auto me-sm-2 mt-2 mt-lg-0'>
              <li className='nav-item active me-3'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item me-3'></li>
              <li className='nav-item me-3'>
                <a className='nav-link' href='#projects'>
                  Projects
                </a>
              </li>
              <li className='nav-item me-3'>
                <a className='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='Banner mb-4 shadow-md  gay'></div>
    </section>
  );
};

export default Header;
