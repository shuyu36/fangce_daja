document.addEventListener("DOMContentLoaded", function () {
  // 获取 .media_icon 元素
  var mediaIcon = document.querySelector(".media_icon");

  // 获取元素的 aria-expanded 属性的值
  var ariaExpandedValue = mediaIcon.getAttribute("aria-expanded");

  // 检查 aria-expanded 属性是否为 "false"
  if (ariaExpandedValue === "true") {
    // 如果 aria-expanded 为 "false"，将 .media_icon 设置为 display: none
    mediaIcon.style.display = "none";
  }
});
