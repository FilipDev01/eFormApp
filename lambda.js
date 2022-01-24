const serverlessExpress = require("@vendia/serverless-express");
const app = require("./dist/eForm/serverless/main");
const serverProxy = serverlessExpress.createServer(app.server);
module.exports.handler = (event, context) => serverlessExpress.proxy(serverProxy, event, context);