// Closure:
// Functions can always remember the variables that they could see at creation

// Different ways to create and use libraries:

var sandwichLibrary = 'library of books about sandwiches';
// Method 1:

(function() {
  var breads = {
    wheet: 'The healthy option',
    white: 'The unhealthy option'
  };

  var fillings = {
    turkey: 'For boring sandwiches',
    cheese: 'For the vegetarians'
  };

  var sandwichLibrary = {
    breads: breads,
    fillings: fillings
  };

  window.sandwichLibrary = sandwichLibrary;
})();

console.log(sandwichLibrary);


// Method 2:

librarySystem('sandwichLibrary', function() {
  var breads = {
    wheet: 'The healthy option',
    white: 'The unhealthy option'
  };

  var fillings = {
    turkey: 'For boring sandwiches',
    cheese: 'For the vegetarians'
  };

  var sandwichLibrary = {
    breads: breads,
    fillings: fillings
  };

  return sandwichLibrary;
});

console.log(librarySystem(sandwichLibrary));


// Dynamically choosing either method:

(function() {
  var breads = {
    wheet: 'The healthy option',
    white: 'The unhealthy option'
  };

  var fillings = {
    turkey: 'For boring sandwiches',
    cheese: 'For the vegetarians'
  };

  var sandwichLibrary = {
    breads: breads,
    fillings: fillings
  };

  if (typeof librarySystem !== 'undefined') {
    // Handle library case.
    librarySystem('sandwichLibrary', function() {
      return sandwichLibrary;
    });
  } else {
    // Handle window case.
    var oldSandwichLibrary = window.sandwichLibrary;

    sandwichLibrary.noConflict = function() {
      window.sandwichLibrary = oldSandwichLibrary;
      return sandwichLibrary;
    };
    
    window.sandwichLibrary = sandwichLibrary;
  }

})();
