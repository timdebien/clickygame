import React from "react";

class Header extends React.Component{

    render(){
      return(
        <div className="header">
          <h1 className="title">
            <a href ="/" className="title">
            Social Media Clicky Game
            </a>
          </h1>
          <h1 className="info second">{this.props.status}</h1>
          <h1 className="score second">{this.props.score} | Top Score {this.props.topScore}</h1>
        </div>
      );
    }

}

export default Header;