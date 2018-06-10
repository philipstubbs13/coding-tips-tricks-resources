import React from "react";

const Math = (props) => {
    let value;

    //Assign value based on the operator
    switch (props.operator) {
        case "+":
            value = props.num1 + props.num2;
            break;
        case "-":
            value = props.num1 - props.num2;
            break;
        case "*":
            value = props.num1 * props.num2;
            break;
        case "/":
            value = props.num1 / props.num2;
            break;
        default:
            value = NaN;
    }
}


export default Math;