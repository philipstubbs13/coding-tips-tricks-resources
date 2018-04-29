// define callback function
var handleError = function(err) {
    if (err) {
    return console.log('handleError Says: ', err);
  }

  console.log('No errors to handle');
}

// execute the callback function with various values
handleError("Unauthorized");
handleError(undefined);
handleError();
handleError(false);
handleError(true);

// define function results in an error and calls our callback
function generateError(callback) {
    var a;
    try { a = b; }
    catch(error) { callback(error); }
};


// define function with no error and observe that callback isn't executed 
function noError(callback) {
    var a, b=3;
    try { a = b; }
    catch(error) { callback(error); }
};