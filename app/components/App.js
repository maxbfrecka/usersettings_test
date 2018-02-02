'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range' 
import { SliderPicker } from 'react-color';

const opacityStyle = {
	width: '30%',
	height:'300px',
	padding:'20px'
}

export class OpacityRange extends React.Component {

 
	constructor(props) {
    super(props);

    this.state = {value: .5, background:'red' }
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
    	<div
      	style={{paddingBottom:'10px', paddingTop:''}}
      >	
    	<SliderPicker
    		color={ this.state.background }
        onChange={ this.handleChange }
        />	
      </div>
      <div
      	style={{padding:'10px'}}
      >	
      <InputRange
        maxValue={1}
        minValue={0}
        step={.05}
        value={Math.round( this.state.value * 10 ) / 10}
        onChange={value => this.setState({ value })}
        />
      </div>


      <div>New Opacity: {Math.round( this.state.value * 10 ) / 10}</div>

      <div
      	style={{color:'black', padding:'10px',height:'70%',width:'30%',background:'white', position:'absolute', borderStyle: 'solid', borderWidth:'20px'}}
      	>
      	Test Form Example Text! - - - - - - Enter your name here. _______ Check this box. ___________ SSN:491851034 ___________ ACCT#: 015015919393
      	Test Form Example Text! - - - - - - Enter your name here. _______ Check this box. ___________ SSN:491851034 ___________ ACCT#: 015015919393
      	Test Form Example Text! - - - - - - Enter your name here. _______ Check this box. ___________ SSN:491851034 ___________ ACCT#: 015015919393
      	Test Form Example Text! - - - - - - Enter your name here. _______ Check this box. ___________ SSN:491851034 ___________ ACCT#: 015015919393
      	Test Form Example Text! - - - - - - Enter your name here. _______ Check this box. ___________ SSN:491851034 ___________ ACCT#: 015015919393
      </div>
      <div
      	id="opacityExample"
      	style={{opacity:this.state.value, color:'red', padding:'10px',height:'70%',width:'30%',background:'black', position:'absolute',wordWrap: 'break-word'}}
      	>
      </div>

      <div
      	id="entryContainer"
      	style={{padding:'10px', height:'70%', width:'30%',position:'relative'}}
      	>
      <div
      	id="textEntryExample"
      	style={{padding:'5px',height:'50px',width:'150px',background:this.state.background, position:'absolute', left:'165px',top:'300px',fontWeight:'bold',fontSize:"20px"}}
      	>
      	8472534_
      </div>
      <div
      	id="fieldExample"
      	style={{padding:'5px',height:'30px',width:'150px',background:'white', position:'absolute', left:'165px',top:'230px'}}
      	>
      	847-25-3455
      </div>
      </div>


      </div>
    );
  }

}