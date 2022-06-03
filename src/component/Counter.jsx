import React from 'react';

class Counter extends React.Component{

    state = {
        counter : 0,
    }

    handelOnchange () {
        this.setState({
            counter: 0
        })

    }

    handelClick ( ) {
        this.setState((state, props)=> {
            counter: state.counter + counter;
        })
    }

    render() {

        let {counter} = this.state;

        return (

            <div>
                <br/>
                <br/>
                <input type="text" value={counter}  onChange={this.handelOnchange}/>
                <br/>
                <br/>
                <button className='btn' onClick={this.handelClick}> plus </button>
            </div>
        )
    }

}

export default Counter;