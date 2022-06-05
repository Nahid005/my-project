import React from "react";
import Button from './Button'

export default class Clock extends React.Component{
    state = {
        date: new Date(),
        local : 'en-US'
    }

    clickButton = (local) => {
        this.setState({
            local,
        })
    }

    
    

    render() {

        const {date, local} = this.state;

        let button;

        if(local==='bn-BD'){
            button = <Button handelClick = {this.clickButton} local='en-US'></Button>
        }else{
            button = <Button handelClick = {this.clickButton} local='bn-BD'></Button>
        }

        return(
            <div>
                <h1> This is a Time {date.toLocaleTimeString(local)} </h1>
                {button}
            </div>
        )
    }
}