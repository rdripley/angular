namespace MyApp.Controllers {

  class FavoriteAnimalController {

      public openDialog(animalName: string) {
        this.$mdDialog.show({
          controller: AnimalDialogController,
          controllerAs: 'modal',
          templateUrl: '/dialog.html',
          clickOutsideToClose: true,
          locals: { animalName: animalName }
        })
      }

      constructor(private $mdDialog) { }
    }

    angular.module('MyApp').controller('FavoriteAnimalController', FavoriteAnimalController);

      class AnimalDialogController {
        constructor(public animalName: string) { }
      }
  }
