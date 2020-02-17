import React, { Component } from "react";
import {connect} from "react-redux";

class Input extends Component {

    renderInputAndButton() {
        if(!this.props.success) {
            return (
                <form className="form-inline">
                    <input dataTest="inputBox" className="mb-2 mx-sm-3"/>
                    <button dataTest="submitButton" className="btn btn-primary">Submit</button>
                </form>
            );
        }
        return null;
    }

    render() {
        return (
            <div dataTest="inputComponent">
                {this.renderInputAndButton()}
            </div>
        );
    }
}

const mapToStateProps = ({success}) => {
    return {success};
};

export default connect(mapToStateProps)(Input);