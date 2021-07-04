import React from 'react';

const Footer = () => {
  return (
    <div>
      <section className='pt-5 pb-5 bg-dark text-white'>
        <footer className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 text-center text-md-start'>
                <p>Copyright © Juliette Curran</p>
              </div>
              <div className='footerIcons col-md-6 text-center text-md-end mb-4'>
                <a
                  href='https://twitter.com/juliette_codes'
                  target='_blank'
                  rel='noreferrer'
                  className='m-2'
                >
                  <i
                    className='fab fa-twitter fa-lg text-white'
                    aria-hidden='true'
                  ></i>
                </a>
                <a
                  href='https://github.com/juliettecurran'
                  target='_blank'
                  rel='noreferrer'
                  className='m-2'
                >
                  <i
                    className='fab fa-github fa-lg text-white'
                    aria-hidden='true'
                  ></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/juliette-dev/'
                  target='_blank'
                  rel='noreferrer'
                  className='m-2'
                >
                  <i
                    className='fab fa-linkedin-in fa-lg text-white'
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
