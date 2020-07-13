import React from 'react';
import {Link} from "react-router-dom";
import brand from '../../assets/brand-inverse.png';
import home from '../../assets/home.jpg';
import project1 from '../../assets/project-1.jpg';
import project2 from '../../assets/project-2.jpg';
import project3 from '../../assets/project-3.jpg';
import project4 from '../../assets/project-4.jpg';
import project5 from '../../assets/project-5.jpg';
import project6 from '../../assets/project-6.jpg';

function Home(props) {


  return(
    <>
  <section className="banner bg-dark-overlay">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center brand-img px-4">
        <img src={brand} className="img-fluid" alt="project"/>
        </div>
      </div>
    </div>
  </section>

<section className="about py-5">
<div className="container">
  <div className="row">
    <div className="col-lg-6  col-md-12">
    <h2>A Few Words About Me</h2>
    <p className="text-secondary pt-5">My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you. </p>
    <Link to="/About" className="button web-btn">Learn More</Link>
    </div>
    <div className="col-lg-5  offset-lg-1 col-md-12">
    <img src={home} className="img-fluid" alt="project"/>
    </div>
  </div>
</div>
</section>

<section className="painting bg-light py-5">
<div className="container">
  <div className="row">
  <div className="col-lg-12 col-md-12">
  <h2 className="text-center">My Paintings</h2>
  </div>
  </div>
  <div className="row">
    <div className="col-lg-12  col-md-12 pt-5">
    <div className="card-deck">
      <div className="card shadow">
        <img src={project1} className="card-img-top img-fluid" alt="project"/>
        <div className="card-body">
          <h5 className="card-title">Sea Storm</h5>
          <p className="card-text">This painting is one of my latest works on sea and ocean topics.</p>
        </div>
      </div>
      <div className="card shadow">
        <img src={project4} className="card-img-top img-fluid" alt="project"/>
        <div className="card-body">
          <h5 className="card-title">Ruins of Ancient Fortress</h5>
          <p className="card-text">When I’ve been to Scotland, I made this painting just in a day.</p>
        </div>
      </div>
      <div className="card shadow">
        <img src={project3} className="card-img-top img-fluid" alt="project"/>
        <div className="card-body">
          <h5 className="card-title">Two Lovers</h5>
          <p className="card-text">This work was finished in two days for my customers from San Diego, CA, who needed something special.</p>
        </div>
      </div>
    </div>
    </div>

    <div className="col-lg-12  col-md-12  pt-5">
    <div className="card-deck">
      <div className="card shadow">
        <img src={project2} className="card-img-top img-fluid" alt="project"/>
        <div className="card-body">
          <h5 className="card-title">Watercolor Portrait</h5>
          <p className="card-text">Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
        </div>
      </div>
      <div className="card shadow">
        <img src={project5} className="card-img-top img-fluid" alt="project"/>
        <div className="card-body">
          <h5 className="card-title">Birches in Autumn</h5>
          <p className="card-text">I love painting autumn trees and this work is a perfect example.</p>
        </div>
      </div>
      <div className="card shadow">
        <img src={project6} className="card-img-top img-fluid" alt="project"/>
        <div className="card-body">
          <h5 className="card-title">Green Landscape</h5>
          <p className="card-text">Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</section>

<section className="services py-5">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-10">
    <h2 className="text-center">Services</h2>
    <p className="text-center">If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.</p>
    </div>
  </div>

<div className="row justify-content-center pt-5">
    <div className="col-lg-3 col-md-6 pt-2">
      <div className="blurd-boxed text-center">
      <i className="fa fa-user icon" aria-hidden="true"></i>
      <h4>Portrait</h4>          
      </div>
    </div>
    <div className="col-lg-3 col-md-6 pt-2">
      <div className="blurd-boxed text-center">
      <i className="fa fa-pagelines icon" aria-hidden="true"></i>
        <h4>Landscape</h4>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 pt-2">
      <div className="blurd-boxed text-center">
      <i className="fa fa-apple icon" aria-hidden="true"></i>
        <h4>Still Life</h4>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 pt-2">
      <div className="blurd-boxed text-center">
      <i className="fa fa-home icon" aria-hidden="true"></i>
        <h4>Urban</h4>
      </div>
    </div>
    <div className="pt-5">
    <Link to="/services" className="button web-btn">View All services</Link>
    </div>
  </div>
    
    

</div>
</section>
</>
  );

}

export default Home;
