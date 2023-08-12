import React, { Component } from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

export default class Layout extends Component {
  render() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
  }
}
