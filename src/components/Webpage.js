import React, { Component } from 'react'
import FillerText from './FillerText'

export default class Webpage extends Component {
    render() {
        return (
            <div>
                <h3>The world's coolest webpage</h3>
                <FillerText />
                <FillerText />
            </div>
        )
    }
}
