import React from 'react'
import styled from 'styled-components'
export default class Gradient extends React.Component {
    
    
    
    render(){
        const Gradient = styled.div`
        height: 500px;
        width: 500px;
        border-radius: 5px;
        background: linear-gradient(${this.props.rotation}deg, ${this.props.colors[0]}, ${this.props.colors[1]});
        `
        return(
            <div className='container'>
                <Gradient />
            </div>
        )
    }
}