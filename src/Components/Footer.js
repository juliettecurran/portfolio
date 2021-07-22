import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div>
      <section className='pt-5 pb-5 bg-dark text-white' id='contact'>
        <footer className='footer'>
          <div class='container'>
            <div class='row'>
              <div class='col-md-6 text-center text-md-start'>
                <p>Copyright © Juliette Curran</p>
              </div>
              <div class='col-md-6 text-center text-md-end mb-4'>
                <a
                  href='https://twitter.com/juliette_codes'
                  target='_blank'
                  class='m-2'
                >
                  <i
                    class='fab fa-twitter fa-lg text-white'
                    aria-hidden='true'
                  ></i>
                </a>
                <a
                  href='https://github.com/juliettecurran'
                  target='_blank'
                  class='m-2'
                >
                  <i
                    class='fab fa-github fa-lg text-white'
                    aria-hidden='true'
                  ></i>
                </a>
                <h3>
                  <faGithub />
                </h3>
                <a>
                  <i
                    class='fab fa-linkedin-in fa-lg text-white'
                    aria-hidden='true'
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
