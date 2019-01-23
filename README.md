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
    console.log( await cp.global() );
    console.log( await cp.coins() );
    console.log( await cp.coin( "btc-bitcoin" ) );
    console.log( await cp.OHLCVLatest() );
    console.log( await cp.OHLCVToday() );
    console.log( await cp.tickers() );
    console.log( await cp.ticker( "btc-bitcoin", { quotes: "USD,BTC,ETH" } ) );
    console.log( await cp.historical( "btc-bitcoin", "2019-01-20" ) );
    console.log( await cp.exchangeList() );
    console.log( await cp.exchange("binance") );
    console.log( await cp.exchangeMarkets( "binance" ) );
    console.log( await cp.markets( "btc-bitcoin" ) );
    console.log( await cp.exchanges( "btc-bitcoin" ) );
    console.log( await cp.events( "btc-bitcoin" ) );
    console.log( await cp.search( "btc" ) );
    console.log( await cp.twitter( "btc-bitcoin" ) );
} )();
```

[![Views](http://hits.dwyl.io/jaggedsoft/coinpaprika-js.svg)](http://hits.dwyl.io/jaggedsoft/coinpaprika-js)
