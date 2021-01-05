import React from 'react';

class Advanced extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edgeSmoothing: this.props.edgeSmoothing,
            castShadows: this.props.castShadows
        };

        this.castShadowsInputCheckbox = React.createRef();
        this.edgeSmoothingInputType = React.createRef();
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
                        }, () => {
                            this.edgeSmoothingInputType.current.value = this.state.edgeSmoothing;
                            this.props.handleUpdateEdgeSmoothing(this.state.edgeSmoothing);
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
                        defaultChecked={this.props.castShadows} onChange={(e) => {
                            const value = e.target.value;
                            this.setState({ castShadows: value }, () => {
                                this.castShadowsInputCheckbox.current.value = this.state.castShadows;
                                this.props.handleUpdateCastShadows(this.state.castShadows);
                            });

                        }} />
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