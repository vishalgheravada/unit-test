import React, { Component } from "react";
import PropTypes from "prop-types";
class Congrats extends Component {
    static propTypes = {
        success: PropTypes.bool
    };
    render() {
        if(this.props.success) {
            return (
                <div dataTest="congratsComponent">
                    <div dataTest="congratsMessage">
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