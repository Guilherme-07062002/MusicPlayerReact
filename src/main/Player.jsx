import { initial } from "lodash";
import React, { Component } from "react";

import './Player.css'
import './components/Button.css'

import Button from './components/Button'
import Album from "./components/Album";
import Play from "./components/Play";

const initialState = {
    displayValue: 'Slow Dancing...',
    img: 'img1',
    music: 'music1',
    playing: false
}

export default class Player extends Component {
    state = { ...initialState }

    constructor(props) {
        super(props)
        this.changeText = this.changeText.bind(this)
    }
    changeText(op) {
        if (op == 'prev') {
            this.setState({
                playing: false
            })
            if (this.state.music == 'music1') {
                this.setState({
                    music: 'music2',
                    displayValue: 'Heather',
                    img: 'img2'
                })

            } else if (this.state.music == 'music2') {
                this.setState({
                    music: 'music1',
                    displayValue: 'Slow Dancing...',
                    img: 'img1'
                })
            }
        } else if (op == 'play') {
            this.setState({
                playing: true
            })
            this.state.playing == true ? this.setState({ playing: false }) : this.setState({ playing: true })
        } else if (op == 'next') {
            this.setState({
                playing: false
            })
            if (this.state.music == 'music1') {
                this.setState({
                    music: 'music2',
                    displayValue: 'Heather',
                    img: 'img2'
                })

            } else if (this.state.music == 'music2') {
                this.setState({
                    music: 'music1',
                    displayValue: 'Slow Dancing...',
                    img: 'img1'
                })
            }
        }
    }
    render() {
        const changeText = op => this.changeText(op)
        return (
            <div className="divPlayer">
                <Album img={this.state.img} />
                <h1>{this.state.displayValue}</h1>
                <Play playing={this.state.playing} music={this.state.music} />
                <div className="buttons">
                    <Button label='prev' click={this.changeText} previous />
                    <Button label='play' click={this.changeText} play />
                    <Button label='next' click={this.changeText} next />
                </div>
            </div>
        )
    }
}