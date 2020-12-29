import React from 'react';

class BasicProperties extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diffuse: this.props.diffuse,

        };
        this.diffuseInputNumber = React.createRef();
        this.diffuseInputRange = React.createRef();
        this.transparencyInputNumber = React.createRef();
        this.transparencyInputRange = React.createRef();
        this.reflectionInputNumber = React.createRef();
        this.reflectionInputRange = React.createRef();
        this.blurredReflectionInputCheckbox = React.createRef();
        this.blurredTransparencyInputCheckbox = React.createRef();
        this.bumpDepthInputNumber = React.createRef();
        this.bumpDepthInputRange = React.createRef();
    }

    render() {
        return (this.props.materialType === "Default" || this.props.materialType === "Metallic") ? (
            <React.Fragment>
                Basic Properties

                <p>
                    <label style={{ marginRight: 10 }}>Diffuse: </label>
                    <input
                        ref={this.diffuseInputNumber}
                        type="number"
                        defaultValue={this.props.diffuse}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                diffuse: value
                            }, () => {
                                this.diffuseInputRange.current.value = this.state.diffuse;
                                this.props.handleUpdateDiffuse(this.state.diffuse);
                            })
                        }}
                    />
                    <input
                        ref={this.diffuseInputRange}
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={this.props.diffuse}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                diffuse: value
                            }, () => {
                                this.diffuseInputNumber.current.value = this.state.diffuse;
                                this.props.handleUpdateDiffuse(this.state.diffuse);
                            })
                        }}
                    />
                </p>

                <p>
                    <label style={{ marginRight: 10 }}>Transparency: </label>
                    <input
                        ref={this.transparencyInputNumber}
                        type="number"
                        defaultValue={this.props.transparency}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                transparency: value
                            }, () => {
                                this.transparencyInputRange.current.value = this.state.diffuse;
                                this.props.handleUpdateTransparency(this.state.transparency);
                            })
                        }}
                    />
                    <input
                        ref={this.transparencyInputRange}
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={this.props.transparency}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                transparency: value
                            }, () => {
                                this.transparencyInputNumber.current.value = this.state.transparency;
                                this.props.handleUpdateTransparency(this.state.transparency);
                            })
                        }}
                    />
                </p>

                <p>
                    <label style={{ marginRight: 10 }}>Reflection: </label>
                    <input
                        ref={this.reflectionInputNumber}
                        type="number"
                        defaultValue={this.props.reflection}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                reflection: value
                            }, () => {
                                this.reflectionInputRange.current.value = this.state.reflection;
                                this.props.handleUpdateReflection(this.state.reflection);
                            })
                        }}
                    />
                    <input
                        ref={this.reflectionInputRange}
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={this.props.reflection}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                reflection: value
                            }, () => {
                                this.reflectionInputNumber.current.value = this.state.reflection;
                                this.props.handleUpdateReflection(this.state.reflection);
                            })
                        }}
                    />
                </p>

                <p>
                    <label style={{ marginRight: 10 }}>Blurred Reflection: </label>
                    <input
                        ref={this.blurredReflectionInputCheckbox}
                        type="checkbox"
                        defaultChecked={this.props.blurredReflection}
                    />
                </p>

                {/* Refraction section here */}

                <p>
                    <label style={{ marginRight: 10 }}>Blurred Transparency (translucence): </label>
                    <input
                        ref={this.blurredTransparencyInputCheckbox}
                        type="checkbox"
                        defaultChecked={this.props.blurredTransparency}
                    />
                </p>

                <p>
                    <label style={{ marginRight: 10 }}>Bump Depth: </label>
                    <input
                        ref={this.bumpDepthInputNumber}
                        type="number"
                        defaultValue={this.props.bumpDepth}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                bumpDepth: value
                            }, () => {
                                this.bumpDepthInputRange.current.value = this.state.bumpDepth;
                                this.props.handleUpdateBumpDepth(this.state.bumpDepth);
                            })
                        }}
                    />
                    <input
                        ref={this.bumpDepthInputRange}
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        defaultValue={this.props.bumpDepth}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                bumpDepth: value
                            }, () => {
                                this.bumpDepthInputNumber.current.value = this.state.bumpDepth;
                                this.props.handleUpdateBumpDepth(this.state.bumpDepth);
                            })
                        }}
                    />
                </p>
            </React.Fragment>
        ) : null;
    }
}

export default BasicProperties;