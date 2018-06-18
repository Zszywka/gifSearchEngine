// tutaj tradycyjnie wszystko będziemy wiązać w jeden byt.
// W tym komponencie będziemy odbierać wiadomość z komponentu zajmującego się
// wyszukiwaniem i przekazywać do komponentu, który wyświetli odpowiedniego GIFa
// pobieranie Gif
var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var GIPHY_PUB_KEY = 'q4k1xiFfyXHFEVGeG4SYB8VJsIA5OtQu'; //???

App = React.createClass({
// initial values of the state
  getInitialState(){
    return {
      loading: false,
      // key with component Search.js
      searchingText: '',
      gif: {}
    };
  },

  // pobierz na wejsciu wpisany tekst
  handleSearch: function(searchingText) {
    this.setState({
      // zasygnalizuj ze zaczol sie proces ladowania
      loading: true
    });
    // rozpocznij pobieranie gifa
    this.getGif(searchingText, function(gif) {
      // na zakonczenie pobierania
      this.setState({
        // przestan sygnalizowac ladowanie
        loading: false,
        // ustaw nowego gifa z wyniku pobierania
        gif: gif,
        // ustaw nowy stan dla wyszukiwanego tekstu
        searchingText: searchingText
      });
      // this.getGif()-> wskazuje na cos innego niz komponent App,
      // metoda bind obejdzie to i zachowa kontekst, wskaze na gifa
    }.bind(this));
  },

  // na wejscie przyjmujemy parametr tekst wpisany, funkcja ktora ma sie wykonac po pobraniu
  getGif: function(searchingText, callback) {
    // kontruujemy adres URL dla API Giphy
    var url = GIPHY_LOADING_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
    // wywolujemy cala sekwencje tworzenia zapytania do XHR do serwera i wysylamy je
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status === 200) {
        // w obiekcie odpowiedzi mamy obiekt z danymi, rozpakkowujemy je do zmiennej data
        var data = JSON.parse(xhr.responseText).data;
        // ukladamy obiekt gif na podstawie tego co przyslala serwer
        var gif = {
          url: data.fixed_width_downsampled_url,
          sourceUrl: data.url
        };
        // ten obiekt przekazujemy do funkcji callback, a callback to 2 parametr getGif
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
