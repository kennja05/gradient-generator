import React from 'react';
import Faker from 'faker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import Gradient from './Gradient'
import SelectedGradient from './SelectedGradient'




class App extends React.Component {

  state = {
    leftColors: [],
    leftName: '',
    leftRotation: 0,
    rightColors: [],
    rightName: '',
    rightRotation: 0
  }

  componentDidMount() {
    this.generateGradient()
  }

  generateGradient = () => {
    const myArr = []
    while (myArr.length < 4) {
      let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
      color.length === 7 && myArr.push(color)
    }
    this.setState({
      leftColors: myArr.slice(0, 2),
      leftName: `${Faker.company.bsAdjective()} ${Faker.hacker.adjective()}`,
      leftRotation: Math.floor(Math.random() * 181),
      rightColors: myArr.slice(2),
      rightName: `${Faker.company.bsAdjective()} ${Faker.hacker.adjective()}`,
      rightRotation: Math.floor(Math.random() * 181)
    })
  }

  render() {
    const { leftName, leftColors, leftRotation, rightName, rightColors, rightRotation } = this.state
    const StyledDiv = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(#ffecd2, rgba(255, 255,255,1));
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const StyledTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    `
    const StyledSpan = styled.span`
    &:hover{cursor: pointer}
    `
    return (
      <StyledDiv>
        <div className="container-fluid">
          <StyledTitle>
            <span className='display-1'>Linear Gradient Generator</span>
          </StyledTitle>
          <hr className='my-1' />
          <StyledSpan>
            <FontAwesomeIcon onClick={() => this.generateGradient()} size='2x' icon={faRandom} />
          </StyledSpan>
          <button onClick={() => this.generateGradient()} className='sr-only'>Click to get new gradients</button>
          <div className='container'>
            <div className='row'>
              <div className='col-lg'>
                <Gradient name={leftName} colors={leftColors} rotation={leftRotation} />
              </div>
              <div className='col-lg'>
                <Gradient name={rightName} colors={rightColors} rotation={rightRotation} />
              </div>
            </div>
            <hr className='my-1' />
            <div className='row'>
              <div className='col-lg'>
                <SelectedGradient />
              </div>
            </div>
          </div>
        </div>
        <hr className='my-1'></hr>
      </StyledDiv>
    );
  }
}

export default App;
