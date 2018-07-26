import React, { Component } from 'react';
import Header from './components/header';
import pattern from './assets/img/network.jpg'
import media from './assets/img/behance.png';
import media1 from './assets/img/dribbble.png'
import media2 from './assets/img/facebook.png'
import media3 from './assets/img/instagram.png'
import media4 from './assets/img/flickr.png'
import media5 from './assets/img/pinterest.png'
import media6 from './assets/img/skype.png'
import media7 from './assets/img/twitter.png'
import media8 from './assets/img/vimeo.png'
import media9 from './assets/img/vine.png'
import media10 from './assets/img/whatsapp.png'
import media11 from './assets/img/youtube.png'
import reactIcon from './logo.svg'
import ghIcon from './assets/img/github-logo.png'

import './App.css';


var imgArray = [
  {
    id: 0,
    url: media,
    beenClicked: false
  },
  {
    id: 2,
    url: media1,
    beenClicked: false
  },
  {
    id: 3,
    url: media2,
    beenClicked: false
  },
  {
    id: 4,
    url: media3,
    beenClicked: false
  },
  {
    id: 5,
    url: media4,
    beenClicked: false
  },
  {
    id: 1,
    url: media5,
    beenClicked: false
  },
  {
    id: 6,
    url: media6,
    beenClicked: false
  },
  {
    id: 7,
    url: media7,
    beenClicked: false
  },
  {
    id: 8,
    url: media8,
    beenClicked: false
  },
  {
    id: 9,
    url: media9,
    beenClicked: false
  },
  {
    id: 10,
    url: media10,
    beenClicked: false
  },
  {
    id: 11,
    url: media11,
    beenClicked: false
  },

]

class App extends Component {
  constructor() {
    super()
    this.state = {
      status: 'Click an image to begin!',
      score: 0,
      topScore: 0,
      imgArray: imgArray
    }
  }

  imgClick = (id) => {
    console.log(id);

    var that = this;

    for(var i=0; i < imgArray.length; i++) {
      if(id === imgArray[i].id) {
        if(imgArray[i].beenClicked === false) {
          imgArray[i].beenClicked = true;
          this.setState({
            status: this.state.score >= 11 ? 'You Win!' : 'You guessed correctly',
            score: this.state.score+1,
            topScore: this.state.topScore+1
          });
          document.querySelector('.info').classList.add('correct');
          setTimeout(function() {
            document.querySelector('.info').classList.remove('correct');
          }, 300);
        } 
        else {
          this.setState({
            status: 'You Lost!',
            score: 0
          });
          document.querySelector('.imgsDiv').classList.add('animated');
          document.querySelector('.imgsDiv').classList.add('wobble');
          document.querySelector('.info').classList.add('incorrect');
          setTimeout(function() {
            document.querySelector('.info').classList.remove('incorrect');
          }, 300);
          for(var i=0; i < imgArray.length; i++) {
            imgArray[i].beenClicked = false
          }
          setTimeout(function() {
            that.setState({
              status: 'Click an image to begin!'
            });
            document.querySelector('.imgsDiv').classList.remove('animated');
            document.querySelector('.imgsDiv').classList.remove('wobble');
          }, 1000);
        }
      }
    }

   
    // reorder imgArray
    imgArray.sort(() => Math.random()-0.5);
  }

  render() {
    const displayImgs = this.state.imgArray.map((eachItem, key) =>
      <img className="img" id={"img" + eachItem.id} key={key} onClick={() => this.imgClick(eachItem.id)} src={eachItem.url} alt={key} />
    );

    return (
      <div className="App">

        <Header
          status={this.state.status}
          score={this.state.score}
          topScore={this.state.topScore}
        />

        {/* body */}
        <div className="body">
          <img className="pattern" src={pattern} alt="geometric pattern" />
          <h1 className="name">How to Play</h1>
          <h2 className="directions">Click on an image to earn points, but don't click on any image more than once!</h2>
          <div className="imgsDiv">
            {displayImgs}
          </div>
        </div>
        {/* footer */}
        <div className="footer">
          <div className="bottom">
            <a href="" target="_blank">
              <img className="githubIcon" src={ghIcon} />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img className="reactIcon" src={reactIcon} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       status: 'Click a social media icon to begin',
//       score: 0,
//       top: 0,
//       imgArray: imgArray
//     }
//   }
//   imgClick = (id) => {
//     console.log(id);

//     var that = this;

//     for (var i = 0; i < imgArray.length; i++) {
//       if (id === imgArray[i].id) {
//         if (imgArray[i].beenClicked === false) {
//           imgArray[i].beenClicked = true;
//           this.setState({
//             status: this.state.score >= 11 ? 'You Win!' : 'You guessed correctly',
//             score: this.state.score+1,
//             topScore: this.state.topScore+1
//           });
//           document.querySelector('.info').classList.add('correct');
//           setTimeout(function () {
//             document.querySelector('.info').classList.remove('correct');
//           }, 300);
//         } else {
//           this.setState({
//             status: 'You Lost!',
//             score: 0
//           });
//           document.querySelector('.imgsDiv').classList.add('animated');
//           document.querySelector('.imgsDiv').classList.add('wobble');
//           document.querySelector('.info').classList.add('incorrect');
//           setTimeout(function () {
//             document.querySelector('.info').classList.remove('incorrect');
//           }, 300);
//           for (var i = 0; i < imgArray.length; i++) {
//             imgArray[i].beenClicked = false
//           }
//           setTimeout(function () {
//             that.setState({
//               status: 'Click an image to begin!'
//             });
//             document.querySelector('.imgsDiv').classList.remove('animated');
//             document.querySelector('.imgsDiv').classList.remove('wobble');
//           }, 1000);
//         }
//       }
//     }


//     // reorder imgArray
//     imgArray.sort(() => Math.random() - 0.5);
//   }

//   render() {
//     const displayImgs = this.state.imgArray.map((eachItem, key) =>
//       <img className="img" id={"img" + eachItem.id} key={key} onClick={() => this.imgClick(eachItem.id)} src={eachItem.url} alt={key} />
//     );

//     return (
//       <div className="App">
//         <Header
//           status={this.state.status}
//           score={this.state.score}
//           topScore={this.state.topScore}
//         />

          
//           <div className="body">
//             <img className="pattern" src={pattern} alt="geometric pattern" />
//             <h1 className="name">How to Play</h1>
//             <h2 className="directions">Click on an image to earn points, but don't click on any image more than once!</h2>
//             <div className="imgsDiv">
//               {displayImgs}
//             </div>
//           </div>

//             {/* footer */}
//           <div className="footer">
//             <div className="bottom">
//               <a href="#" target="_blank">
//                 <img className="githubIcon" src={ghIcon} />
//               </a>
//               <a href="https://reactjs.org" target="_blank">
//                 <img className="reactIcon" src={reactIcon} />
//               </a>
//             </div>
//           </div>
        
//       </div>
//     );


//   }

// }

// export default App;
