import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className='d-flex w-50%'>
            <div className='w-50'>
                <Navigation></Navigation>
            </div>
            <div className='w-50'>
                <Content></Content>
            </div>

            
            
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
