# Implementing JavaScript’s forEach method*
I really like this example as it illustrates a number or concepts into a small package.
1. Extends JavaScript’s Array Class with our custom forEach implementation via the array prototype
2. For Loop
3. Basic function
3. Callback function
4. This reference
5. Demistifies callback parameters (Common question is where are they defined? Answer: Only in the declaration of the callback function)

<pre>

cars = ['Chevy', 'Ford', 'Honda', 'Nissan', 'Volvo', 'Subaru'];

var myCallbackFunction = function(el, i) {console.log('element: ', el, ', index: ', i); };
Array.prototype.myForEach = function(callback) { for (var i = 0; i < this.length; i++) { callback(this[i], i); } };

cars.myForEach(myCallbackFunction);
</pre>

Which is equivalent to:

<pre>
// Javascript's built-in forEach method
cars.forEach(myCallbackFunction);
</pre>

