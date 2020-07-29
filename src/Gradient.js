import React from 'react'
import styled from 'styled-components'
export default class Gradient extends React.Component {
    

    copyToClipboard = e => {
        const el = document.createElement('textarea')
        el.value = e.target.innerText
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        alert('Copied to clipboard')
    }


    render(){
        const {rotation, colors, name} = this.props
        const Gradient = styled.div`
        height: 480px;
        width: 480px;
        max-width: 100%;
        border-radius: 5px;
        display: flex;
        border: 3px groove;
        background: linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]});
        justify-content: center;
        flex-direction: column;
        margin-bottom: 20px;
        `
        const Span = styled.span`
        font-family: "Roboto", sans-serif;
        font-size: large; 
        color: white;
        -webkit-text-stroke: 1px black;
        `
        return(
            <div>
                <h2>{name ? name : 'Custom'}</h2>
                <Gradient>
                    <Span onClick={(e) => this.copyToClipboard(e)}>
                    {`background-image: linear-gradient(${rotation}deg, ${colors[0]}, ${colors[1]})`}
                    </Span>
                </Gradient>
            </div>
        )
    }
}