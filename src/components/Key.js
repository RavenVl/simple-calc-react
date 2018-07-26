import React from 'react';

class Key  extends React.Component{
    render(){
        return (
            <div className="key" onClick={()=>this.props.press(this.props.children)}>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Key;