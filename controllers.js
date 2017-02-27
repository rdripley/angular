var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var products = [
            { id: 1, name: 'Milk', price: 5.00 },
            { id: 2, name: 'Cheese', price: 17.00 },
            { id: 3, name: 'Apples', price: 3.40 }
        ];
        var ProductListController = (function () {
            function ProductListController($state) {
                this.$state = $state;
                this.products = products;
            }
            ProductListController.prototype.goToProduct = function (product) {
                this.$state.go('Details', { id: product.id });
            };
            return ProductListController;
        }());
        Controllers.ProductListController = ProductListController;
        var ProductDetailsController = (function () {
            function ProductDetailsController($stateParams) {
                this.product = products.filter(function (p) { return p.id == $stateParams['id']; })[0];
            }
            return ProductDetailsController;
        }());
        Controllers.ProductDetailsController = ProductDetailsController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEtBQUssQ0F5QmQ7QUF6QkQsV0FBVSxLQUFLO0lBQUMsSUFBQSxXQUFXLENBeUIxQjtJQXpCZSxXQUFBLFdBQVc7UUFFekIsSUFBSSxRQUFRLEdBQUc7WUFDYixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO1lBQ2xDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7WUFDckMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztTQUNyQyxDQUFDO1FBRUY7WUFPRSwrQkFBb0IsTUFBTTtnQkFBTixXQUFNLEdBQU4sTUFBTSxDQUFBO2dCQU5uQixhQUFRLEdBQUcsUUFBUSxDQUFDO1lBTUcsQ0FBQztZQUp4QiwyQ0FBVyxHQUFsQixVQUFtQixPQUFPO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUdILDRCQUFDO1FBQUQsQ0FBQyxBQVJELElBUUM7UUFSWSxpQ0FBcUIsd0JBUWpDLENBQUE7UUFFRDtZQUdFLGtDQUFZLFlBQVk7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsQ0FBQztZQUNILCtCQUFDO1FBQUQsQ0FBQyxBQU5ELElBTUM7UUFOWSxvQ0FBd0IsMkJBTXBDLENBQUE7SUFDSCxDQUFDLEVBekJlLFdBQVcsR0FBWCxpQkFBVyxLQUFYLGlCQUFXLFFBeUIxQjtBQUFELENBQUMsRUF6QlMsS0FBSyxLQUFMLEtBQUssUUF5QmQiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgTXlBcHAuQ29udHJvbGxlcnMge1xyXG5cclxuICBsZXQgcHJvZHVjdHMgPSBbXHJcbiAgICB7aWQ6IDEsIG5hbWU6ICdNaWxrJywgcHJpY2U6IDUuMDB9LFxyXG4gICAge2lkOiAyLCBuYW1lOiAnQ2hlZXNlJywgcHJpY2U6IDE3LjAwfSxcclxuICAgIHtpZDogMywgbmFtZTogJ0FwcGxlcycsIHByaWNlOiAzLjQwfVxyXG4gIF07XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbnRyb2xsZXIge1xyXG4gICAgcHVibGljIHByb2R1Y3RzID0gcHJvZHVjdHM7XHJcblxyXG4gICAgcHVibGljIGdvVG9Qcm9kdWN0KHByb2R1Y3QpIHtcclxuICAgICAgdGhpcy4kc3RhdGUuZ28oJ0RldGFpbHMnLCB7IGlkOiBwcm9kdWN0LmlkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkc3RhdGUpIHsgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxzQ29udHJvbGxlciB7XHJcbiAgICBwdWJsaWMgcHJvZHVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigkc3RhdGVQYXJhbXMpIHtcclxuICAgICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdHMuZmlsdGVyKChwKSA9PiBwLmlkID09ICRzdGF0ZVBhcmFtc1snaWQnXSlbMF07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==