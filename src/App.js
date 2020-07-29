import React from 'react';
import Faker from 'faker'

import Title from './Title'
import Gradient from './Gradient'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  state = {
    leftColors: [],
    leftName: '',
    leftRotation: 0,
    rightColors: [],
    rightName: '',
    rightRotation: 0
  }

  componentDidMount(){
    this.generateNameAndRotation()
    this.generateColorList()
  }

  generateColorList = () => {
    const myArr = []
    while (myArr.length < 4){
      let color = '#' + Math.floor(Math.random()*16777215).toString(16)
      color.length === 7 && myArr.push(color)
    } 
    this.setState({
      leftColors: myArr.slice(0,2),
      rightColors: myArr.slice(2)
    })
  }

  generateNameAndRotation = () => {
    this.setState({
      leftName: `${Faker.company.bsAdjective()} ${Faker.company.catchPhraseNoun()}`, 
      leftRotation: Math.floor(Math.random() * 181),
      rightName: `${Faker.company.bsAdjective()} ${Faker.company.catchPhraseNoun()}`, 
      rightRotation: Math.floor(Math.random() * 181)
    }) 
  }

  render(){
    return (
      <div className="App">
          <Title />
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <Gradient name={this.state.leftName} colors={this.state.leftColors} rotation={this.state.leftRotation}/>
              </div>
              <div className='col-sm-6'>
                <Gradient name={this.state.rightName} colors={this.state.rightColors} rotation={this.state.rightRotation}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
