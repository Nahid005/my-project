import React from "react";
import Button from './Button'

export default class Clock extends React.Component{
    state = {
        date: new Date(),
        local : ''
    }

    clickButton = (local) => {
        this.setState({
            date: new Date(),
            local
        })
    }

    

    render() {

        const {date, local} = this.state;

        let button;

        if(local==='bn-BD') {
            button = (
                <>
                <h1> This is a Time {date.toLocaleTimeString(local)} </h1>
            <Button handelClick = {this.clickButton} local='bn-BD' ></Button>
                </>
            )
        }else if(local==='en-US'){
            button =(
                <>
                    <h1> This is a Time {date.toLocaleTimeString(local)} </h1>
                <Button handelClick = {this.clickButton} local= 'en-US' ></Button>
                </>
            )
        }
        return(
            <div>
                {button}
            </div>
        )
    }
}