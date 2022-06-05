import React from 'react';
import Button from './Button'

class ClockChange extends React.Component{
    state = {
        date: new Date(),
        local: 'en-US'
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

    timeChange = (local) => {
        this.setState({
            local,
        })
    }


    render() {
        const {date, local} = this.state;

        let button ;

        if(local==='bn-BD'){
            button = <Button change= {this.timeChange} local = 'en-US'></Button>
        }else if (local === 'en-US'){
            button = <Button change= {this.timeChange} local = 'bn-BD'></Button>
        }

        let buttonList = [1, 2, 3, 4, 5];

        return(
            <div> 
                <h2> This is clock component {date.toLocaleTimeString(local)} </h2>
                {buttonList.map((items)=> button )}
            </div>
        )
    }
}

export default ClockChange;