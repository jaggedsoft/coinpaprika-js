( async () => {
    if ( typeof module !== 'undefined' && module.exports ) {
        var axios = require( 'axios' ), exports = module.exports;
    } else {
        var exports = window.cp = {};
    }
    const instance = axios.create( {
        baseURL: 'https://api.coinpaprika.com/v1',
        headers: typeof window !== 'undefined' ? {} : {
            'User-Agent': 'coinpaprika-js'
        },
        timeout: 30000
    } );
    async function request( url, params = {} ) {
        return new Promise( ( resolve, reject ) => {
            instance.get( url, { params } )
                .then( function ( response ) {
                    resolve( response.data );
                } )
                .catch( function ( error ) {
                    if ( error.response ) console.warn( error.response.data );
                    throw error.message;
                } );
        } );
    }

    // Get market overview data
    exports.global = async ( params = {} ) => {
        return request( '/global', params );
    };

    // List coins
    exports.coins = async ( params = {} ) => {
        return request( '/coins', params );
    };

    // Get coin by ID
    exports.coin = async ( id = "btc-bitcoin", params = {} ) => {
        return request( `/coins/${id}`, params );
    };

    // Get markets by coin ID (USD,BTC,ETH,PLN)
    exports.markets = async ( id = "btc-bitcoin", params = { quotes: "USD" } ) => {
        return request( `/coins/${id}/markets`, params );
    };

    // Get exchanges by coin ID
    exports.exchanges = async ( id = "btc-bitcoin", params = {} ) => {
        return request( `/coins/${id}/exchanges`, params );
    };

    // Get events by coin ID
    exports.events = async ( id = "btc-bitcoin", params = {} ) => {
        return request( `/coins/${id}/events`, params );
    };

    // Get tweets by coin ID
    exports.twitter = async ( id = "btc-bitcoin", params = {} ) => {
        return request( `/coins/${id}/twitter`, params );
    };

    // Get tickers for all coins (USD,BTC,ETH)
    exports.tickers = async ( params = { quotes: "USD" } ) => {
        return request( '/tickers', params );
    };

    // Get ticker information for a specific coin (USD,BTC,ETH)
    exports.ticker = async ( id, params = {} ) => {
        return request( `/ticker/${id}`, params );
    };

    // Get historical ticker information for a specific coin (USD,BTC,ETH)
    exports.historical = async ( id, start, params = { end: false, interval: "5m", quote: "USD", limit: 1000 } ) => {
        params.start = start;
        if ( typeof params.end == "undefined" || !params.end ) params.end = new Date().toISOString();
        return request( `/tickers/${id}/historical`, params );
    };

    // Convert 5k USDT BTC = 0.66 BTC
    exports.convert = async ( amount, baseId, quoteId ) => {
        return request( `/price-converter`, {base_currency_id:baseId, quote_currency_id:quoteId, amount} );
    };

    // List exchanges (USD,BTC,ETH,PLN)
    exports.exchangeList = async ( params = { quotes: "USD" } ) => {
        return request( "/exchanges", params );
    };

    // Get exchange by ID (USD,BTC)
    exports.exchange = async ( id, params = { quotes: "USD" } ) => {
        return request( `/exchanges/${id}`, params );
    };

    // Get markets by exchange ID (USD,BTC,ETH,PLN)
    exports.exchangeMarkets = async ( id, params = { quotes: "USD" } ) => {
        return request( `/exchanges/${id}/markets`, params );
    };

    // Search
    exports.search = async ( query = "btc", params = { limit: 6, c: "currencies,exchanges,icos,people,tags" } ) => {
        params.q = query;
        return request( `/search`, params );
    };

    // Get 24h OHLC candle (USD,BTC)
    exports.candle = async ( id = "btc-bitcoin", params = { quote: "USD" } ) => {
        return request( `/coins/${id}/ohlcv/latest/`, params );
    };
    
    // Get historical OHLCV information for a specific coin (USD,BTC)
    exports.candles = async ( id, start, params = { end: false, quote: "USD", limit: 366 } ) => {
        params.start = start;
        if ( typeof params.end == "undefined" || !params.end ) params.end = new Date().toISOString();
        return request( `/coins/${id}/ohlcv/historical`, params );
    };

    // Get Today's OHLC candle: rolls over at 23:59:59 (USD,BTC)
    exports.today = async ( id = "btc-bitcoin", params = { quote: "USD" } ) => {
        return request( `/coins/${id}/ohlcv/today/`, params );
    };

    // List tags
    exports.tags = async ( fields = "coins,icos", params = {} ) => {
        params.additional_fields = fields;
        return request( "/tags", params );
    };

    // Get tag by ID
    exports.tag = async ( id = "blockchain-service", fields = "coins,icos", params = {} ) => {
        params.additional_fields = fields;
        return request( `/tags/${id}`, params );
    };

    // Get people by ID
    exports.people = async ( id = "vitalik-buterin", params = {} ) => {
        return request( `/people/${id}`, params );
    };

    //////////////////////////////////////////////////////////////////////////////////////////////
    // UNSUPPORTED API ENDPOINTS:
    // These are not documented on https://api.coinpaprika.com and could stop working at any time
    //////////////////////////////////////////////////////////////////////////////////////////////

    // Get market depth by ID
    exports.depth = async ( id = "btc-bitcoin", currency = "usd-us-dollars", params = {} ) => {
        return request( `https://coinpaprika.com/ajax/transparency/markets-depth/${id}/${currency}/`, params );
    };

    // Get market capitalization (24h 7d 30d 1q 1y YTD MAX)
    exports.mcap = async ( timeframe = "24h", params = {} ) => {
        return request( `https://coinpaprika.com/overview/data/total/${timeframe}/`, params );
    };

    // Get market capitalization excluding BTC (24h 7d 30d 1q 1y YTD MAX)
    exports.altcap = async ( timeframe = "24h", params = {} ) => {
        return request( `https://coinpaprika.com/overview/data/totalExclude/${timeframe}/`, params );
    };

} )();
