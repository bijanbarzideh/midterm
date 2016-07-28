var MyClass = function(){}

//test to see if app.js loaded
  console.log('app.js:loaded')

  MyClass.prototype.init = function()
    {
      this.bindEvents();
    };

  MyClass.prototype.bindEvents = function()
    {
      $('.grid-element').click($.proxy(this.handleGridElementClick, this));
    };

    //create a prototype called handleGridElementClick that uses the data
    //ticker symbol to use as an input for the api
      MyClass.prototype.handleGridElementClick = function(){

        this.getQuote(symbol);
      };
    MyClass.prototype.handleGridElementClick = function(event){


      var symbol = $(event.target).attr("data-ticker");

      this.getQuote(symbol);
  };

    MyClass.prototype.getSymbol(event){
        var symbol = $(event.target).attr('data-ticker')
    }

  MyClass.prototype.quoteDone = function(data){
    alert('done');
  };
  MyClass.prototype.getQuote = function(symbol){

    $.ajax({
    url: "http://dev.markitondemand.com/Api/v2/Quote",
    data:{
      symbol:symbol,
    },
    type:'get',
    dataType:'jsonp'

    }).done(function() { alert("success");})
      .fail(function() { alert("error"); });

  }


$(document).ready(function(){
    $("div.grid-element").on("click", function(event){
      console.log(this);
      $(event.currentTarget)
    });

});

MyClass.prototype.quoteDataDisplay = function(){
    $('#CompanyNameCell').html('name of company');
    $('#CompanySymbolCell').html('name of symbol ');
    $('#LastPriceCell').html('last price ');
    $('#ChangeCell').html('change ');
    $('#ChangePercentCell').html('Change %');
    $('#ChangeYTDCell').html('change ytd');
}
