
require("../scss/app.scss");
var angular = require("angular");
require("angular-route");


var app = angular.module("myApp", ['ngRoute']);

require("./appConfig")(app);
require("./directives/directives")(app);
require("./controllers/AppCtrl")(app);

