//fancybox
function fancybox_wrap() {
  $("img").each(function () {
    // $(this).attr("data-fancybox", "gallery"); 直接给img添加data-fancybox会导致点击图片后图片消失
    var element = document.createElement("a");
    $(element).attr("data-fancybox", "gallery");
    $(element).attr("href", $(this).attr("src"));
    $(element).attr("data-caption", $(this).attr("alt"));
    $(this).wrap(element);
  });
}

// mian
$(document).ready(function() {
  fancybox_wrap();
});

// pjax
$(document).pjax('a[target!=_blank]', '#main', {fragment: '#main'});

function pjax_reload() {
  fancybox_wrap();
}

$(document).on("pjax:complete", function() {
  pjax_reload();
})
