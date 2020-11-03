import React from 'react';


class DrumPad extends React.Component{

   
    render() {
        return(
            <div 
            className = 'drum-pad' 
            id={this.props.id} 
            onClick={this.handleClick}>
                <h1>{this.props.keyTrigger}</h1>
                <audio 
                    ref={ref => this.audio = ref}
                    className='clip'
                    src={this.props.url} 
                    id={this.props.keyTrigger}>
                </audio>
            </div>
        )
    }
}