import React from 'react'
import styled from 'styled-components'
export default class Gradient extends React.Component {
    
    //        background: linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]});
    //{`linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]})`}

    
    render(){
        const {rotation, colors, name} = this.props
        const Gradient = styled.div`
        height: 500px;
        width: 500px;
        border-radius: 5px;
        display: flex;
        background: linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]});
        justify-content: center;
        flex-direction: column;
        `
        const Span = styled.span`
        font-family: "Roboto", sans-serif;
        color: white;
        `
        return(
            <div className='container'>
                <h2>{name}</h2>
                <Gradient><Span>{`linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]})`}</Span></Gradient>
            </div>
        )
    }
}