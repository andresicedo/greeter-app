import React from 'react';

class Greeter extends React.Component {
    render() {
        return (
            <h1>Hello again {this.props.name || 'You'}!</h1>
        )
    }
}

export default Greeter