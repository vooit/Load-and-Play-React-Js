/**
 * Created by Wojtek on 2017-11-27.
 */
import React from 'react';

function PlayButton(props) {
    const styles = props.isPlaying ? 'play active' : 'play';
    return  <a onClick={props.onClick} href="#" title="Play video" className={styles} />;
}
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        }
    }

    handlePlay(e) {
        e.preventDefault();
        console.log('clicked bitch!');
        if (this.state.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
        this.setState(prevState => {
            return {
                isPlaying: !prevState.isPlaying
            }
        })
    }

    render() {
        const status = this.state.isPlaying ? 'Playing' : 'Not playing';
        return (
            <div>
                <h2>{status}</h2>
                <PlayButton onClick={this.handlePlay.bind(this)} isPlaying = {this.state.isPlaying}/>
                <audio id="audio" ref={(audioTag) => {this.audio = audioTag}}/>
            </div>
        );
    }
}

export default Container;