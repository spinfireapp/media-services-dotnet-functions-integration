module.exports = function (context, req) {
  context.log('This function saves video stream url');
  
  //const formValues = qs.parse(req.body);

  context.res = {
    status: 200,
    body: "",
    headers: { 'Content-Type': 'application/xml' },
    isRaw: true
  };
  
  context.done();
};