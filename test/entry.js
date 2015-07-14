// var React = require('react');

var TestComponent = React.createClass({

  render: function() {

    return React.DOM.div(null, 'Hello!');
  }
});

React.render(React.createElement(TestComponent), document.body);
