!function(t){function n(n){for(var r,a,l=n[0],d=n[1],u=n[2],f=0,s=[];f<l.length;f++)a=l[f],o[a]&&s.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);for(c&&c(n);s.length;)s.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,l=1;l<e.length;l++){var d=e[l];0!==o[d]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={0:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var c=d;i.push([3,1]),e()}({13:function(t,n,e){var r=e(14);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(r,o);r.locals&&(t.exports=r.locals)},14:function(t,n,e){(t.exports=e(0)(!1)).push([t.i,".content {\n  margin-top: 50px;\n  max-width: 80%; }\n\n.middle-canvas {\n  border: 1px solid #cbcbcb;\n  width: 100%;\n  height: 300px;\n  background-color: #fcfcfc;\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3); }\n\n#myForm {\n  margin-top: 40px; }\n\n#textField {\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto; }\n\n#btnField {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: space-around; }\n\n#btnSend {\n  border: 1px solid red;\n  border-radius: 3px;\n  color: red;\n  width: 120px; }\n\n#btnClear {\n  border: 1px solid #cbcbcb;\n  border-radius: 3px;\n  color: #cbcbcb;\n  width: 120px; }\n",""])},3:function(t,n,e){"use strict";(function(t){e(5),e(13),e(15),t(document).ready(function(){var n=t("#myCanvas"),e=n[0].getContext("2d"),r=n.width(),o=n.height();n[0].height=o,n[0].width=r,e.textBaseline="top",e.strokeStyle="#000";var i=[],a=[];function l(){var n=t("#textInput").val();if(n){t("#textInput").val("");var r=Math.floor(d/50)+2;e.font="30px Arial";var o=e.measureText(n).width,a=Math.floor(271*Math.random()),l={timeIndex:r,x:screen.availWidth,y:a,speed:3,color:"rgb(255,0,0)",text:n,size:30,width:o,visible:!0,userInput:!0};i.push(l)}}t("#btnSend").click(l),t("#btnClear").click(function(){a=[]}),function(){for(var t=0;t<500;t++){var n=Math.floor(120*Math.random()),r=Math.floor(256*Math.random()),o=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),l=Math.floor(20*Math.random())+20;e.font=l+"px Arial";var d=e.measureText("Hello").width,u=Math.floor(3*Math.random())+2,c={timeIndex:n,x:screen.availWidth,y:Math.floor(Math.random()*(300-l+1)),speed:u,color:"rgb("+r+","+o+","+a+")",text:"Hello",size:l,width:d,visible:!0,userInput:!1};i.push(c)}}();var d=0;function u(){e.clearRect(0,0,r,o),e.save(),e.beginPath();var t=!0,n=!1,i=void 0;try{for(var l,d=a[Symbol.iterator]();!(t=(l=d.next()).done);t=!0){var u=l.value;u.visible&&(e.font=u.size+"px Arial",u.x-=u.speed,e.fillStyle=u.color,u.userInput&&(e.strokeStyle="#000",e.strokeRect(u.x,u.y,u.width,u.size)),e.fillText(u.text,u.x,u.y),u.x<=-u.width&&(u.visible=!1))}}catch(t){n=!0,i=t}finally{try{!t&&d.return&&d.return()}finally{if(n)throw i}}e.closePath(),e.restore()}window.onkeydown=function(t){if(13==t.keyCode)return l(),!1},window.onresize=function(){r=n.width(),o=n.height(),n[0].height=o,n[0].width=r,e.textBaseline="top",e.strokeStyle="#000",u()},window.setInterval(function(){var t=(d+=1)/50,n=i.filter(function(n){return n.timeIndex===t});a=a.concat(n),u()},20)})}).call(this,e(4))}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9kYW5tdS1hcHAvaW5kZXguc2Nzcz84NWM1Iiwid2VicGFjazovLy8uL3Byb2plY3QvZGFubXUtYXBwL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9kYW5tdS1hcHAvaW5kZXguanMiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCIwIiwiZXhwb3J0cyIsIm1vZHVsZSIsImwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicCIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJjb250ZW50Iiwib3B0aW9ucyIsImhtciIsInRyYW5zZm9ybSIsImluc2VydEludG8iLCJ1bmRlZmluZWQiLCJsb2NhbHMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm15Q2FudmFzIiwiY3h0IiwiZ2V0Q29udGV4dCIsImNhbnZhc1dpZHRoIiwid2lkdGgiLCJjYW52YXNIZWlnaHQiLCJoZWlnaHQiLCJ0ZXh0QmFzZWxpbmUiLCJzdHJva2VTdHlsZSIsInRleHRBcnJheSIsImN1cnJlbnRUZXh0QXJyIiwic2VuZFRleHQiLCJ0ZXh0IiwidmFsIiwiTWF0aCIsImZsb29yIiwidGltZVNwYW4iLCJmb250Iiwic2l6ZSIsIm1lYXN1cmVUZXh0IiwieSIsInJhbmRvbSIsInRleHRPYmoiLCJ0aW1lSW5kZXgiLCJ4Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsInNwZWVkIiwiY29sb3IiLCJ2aXNpYmxlIiwidXNlcklucHV0IiwiY2xpY2siLCJnIiwiYiIsImdlbmVyYXRlVGV4dCIsImRyYXdUZXh0IiwiY2xlYXJSZWN0Iiwic2F2ZSIsImJlZ2luUGF0aCIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX3N0ZXAiLCJfaXRlcmF0b3IiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwidGV4dE5vZGUiLCJmaWxsU3R5bGUiLCJzdHJva2VSZWN0IiwiZmlsbFRleHQiLCJlcnIiLCJyZXR1cm4iLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwib25rZXlkb3duIiwiZSIsImtleUNvZGUiLCJvbnJlc2l6ZSIsInNldEludGVydmFsIiwidGltZSIsIm5ld1RleHRBcnIiLCJmaWx0ZXIiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJhQUNBLFNBQUFBLEVBQUFDLEdBUUEsSUFQQSxJQU1BQyxFQUFBQyxFQU5BQyxFQUFBSCxFQUFBLEdBQ0FJLEVBQUFKLEVBQUEsR0FDQUssRUFBQUwsRUFBQSxHQUlBTSxFQUFBLEVBQUFDLEtBQ1FELEVBQUFILEVBQUFLLE9BQW9CRixJQUM1QkosRUFBQUMsRUFBQUcsR0FDQUcsRUFBQVAsSUFDQUssRUFBQUcsS0FBQUQsRUFBQVAs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LEdBQUt1QixFQUFTcEIsTUFDdkIxQixFQUFJK0MsVUFBWUQsRUFBU25CLE1BRXRCbUIsRUFBU2pCLFlBRVI3QixFQUFJTyxZQUFjLE9BQ2xCUCxFQUFJZ0QsV0FBV0YsRUFBU3ZCLEVBQUV1QixFQUFTM0IsRUFBRTJCLEVBQVMzQyxNQUFNMkMsRUFBUzdCLE9BR2pFakIsRUFBSWlELFNBQVNILEVBQVNuQyxLQUFLbUMsRUFBU3ZCLEVBQUV1QixFQUFTM0IsR0FJNUMyQixFQUFTdkIsSUFBTXVCLEVBQVMzQyxRQUN2QjJDLEVBQVNsQixTQUFVLEtBckJmLE1BQUFzQixHQUFBWCxHQUFBLEVBQUFDLEVBQUFVLEVBQUEsYUFBQVosR0FBQUksRUFBQVMsUUFBQVQsRUFBQVMsU0FBQSxXQUFBWixFQUFBLE1BQUFDLEdBMEJoQnhDLEVBQUlvRCxZQUNKcEQsRUFBSXFELFVBMURSbkUsT0FBT29FLFVBQVksU0FBU0MsR0FDeEIsR0FBZ0IsSUFBYkEsRUFBRUMsUUFFRCxPQURBOUMsS0FDTyxHQUlmeEIsT0FBT3VFLFNBQVcsV0FDZHZELEVBQWNILEVBQVNJLFFBQ3ZCQyxFQUFlTCxFQUFTTSxTQUN4Qk4sRUFBUyxHQUFHTSxPQUFTRCxFQUNyQkwsRUFBUyxHQUFHSSxNQUFRRCxFQUVwQkYsRUFBSU0sYUFBZSxNQUNuQk4sRUFBSU8sWUFBYyxPQUVsQjJCLEtBR0poRCxPQUFPd0UsWUFBWSxXQUVmLElBQUlDLEdBREo1QyxHQUFZLEdBQ1UsR0FDbEI2QyxFQUFhcEQsRUFBVXFELE9BQU8sU0FBVWpELEdBQ3hDLE9BQU9BLEVBQUlVLFlBQWNxQyxJQUc3QmxELEVBQWlCQSxFQUFlcUQsT0FBT0YsR0FFdkMxQixLQUNEIiwiZmlsZSI6ImRhbm11LWFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFszLDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7IH1cXG5cXG4ubWlkZGxlLWNhbnZhcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cXG5cXG4jbXlGb3JtIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7IH1cXG5cXG4jdGV4dEZpZWxkIHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuXFxuI2J0bkZpZWxkIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuI2J0blNlbmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6IHJlZDtcXG4gIHdpZHRoOiAxMjBweDsgfVxcblxcbiNidG5DbGVhciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6ICNjYmNiY2I7XFxuICB3aWR0aDogMTIwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuXHJcbmltcG9ydCAnanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbic7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbXlDYW52YXMgPSAkKCcjbXlDYW52YXMnKTtcclxuICAgIGxldCBjeHQgPSBteUNhbnZhc1swXS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgbGV0IGNhbnZhc1dpZHRoID0gbXlDYW52YXMud2lkdGgoKTtcclxuICAgIGxldCBjYW52YXNIZWlnaHQgPSBteUNhbnZhcy5oZWlnaHQoKTtcclxuICAgIG15Q2FudmFzWzBdLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcclxuICAgIG15Q2FudmFzWzBdLndpZHRoID0gY2FudmFzV2lkdGg7XHJcblxyXG4gICAgY3h0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG4gICAgY3h0LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG5cclxuXHJcblxyXG4gICAgbGV0IHRleHRBcnJheSA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnRUZXh0QXJyID0gW107XHJcblxyXG4gICAgJCgnI2J0blNlbmQnKS5jbGljayhzZW5kVGV4dCk7XHJcblxyXG4gICAgJCgnI2J0bkNsZWFyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRUZXh0QXJyID0gW107XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kVGV4dCgpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICQoJyN0ZXh0SW5wdXQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYoIXRleHQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjdGV4dElucHV0JykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgdmFyIHQgPSBNYXRoLmZsb29yKHRpbWVTcGFuIC8gNTApICsgMjtcclxuICAgICAgICB2YXIgc2l6ZSA9IDMwO1xyXG4gICAgICAgIHZhciBjb2xvciA9ICdyZ2IoMjU1LDAsMCknO1xyXG4gICAgICAgIHZhciBzcGVlZCA9IDM7XHJcbiAgICAgICAgY3h0LmZvbnQgPSBzaXplICsgJ3B4IEFyaWFsJztcclxuICAgICAgICB2YXIgd2lkdGggPSBjeHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAwIC0gc2l6ZSArIDEpKTtcclxuXHJcbiAgICAgICAgdmFyIHRleHRPYmogPSB7XHJcbiAgICAgICAgICAgIHRpbWVJbmRleDogdCxcclxuICAgICAgICAgICAgeDogc2NyZWVuLmF2YWlsV2lkdGgsXHJcbiAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgIHNwZWVkOiBzcGVlZCxcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICBzaXplOiBzaXplLFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIHVzZXJJbnB1dDp0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGV4dEFycmF5LnB1c2godGV4dE9iaik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlVGV4dCgpIHtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDUwMDtpKyspe1xyXG4gICAgICAgICAgICB2YXIgdGltZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIwKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KTtcclxuICAgICAgICAgICAgdmFyIGcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpO1xyXG4gICAgICAgICAgICB2YXIgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nik7XHJcbiAgICAgICAgICAgIHZhciBzaXplID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKSsyMDtcclxuICAgICAgICAgICAgY3h0LmZvbnQgPSBzaXplICsgJ3B4IEFyaWFsJztcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gY3h0Lm1lYXN1cmVUZXh0KCdIZWxsbycpLndpZHRoO1xyXG4gICAgICAgICAgICB2YXIgc3BlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSsyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHggPSBzY3JlZW4uYXZhaWxXaWR0aDtcclxuICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAwLXNpemUrMSkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRleHRPYmogPSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lSW5kZXg6IHRpbWVJbmRleCxcclxuICAgICAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgICAgICB5OiB5LFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHNwZWVkLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcpJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdIZWxsbycsXHJcbiAgICAgICAgICAgICAgICBzaXplOnNpemUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDp3aWR0aCxcclxuICAgICAgICAgICAgICAgIHZpc2libGUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcklucHV0OmZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0ZXh0QXJyYXkucHVzaCh0ZXh0T2JqKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlVGV4dCgpO1xyXG5cclxuICAgIGxldCB0aW1lU3BhbiA9IDA7XHJcblxyXG4gICAgd2luZG93Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKGUua2V5Q29kZSA9PSAxMyl7XHJcbiAgICAgICAgICAgIHNlbmRUZXh0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2FudmFzV2lkdGggPSBteUNhbnZhcy53aWR0aCgpO1xyXG4gICAgICAgIGNhbnZhc0hlaWdodCA9IG15Q2FudmFzLmhlaWdodCgpO1xyXG4gICAgICAgIG15Q2FudmFzWzBdLmhlaWdodCA9IGNhbnZhc0hlaWdodDtcclxuICAgICAgICBteUNhbnZhc1swXS53aWR0aCA9IGNhbnZhc1dpZHRoO1xyXG5cclxuICAgICAgICBjeHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgY3h0LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG5cclxuICAgICAgICBkcmF3VGV4dCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpbWVTcGFuICs9IDE7XHJcbiAgICAgICAgdmFyIHRpbWUgPSB0aW1lU3BhbiAvIDUwO1xyXG4gICAgICAgIHZhciBuZXdUZXh0QXJyID0gdGV4dEFycmF5LmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudGltZUluZGV4ID09PSB0aW1lO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjdXJyZW50VGV4dEFyciA9IGN1cnJlbnRUZXh0QXJyLmNvbmNhdChuZXdUZXh0QXJyKTtcclxuXHJcbiAgICAgICAgZHJhd1RleHQoKTtcclxuICAgIH0sIDIwKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3VGV4dCgpIHtcclxuICAgICAgICBjeHQuY2xlYXJSZWN0KDAsMCxjYW52YXNXaWR0aCxjYW52YXNIZWlnaHQpO1xyXG4gICAgICAgIGN4dC5zYXZlKCk7XHJcbiAgICAgICAgY3h0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGZvcihsZXQgdGV4dE5vZGUgb2YgY3VycmVudFRleHRBcnIpe1xyXG4gICAgICAgICAgICBpZih0ZXh0Tm9kZS52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgIGN4dC5mb250ID0gdGV4dE5vZGUuc2l6ZSArICdweCBBcmlhbCc7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS54IC09IHRleHROb2RlLnNwZWVkO1xyXG4gICAgICAgICAgICAgICAgY3h0LmZpbGxTdHlsZSA9IHRleHROb2RlLmNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRleHROb2RlLnVzZXJJbnB1dCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN4dC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuICAgICAgICAgICAgICAgICAgICBjeHQuc3Ryb2tlUmVjdCh0ZXh0Tm9kZS54LHRleHROb2RlLnksdGV4dE5vZGUud2lkdGgsdGV4dE5vZGUuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3h0LmZpbGxUZXh0KHRleHROb2RlLnRleHQsdGV4dE5vZGUueCx0ZXh0Tm9kZS55KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRleHROb2RlLnggPD0gLXRleHROb2RlLndpZHRoKXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjeHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9