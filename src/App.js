import React from 'react';
import BasicProperties from './components/basicproperties';
import LEM from './components/lem';
import Advanced from './components/advanced';
/*global sketchup*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectMaterial: false,
            selectedMaterial: "No Material Selected",
            materialType: "Default",
            
            // basic properties
            diffuse: 100,
            transparency: 0,
            reflection: 0,
            blurredReflection: false,
            refractionValue: 0,
            refractionType: "None",
            blurredTransparency: false,
            bumpDepth: 0,
            
            // lem
            lightPower: 0,
            highIntensity: false,
            hidden: false,
            
            // advanced
            edgeSmoothing: "Default",

            castShadows: true
        }
        window.test = this.test;
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ margin: 10 }}>
                    <textarea rows={3} cols={30}>
                        {this.state.selectedMaterial}
                    </textarea>
                    <input type="checkbox" />
                    <p>
                        <label style={{ fontWeight: "bold", marginRight: 10 }}>Material Type</label>
                        <select defaultValue={this.state.materialType} onChange={(e) => {
                            const value = e.target.value;
                            this.setState({
                                materialType: value
                            });
                        }}>
                            <option value="Default">Default</option>
                            <option value="Metallic">Metallic</option>
                            <option value="LEM">LEM</option>
                        </select>
                    </p>
                </div>
                <BasicProperties
                    materialType={this.state.materialType}
                    diffuse={this.state.diffuse}
                    transparency={this.state.transparency}
                    reflection={this.state.reflection}
                    blurredReflection={this.state.blurredReflection}
                    refractionValue={this.state.refractionValue}
                    refractionType={this.state.refractionType}
                    blurredTransparency={this.state.blurredTransparency}
                    bumpDepth={this.state.bumpDepth}
                    handleUpdateDiffuse={this.handleUpdateDiffuse}
                    handleUpdateTransparency={this.handleUpdateTransparency}
                    handleUpdateReflection={this.handleUpdateReflection}
                    handleUpdateBlurredRefelection={this.handleUpdateBlurredRefelection}
                    handleUpdateRefractionValue={this.handleUpdateRefractionValue}
                    handleUpdateRefractionType={this.handleUpdateRefractionType}
                    handleUpdateBlurredTransparency={this.handleUpdateBlurredTransparency}
                    handleUpdateBumpDepth={this.handleUpdateBumpDepth}
                />
                <LEM
                    materialType={this.state.materialType}
                    lightPower={this.state.lightPower}
                    highIntensity={this.state.highIntensity}
                    hidden={this.state.hidden}
                    handleUpdateLightPower={this.handleUpdateLightPower}
                    handleUpdateHighIntensity={this.handleUpdateHighIntensity}
                    handleUpdateHidden={this.handleUpdateHidden}
                />
                <Advanced
                    edgeSmoothing={this.state.edgeSmoothing}
                    handleUpdateEdgeSmoothing={this.handleUpdateEdgeSmoothing}
                />
            </React.Fragment>
        )
    }

    // Basic Properties
    handleUpdateDiffuse = (value) => {
        this.setState({
            diffuse: value
        });
    }
    
    handleUpdateTransparency = (value) => {
        this.setState({
            transparency: value
        });
    }
    
    handleUpdateReflection = (value) => {
        this.setState({
            reflection: value
        });
    }
    
    handleUpdateBlurredRefelection = (value) => {
        this.setState({
            blurredReflection: value
        });
    }
    
    handleUpdateRefractionValue = (value) => {
        this.setState({
            refractionValue: value
        });
    }
    
    handleUpdateRefractionType = (value) => {
        this.setState({
            refractionType: value
        });
    }
    
    handleUpdateBlurredTransparency = (value) => {
        this.setState({
            blurredTransparency: value
        });
    }
    
    handleUpdateBumpDepth = (value) => {
        this.setState({
            bumpDepth: value
        });
    }

    // LEM
    handleUpdateLightPower = (value) => {
        this.setState({
            lightPower: value
        });
    }

    handleUpdateHighIntensity = (value) => {
        this.setState({
            highIntensity: value
        });
    }

    handleUpdateHidden = (value) => {
        this.setState({
            hidden: value
        });
    }

    // Advanced
    handleUpdateEdgeSmoothing = (value) => {
        this.setState({
            edgeSmoothing: value
        });
    }

    // testing
    passParamsTest = (e) => {
        if (sketchup !== undefined) {
            sketchup.passParamsTest('one|two|three');
        }
    }

    commandJavascriptTest = (e) => {
        if (sketchup !== undefined) {
            sketchup.commandJavascriptTest();
        }
    }

    test = () => {
        console.log("test from sketchup");
    }
}

export default App;
