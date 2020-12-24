import React from 'react';

class BasicProperties extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            
        };
    }

    render() {
        return this.props.materialType !== "LEM" ? (
            <React.Fragment>
                Basic Properties
            </React.Fragment>
        ) : null;
    }
}

export default BasicProperties;