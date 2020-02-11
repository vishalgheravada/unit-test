import React from "react";
export default (props) => {
    if(props.success) {
        return (
            <div dataTest="congratsComponent">
                <div dataTest="congratsMessage">
                    Congrats!!!
                </div>
            </div>
        );
    }
    return (
        <div dataTest="congratsComponent">
            
        </div>
    );
};