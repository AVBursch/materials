import React from 'react';

class BasicProperties extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diffuse: this.props.diffuse,
            transparency: this.props.transparency,
            reflection: this.props.reflection,
            refractionType: this.props.refractionType,
            refractionValue: this.props.refractionValue

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
        this.refractionInputType = React.createRef();
        this.refractionInputNumber = React.createRef();
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
                                this.transparencyInputRange.current.value = this.state.transparency;
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





                <p>
                    <label style={{ marginRight: 10 }}>Refraction: </label>
                    <input
                        ref={this.refractionInputNumber}
                        type="number"
                        defaultValue={this.props.refractionValue}
                        onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                refractionType: value
                            }, () => {
                                this.refractionInputNumber.current.value = this.state.refractionType;
                                this.props.handleUpdateRefractionValue(this.state.refractionType);
                            })
                        }}
                    />


                    <select refractionType={this.state.refractionType}

                        onChange={(e) => {
                            const value = e.target.value;
                            const refractionvalue = this.getRefractionValue(value);
                            this.setState({ refractionType: value, refractionValue: refractionvalue },
                                () => {
                                    this.refractionInputNumber.current.value = this.state.refractionValue;
                                    this.props.handleUpdateRefractionType(this.state.refractionType);
                                });
                        }}

                    >
                        <option value="None">None</option>
                        <option value="Glass">Glass</option>
                        <option value="Plexiglass">Plexiglass</option>
                        <option value="Water">Water</option>
                        <option value="Chrome">Chrome</option>
                        <option value="Steel">Steel</option>
                        <option value="Aluminum">Aluminum</option>
                        <option value="Ceramic">Ceramic</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Copper">Copper</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Oil">Oil</option>
                        <option value="Jade">Jade</option>
                        <option value="Custom">Custom</option>
                    </select>

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

    getRefractionValue = (value) => {
        let number = 0;

        if (value === "None")
            number = 0.0;
        else if (value === "Glass")
            number = 1.5174;
        else if (value === "Plexiglass")
            number = 1.49;
        else if (value === "Water")
            number = 1.33;
        else if (value === "Chrome")
            number = 2.97;
        else if (value === "Steel")
            number = 2.50;
        else if (value === "Aluminum")
            number = 1.39;
        else if (value === "Ceramic")
            number = 4.00;
        else if (value === "Gold")
            number = 0.47;
        else if (value === "Silver")
            number = 1.35;
        else if (value === "Copper")
            number = 2.43;
        else if (value === "Diamond")
            number = 2.42;
        else if (value === "Oil")
            number = 1.47;
        else if (value === "Jade")
            number = 2.42;
        else if (value === "Custom")
            number = 0.00;

        return number;
    }
}

export default BasicProperties;