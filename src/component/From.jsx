import React from 'react';

class From extends React.Component {
    state = {
        fristName : '',
        secoundName : '',
        phoneNumber : '',
        email : '',
        country : 'bangladesh',
        permaission : false,
    }

    onchageHandaler = (event) => {
        if (event.target.type === 'text') {
            this.setState ( {
                fristName : event.target.value
            })
        }else if (event.target.type === 'number'){
            this.setState({
                phoneNumber : event.target.value,
            })
        } else if (event.target.type === 'select-one') {
            this.setState({
                country : event.target.value
            })
        } else if (event.target.type === 'checkbox') {
            this.setState({
                permaission : event.target.checked,
            })
        } else if (event.target.type === 'email'){
            this.setState({
                email : event.target.value
            })
        }
    }

    submitHendaler = (event) => {
        event.preventDefault();
        const {fristName, phoneNumber, country, email, permaission} = this.state

        console.log(fristName, phoneNumber, country, email, permaission)
    }

    render() {
        const {fristName, phoneNumber, country, email, permaission} = this.state


        return (
            <form action="#" onSubmit={this.submitHendaler}>
                <input type="text" name ="firstName" value={fristName}  onChange = {this.onchageHandaler} />
                <br/>
                <br/>
                <input type="number" name="phoneNumber" value={phoneNumber}  onChange = {this.onchageHandaler}/>
                <br/>
                <br/>
                <input type="email" name="email" value={email}  onChange = {this.onchageHandaler}/>
                <br/>
                <br/>
                <select value={country} onChange = {this.onchageHandaler}>
                    <option value="germany"> germany </option>
                    <option value="bangladesh"> Bangladesh </option>
                    <option value="munich"> munich </option>
                    <option value="Dhaka"> Dhaka </option>
                </select>
                <br/>
                <br/>
                <input type="checkbox" checked={permaission} onChange = {this.onchageHandaler}/>
                <br/>
                <br/>
                <input type="submit" value="submit" />

            </form>
        )
    }

}

export default From;