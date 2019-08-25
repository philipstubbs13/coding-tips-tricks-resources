# Web Workers

* <http://frenetic.be/tricks/simple-timer.php>
* JS and Parallel Processing | Minnebar
  * <http://youtube.com/watch?v=jB5CtGIADJ0>
  * Web workers cannot directly access the window object or the DOM.
  * How do web workers work?

  ```bash
  // Instantiate a new web worker
  worker = new Worker('/js/YOUR_FILE.js');
  ```

  * Each Web Worker you create === a new thread.
  * They communicate via Message Channel.

  ```bash
  worker.onmessage = function (event) {
    // Do something
  };

  worker.onerror = function (event) {
    console.log(event.message, event);
  };
  ```

  * Web workers operate in a different context.
    * cant directly access the Window or DOM.
    * But can do pretty much anything else the main thread can do.
  * Communicate back to main thread with postMessage(j);
  * Can you reuse the same worker over and over? yes
  * Message can be any type of data. Can be function, callback function, etc.

  ```bash
  <script>
  var worker;
  function startWorker() {
    // check whether the users browser supports it.
    if (typeof (Worker) !== "undefined") {
      // check if the worker already exists
      if (typeof (worker) == "undefined") {
        worker = new Worker ('/js/bigLoop.js');
      }
      worker.onmessage = function (event) {
        document.getElementById("result").innerHTML =
        "Completed" + event.data + " iterations";
        worker.terminate();
      };

      worker.onerror = function (event) {
        console.log(event.message, event);
      };
    } else {
      document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
  }

  function stopWorker() {
    worker.terminate();
    worker = undefined;
  }

  function sayHello() {
    alert("Hello sir...");
  }
  </script>

  <body>
    <button onclick="startWorker()">Start Worker</button>
    <button onclick="stopWorker()">Stop Worker</button>
    <input type="button" onclick="sayHello();" value="Say Hello" />
    <output id="result"></output>
  </body>
  ```

  ```bash
  // bigLoop.js
  for (var i =0; i <= 2000000001; i+=1) {
    var j = i
  }

  postMessage(j);
  ```

  * Under Sources in Chrome Dev Tools, you can see the threads being created by the browser.
  * How do we stop a web worker?
  * Future of Web Workers
    * WebGL and Canvas 2D
  * Web workers are relatively heavy weight, and are not intended to be used in large numbers.
  * web workers are amazing but hard to manage.
