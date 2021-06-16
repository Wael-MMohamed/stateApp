import React from 'react';
import Profile from './components/Profile';
import './App.css';
import Bike from './components/M1100evoDiesel2012AmbGreen.png';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fullName : 'Wael Mohamed',
      bio : 'This is my bio',
      imgSrc : Bike,
      profession : 'Front-end Developer',
      shows : false,
      date: new Date()
    };
  }

  componentDidMount(){
    this.timerID = setInterval(() => {
      this.setState({date : new Date()});
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.state.date.timerID);
  }
  showProfile(e){
    e.preventDefault();
    this.setState({shows: !this.state.shows});
  }

  render(){
    return (
      <div className='container'>
        {this.state.shows?<Profile 
        fullName={this.state.fullName} 
        bio = {this.state.bio} 
        profession ={this.state.profession}
        imgSrc={this.state.imgSrc}/>:''}
        {this.state.shows?this.elem:''}
        <button onClick={this.showProfile.bind(this)}>Show Profile</button>
        <h3>The time is : {this.state.date.toLocaleTimeString()}</h3>
      </div>
      
    )
  }
}

export default App;