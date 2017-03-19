namespace filter {

  angular.module('filter', []);

  // set up our home controller to have an array of strings. String values are
  // used more than once so we have something to filter through.
  class HomeController {
    public items = ['hello', 'world', 'this', 'hello', 'should', 'make', 'hello', 'sense'];
  }

  angular.module('filter').controller('HomeController', HomeController); 
}
