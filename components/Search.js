// nie trzeba tutaj zbyt wiele wyjaśniać. Ten komponent to pasek wyszukiwania.
// Napiszemy w nim drobną logikę, która rozpocznie wyszukiwanie, kiedy przyciśniemy
// enter albo kiedy długość wpisywanego tekstu będzie większa niż 2 litery,

Search = React.createClass({
  // ----------------------------SET INITIAL STATE -----------------------------
  getInitialState() {
    return {
      searchingText: ''
    };
  },

  // --------------------------HANDLECAHNGE METHOD------------------------------
  handleChange: function(event) {
    // event -> write words on search
    var searchingText = event.target.value;  //??
    this.setState({
      searchingText: searchingText   ///??
    });
    // the question is sent if it has more than 2 characters
    if (serachingText.length > 2) {
      // serachingText -> our text in searching
      this.props.onSearch(serachingText);
    }
  },
  // recognizes that the pressed key is enter and sends a message to the parent
  //so that this one again starts the function that sends the query after the gifa
  handleKeyUp: function(event) {
    // 13 it is code button ENTER
    // if you press the key ENTER
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.serachingText);
    }
  },

  // --------------------------------RENDER-------------------------------------
  render: function() {

    var styles = {
      fontSize: '1.5em',
      width: '90%',
      maxWidth: '350px'
    };


    return < input
      type = 'text'
      onChange = {this.handleChange}  //?
      // listening for pressing the enter key
      onKeyUp = {this.handleKeyUp}
      placeholder = 'Enter the search phrase here'
      style = {styles}
      value = {this.state.searchTerm} //???serachTerm
    />

  }
});
