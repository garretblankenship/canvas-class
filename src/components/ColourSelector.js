import React, { Component } from "react";

class ColourSelector extends Component {
    state = { 
        hex: this.props.hex, 
        name: ""
    }
    
    onInputChange = (event) => {
        this.setState({ hex: event.target.value });
    }
    
    render() {
        const { hex } = this.state;

        return (
            <>
                <input type="color" value={hex} onChange={this.onInputChange}  />
            </>
        );
    }

    static defaultProps = {
        hex: "#ffffff"
    }
}

export default ColourSelector;