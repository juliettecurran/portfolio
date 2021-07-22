import React from 'react';
import songAppFigma from '../../imgs/SongAppFigma.png';
import musicPlaceholder from '../../imgs/musicPlaceholder.png';
import './projects.css';
import GamervilleGIF from '../../imgs/GamervilleGIFCropped.gif.gif';
import GamervilleFigma from '../../imgs/GamervilleFigma.png';
import scratchPostPlan from '../../imgs/scratchPostPlan.jpg';
import scratchPostGIF from '../../imgs/scratchPostGIF.gif';
import screenSearch from '../../imgs/screenSearch.gif';
import screenSearchFigma from '../../imgs/screenSearchFigma.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  return (
    <section>
      <section class='pt-5 pb-5' id='projects'>
        <div class='container'>
          <div class='row align-items-center justify-content-between'>
            <div class='col-12 col-md-4   '>
              <h1>Upcoming: Song Quiz</h1>
              <p class='text-h3'>
                For my group's Final Project at Northcoders, we have decided to
                make a multiple-choice musical trivia app. This will be the
                team's first time learning and implementing{' '}
                <span className='Frontend'>React Native</span>,{' '}
                <span className='Backend'>AWS</span> and{' '}
                <span className='CSS'>SASS</span>.
              </p>
              <p>
                <a class='btn mt-3 mb-3 disabled' href='#'>
                  In Progress
                </a>
              </p>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img
                alt='Song Quiz Figma'
                class='img-fluid'
                src={songAppFigma}
              ></img>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img alt='image' class='img-fluid' src={musicPlaceholder}></img>
            </div>
          </div>
        </div>
      </section>
      <section class='pt-5 pb-5'>
        <div class='container'>
          <div class='row align-items-center justify-content-between'>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img alt='image' class='img-fluid' src={GamervilleFigma}></img>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img alt='image' class='img-fluid' src={GamervilleGIF}></img>
            </div>
            <div class='col-12 col-md-4   '>
              <h1>Gamerville</h1>
              <p class='text-h3'>
                My Gamerville API uses node-postgres to interact with a PSQL
                database of game reviews. I also utilised{' '}
                <span className='Frontend'>React</span> and{' '}
                <span className='CSS'>Material UI</span> for the Front-End. This
                was my first experience with Material UI - I love learning new
                CSS frameworks!
              </p>
              <p>
                <a
                  class='btn mt-3 mb-3'
                  href='https://github.com/juliettecurran/nc-games'
                >
                  <FontAwesomeIcon icon='code' />{' '}
                </a>{' '}
                <a class='btn btn-primary mt-3 mb-3' href='#' disabled>
                  To Be Hosted
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class='pt-5 pb-5'>
        <div class='container'>
          <div class='row align-items-center justify-content-between'>
            <div class='col-12 col-md-4   '>
              <h1>Scratch Post</h1>
              <p class='text-h3'>
                For my MSc Computing Final Project I created a lesson plan
                website intended for KS2 Scratch Programming educators. The
                website uses HTML, CSS, <span className='CSS'>Bootstrap 5</span>{' '}
                and a little jQuery. There are several improvements I would like
                to make using my now increased knowledge and abilities.{' '}
              </p>
              <p>
                <a
                  class='btn mt-3 mb-3'
                  href='https://github.com/juliettecurran/scratchPost'
                >
                  <FontAwesomeIcon icon='code' />{' '}
                </a>{' '}
                <a
                  class='btn btn-primary mt-3 mb-3'
                  href='https://juliettecurran.github.io/scratchPost/'
                >
                  Website
                </a>
              </p>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img
                alt='image'
                class='img-fluid'
                style={{ border: '1px solid Gainsboro' }}
                src={scratchPostPlan}
              ></img>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img alt='image' class='img-fluid' src={scratchPostGIF}></img>
            </div>
          </div>
        </div>
      </section>
      <section class='pt-5 pb-5'>
        <div class='container'>
          <div class='row align-items-center justify-content-between'>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img alt='image' class='img-fluid' src={screenSearchFigma}></img>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img alt='image' class='img-fluid' src={screenSearch}></img>
            </div>
            <div class='col-12 col-md-4'>
              <h1>Screen Search</h1>
              <p class='text-h3'>
                I'm a big TV fan so to test my API skills I created a search
                engine which utilises the TVMaze API and{' '}
                <span className='Frontend'>React</span>. It displays all
                relevant show data when a user inputs a search term. There were
                a few holes in the API which I managed with some conditiona
                logic and placeholder images.
              </p>
              <p>
                <a
                  class='btn mt-3 mb-3'
                  href='https://github.com/juliettecurran/fe-react-data-visualisation'
                >
                  <FontAwesomeIcon icon='code' />{' '}
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
