// tutaj tradycyjnie wszystko będziemy wiązać w jeden byt.
// W tym komponencie będziemy odbierać wiadomość z komponentu zajmującego się
// wyszukiwaniem i przekazywać do komponentu, który wyświetli odpowiedniego GIFa
// pobieranie Gif

App = React.createClass({
// initial values of the state
  getInitialState(){
    return {
      loading: false,
      // key with component Search.ja
      searchingText: '',
      gif: {}
    };
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
        <Search />
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
