import React from 'react';

const singleProject = () => {
  return (
    <div>
      <section class='pt-5 pb-5'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 text-center'>
              <div id='carousel-726829999' class='carousel slide mb-1'>
                <div class='carousel-inner'>
                  <div class='item carousel-item active' style='left: 0px'>
                    <img
                      class='img-fluid'
                      src=' https://dummyimage.com/650x500/5fa9f8/fff'
                      alt='thumb'
                    />
                    <div class='carousel-caption'>
                      Carousel caption. Here goes slide description. Lorem ipsum
                      dolor set amet.
                    </div>
                  </div>
                  <div class='item carousel-item' style='left: 0px'>
                    <img
                      class='img-fluid'
                      src=' https://dummyimage.com/650x500/5fa9f8/fff'
                      alt='thumb'
                    />
                    <div class='carousel-caption'>
                      Carousel caption 2. Here goes slide description. Lorem
                      ipsum dolor set amet.
                    </div>
                  </div>
                  <div class='item carousel-item' style='left: 0px'>
                    <img
                      class='img-fluid'
                      src=' https://dummyimage.com/650x500/5fa9f8/fff'
                      alt='thumb'
                    />
                    <div class='carousel-caption'>
                      Carousel caption 3. Here goes slide description. Lorem
                      ipsum dolor set amet.
                    </div>
                  </div>
                </div>
              </div>
              <uk class='product-thumbnails list-unstyled d-flex'>
                <li
                  data-target='#carousel-726829999'
                  data-slide-to='0'
                  class=''
                >
                  <img
                    class='mt-2 me-2 img-fluid'
                    src=' https://dummyimage.com/90/5fa9f8/fff'
                  />
                </li>
                <li
                  data-target='#carousel-726829999'
                  data-slide-to='1'
                  class='active'
                >
                  <img
                    class='mt-2 me-2 img-fluid'
                    src=' https://dummyimage.com/90/5fa9f8/fff'
                  />
                </li>
                <li
                  data-target='#carousel-726829999'
                  data-slide-to='2'
                  class=''
                >
                  <img
                    class='mt-2 me-2 img-fluid'
                    src=' https://dummyimage.com/90/5fa9f8/fff'
                  />
                </li>
              </uk>
            </div>
            <div class='col-md-6 mt-5 mt-md-2 text-center text-md-left'>
              <h2 class='mb-3 mt-0 text-start'>Project Name</h2>
              <p class='lead mt-2 mb-3 primary-color text-start'>Date</p>
              <h5 class='mt-4 text-start'>What is it?</h5>
              <p class='text-start'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                venenatis velit vestibulum massa sollicitudin auctor. Cras ac
                venenatis orci. Ut consequat, purus ut ultrices ultricies, nisi
                sem ornare quam, sed ultricies mi nisl sit amet purus.
              </p>
              <p class='text-start'>
                Suspendisse potenti. Nunc in libero luctus, sagittis leo sit
                amet, volutpat lacus. Quisque a porta risus. Integer aliquet
                nibh vitae vestibulum accumsan
              </p>
              <h5 class='mt-5 text-start'>Technologies</h5>
              <p class='text-start'>
                Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem
                malesuada magna mollis euismod.
              </p>
              <div class='row mt-4' style='text-align: right'>
                <div class='col-12'>
                  <span class='vote'>
                    <svg
                      height='5em'
                      fill='currentColor'
                      viewBox='0 0 100 100'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M 10,30
                             A 20,20 0,0,1 50,30
                             A 20,20 0,0,1 90,30
                             Q 90,60 50,90
                             Q 10,60 10,30 z'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default singleProject;
