import React from 'react';

class Secound extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }


    componentDidMount() {
        setInterval(() => {
            this.tick();
        }, 1000)
    }

    tick () {
        this.setState({
            date: new Date()
        })
    }
    

    render() {
        return (
            <div>
                <h1> This is a Time {this.state.date.toLocaleTimeString(this.props.time)}</h1>
            </div>
        ) 
    }
}

export default Secound;