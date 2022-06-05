import React from 'react';

class Form extends React.Component {

    state = {
        fristName : '',
        email : '',
        number : '',
        password : ''
    }

    handelChange = (e) => {
        if(e.target.type === 'text'){
            fristName : e.target.value,
        }
    }

    render() {

        const {fristName, email, number, password} = this.state;

        return(
            <div> 
                <form>
                    <input onChange={fristName} value={fristName} type="text" name="fristName" placeholder='frist name'/>
                    <br/>
                    <br/>
                    <input value={email} type="email" name="email" placeholder='email'/>
                    <br/>
                    <br/>
                    <input value={number} type="number" name="number" placeholder='number'/>
                    <br/>
                    <br/>
                    <input value={password} type="password" name="password" placeholder='password'/>
                    <br/>
                    <br/>

                    <input type="button" value="submit"/>
                </form>
            </div>
        )
    }
}

export default Form;