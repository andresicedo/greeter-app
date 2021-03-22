import React, { Component } from 'react'

export default class Timestamp extends Component {
    render() {
        const now =  new Date();
        return (
            
            <h2>
                {now.toDateString()}
            </h2>
        )
    }
}

