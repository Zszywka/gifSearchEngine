// zajmie się wyświetleniem gifa albo loadera
// (czyli kręcącego się kółka oznajmującego ładowanie obrazka)
// w przypadku kiedy nawiązywane jest połączenie z serwerem.

// gif loading
var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

// dlaczego zmienna jest na zewnatrz Gif a nie w srodku?
var styles = {
  minHeight: '310px',
  margin: '0.5em'
};

Gif = React.createClass({
  getUrl: funtion() {

    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },
  render: function() {
    
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
    return(
      <div style = {styles}>
        <a href = {this.getUrl()} title = 'view this on giphy' target = 'new'>
          <img id = 'gif' src = {url} style = {{width: '100%', maxWidth: '350px'}}/>
        </a>
      </div>
    );
  }
});
