var ChatView = React.createClass({

      render: function() {
        return (
          <ul className="chatView chat-window list-group" id="msgs">
            <li>TESTING CHAT REACT VIEW</li>
          </ul>
        );
      }
    });

ReactDOM.render(<ChatView/>,document.getElementById('content'));
