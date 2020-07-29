import React from 'react';
import Faker from 'faker'

import Title from './Title'
import Gradient from './Gradient'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons'

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
    this.generateGradient()
  }

  generateGradient = () => {
    const myArr = []
    while (myArr.length < 4){
      let color = '#' + Math.floor(Math.random()*16777215).toString(16)
      color.length === 7 && myArr.push(color)
    } 
    this.setState({
      leftColors: myArr.slice(0,2),
      leftName: `${Faker.company.bsAdjective()}`, 
      leftRotation: Math.floor(Math.random() * 181),
      rightColors: myArr.slice(2),
      rightName: `${Faker.company.bsAdjective()}`, 
      rightRotation: Math.floor(Math.random() * 181)
    })
  }

  render(){
    return (
      <div className="App container">
          <Title />
          <FontAwesomeIcon onClick={() => this.generateGradient()}size='2x' icon={faRedoAlt} />
          <div className='container'>
            <div className='row'>
              <div className='col-lg'>
                <Gradient name={this.state.leftName} colors={this.state.leftColors} rotation={this.state.leftRotation}/>
              </div>
              <div className='col-lg'>
                <Gradient name={this.state.rightName} colors={this.state.rightColors} rotation={this.state.rightRotation}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
