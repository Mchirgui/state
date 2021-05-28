import React from 'react';
import './App.css';
import Component from './component';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Fullname: "Mohamed Mchirgui",
      Profession:"Fullstack Js Developer",
      Bio:"always laugh till your last teeth",

     
    
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  

  render() {
    
    
    
  return (
<div className="app">

        <Component></Component>
        {this.state.show && (
          <>
          
           <div className="image" style={{backgroundImage: 'url(' + this.state.imageSrc + ')', boxShadow :" 10px 15px 10px 12px grey"}}>
            
             </div>
         
          <h1 className="Fullname">
            {this.state.Fullname}
            </h1>
            <div className="Bio">{this.state.Bio}</div>
              <p>{this.state.profession}</p>
            <div className="quote">
            <blockquote>&ldquo; {this.state.content} &rdquo;</blockquote>
            </div>
            <br></br>
            <div className="source">&mdash;{this.state.source}</div>
            
          </>
        )}

        
        <button className="btn" onClick={this.handleShowPerson} style ={{ color : "grey"}}>Profile show/hide</button>
        <div className="counter">
          The last component was mounted since: {this.state.time} seconds
        </div>
      </div>
    );
        }}

export default App;
