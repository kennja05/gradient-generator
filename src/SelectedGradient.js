import React from 'react'
import styled from 'styled-components'
import Gradient from './Gradient'
import { ChromePicker } from 'react-color'

export default class SelectedGradient extends React.Component {

    state = {
        startColor: '#fff',
        endColor: '#000',
        rotation: Math.floor(Math.random() * 181)
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
        const SelectedGradient = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: center;
        `
        return(
        <SelectedGradient>
            <div style={{marginTop: '50px'}}>
                <ChromePicker disableAlpha={true} color={this.state.startColor} onChangeComplete={this.handleStartColorChange} />
                <ChromePicker disableAlpha={true} color={this.state.endColor} onChangeComplete={this.handleEndColorChange} />
            </div>
            <Gradient rotation={this.state.rotation} colors={[this.state.startColor, this.state.endColor]} />
        </SelectedGradient>
        )
    }
}