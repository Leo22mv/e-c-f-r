import React from 'react'
import logo from './../../../../assets/img/logo.png'
import './Recommended.css'

export default function Recommended() {
  return (
    <><h2 className="h2 d-flex justify-content-center text-3xl font-bold">Productos recomendados</h2><div className="row row-cols-2 row-cols-sm-4 row-cols-xl-6 d-flex flex-wrap justify-content-start">
          <div className="col">
              <div className="card h-100">
                  <img src={ logo } className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="text-xl h5 card-title">Producto recomendado 1</h5>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100">
                  <img src={ logo } className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="text-xl h5 card-title">Producto recomendado 2</h5>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100">
                  <img src={ logo } className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="text-xl h5 card-title">Producto recomendado 3</h5>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100">
                  <img src={ logo } className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="text-xl h5 card-title">Producto recomendado 4</h5>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100">
                  <img src={ logo } className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="text-xl h5 card-title">Producto recomendado 5</h5>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100">
                  <img src={ logo } className="card-img-top" alt="..." />
                  <div className="card-body">
                      <h5 className="text-xl h5 card-title">Producto recomendado 6</h5>
                  </div>
              </div>
          </div>
      </div></>
  )
}
