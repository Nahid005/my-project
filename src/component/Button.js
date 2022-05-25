import React from 'react';

class Button extends React.Component {

    // shouldComponentUpdate(nextprops) {
    //     const {change:carrentProps} = this.props;
    //     const {change: nextProps} = nextprops;

    //     if(carrentProps === nextProps){
    //         return false;
    //     }else{
    //         return true
    //     }
    // }


    render() {
        let {change, local} = this.props;

        // console.log('button component ')
        
        return(
            <div>
                <button type='button' onClick={() => change(local)} > click here </button>
            </div>
        )
    }
}

export default Button;