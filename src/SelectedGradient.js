import React from 'react'
import styled from 'styled-components'
import Gradient from './Gradient'
import { ChromePicker } from 'react-color'
import { Form } from 'react-bootstrap'

export default class SelectedGradient extends React.Component {

    state = {
        startColor: '',
        endColor: '',
        rotation: 0
    }

    componentDidMount(){
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
        if (color.length !== 7){
            color += 'b'
        }
        this.setState({
            startColor: color,
            endColor: color
        })
    }

    handleRotationChange = (e) => {
        this.setState({
            rotation: e.target.value
        })
    }

    handleStartColorChange = (color) => {
        this.setState({
            startColor: color.hex
        })
    }

    handleEndColorChange = (color) => {
        this.setState({
            endColor: color.hex
        })
    }

    render(){
        const {startColor, endColor, rotation} = this.state
        const SelectedGradient = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-around;
        `
        return(
        <SelectedGradient>
            <div>
            <Form>
                <Form.Group controlId="formBasicRange">
                <Form.Label>Gradient Rotation</Form.Label>
                <Form.Control onChange={this.handleRotationChange} min='0' max='180' type="range" value={rotation}/>
                </Form.Group>
            </Form>
                <ChromePicker disableAlpha={true} color={startColor} onChangeComplete={this.handleStartColorChange} />
            </div>
            <Gradient rotation={this.state.rotation} colors={[startColor, endColor]} />
            <div>
                <ChromePicker disableAlpha={true} color={endColor} onChangeComplete={this.handleEndColorChange} />
            </div>
        </SelectedGradient>
        )
    }
}