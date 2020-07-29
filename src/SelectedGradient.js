import React from 'react'
import styled from 'styled-components'
import Gradient from './Gradient'
import { ChromePicker } from 'react-color'
import { Form } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons'

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

    handleRotationDrag = (e) => {
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

    decrementRotation = () => {
        if (this.state.rotation > 0){
            this.setState({
                rotation: this.state.rotation - 1
            })
        }
    }

    incrementRotation = () => {
        if (this.state.rotation <= 179){
            this.setState({
                rotation: this.state.rotation + 1
            })
        }
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
                <span onClick={this.decrementRotation}><FontAwesomeIcon icon={faMinusCircle} /> </span>
                <Form.Label>Gradient Rotation </Form.Label>
                <span onClick={this.incrementRotation}> <FontAwesomeIcon icon={faPlusCircle} /></span>
                <Form.Control onChange={this.handleRotationDrag} min='0' max='180' type="range" value={rotation}/>
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