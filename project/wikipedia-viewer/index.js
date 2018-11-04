import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';

import 'jquery/dist/jquery.min';
import 'angular/angular.min';
import 'angular-sanitize/angular-sanitize.min';

var app = angular.module("myApp", ["ngSanitize"]);
app.controller("myCtrl", function($scope) {
  $("#searchIcon").on("click", function() {
    $("#searchIcon").hide();
    $("#searchInput").show();
    $("#searchInput").animate(
      {
        width: "300px"
      },
      "slow",
      function() {
        $("#inputText").focus();
      }
    );

    $("#searchResult").show();
  });

  $("#btnClear").on("click", function() {
    $("#inputText").val("");
    $("#inputText").focus();
  });

  $("#inputText").on("keydown", function(e) {
    if (e.keyCode === 13) {
      search();
    }
  });

  function search() {
    var api = "https://en.wikipedia.org/w/api.php";
    var action = "query";
    var list = "search";
    var text = $("#inputText").val();
    var format = "json";
    var utf8 = "1";

    var url =
      api +
      "?action=" +
      action +
      "&list=" +
      list +
      "&srsearch=" +
      text +
      "&utf8=" +
      utf8 +
      "&format=" +
      format;

    $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      success: function(result) {
        $scope.hasResult = result.query.search.length > 0 ? true : false;
        $scope.list = result.query.search;
        $scope.$apply();
        console.log("success");
      }
    });
  }
});
