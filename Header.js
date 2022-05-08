import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
          <div id = "left-header-section"  >


                <div  >
                    <ul>
                        <li id = "logo" > EDYODA </li>
                        <li id = "stories" > Stories </li>
                    </ul> 
                </div>

                <div id = "dropdown" >
               <p> Explore Categories  <i className='fa fa-angle-down  dropdown'  >  </i></p> 
               
                    </div>


          </div>
          <div id = "right-header-section">


          <p className="BlogNavigationLinks__EdyodaText__11wl2">EdYoda is free learning and knowledge <br></br> sharing platform for techies</p>
               <div  >
                    <button id = "button" > Go to Main Website </button>
               </div>


              </div>
      </header>
    )
  }
}

export default Header
