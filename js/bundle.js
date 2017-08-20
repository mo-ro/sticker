(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _script = require('./script.js');

var _script2 = _interopRequireDefault(_script);

var _modal = require('./modal.js');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./modal.js":2,"./script.js":3}],2:[function(require,module,exports){
'use strict';

// $(function() {
//   
//   var scrl;
//   
//   $(".MasterHead__about").on("click",
//     function() {
//       scrl = $( window ).scrollTop();
//       $(".Modal").css("display", "block");
//       $(".Wrapper").css({position: 'fixed', width: '100%', top: -scrl});
//     });
//   $(".Modal").on("click",
//     function() {
//       $(".Modal").css("display", "none");
//       // $(".Wrapper").css({position: "", top: scrl});
//       $(".Wrapper").attr('style', '');
//       $('html', 'body').prop({scrollTop: scrl});
//     }
//   )
// });


var openSticker = $('.MasterHead__about');
var overlay = $('.Overlay');
var hb = $("html, body");
scrollY;
openSticker.on('click', function () {
  $(".Modal").fadeIn(100);
  $(".MasterHead").hide();
  scrollY = $(window).scrollTop();
  $(".Wrapper").css({
    position: 'fixed',
    width: '100%',
    top: -scrollY
  });
});

overlay.on('click', function () {
  $(".Modal").hide();
  $(".MasterHead").fadeIn(100);
  $(".Wrapper").attr('style', '');
  hb.prop({ scrollTop: scrollY });
});

$(".Modal__back").on("click", function () {
  $(".Modal").hide();
  $(".Wrapper").attr('style', '');
  hb.prop({ scrollTop: scrollY });
});

},{}],3:[function(require,module,exports){
"use strict";

$(function () {
  $(window).scroll(function () {
    var scrl = $(document).scrollTop();

    if (scrl > 575) {
      // $(".MasterHead").css("background-color", "rgba(0, 0, 0, 0.2)");
      // $(".MasterHead__about").css("color", "#222");
    } else {
        // $(".MasterHead").css("background-color", "rgba(0, 0, 0, 0.6)");
        // $(".MasterHead__about").css("color", "#f4f4f4");
      }

    if (scrl > 600) {
      $(".Main__logo").css("opacity", "1");
    } else {
      $(".Main__logo").css("opacity", "0");
    }
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc3JjL2Fzc2V0cy9qcy9tYWluLmpzIiwiZGV2L3NyYy9hc3NldHMvanMvbW9kYWwuanMiLCJkZXYvc3JjL2Fzc2V0cy9qcy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNLGNBQWMsRUFBRSxvQkFBRixDQUFwQjtBQUNBLElBQU0sVUFBVSxFQUFFLFVBQUYsQ0FBaEI7QUFDQSxJQUFNLEtBQUssRUFBRSxZQUFGLENBQVg7QUFDSTtBQUNKLFlBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBTTtBQUM1QixJQUFFLFFBQUYsRUFBWSxNQUFaLENBQW1CLEdBQW5CO0FBQ0EsSUFBRSxhQUFGLEVBQWlCLElBQWpCO0FBQ0EsWUFBVSxFQUFFLE1BQUYsRUFBVSxTQUFWLEVBQVY7QUFDQSxJQUFFLFVBQUYsRUFBYyxHQUFkLENBQWtCO0FBQ2hCLGNBQVUsT0FETTtBQUVoQixXQUFPLE1BRlM7QUFHaEIsU0FBSyxDQUFDO0FBSFUsR0FBbEI7QUFLRCxDQVREOztBQVdBLFFBQVEsRUFBUixDQUFXLE9BQVgsRUFBb0IsWUFBSztBQUN2QixJQUFFLFFBQUYsRUFBWSxJQUFaO0FBQ0EsSUFBRSxhQUFGLEVBQWlCLE1BQWpCLENBQXdCLEdBQXhCO0FBQ0EsSUFBRSxVQUFGLEVBQWMsSUFBZCxDQUFtQixPQUFuQixFQUE0QixFQUE1QjtBQUNBLEtBQUcsSUFBSCxDQUFRLEVBQUMsV0FBVyxPQUFaLEVBQVI7QUFDRCxDQUxEOztBQU9BLEVBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFLO0FBQ2pDLElBQUUsUUFBRixFQUFZLElBQVo7QUFDQSxJQUFFLFVBQUYsRUFBYyxJQUFkLENBQW1CLE9BQW5CLEVBQTRCLEVBQTVCO0FBQ0EsS0FBRyxJQUFILENBQVEsRUFBQyxXQUFXLE9BQVosRUFBUjtBQUNELENBSkQ7Ozs7O0FDM0NBLEVBQUUsWUFBVztBQUNYLElBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMxQixRQUFJLE9BQU8sRUFBRSxRQUFGLEVBQVksU0FBWixFQUFYOztBQUVBLFFBQUksT0FBTyxHQUFYLEVBQWdCO0FBQ2Q7QUFDQTtBQUNELEtBSEQsTUFHTTtBQUNKO0FBQ0E7QUFDRDs7QUFFRCxRQUFJLE9BQU8sR0FBWCxFQUFnQjtBQUNkLFFBQUUsYUFBRixFQUFpQixHQUFqQixDQUFxQixTQUFyQixFQUFnQyxHQUFoQztBQUNELEtBRkQsTUFFTTtBQUNKLFFBQUUsYUFBRixFQUFpQixHQUFqQixDQUFxQixTQUFyQixFQUFnQyxHQUFoQztBQUNEO0FBQ0YsR0FoQkQ7QUFpQkQsQ0FsQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNjcmlwdCBmcm9tICcuL3NjcmlwdC5qcyc7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbC5qcyc7IiwiLy8gJChmdW5jdGlvbigpIHtcbi8vICAgXG4vLyAgIHZhciBzY3JsO1xuLy8gICBcbi8vICAgJChcIi5NYXN0ZXJIZWFkX19hYm91dFwiKS5vbihcImNsaWNrXCIsXG4vLyAgICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgICBzY3JsID0gJCggd2luZG93ICkuc2Nyb2xsVG9wKCk7XG4vLyAgICAgICAkKFwiLk1vZGFsXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbi8vICAgICAgICQoXCIuV3JhcHBlclwiKS5jc3Moe3Bvc2l0aW9uOiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCB0b3A6IC1zY3JsfSk7XG4vLyAgICAgfSk7XG4vLyAgICQoXCIuTW9kYWxcIikub24oXCJjbGlja1wiLFxuLy8gICAgIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgJChcIi5Nb2RhbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbi8vICAgICAgIC8vICQoXCIuV3JhcHBlclwiKS5jc3Moe3Bvc2l0aW9uOiBcIlwiLCB0b3A6IHNjcmx9KTtcbi8vICAgICAgICQoXCIuV3JhcHBlclwiKS5hdHRyKCdzdHlsZScsICcnKTtcbi8vICAgICAgICQoJ2h0bWwnLCAnYm9keScpLnByb3Aoe3Njcm9sbFRvcDogc2NybH0pO1xuLy8gICAgIH1cbi8vICAgKVxuLy8gfSk7XG5cblxuY29uc3Qgb3BlblN0aWNrZXIgPSAkKCcuTWFzdGVySGVhZF9fYWJvdXQnKTtcbmNvbnN0IG92ZXJsYXkgPSAkKCcuT3ZlcmxheScpO1xuY29uc3QgaGIgPSAkKFwiaHRtbCwgYm9keVwiKTtcbiAgICBzY3JvbGxZO1xub3BlblN0aWNrZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICAkKFwiLk1vZGFsXCIpLmZhZGVJbigxMDApO1xuICAkKFwiLk1hc3RlckhlYWRcIikuaGlkZSgpO1xuICBzY3JvbGxZID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAkKFwiLldyYXBwZXJcIikuY3NzKHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHRvcDogLXNjcm9sbFlcbiAgfSk7XG59KTtcblxub3ZlcmxheS5vbignY2xpY2snLCAoKSA9PntcbiAgJChcIi5Nb2RhbFwiKS5oaWRlKCk7XG4gICQoXCIuTWFzdGVySGVhZFwiKS5mYWRlSW4oMTAwKTtcbiAgJChcIi5XcmFwcGVyXCIpLmF0dHIoJ3N0eWxlJywgJycpO1xuICBoYi5wcm9wKHtzY3JvbGxUb3A6IHNjcm9sbFl9KTtcbn0pO1xuXG4kKFwiLk1vZGFsX19iYWNrXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT57XG4gICQoXCIuTW9kYWxcIikuaGlkZSgpO1xuICAkKFwiLldyYXBwZXJcIikuYXR0cignc3R5bGUnLCAnJyk7XG4gIGhiLnByb3Aoe3Njcm9sbFRvcDogc2Nyb2xsWX0pO1xufSk7XG4iLCIkKGZ1bmN0aW9uKCkge1xuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JsID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgXG4gICAgaWYgKHNjcmwgPiA1NzUpIHtcbiAgICAgIC8vICQoXCIuTWFzdGVySGVhZFwiKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwicmdiYSgwLCAwLCAwLCAwLjIpXCIpO1xuICAgICAgLy8gJChcIi5NYXN0ZXJIZWFkX19hYm91dFwiKS5jc3MoXCJjb2xvclwiLCBcIiMyMjJcIik7XG4gICAgfWVsc2Uge1xuICAgICAgLy8gJChcIi5NYXN0ZXJIZWFkXCIpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCJyZ2JhKDAsIDAsIDAsIDAuNilcIik7XG4gICAgICAvLyAkKFwiLk1hc3RlckhlYWRfX2Fib3V0XCIpLmNzcyhcImNvbG9yXCIsIFwiI2Y0ZjRmNFwiKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHNjcmwgPiA2MDApIHtcbiAgICAgICQoXCIuTWFpbl9fbG9nb1wiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcbiAgICB9ZWxzZSB7XG4gICAgICAkKFwiLk1haW5fX2xvZ29cIikuY3NzKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgfVxuICB9KTtcbn0pOyJdfQ==
