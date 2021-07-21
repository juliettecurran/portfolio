import React from 'react';
import songAppFigma from '../imgs/SongAppFigma.png';
import GamervilleFigma from '../imgs/GamervilleFigma.png';
import MarketplaceFigma from '../imgs/MarketplaceFigma.png';

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
                make a multiple-choice musical trivia app. This will the team's
                first time learning and implementing React Native, AWS and SASS.
              </p>
              <p>
                <a class='btn btn-primary mt-3 mb-3 disabled' href='#'>
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
              <img
                alt='image'
                class='img-fluid'
                src=' https://dummyimage.com/450x250/5fa9f8/fff'
              ></img>
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
              <img
                alt='image'
                class='img-fluid'
                src=' https://dummyimage.com/450x250/5fa9f8/fff'
              ></img>
            </div>
            <div class='col-12 col-md-4   '>
              <h1>Gamerville</h1>
              <p class='text-h3'>
                This self-made API uses node-postgres to interact with a PSQL
                database, complete with routed endpoints and a React and
                Material UI Front-End. This was my first experience with
                Material UI - I love learning new CSS frameworks!
              </p>
              <p>
                <a class='btn btn-primary mt-3 mb-3' href='#'>
                  Take a look
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
              <h1>NC-Marketplace</h1>
              <p class='text-h3'>
                A collection of coded HTML and CSS elements to help your build
                your new website. Clean design, fully responsive and based on
                Bootstrap 5.
              </p>
              <p>
                <a class='btn btn-primary mt-3 mb-3' href='#'>
                  Take a look
                </a>
              </p>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img alt='image' class='img-fluid' src={MarketplaceFigma}></img>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img
                alt='image'
                class='img-fluid'
                src=' https://dummyimage.com/450x250/5fa9f8/fff'
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section class='pt-5 pb-5'>
        <div class='container'>
          <div class='row align-items-center justify-content-between'>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img
                alt='image'
                class='img-fluid'
                src=' https://dummyimage.com/450x250/5fa9f8/fff'
              ></img>
            </div>
            <div class='col-12 col-md-4   mt-4 mt-md-0'>
              <img
                alt='image'
                class='img-fluid'
                src=' https://dummyimage.com/450x250/5fa9f8/fff'
              ></img>
            </div>
            <div class='col-12 col-md-4   '>
              <h1>Screen Search</h1>
              <p class='text-h3'>
                I'm a big TV fan so to test my API skills I created a search
                engine which utilises the TVMaze API. It displays all relevant
                show data and uses React.
              </p>
              <p>
                <a class='btn btn-primary mt-3 mb-3' href='#'>
                  Take a look
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
