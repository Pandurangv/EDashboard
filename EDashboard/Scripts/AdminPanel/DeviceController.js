EDashboard.controller("DeviceController", ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {

    $scope.urlBase="";
    $scope.Device = { PageNo: 1, PageSize: 50};

    $scope.TotalPages = 0;
    $scope.TotalRecords = 0;

    $scope.DeviceMessgesList = [];

    $scope.NotificationCount = {};

    function getNotificationCount() {
        ShowLoader();
        $http({
            method: 'post',
            url: $scope.urlBase + '/Device/GetNotificationCount',
            data: $scope.Device,
        }).then(function (response) {
            HideLoader();
            $scope.NotificationCount = response.data[0];
        }, function (error) {
            HideLoader();
        })
    }



    $scope.selectedDevice={};

    $scope.ShowDetails = function (device) {
        ShowLoader();
        //google.charts.load('current', {
        //    packages: ['corechart', 'line']
        //});
        //google.charts.setOnLoadCallback(drawLineColors);
        $scope.selectedDevice = device;
        $("#Medium-modal").modal("show");
        HideLoader();
    }

    function drawLineColors() {
        ShowLoader();
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Min Voltage');
        data.addColumn('number', 'Max Voltage');
        var res = [];
        for (var i = 0; i < $scope.DeviceMessgesList.length; i++) {
            var arr = [$scope.DeviceMessgesList[i].MessageId, $scope.DeviceMessgesList[i].CellMinVoltage, $scope.DeviceMessgesList[i].CellMaxVoltage];
            res.push(arr);
        }
        data.addRows(res);
        //data.addRows([
        //  [1, 10, 5],
        //  [2, 23, 15],
        //  [3, 17, 9],
        //  [4, 18, 10],
        //  [5, 9, 5],
        //  [6, 11, 3],
        //  [7, 27, 19],
        //  [8, 33, 25],
        //  [9, 40, 32],
        //  [10, 32, 24]
        //]);

        var options = {
            hAxis: {
                title: 'Voltage'
            },
            vAxis: {
                title: 'Voltage'
            },
            colors: ['#a52714', '#097138']
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        HideLoader();
    }

    $scope.PageSizeChanged = function () {
        if ($scope.Device.PageSize !== $("#ddlPageSize").val()) {
            $scope.PageNo = 1;
            getNotifications();
        }
    }

    function getNotifications() {
        ShowLoader();
        
        $http({
            method: 'post',
            url: $scope.urlBase + '/Device/DeviceMessges',
            data: $scope.Device,
        }).then(function (response) {
            HideLoader();
            $scope.DeviceMessgesList = response.data;
            if ($scope.DeviceMessgesList.length > 0) {
                $scope.Device.PageSize = $("#ddlPageSize").val();
                $scope.TotalRecords = $scope.DeviceMessgesList[0].TotalRecords;
                $scope.TotalPages = parseInt($scope.TotalRecords / $scope.Device.PageSize);
                var reminder = $scope.TotalRecords % $scope.Device.PageSize;
                if (reminder > 0) {
                    $scope.TotalPages++;
                }
            }
        }, function (error) {
            HideLoader();
        })
    }

    $scope.first = function () {
        $scope.Device.PageNo = 1;
        $scope.Device.PageSize = $("#ddlPageSize").val();;
        getNotifications();
    }

    $scope.last = function () {
        $scope.Device.PageNo = $scope.TotalPages
        $scope.Device.PageSize = $("#ddlPageSize").val();
        getNotifications();
    }

    $scope.next = function () {
        if ($scope.Device.PageNo == $scope.TotalPages) {
            return false;
        }
        $scope.Device.PageNo++;
        $scope.Device.PageSize = $("#ddlPageSize").val();;
        getNotifications();
    }

    $scope.previous = function () {
        if ($scope.Device.PageNo==1) {
            return false;
        }
        $scope.Device.PageNo--;
        $scope.Device.PageSize = $("#ddlPageSize").val();
        getNotifications();
    }

    $scope.init=function(){
        $scope.urlBase = GetVirtualDirectory();
        $("#ddlPageSize").val(50);
        $scope.Device.PageSize = $("#ddlPageSize").val();
        $scope.Device.PageNo = 1;
        getNotifications();
        getNotificationCount();
    }

    $scope.init();
}])