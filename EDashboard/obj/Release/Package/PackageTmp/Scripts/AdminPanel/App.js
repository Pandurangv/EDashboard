//// JavaScript source code

var EDashboard = angular.module('EDashboard', []).run(['$rootScope', function ($rootScope) {
    
}]).filter("mydate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {
        if (x != null && x !== undefined) {
            var m = x.match(re);
            if (m) return new Date(parseInt(m[1]));
            else return null;
        }
        else return null;
    };
}).directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
}).directive('ngFocusOut', function( $timeout ) {
    return function( $scope, elem, attrs ) {
        $scope.$watch(attrs.ngFocusOut, function( newval ) {
            if ( newval ) {
                $timeout(function() {
                    elem[0].focusout();
                }, 0, false);
            }
        });
    };
});

//EDashboard.controller("TemplateController", ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {
    
//    $scope.domainpath = GetVirtualDirectory();

//    $scope.templates = [
//    //name: "employee",0
//    {
//        name: $scope.domainpath + '/Content/Views/device.html',
//        url: $scope.domainpath + '/Content/Views/device.html'
//    }];
    
//    $scope.validateEmail=function (element) {
//        var isvalid = true;
//        var reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
//        isvalid = reg.test(element);
       
//        return isvalid;
//    }
//    $scope.NumericAadhar = function ($event, aadhar) {
//        if (isNaN(String.fromCharCode($event.keyCode))) {
//            $event.preventDefault();
//        }
//        if (aadhar.length > 11) {
//            $event.preventDefault();
//        }
//         if(no.length<11)
//        {
//           return valid=false

//        }
//    }
//    $scope.NumericPhone = function ($event, no) {
//        var valid = true;
//        if (isNaN(String.fromCharCode($event.keyCode))) {
//            $event.preventDefault();
//        }
//        if (no.length > 9) {
//            $event.preventDefault();
//        }
//        if(no.length<9)
//        {
//           return valid=false

//        }
//    }

//    $scope.Phone = function (no) {
//        var no1 = true;
        
//        if (no.toString().length < 10 || isNaN(no)) {
//            return no1 = false;
//        }
//    }
//    $scope.aadhar = function (no) {
//        var no1 = true;

//        if (no.toString().length < 11 || isNaN(no)) {
//            return no1 = false;
//        }
//    }

    
    
//    $scope.LoadUserControls = function (tname) {
//        switch (tname) {
//            case "device":
//                $scope.template = $scope.templates[0];
//                break
//            default:
//                $scope.template = $scope.templates[0];
//                break;

//        }
//    }

//    $scope.init = function () {
//        $scope.template = $scope.templates[0];
        
//    }

//    $scope.init();
//}]);
