import React from 'react';

class Preview extends React.Component {
    render(){
        return (
            <div className="preview">
                <p>Preview</p>
                <img src={this.props.data} alt="you will see my friend..."></img>
            </div>
        );
    }
}

export default Preview;