import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Beds from './components/Beds';
import Social from './components/Social';

import Particles from 'react-particles-js';

import './App.css';

const particleOpt = {
              particles: {
                number: {
                  value: 70,
                  density: {
                    enable: true,
                    value_area: 800
                    
                  }
                }
              }
            

}

class App extends Component {

  state = {
    beds: [
      {
        id: 1,
        name: 'Bed 1',
        url: 'https://customcomfortmattress.com/wp-content/uploads/2018/05/CCM_Product_Refresh1.1_r1v1-300x300.jpg'
      },
      {
        id: 2,
        name: 'Bed 2',
        url: 'http://mattress4lessoutlet.com/wp-content/uploads/2018/06/sertplush2-300x300.jpg'
      },
      {
        id: 3,
        name: 'Bed 3',
        url: 'https://thefurnitureshackstore.com/wp-content/uploads/2018/03/fitzgerald-ii-select-mattress-300x300.jpg'
      },
      {
        id: 4,
        name: 'Bed 4',
        url: 'https://customcomfortmattress.com/wp-content/uploads/2018/05/CCM_Product_Refresh1.1_r1v1-300x300.jpg'
      },
      {
        id: 5,
        name: 'Bed 5',
        url: 'http://mattress4lessoutlet.com/wp-content/uploads/2018/06/sertplush2-300x300.jpg'
      },
      {
        id: 6,
        name: 'Bed 6',
        url: 'https://thefurnitureshackstore.com/wp-content/uploads/2018/03/fitzgerald-ii-select-mattress-300x300.jpg'
      },
      {
        id: 7,
        name: 'Bed 7',
        url: 'https://customcomfortmattress.com/wp-content/uploads/2018/05/CCM_Product_Refresh1.1_r1v1-300x300.jpg'
      },
      {
        id: 8,
        name: 'Bed 8',
        url: 'http://mattress4lessoutlet.com/wp-content/uploads/2018/06/sertplush2-300x300.jpg'
      },
      {
        id: 9,
        name: 'Bed 9',
        url: 'https://thefurnitureshackstore.com/wp-content/uploads/2018/03/fitzgerald-ii-select-mattress-300x300.jpg'
      },
      
    ]
  }

  render() {
    return (
      <div>
        
      
        
        <Header />

        <div className="partBack">
              <Particles 
              params={particleOpt}
              />
         </div> 

          <a href="http://www.retailservicesystems.com/" target="_blank">
          <img src="https://yt3.ggpht.com/a-/AN66SAyR474FmvRgnWbZGoZFsh9yIIKczwQ9YxBSUQ=s900-mo-c-c0xffffffff-rj-k-no" className="logo"/>
          </a>
           
          

        <div className = "aboutUs">
            <About />
        </div>

        
      <div className="cards">
        <Beds beds={this.state.beds}/>
      </div>
        
      <Social />
            
            

      </div>
    );
  }
}

export default App;
