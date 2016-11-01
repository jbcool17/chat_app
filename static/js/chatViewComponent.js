var ChatLine = React.createClass({
  render: function() {
    var lineStyle = {
      backgroundColor: this.props.color
    };
    return (
      <li className="line" style={lineStyle}>
        {this.props.date} | {this.props.user} : {this.props.message}
      </li>
    )
  }
})
var ChatView = React.createClass({
      render: function() {
        var dateNow = Date.now().toString()
        var chatNodes = [1,2,3,4,5,6,7,8,9,10,11,12,13].map(function(n){
          return (
            <ChatLine date='123456' user="test user" message="testing mate" color="#00aa00"/>
          )
        })
        return (
          <ul className="chatView chat-window list-group" id="msgs">
            {chatNodes}
          </ul>
        );
      }
    });

var ChatForm = React.createClass({
  getInitialState: function() {
    return {message: ''};
  },
  handleMessageChange: function(e) {
    this.setState({message: e.target.value});
  },
  handleSubmit: function(e) {
    console.log("handleSubmit")
    e.preventDefault();
    var message = this.state.message.trim();
    if (!message) {return;}
    console.log(message)
    this.setState({message: ''});
  },
  render: function(){
    return (
      <form className="chatForm" onSubmit={this.handleSubmit}>
        <label>MESSAGE: </label>
        <input
          type="text"
          placeholder="write a message"
          value={this.state.author}
          onChange={this.handleMessageChange}
        />
        <input className="btn btn-sm btn-primary" type="submit" smethod="post" />
      </form>
    )
  }
})
var ChatViewHold = React.createClass({
  componentDidMount: function(){
    $.ajax({
      url: '/messages/websockets',
      dataType: 'json',
    }).done(function(data){
      console.log(data)
      // autoScroll();
    })
    console.log("componentDidMount");
  },
  render: function(){
    return (
      <div>
      <div id="msgs">Socket Status: hasnt been filled yet</div>
      <h3>Hello <strong>{this.props.user}</strong>! Welcome to Websockets.</h3>
      <ChatView/>
      <ChatForm/>
      </div>
    )
  }
})
ReactDOM.render(<ChatViewHold user="test user"/>,document.getElementById('content'));
