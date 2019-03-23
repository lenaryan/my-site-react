import React, { Component } from 'react';
import click1 from '../../sounds/click1.wav';
import click2 from '../../sounds/click2.wav';

class Metronome extends Component {
    constructor(props) {
        super(props);

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);

        this.state = {
            bpm: 100,
            count: 0,
            playing: false,
            beatsPerMeasure: 4
        }
    }

    handleBpmChange = event => {
        const bpm = event.target.value;
      
        if (this.state.playing) {
          // Stop the old timer and start a new one
          clearInterval(this.timer);
          this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
      
          // Set the new BPM, and reset the beat counter
          this.setState({
            count: 0,
            bpm
          });
        } else {
          // Otherwise just update the BPM
          this.setState({ bpm });
        }
    };

    startStop = () => {
        if (this.state.playing) {
            // Stop the timer
            clearInterval(this.timer);
            this.setState({
              playing: false
            });
        } else {
            // Start a timer with the current BPM
            this.timer = setInterval(
              this.playClick,
              (60 / this.state.bpm) * 1000
            );
            this.setState(
              {
                count: 0,
                playing: true
                // Play a click "immediately" (after setState finishes)
              },
              this.playClick
            );
        }
    }

    playClick = () => {
        const { count, beatsPerMeasure } = this.state;
      
        // The first beat will have a different sound than the others
        if (count % beatsPerMeasure === 0) {
          this.click2.play();
        } else {
          this.click1.play();
        }
      
        // Keep track of which beat we're on
        this.setState(state => ({
          count: (state.count + 1) % state.beatsPerMeasure
        }));
    };

    render() {
        const { bpm, playing } = this.state;
        return (
            <main className="container metronome">
                <h1 className="center">Metronome</h1>
                <div className="bpm-slider">
                    <p className="center">{bpm} bpm</p>
                    <input type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange} />
                    <button type="button" className="green white-text" onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
                </div>
            </main>
        )
    }
}

export default Metronome;