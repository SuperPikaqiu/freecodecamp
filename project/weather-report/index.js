var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.getWeather = function() {
    var api = "https://v.juhe.cn/weather/index";
    var appKey = "783de8d7fddd4e67d0adc31ba5252fc1";
    var cityName = encodeURI("深圳");
    var url = api + "?cityname=" + cityName + "&key=" + appKey;

    $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      success: function(data) {
        if (data.resultcode === "200") {
          $scope.data = {};
          $scope.data.temp = data.result.sk.temp;
          $scope.data.city = data.result.today.city;
          $scope.data.humidity = data.result.sk.humidity;
          $scope.data.weather = data.result.today.weather;
          $scope.data.temperature = data.result.today.temperature;
          $scope.data.dressing_index = data.result.today.dressing_index;
          $scope.data.dressing_advice = data.result.today.dressing_advice;
          $scope.data.uv_index = data.result.today.uv_index;
          $scope.data.comfort_index = data.result.today.comfort_index;
          $scope.data.wash_index = data.result.today.wash_index;
          $scope.data.travel_index = data.result.today.travel_index;
          $scope.data.exercise_index = data.result.today.exercise_index;

          $scope.futureData = data.result.future;
          delete $scope.futureData[Object.keys($scope.futureData)[0]];
          // $scope.futureData = [];
          // let count = 0;
          // for(let key of Object.keys(data.result.future)){
          //     $scope.futureData[count++] = data.result.future[key];
          //     if(count>=6){
          //         break;
          //     }
          // }

          $scope.$apply();
        }
      }
    });
  };

  $scope.getWeather();
});
