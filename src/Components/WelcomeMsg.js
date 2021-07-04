import React from 'react';

const WelcomeMsg = () => {
  return (
    <section className='pt-5 pb-5 '>
      <div className='container-fluid pl-md-5 pr-md-5 pt-md-4 pb-md-4'>
        <div className='row align-items-center h-100 d-flex justify-content-center'>
          <div className='col-12 col-md-7 text-center'>
            <blockquote className='card text-start py-3 px-4 mb-3 mt-4'>
              <div className='row align-items-start justify-content-between'>
                <div className='col-3 p-md-1'>
                  <img
                    src='portfolio_site/src/imgs/portraitPhoto.jpg'
                    className='img-fluid py-0 portrait'
                    alt='portrait'
                  />
                </div>
                <div className='col-9'>
                  <div className='col-12 col-md-10'>
                    <p className='lead'>
                      I am a Greater Manchester-based junior full stack
                      developer who has trained at both Northcoders and
                      Manchester Metropolitan University.
                    </p>
                    <img
                      alt='Northcoders'
                      src='https://www.cantarus.com/portals/0/Images/north_coders.png?ver=2019-09-09-103714-800'
                      id='northcodersLogo'
                    />
                    <img
                      alt=''
                      src='https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Manchester_Metropolitan_University_logo.svg/1200px-Manchester_Metropolitan_University_logo.svg.png'
                      id='mmuLogo'
                    />
                  </div>
                  <div className='Banner mb-4 shadow-md rounded gay'></div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMsg;
