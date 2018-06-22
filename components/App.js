var GIPHY_API_URL = 'https://api.giphy.com';
var GIPHY_PUB_KEY = 'q4k1xiFfyXHFEVGeG4SYB8VJsIA5OtQu'; 

App = React.createClass({
  getInitialState(){
    return {
      loading: false,
      searchingText: '',
      gif: {}
    };
  },

  handleSearch: function(searchingText) {
    this.setState({
      loading: true
    });
    this.getGif(searchingText, function(gif) {
      this.setState({
        loading: false,
        gif: gif,
        searchingText: searchingText
      });
    }.bind(this));
  },

  getGif: function(searchingText, callback) {
    var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText).data;
        var gif = {
          url: data.fixed_width_downsampled_url,
          sourceUrl: data.url
        };
        callback(gif);
      }
    };
    xhr.send();
  },

  render: function() {

    var styles = {
      margin: '0 auto',
      textAlign: 'center',
      width: '90%'
    };

    return (
      <div>
        <h1> wyszukiwarka GIF </h1>
        <p>Znajdz gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrac kolejne gify</p>
        <Search  onSearch = {this.handleSearch}/>
        <Gif
        // information about gif
          // loading --> gif is loading
          loading = {this.state.loading}
          // direct url -> img src={url}../>
          url = {this.state.gif.url}
          // address to the page with a gif -> <a href={scrUrl}>..</a>
          sourceUrl = {this.state.gif.sourceUrl}
        />
      </div>
    );
  }
});
