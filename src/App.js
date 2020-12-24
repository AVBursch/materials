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
            basicProperties: {
                diffuse: 100,
                transparency: 0,
                reflection: 0,
                blurredReflection: false,
                refractionValue: 0,
                refractionType: "None",
                blurredTransparency: false,
                bumpDepth: 0
            },
            lem: {
                lightPower: 0,
                highIntensity: false,
                hidden: false
            },
            advanced: {
                edgeSmoothing: "Default"
            },
            castShadows: true
        }
        window.test = this.test;
    }

    render() {
        return (
            <React.Fragment>
                <div style={{margin: 10}}>
                    <textarea rows={3} cols={30}>
                        {this.state.selectedMaterial}
                    </textarea>
                    <input type="checkbox"/>
                    <p>
                        <label style={{fontWeight: "bold", marginRight: 10}}>Material Type</label>
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
                    basicProperties={this.state.basicProperties}
                    handleUpdateBasicProperties={this.handleUpdateBasicProperties}
                />
                <LEM 
                    materialType={this.state.materialType}
                    lem={this.state.lem}
                    handleUpdateLEM={this.handleUpdateLEM}
                />
                <Advanced 
                    edgeSmoothing={this.state.edgeSmoothing}
                    handleUpdateAdvanced={this.handleUpdateAdvanced}
                />
            </React.Fragment>
        )
    }

    handleUpdateMaterial = (value) => {
        this.setState({
            material: value
        });
    }

    handleUpdateBasicProperties = (value) => {
        this.setState({
            basicProperties: value
        });
    }

    handleUpdateLEM = (value) => {
        this.setState({
            lem: value
        });
    }

    handleUpdateAdvanced = (value) => {
        this.setState({
            advanced: value
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
