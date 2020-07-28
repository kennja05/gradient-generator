import React from 'react'
import styled from 'styled-components'
export default class Gradient extends React.Component {
    
    
    
    render(){
        const {rotation, colors, name} = this.props
        const Gradient = styled.div`
        height: 500px;
        width: 500px;
        border-radius: 5px;
        background: linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]});
        display: flex;
        justify-content: center;
        flex-direction: column;
        `
        return(
            <div className='container'>
                <h2>{name}</h2>
                <Gradient>{`linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]})`}</Gradient>
            </div>
        )
    }
}