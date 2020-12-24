import React from 'react';

class LEM extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lightPower: this.props.lem.lightPower,
            highIntensity: this.props.lem.highIntensity,
            hidden: this.props.lem.hidden
        };
    }

    componentDidUpdate(prevProps) {
        if(this.props.lem !== prevProps.lem) {
            this.setState({
                lightPower: this.props.lem.lightPower,
                highIntensity: this.props.lem.highIntensity,
                hidden: this.props.lem.hidden
            });
        }
    }

    render() {
        return this.props.materialType === "LEM" ? (
            <React.Fragment>
                <p>
                    <label style={{marginRight: 10}}>Light Power: </label>
                    <input type="number" defaultValue={this.state.lightPower} />
                </p>

            </React.Fragment>
        ) : null;
    }
}

export default LEM;