import React from 'react'
import styled from 'styled-components'
export default class Gradient extends React.Component {
    
    
    
    render(){
        console.log(this.props.colors)
        const Gradient = styled.div`
        height: 400px;
        width: 400px;
        background: linear-gradient(${this.props.colors[0]}, ${this.props.colors[1]});
        `
        return(
            <div className='container'>
                <Gradient />
            </div>
        )
    }
}