function mySuperDuperCallbackFunction() {
    console.log('Super Duper');
}

function functionThatTakesCallbackFunction(string, callback) {
    console.log(string);
    callback();
}

functionThatTakesCallbackFunction("Hello there", mySuperDuperCallbackFunction);