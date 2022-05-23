import React from 'react';
import Button from './Button'

export default class Clock extends React.Component {
    state = {
        date: new Date(),
        local: 'en-US',
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    hendalClick = () => {
        this.setState({
            local: 'bn-BD',
        })
    }

    render() {
        // console.log('clock component ')
        const {date, local} = this.state;

        return(
            <div> 
                <h1> This is a Time  {date.toLocaleTimeString(local)} </h1>
                <Button change={this.hendalClick}></Button>
            </div>
        )
    }
}