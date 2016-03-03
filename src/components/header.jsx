var React = require('react');
var Router = require('react-router');
var Link = Router.Link;//Link object is a renderable component that turns into an anchor tag when rendered

module.exports = React.createClass({
  render: function() {
    return <nav className="navbar navbar-default-header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur Browser
        </Link>
        <ul className="nav navbar-nav navbar-right">
          <li><a>Topic #1</a></li>
        </ul>
      </div>
    </nav>
  }
});
