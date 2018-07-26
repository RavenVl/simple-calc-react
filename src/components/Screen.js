import React from 'react';

class Screen  extends React.Component{
    render(){
        return (
            <div className="screen">
                <div>{this.props.val}</div>
            </div>
        )
    }
}

export default Screen;