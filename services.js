var filter;
(function (filter) {
    angular.module('filter', []);
    var HomeController = (function () {
        function HomeController() {
            this.items = ['hello', 'world', 'this', 'hello', 'should', 'make', 'hello', 'sense'];
        }
        return HomeController;
    }());
    angular.module('filter').controller('HomeController', HomeController);
})(filter || (filter = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE1BQU0sQ0FXZjtBQVhELFdBQVUsTUFBTTtJQUVkLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBSTdCO1FBQUE7WUFDUyxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekYsQ0FBQztRQUFELHFCQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN4RSxDQUFDLEVBWFMsTUFBTSxLQUFOLE1BQU0sUUFXZiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBmaWx0ZXIge1xyXG5cclxuICBhbmd1bGFyLm1vZHVsZSgnZmlsdGVyJywgW10pO1xyXG5cclxuICAvLyBzZXQgdXAgb3VyIGhvbWUgY29udHJvbGxlciB0byBoYXZlIGFuIGFycmF5IG9mIHN0cmluZ3MuIFN0cmluZyB2YWx1ZXMgYXJlXHJcbiAgLy8gdXNlZCBtb3JlIHRoYW4gb25jZSBzbyB3ZSBoYXZlIHNvbWV0aGluZyB0byBmaWx0ZXIgdGhyb3VnaC5cclxuICBjbGFzcyBIb21lQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgaXRlbXMgPSBbJ2hlbGxvJywgJ3dvcmxkJywgJ3RoaXMnLCAnaGVsbG8nLCAnc2hvdWxkJywgJ21ha2UnLCAnaGVsbG8nLCAnc2Vuc2UnXTtcclxuICB9XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKCdmaWx0ZXInKS5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIEhvbWVDb250cm9sbGVyKTsgXHJcbn1cclxuIl19