//tab切換

document.addEventListener("DOMContentLoaded", function () {
  const laneTab = document.querySelector(".lane_tab");
  const bridgeTab = document.querySelector(".bridge_tab");
  const marketTab = document.querySelector(".market_tab");

  const laneBlock = document.querySelector(".lane_block");
  const bridgeBlock = document.querySelector(".bridge_block");
  const marketBlock = document.querySelector(".markrt_block");

  // 預設顯示
  laneBlock.style.display = "block";

  function hideBlocks() {
    laneBlock.style.display = "none";
    marketBlock.style.display = "none";
    bridgeBlock.style.display = "none";
  }

  // 點擊時切換
  laneTab.addEventListener("click", () => {
    hideBlocks();
    laneBlock.style.display = "block";
  });

  bridgeTab.addEventListener("click", () => {
    hideBlocks();
    bridgeBlock.style.display = "block";
  });

  marketTab.addEventListener("click", () => {
    hideBlocks();
    marketBlock.style.display = "block";
  });



//   //scroll_store

  const scrollList = document.querySelector(".side-scroll__list");
  const scrollContent = document.querySelector(".side-scroll__content");


  let scrollPosition = 0;  // 滾動位置
  const scrollSpeed = 20; // 滾動速度

  // 监听鼠标滑动事件
  scrollContent.addEventListener("mousemove", (event) => {
    // 获取鼠标在滑动容器内的横向位置
    const mouseX = event.clientX - scrollContent.getBoundingClientRect().left;

    // 计算滚动距离
    scrollPosition =
      (mouseX / scrollContent.clientWidth) *
      (scrollList.scrollWidth - scrollContent.clientWidth);

    // 更新滚动位置
    scrollList.style.transform = `translateX(-${scrollPosition}px)`;
  });

});
