'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range' 
import { SliderPicker } from 'react-color';

const opacityStyle = {
	width: '50%',
	height:'300px',
	padding:'20px'
}

export class OpacityRange extends React.Component {

 
	constructor(props) {
    super(props);

    this.state = {value: .5, background:'blue' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(color, event) {
    this.setState({ background: color.hex })
  }

  render() {
    return (


    	<div 
    		id="opacityRange"
    		style={opacityStyle}
    		>
    	<SliderPicker
    		color={ this.state.background }
        onChange={ this.handleChange }

        />	
      <InputRange
        maxValue={1}
        minValue={0}
        step={.05}
        value={Math.round( this.state.value * 10 ) / 10}
        onChange={value => this.setState({ value })}
        />
      <div>New Opacity: {Math.round( this.state.value * 10 ) / 10}</div>

      <div
      	style={{color:'black', padding:'10px',height:'70%',width:'50%',background:'white', position:'absolute', border:'4px'}}
      	>
      	Test Form Example Text!
      </div>
      <div
      	id="opacityExample"
      	style={{opacity:this.state.value, color:'red', padding:'10px',height:'70%',width:'50%',background:'black', position:'absolute'}}
      	>
      </div>
      <div
      	style={{padding:'50px',height:'10%%',width:'40%',background:this.state.background, position:'relative',left:'20%', top:'80%'}}
      	>
      </div>


      </div>
    );
  }

}