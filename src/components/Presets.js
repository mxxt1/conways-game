import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const options = [
    { key: 'glider', value: 'glider', text: 'Glider' },
    { key: 'gliderGun', value: 'gliderGun', text: 'Glider Gun' }
];

class Presets extends Component {

    state = {
        preset: ''
    }

    onLoad = () => {
        const { preset } = this.state;
        return preset ? this.props.load(preset) : null;
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Button as='div' labelPosition='left'>
                    <Dropdown
                        placeholder='Presets'
                        options={options}
                        selection
                        className='label'
                        value={this.state.preset}
                        onChange={(e, { value }) => this.setState({ preset: value })}
                    />
                    <Button
                        content='Load'
                        onClick={this.onLoad}
                        disabled={this.props.running}
                    />
                </Button>
            </div>
        );
    }

}

export default Presets;