
//test to see if document.js loaded
console.log('document.js:loaded');

//define page object
var MyClass = function(){};

//create prototype init and bind events to the page object
MyClass.prototype.init = function()
{
  this.bindEvents();
};

//create prototype bindEvents.this is going to bind the click events
//reason to use proxy is we want to use the event info of what was selected.
MyClass.prototype.bindEvents = function()
{
  $('div.grid-element').on('click', $.proxy(this.getSymbol, this));
};

//create prototype getSymbol. getsymbol will create a variable symbol
// and set the value to the attr "data-ticker" of the selectedevent
MyClass.prototype.getSymbol = function(event){
  var symbol = $(event.target).attr('data-ticker');

  this.getQuote(symbol)
};

MyClass.prototype.updateCompanyInfo = function(response){
  console.log(response);
  $('#headName').html(response.Name || "--");
  $('#headSymbol').html(response.Symbol || "--");
  $('#CompanyNameCell').html(response.Name || "--");
  $('#CompanySymbolCell').html(response.Symbol || "--");
  $('#LastPriceCell').html(response.LastPrice || "--");
  $('#ChangeCell').html(response.Change || "--");
  $('#ChangePercentCell').html(response.ChangePercent || "--");
  $('#ChangeYTDCell').html(response.ChangePercentYTD || "--");
  $('#OpenCell').html(response.Open || "--");
  $('#HighCell').html(response.High || "--");
  $('#LowCell').html(response.Low || "--");
};

MyClass.prototype.updateCompanyInfoOptimized = function(response){
  console.log("optimized: ", response);
  //var $CompanyDetailsTable = $("#CompanyDetails");

  for(var key in response)
  {
    $("[data-bind=" + key + "]").html(response[key] || "--");
  }
  //^^^^^this is the optimized version of the code below
  // $('#headName').html(response.Name);
  // $('#headSymbol').html(response.Symbol);
  // $('#CompanyNameCell').html(response.Name);
  // $('#CompanySymbolCell').html(response.Symbol);
  // $('#LastPriceCell').html(response.LastPrice);
  // $('#ChangeCell').html(response.Change);
  // $('#ChangePercentCell').html(response.ChangePercent);
  // $('#ChangeYTDCell').html(response.ChangePercentYTD);
  // $('#OpenCell').html(response.Open);
  // $('#HighCell').html(response.High);
  // $('#LowCell').html(response.Low);

};

MyClass.prototype.updateCompanyFail = function(){
  console.log("error");
  // display dashes during an error state
  this.updateCompanyInfo({});
};

//create prototype getQuote.this is going to use the symbol retrieved from the getSymbol
MyClass.prototype.getQuote = function(symbol) {
  //do ajax and pass 'symbol' to the query string
  //when it completes  attach a promise,done or fail
  $.ajax({
    url: "http://dev.markitondemand.com/Api/v2/Quote/jsonp",
    data:{
      symbol: symbol,
    },
    type:'GET',
    dataType:'jsonp'
  })
  .done($.proxy(this.updateCompanyInfoOptimized, this))
  .fail($.proxy(this.updateCompanyFail, this));
};

//on document load bind a click event
$('document').ready(function(){
  // create instance of MyClass
  var myApp = new MyClass();

  // initialize the instance. This will bind events and call get quote for appl
  myApp.init();
  myApp.getQuote("aapl");
})
