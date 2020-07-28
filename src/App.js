import React from 'react';
import Title from './Title'
import Gradient from './Gradient'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  generateColorList = () => {
    const myArr = []
    while (myArr.length < 2){
      let color = '#' + Math.floor(Math.random()*16777215).toString(16)
      console.log(color.length > 7 ? color : 'no problem')
      if (!myArr.find(x => x === color) && color.length === 7){
        myArr.push(color)
      }
    } 
    return myArr
  }

  render(){
    return (
      <div className="App">
          <Title />
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <Gradient colors={this.generateColorList()}/>
              </div>
              <div className='col-sm-6'>
                <Gradient colors={this.generateColorList()}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
