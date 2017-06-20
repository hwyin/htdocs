/**
 * Created by Administrator on 2017/4/23 0023.
 */
// // rem布局
var ua = navigator.userAgent;
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android终端
var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 767) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//rem * 100 = px
// window.UEDITOR_HOME_URL = '';
// window.BASE_URL = '';
// var fixSize =  function() {
// 	var pageWidth = document.documentElement.clientWidth;
// 	var fontSize = 100;
// 	if (pageWidth > 767) {
// 		fontSize =  (625 * pageWidth / 1920);
// 	} else {
// //                var dpr = window.devicePixelRatio || 1;
// 		fontSize = (625 * pageWidth / 1440);
// 	}
// 	var content = 'html{font-size: ' + fontSize + '%};';
// 	var style = document.getElementById('fix-font-size');
// 	style.innerHTML = content;
// };
// fixSize();

<!--移动端顶部导航栏和底部菜单的下拉效果-->

$(document).ready(function () {
    var $menu = $('#nav_menu>.down').siblings('ul');
    $('#nav_menu>.down').click(function () {
        if ($menu.css('display') == 'none') {
            $(this).removeClass('down').addClass('up');
            $menu.slideDown();
        } else {
            $(this).removeClass('up').addClass('down');
            $menu.slideUp();
        }
    });
    $("#nav_menu li>.close").click(function () {
        if ($(this).siblings('div').css('display') == 'none') {
            $(this).removeClass('close').addClass('open');
            $(this).siblings('div').slideDown();
            $(this).parent("li").siblings().children("div").slideUp();
            $(this).parent("li").siblings().children("a").removeClass('open').addClass('close');
        } else {
            $(this).removeClass('open').addClass('close');
            $(this).siblings('div').slideUp();
        }
    });
    $("#footer_sm li>.close").click(function () {
        if ($(this).siblings('div').css('display') == 'none') {
            $(this).removeClass('close').addClass('open');
            $(this).siblings('div').slideDown();
            $(this).parent("li").siblings().children("div").slideUp();
            $(this).parent("li").siblings().children("a").removeClass('open').addClass('close');
        } else {
            $(this).removeClass('open').addClass('close');
            $(this).siblings('div').slideUp();
        }
    });
});

