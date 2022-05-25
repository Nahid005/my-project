import React from 'react';
import Button from './Button'

export default class Clock extends React.Component {
    state = {
        date: new Date(),
        local: 'bn-BD',
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    hendalClick = (local) => {
        this.setState({
            local,
        })
    }

    render() {
        // console.log('clock component ')
        const {date, local} = this.state;

        let button;
        if(local === 'bn-BD'){
           button = <Button change={this.hendalClick} local='en-US'></Button>
        }else{
            button = <Button change={this.hendalClick} local = 'bn-BD'></Button>
        }

        return(
            <div> 
                <h1> This is a Time  {date.toLocaleTimeString(local)} </h1>
                {button}
            </div>
        )
    }
}