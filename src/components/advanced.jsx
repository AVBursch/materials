import React from 'react';

class Advanced extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.castShadowsInputCheckbox = React.createRef();
    }

    render() {
        return (
            <React.Fragment>
                Advanced

                <p>
                    <label style={{ fontWeight: "bold", marginRight: 10 }}>Edge Smoothing</label>
                    <select defaultValue={this.state.edgeSmoothing} onChange={(e) => {
                        const value = e.target.value;
                        this.setState({
                            edgeSmoothing: value
                        });
                    }}>
                        <option value="Default">Default</option>
                        <option value="None">None</option>
                        <option value="Low">Low</option>
                        <option value="Standard">Standard</option>
                        <option value="High">High</option>
                        <option value="Ultra">Ultra</option>
                    </select>
                </p>

                <p>
                    <label style={{ marginRight: 10 }}>Cast Shadows: </label>
                    <input
                        ref={this.castShadowsInputCheckbox}
                        type="checkbox"
                        defaultChecked={this.props.castShadows}
                    />
                </p>

                <button  >
                    Apply
                </button>
                <button  >
                    Close
                </button>

            </React.Fragment>
        );
    }
}

export default Advanced;