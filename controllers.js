var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var FavoriteAnimalController = (function () {
            function FavoriteAnimalController($mdDialog) {
                this.$mdDialog = $mdDialog;
            }
            FavoriteAnimalController.prototype.openDialog = function (animalName) {
                this.$mdDialog.show({
                    controller: AnimalDialogController,
                    controllerAs: 'modal',
                    templateUrl: '/dialog.html',
                    clickOutsideToClose: true,
                    locals: { animalName: animalName }
                });
            };
            return FavoriteAnimalController;
        }());
        angular.module('MyApp').controller('FavoriteAnimalController', FavoriteAnimalController);
        var AnimalDialogController = (function () {
            function AnimalDialogController(animalName) {
                this.animalName = animalName;
            }
            return AnimalDialogController;
        }());
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEtBQUssQ0FzQlo7QUF0QkgsV0FBVSxLQUFLO0lBQUMsSUFBQSxXQUFXLENBc0J4QjtJQXRCYSxXQUFBLFdBQVc7UUFFekI7WUFZSSxrQ0FBb0IsU0FBUztnQkFBVCxjQUFTLEdBQVQsU0FBUyxDQUFBO1lBQUksQ0FBQztZQVYzQiw2Q0FBVSxHQUFqQixVQUFrQixVQUFrQjtnQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCLFVBQVUsRUFBRSxzQkFBc0I7b0JBQ2xDLFlBQVksRUFBRSxPQUFPO29CQUNyQixXQUFXLEVBQUUsY0FBYztvQkFDM0IsbUJBQW1CLEVBQUUsSUFBSTtvQkFDekIsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtpQkFDbkMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQUdILCtCQUFDO1FBQUQsQ0FBQyxBQWJILElBYUc7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBRXZGO1lBQ0UsZ0NBQW1CLFVBQWtCO2dCQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO1lBQUksQ0FBQztZQUM1Qyw2QkFBQztRQUFELENBQUMsQUFGRCxJQUVDO0lBQ0wsQ0FBQyxFQXRCYSxXQUFXLEdBQVgsaUJBQVcsS0FBWCxpQkFBVyxRQXNCeEI7QUFBRCxDQUFDLEVBdEJPLEtBQUssS0FBTCxLQUFLLFFBc0JaIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIE15QXBwLkNvbnRyb2xsZXJzIHtcclxuXHJcbiAgY2xhc3MgRmF2b3JpdGVBbmltYWxDb250cm9sbGVyIHtcclxuXHJcbiAgICAgIHB1YmxpYyBvcGVuRGlhbG9nKGFuaW1hbE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgY29udHJvbGxlcjogQW5pbWFsRGlhbG9nQ29udHJvbGxlcixcclxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ21vZGFsJyxcclxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2RpYWxvZy5odG1sJyxcclxuICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICBsb2NhbHM6IHsgYW5pbWFsTmFtZTogYW5pbWFsTmFtZSB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSAkbWREaWFsb2cpIHsgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdNeUFwcCcpLmNvbnRyb2xsZXIoJ0Zhdm9yaXRlQW5pbWFsQ29udHJvbGxlcicsIEZhdm9yaXRlQW5pbWFsQ29udHJvbGxlcik7XHJcblxyXG4gICAgICBjbGFzcyBBbmltYWxEaWFsb2dDb250cm9sbGVyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYW5pbWFsTmFtZTogc3RyaW5nKSB7IH1cclxuICAgICAgfVxyXG4gIH1cclxuIl19