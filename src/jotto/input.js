import React, { Component } from "react";
import {connect} from "react-redux";

class Input extends Component {
    render() {
        return (
            <div>
                <button />
            </div>
        );
    }
}

const mapToStateProps = (state) => {
    return state;
};

export default connect(mapToStateProps)(Input);