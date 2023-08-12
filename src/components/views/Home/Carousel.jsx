import React from 'react'
import image1 from '../../../assets/img/1.jpg'
import image2 from '../../../assets/img/2.jpg'
import image3 from '../../../assets/img/3.jpg'

export default function Carousel() {
  return (
    <section>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Oferta destacada 1</h1>
              <h4>Descripción de la oferta 1.</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Oferta destacada 2</h1>
              <h4>Descripción de la oferta 2.</h4>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Oferta destacada 3</h1>
              <h4>Descripción de la oferta 3.</h4>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}
