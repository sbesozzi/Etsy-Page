(function () {

// var firstItem = etsy.results[0];

var templateString = $('#itemTemplate').text();

// var templateString = '
// // <div>
// // <p>
// // <%= title %>
// // </p>
// // <p class+"price">$<%<%= price %>
// // </p>
// // </div>';


// Call template function to call out string 
var templateFunction = _.template(templateString);

_.each(etsy.results, function (item) {
  
  var itemHTML = templateFunction(item);
  
  $('.container').append(itemHTML);

});

  
}());