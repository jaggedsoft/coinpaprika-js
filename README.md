[![Latest Version](https://img.shields.io/github/release/jaggedsoft/coinpaprika-js.svg?style=flat-square)](https://github.com/jaggedsoft/coinpaprika-js/releases) 
[![GitHub last commit](https://img.shields.io/github/last-commit/jaggedsoft/coinpaprika-js.svg?maxAge=2400)](#)
[![npm downloads](https://img.shields.io/npm/dt/coinpaprika-js.svg?maxAge=7200)](https://www.npmjs.com/package/coinpaprika-js)

[![NPM](https://nodei.co/npm/coinpaprika-js.png?compact=true)](https://npmjs.org/package/coinpaprika-js)


#### Installation
```
npm install coinpaprika-js
```

This project is designed to help you make your own projects that interact with the [coinpaprika.com API](https://api.coinpaprika.com/) in javascript.

[Coinpaprika](https://coinpaprika.com) delivers full market data to the world of crypto: coin prices, volumes, market caps, ATHs, return rates and more.

```js
( async () => {
    const cp = require( 'coinpaprika-js' );
    
    // Get market overview data
    console.log( await cp.global() );
    
    // List coins
    console.log( await cp.coins() );
    
    // Get coin by ID
    console.log( await cp.coin("btc-bitcoin") );
    
    // Get 24h OHLC candle (USD,BTC)
    console.log( await cp.OHLCVLatest() );
    
    // Get Today's OHLC candle: rolls over at 23:59:59 (USD,BTC)
    console.log( await cp.OHLCVToday() );
    
    // Get tickers for all coins (USD,BTC,ETH)
    console.log( await cp.tickers() );
    
    // Get ticker information for a specific coin (USD,BTC,ETH)
    console.log( await cp.ticker("btc-bitcoin", { quotes: "USD,BTC,ETH" }) );
    
    // Get historical ticker information for a specific coin (USD,BTC,ETH)
    console.log( await cp.historical("btc-bitcoin", "2019-01-20") );
    
    // List exchanges (USD,BTC,ETH,PLN)
    console.log( await cp.exchangeList() );
    
    // Get exchange by ID (USD,BTC)
    console.log( await cp.exchange("binance") );
    
    // Get markets by exchange ID (USD,BTC,ETH,PLN)
    console.log( await cp.exchangeMarkets("binance") );
    
    // Get markets by coin ID (USD,BTC,ETH,PLN)
    console.log( await cp.markets("btc-bitcoin") );
    
    // Get exchanges by coin ID
    console.log( await cp.exchanges("btc-bitcoin") );
    
    // Get events by coin ID
    console.log( await cp.events("btc-bitcoin") );
    
    // Get tweets by coin ID
    console.log( await cp.twitter("btc-bitcoin") );
    
    // Get person by ID
    console.log( await cp.people("vitalik-buterin") );
    
    // List tags
    console.log( await cp.tags("coins,icos") );
    
    // Get tag by ID
    console.log( await cp.tag("blockchain-service") );
    
    // Search
    console.log( await cp.search("btc") );
} )();
```

#### Browser usage
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="coinpaprika.js"></script>
<script>
    (async () => {
        console.log(await cp.global());
    })();
</script>
```

#### Documentation
See https://api.coinpaprika.com

[![Views](http://hits.dwyl.io/jaggedsoft/coinpaprika-js.svg)](http://hits.dwyl.io/jaggedsoft/coinpaprika-js)
