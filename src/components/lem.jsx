import React from 'react';

class LEM extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightPower: this.props.lightPower,
            highIntensity: this.props.highIntensity,
            hidden: this.props.hidden
        };
        this.lightPowerInputNumber = React.createRef();
        this.lightPowerInputRange = React.createRef();
        this.highIntensityInputCheckbox = React.createRef();
        this.hiddenInputCheckbox = React.createRef();
    }
    render() {
        return this.props.materialType === "LEM" ? (
            <React.Fragment>
                <div style={{ margin: 10 }}>
                    <p>
                        <label style={{ marginRight: 10 }}>Light Power: </label>
                        <input
                            ref={this.lightPowerInputNumber}
                            type="number"
                            defaultValue={this.props.lightPower}
                            onChange={(e) => {
                                const value = e.target.value;
                                this.setState({
                                    lightPower: value
                                }, () => {
                                    this.lightPowerInputRange.current.value = this.state.lightPower;
                                    this.highIntensityInputCheckbox.current.disabled = this.state.lightPower < 1;
                                    this.props.handleUpdateLightPower(this.state.lightPower);
                                })
                            }}
                        />
                        <input
                            ref={this.lightPowerInputRange}
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={this.props.lightPower}
                            onChange={(e) => {
                                const value = e.target.value;
                                this.setState({
                                    lightPower: value
                                }, () => {
                                    this.lightPowerInputNumber.current.value = this.state.lightPower;
                                    this.highIntensityInputCheckbox.current.disabled = this.state.lightPower < 1;
                                    this.props.handleUpdateLightPower(this.state.lightPower);
                                })
                            }}
                        />
                    </p>
                    <p>
                        <label style={{ marginRight: 10 }}>High Intesity: </label>
                        <input 
                            ref={this.highIntensityInputCheckbox}
                            type="checkbox" 
                            defaultChecked={this.props.highIntensity}
                            disabled={this.state.lightPower < 1}
                        />
                    </p>
                    <p>
                        <label style={{ marginRight: 10 }}>Hidden: </label>
                        <input 
                            ref={this.hiddenInputCheckbox}
                            type="checkbox" 
                            defaultChecked={this.props.hidden}
                            disabled={this.state.lightPower < 1}
                        />
                    </p>
                </div>

            </React.Fragment>
        ) : null;
    }
}

export default LEM;