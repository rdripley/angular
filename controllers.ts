namespace MyApp.Controllers {

  let products = [
    {id: 1, name: 'Milk', price: 5.00},
    {id: 2, name: 'Cheese', price: 17.00},
    {id: 3, name: 'Apples', price: 3.40}
  ];

  export class ProductListController {
    public products = products;

    public goToProduct(product) {
      this.$state.go('Details', { id: product.id});
    }

    constructor(private $state) { }
  }

  export class ProductDetailsController {
    public product;

    constructor($stateParams) {
      this.product = products.filter((p) => p.id == $stateParams['id'])[0];
    }
  }
}
