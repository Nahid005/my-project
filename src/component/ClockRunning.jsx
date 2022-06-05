import React from 'react';

/**
 * this is a clock component using react
 * start time daynamicaly 
 */

class ClockRunning extends React.Component {
    state = {
        date: new Date(),
    }

    componentDidMount() {
        setInterval(() => {
            this.tick()
        }, 1000)
    }

    tick = () => {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        const {date} = this.state;

        return(
            <div>
                <h2> This is clock component {date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default ClockRunning;