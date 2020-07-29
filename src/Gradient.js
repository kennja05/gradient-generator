import React from 'react'
import styled from 'styled-components'
export default class Gradient extends React.Component {
    

    copyToClipBoard = e => {
        const copyText = document.getElementById('copy')
        copyText.select()
        document.execCommand('copy')
    }


    render(){
        const {rotation, colors, name} = this.props
        const Gradient = styled.div`
        height: 480px;
        width: 480px;
        max-width: 100%;
        border-radius: 5px;
        display: flex;
        background: linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]});
        justify-content: center;
        flex-direction: column;
        `
        const Span = styled.span`
        font-family: "Roboto", sans-serif;
        font-size: large; 
        color: white;
        -webkit-text-stroke: 1px black;
        `
        return(
            <div>
                <h2>{name}</h2>
                <Gradient><Span onClick={() => this.copyToClipBoard()}>{`background-image: linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]})`}</Span></Gradient>
                <input readOnly hidden id='copy' type='text' value={`background-image: linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]})`} />
            </div>
        )
    }
}