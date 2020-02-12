import React, { Component } from "react";
import PropTypes from "prop-types";
class Congrats extends Component {
    static propTypes = {
        success: PropTypes.bool.isRequired
    };
    render() {
        if(this.props.success) {
            return (
                <div dataTest="congratsComponent" className="mt-5">
                    <div dataTest="congratsMessage" className="alert alert-success">
                        Congrats!!!
                    </div>
                </div>
            );
        }
        return (
            <div dataTest="congratsComponent" />
        );
    }
};

export default Congrats;