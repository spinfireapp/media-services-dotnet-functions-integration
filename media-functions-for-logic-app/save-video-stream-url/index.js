var Client = require('node-rest-client').Client;

module.exports = function (context, req) {
  context.log('This function saves video stream url');

  var client = new Client();

  var args = {
    data: {
      fileName: req.body.fileName,
      streamUrl: req.body.streamUrl
    },
    headers: {
      "Content-Type": "application/json"
    }
  };

  client.post("https://development-api.spinfireapp.com/stream/streamUrl", args, function (data, response) {
    context.log(response);
  });

  context.res = {
    status: 200,
    body: "",
    headers: { 'Content-Type': 'application/xml' },
    isRaw: true
  };

  context.done();
};