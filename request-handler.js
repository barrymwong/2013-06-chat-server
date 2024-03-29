/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */


// http://soohwan.blogspot.com/2011/02/nodejs-http-request.html
// /1/classes/messages

// need to make node implement urls
// is node still using parse somehow afterwards?

var url = require('url');
var defaultCorsHeaders = require('./defaultCorsHeaders');

exports.handleRequest = function(request, response) {

  /* Request is an http.ServerRequest object containing various data
   * about the client request - such as what URL the browser is
   * requesting. */
  console.log("Serving request type " + request.method + " for url " + request.url);
  /* "Status code" and "headers" are HTTP concepts that you can
   * research on the web as and when it becomes necessary. */
  var statusCode = 200;

  /* Without this line, this server wouldn't work.  See the note
   * below about CORS. */
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";

  request.on('data', function(chunk) {
    console.log('--> data', chunk);
  });

  request.on('end', function() {
    console.log('--> end');
  });

  if(request.method === 'GET') {

  } else if(request.method === 'POST') {

  }

  /* Response is an http.ServerRespone object containing methods for
   * writing our response to the client. Documentation for both request
   * and response can be found at
   * http://nodemanual.org/0.8.14/nodejs_ref_guide/http.html*/
  response.writeHead(statusCode, headers);
  /* .writeHead() tells our server what HTTP status code to send back
   * to the client, and what headers to include on the response. */


  /* Make sure to always call response.end() - Node will not send
   * anything back to the client until you do. The string you pass to
   * response.end() will be the body of the response - i.e. what shows
   * up in the browser.*/
  response.end('[]');
};

// this won't work with spec
// module.exports = exports.handleRequest;







