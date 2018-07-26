import React from 'react';

class Oper  extends React.Component{
    render(){
        return (
            <div className="oper" onClick={()=>this.props.press(this.props.oper)}>
                <div>{this.props.oper}</div>
            </div>
        )
    }
}

export default Oper;