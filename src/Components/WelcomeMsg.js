import React from 'react';
import portraitImg from '../imgs/portraitPhoto.jpg';

const WelcomeMsg = () => {
  return (
    <section className='pt-5 pb-5 '>
      <div className='container-fluid pl-md-5 pr-md-5  '>
        <div className='row align-items-center h-100 d-flex justify-content-center'>
          <div className='col-12 col-md-7 text-center'>
            <blockquote className='card text-start py-3 px-4 mb-3 mt-4'>
              <div className='row align-items-start justify-content-between'>
                <div className='col-3 p-md-1'>
                  <img
                    src={portraitImg}
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
                  </div>
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
