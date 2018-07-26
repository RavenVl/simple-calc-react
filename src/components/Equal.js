import React from 'react';

class Equal  extends React.Component{
    render(){
        return (
            <div className="equal" onClick={this.props.press}>
                <div className="">
                    <div>=</div>
                </div>
            </div>
        )
    }
}

export default Equal;