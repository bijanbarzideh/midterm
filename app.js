//verify that the js file was loaded
console.log('app.js loaded')
//create an angular module called "Portfolio" that accepts a factory called "StockFactory"
angular.module('Portfolio', [])
    .controller('Stocks', Stocks)
    .factory('StockFactory', StockFactory)
//inject the stock factory into the "Stocks" controller
Stocks.$inject = ['StockFactory']
//create the controller function
  function Stocks(StockFactory) {
//verify the Stocks controller has been loaded
    console.info('StocksController:loaded')

    var stocks= this
//create an empty string called "stock" and set the stocks.list to StockFactory.stock - this is where the data will be stored
    stocks.stockName = ''
    stocks.list = StockFactory.stock
//create a function called addStock which is called when the submit button is pressed,this will push the data from the input fiel to the StockFactory
//   stocks.addStock = function() {
// //verify that the addStock has been called when submit is pressed
//     console.debug('clicked submit success');
//
//     StockFactory.stock.push({
//       stock: stocks.stock
//     })
// //print out the stocks to see what is currently in the list
//     console.log(stocks)
// //reset the input field to empty
//     stocks.stock='' // because of data binding, this will clear the form value for the input
//   };
// //create function called stockRemove which is called when the remove stock button is pressed, it will remove the date from the array for which ever option is selected
//     stocks.stockRemove = function (stock) {
//       console.log("stockRemove button pressed")
//
//       var index = stocks.list.indexOf(stock)
//
//       if( index !== -1 ) {
//         stocks.list.splice(index,1)
//       }
//     }
    stocks.selectStock = function(){
      console.log('div selected')
      // StockFactory.stock.push({
      //
      // stockName:stockSelected.stockName;
      // stockSymbol:stockSelected.stockSymbol;
      // lastPrice:stockSelected.lastPrice;
      // priceChange:stockSelected.priceChange;
      // currentChange:stockSelected.currentChange;
      // changePercentYTD:stockSelected.changePercentYTD;
      //
    }
  };
//create factory to which the data will be stored
  function StockFactory() {
    return {
      stockSelected: [{
        stockName:'Apple Inc',
        stockSymbol:'AAPL',
        lastPrice:"$96.68",
        priceChange:"-.66",
        currentChange:"-.68%",
        changePercentYTD:"-8.15%",
      },{
        stockName:'General Electric CO',
        stockSymbol:'GE',
        lastPrice:"$31.47",
        priceChange:"-.17",
        currentChange:"-.54%",
        changePercentYTD:"-1.03%",
      },{
        stockName:'Tesla Motors Inc',
        stockSymbol:'TSLA',
        lastPrice:"$229.44",
        priceChange:"-.57%",
        currentChange:"-.68%",
        changePercentYTD:"-8.15%",
      },{
        stockName:'AT&T Inc',
        stockSymbol:'T',
        lastPrice:"$42.365",
        priceChange:"-.57",
        currentChange:"-1.34%",
        changePercentYTD:"23.12%",
      },{
        stockName:'IBM Corp',
        stockSymbol:'IBM',
        lastPrice:"$162.12",
        priceChange:"-.53",
        currentChange:"-.33%",
        changePercentYTD:"17.80%",
      },{
        stockName:'Microsoft Corp',
        stockSymbol:'MSFT',
        lastPrice:"$56.77",
        priceChange:"+.04",
        currentChange:"+.07%",
        changePercentYTD:"2.33%",
      },{
        stockName:'Exxon Mobil Corp',
        stockSymbol:'XOM',
        lastPrice:"$91.53",
        priceChange:"-.67",
        currentChange:"-.73%",
        changePercentYTD:"17.42%",
      },{
        stockName:'GoPro Inc',
        stockSymbol:'GPRO',
        lastPrice:"$11.32",
        priceChange:"-.09",
        currentChange:"+.07%",
        changePercentYTD:"-37.15%",
      },{
        stockName:'Amazon.com Inc',
        stockSymbol:'AMZN',
        lastPrice:"$735.48",
        priceChange:"-4.13",
        currentChange:"-.56%",
        changePercentYTD:"8.82%",
      },{
        stockName:'Activision Blizzard Inc',
        stockSymbol:'ATVI',
        lastPrice:"$41.56",
        priceChange:"-.84",
        currentChange:"-1.98%",
        changePercentYTD:"7.36%",
      },{
        stockName:'Chipotle Mexican Grill Inc',
        stockSymbol:'CMG',
        lastPrice:"$430.84",
        priceChange:"-10.68",
        currentChange:"-2.42%",
        changePercentYTD:"-10.21%",
      },{
        stockName:'Ford Motor Co',
        stockSymbol:'F',
        lastPrice:"$13.875",
        priceChange:"+.20",
        currentChange:"+1.43%",
        changePercentYTD:"-1.53%",
      }]
    };
  };
