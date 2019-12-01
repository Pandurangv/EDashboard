EDashboard.controller("DeviceMasterController", ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {

    $scope.urlBase="";
    $scope.Device = { PageNo: 1, PageSize: 10, DeviceId:"", DeviceName:""};

    $scope.TotalPages = 0;
    $scope.TotalRecords = 0;

    $scope.DeviceList = [];

    $scope.NotificationCount = {};

    $scope.SaveData = false;
    $scope.Details = true;

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

    $scope.addDevice = function () {
        $scope.Details = false;
        $scope.SaveData = true;
        $scope.Device = { PageNo: 1, PageSize: 10, DeviceId:"", DeviceName:""};
    }

    $scope.cancelDevice = function () {
        $scope.Details = true;
        $scope.SaveData = false;
        $scope.Device = { PageNo: 1, PageSize: 10, DeviceId: "", DeviceName: "" };
        GetDeviceList();
    }

    $scope.insertDevice=function() {
        ShowLoader();
        $http({
            method: 'post',
            url: $scope.urlBase + '/DeviceRegistration/InsertDevice',
            data: $scope.Device,
        }).then(function (response) {
            HideLoader();
            var objShowCustomAlert = new ShowCustomAlert({
                Title: "Success",
                Message: "Device Registered successfully.",
                Type: "alert"
            });

            objShowCustomAlert.ShowCustomAlertBox();
            $scope.cancelDevice();
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
        for (var i = 0; i < $scope.DeviceList.length; i++) {
            var arr = [$scope.DeviceList[i].MessageId, $scope.DeviceList[i].CellMinVoltage, $scope.DeviceList[i].CellMaxVoltage];
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
            GetDeviceList();
        }
    }

    function GetDeviceList() {
        ShowLoader();
        
        $http({
            method: 'post',
            url: $scope.urlBase + '/DeviceRegistration/GetDeviceList',
            data: $scope.Device,
        }).then(function (response) {
            HideLoader();
            $scope.DeviceList = response.data;
            if ($scope.DeviceList.length > 0) {
                $scope.Device.PageSize = $("#ddlPageSize").val();
                $scope.TotalRecords = $scope.DeviceList[0].TotalRecords;
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
        GetDeviceList();
    }

    $scope.last = function () {
        $scope.Device.PageNo = $scope.TotalPages
        $scope.Device.PageSize = $("#ddlPageSize").val();
        GetDeviceList();
    }

    $scope.next = function () {
        if ($scope.Device.PageNo == $scope.TotalPages) {
            return false;
        }
        $scope.Device.PageNo++;
        $scope.Device.PageSize = $("#ddlPageSize").val();;
        GetDeviceList();
    }

    $scope.previous = function () {
        if ($scope.Device.PageNo==1) {
            return false;
        }
        $scope.Device.PageNo--;
        $scope.Device.PageSize = $("#ddlPageSize").val();
        GetDeviceList();
    }

    $scope.init=function(){
        $scope.urlBase = GetVirtualDirectory();
        $("#ddlPageSize").val(10);
        $scope.Device.PageSize = $("#ddlPageSize").val();
        $scope.Device.PageNo = 1;
        GetDeviceList();
        getNotificationCount();
    }

    $scope.init();
}])