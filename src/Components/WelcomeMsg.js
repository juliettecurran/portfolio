import React from 'react';
import portraitImg from '../imgs/portraitPhoto.jpg';

const WelcomeMsg = () => {
  return (
    <section class='pt-5 pb-5'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-12 col-md-8 text-center'>
            <div class='row justify-content-center pb-4'>
              <div class='col-4 col-sm-4 col-md-4'>
                <img
                  alt='image'
                  class='rounded-circle img-fluid'
                  src={portraitImg}
                ></img>
              </div>
            </div>
            <p className='lead'>
              I am a Greater Manchester-based junior full stack developer who
              has trained at both Northcoders and Manchester Metropolitan
              University.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export default WelcomeMsg;
