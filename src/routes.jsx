var React = require('react');
var ReactRouter = require('react-router');//library with a collection of properties that give us ability to do routing on page
var Router = ReactRouter.Router; //actual router object that decides what content to show on the page
var Route = ReactRouter.Route; //object that is used to configure the object on the router

var Main = require("./components/main");

module.exports = (
  <Router>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);
