//pagetop
$(function () {
  var header = $('.header');
  header.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      //ボタンの表示方法
      header.fadeIn();
    } else {
      //ボタンの非表示方法
      header.fadeOut();
    }
  });
});


$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
// var position = ($("#target").offset() || { “position”: NaN }).top;　//最初の要素の、ドキュメント上での表示位置[y軸]を返す

// $("#scroll_button").click(function () {
//   $("html,body").animate({
//     scrollTop: position // さっき変数に入れた位置まで
//   }, {
//     queue: false　// どれくらい経過してから、アニメーションを始めるか。キュー[待ち行列]。falseを指定すると、キューに追加されずに即座にアニメーションを実行。
//   });
// });