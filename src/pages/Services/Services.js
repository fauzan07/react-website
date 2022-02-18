import React from 'react';
import services from '../../assets/services-1.jpg';
import portrait2 from '../../assets/portrait-2.jpg';
import portrait3 from '../../assets/portrait-3.jpg';
import portrait4 from '../../assets/portrait-4.jpg';
import portrait5 from '../../assets/portrait-5.jpg';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";



function Services(props) {


  return(
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Morgan Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Services page application" />
    </Helmet>
  <section className="topbanner text-white bg-dark-overlay">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center topban">
        <h1>Services</h1>
        </div>
      </div>
    </div>
  </section>

  <section className="services-text py-5">
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-6 col-md-12">
          <img src={services} className="img-fluid" alt="project"/>
          </div>
          <div className="col-lg-6 col-md-12">
          <h2>Service Description</h2>
          <p>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up!
              A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
            <Link to="/" className="button web-btn">Learn More</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="services-gallery1 py-5">
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-4 col-md-6 pt-3">
          <img src={portrait2} className="img-fluid" alt="project"/>
          </div>
          <div className="col-lg-8 col-md-6 pt-3">
          <img src={portrait3} className="img-fluid" alt="project"/>
          <div className="text-right pt-5">
          <h5>Oil on Canvas of a Little Girl</h5>
          <p>This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section className="services-gallery2 py-5">
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-8 col-md-6">
          <img src={portrait4} className="img-fluid" alt="project"/>
          <div className="text-left pt-5">
          <h5>Watercolor Portrait</h5>
          <p>Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
          </div>
          </div>
          <div className="col-lg-4 col-md-6">
          <img src={portrait5} className="img-fluid" alt="project"/>
          </div>
        </div>
      </div>
    </section>
    </>
  
  );

}

export default Services;
