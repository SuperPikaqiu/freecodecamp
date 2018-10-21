var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.channels = [
    "freecodecamp",
    "storbeck",
    "ESL_SC2",
    "terakilobyte",
    "habathcx",
    "RobotCaleb",
    "thomasballinger",
    "noobs2ninjas",
    "beohoff"
  ];
  $scope.infoList = [];
  $scope.showFlag = 2;

  function getChannelInfo() {
    $scope.channels.forEach(function(val) {
      let url = makeUrl("streams", val);
      $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(data) {
          var status = "";
          var onlineFlag = 0;
          if (data.stream === null) {
            status = "Offline";
          } else if (data.stream === undefined) {
            status = "Account Closed";
          } else {
            status = "Online";
            onlineFlag = 1;
          }

          let tmpUrl = makeUrl("channels", val);

          $.ajax({
            url: tmpUrl,
            type: "GET",
            dataType: "json",
            success: function(data) {
              var logo =
                data.logo != null
                  ? data.logo
                  : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
              var title = data.display_name != null ? data.display_name : val;
              var description = status == "Online" ? data.status : "";
              $scope.infoList.push({
                logo: logo,
                title: title,
                url: data.url,
                desc: description,
                status: status,
                onlineFlag: onlineFlag,
                show: true
              });

              $scope.$apply();
            }
          });
        }
      });
    });
  }

  function makeUrl(type, name) {
    return (
      "https://wind-bow.gomix.me/twitch-api/" +
      type +
      "/" +
      name +
      "?callback=?"
    );
  }

  $scope.search = function() {
    for (let info of $scope.infoList) {
      var title = info.title.toLowerCase();
      var channel = $scope.strChannel.toLowerCase();
      if ($scope.showFlag === 2 || info.onlineFlag === $scope.showFlag) {
        if (title.indexOf(channel) !== -1) {
          info.show = true;
        } else {
          info.show = false;
        }
      } else {
        info.show = false;
      }
    }
  };

  $(".box-header li").on("click", function() {
    $(".box-header li").removeClass("select");
    $(this).addClass("select");
    var id = $(this).attr("id");

    if (id == "tagAll") {
      $scope.showFlag = 2;
    } else if (id == "tagOnline") {
      $scope.showFlag = 1;
    } else {
      $scope.showFlag = 0;
    }

    for (let info of $scope.infoList) {
      if ($scope.showFlag === 2 || info.onlineFlag === $scope.showFlag) {
        info.show = true;
      } else {
        info.show = false;
      }
    }
    $scope.$apply();
  });

  getChannelInfo();
});

