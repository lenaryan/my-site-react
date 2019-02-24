import React, { Component } from 'react';

class Metronome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bpm: 100,
            playing: false
        }
    }

    handleBpmChange(e) {
        this.setState({
            bpm: e.target.value
        })
    }

    handleClick() {
        this.setState({
            playing: !this.state.playing
        })
    }

    render() {
        const { bpm, playing } = this.state;
        return (
            <div className="container metronome">
                <h1 className="center">Metronome</h1>
                <div className="bpm-slider">
                    <p className="center">{bpm} bpm</p>
                    <input type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange.bind(this)} />
                    <button className="green white-text" onClick={this.handleClick.bind(this)}>{playing ? 'Stop' : 'Start'}</button>
                </div>
            </div>
        )
    }
}

export default Metronome;