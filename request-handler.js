/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */

var HandleRequest = function(request, response) {
  this.request = request;
  this.response = response;
  console.log(this.request, this.response);
  return this.request + ', ' + this.response;
};

module.exports = HandleRequest;

