//tab切換

document.addEventListener("DOMContentLoaded", function () {
  const laneTab = document.querySelector(".lane_tab");
  const bridgeTab = document.querySelector(".bridge_tab");
  const marketTab = document.querySelector(".market_tab");

  const laneBlock = document.querySelector(".lane_block");
  const bridgeBlock = document.querySelector(".bridge_block");
  const marketBlock = document.querySelector(".market_block");

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

});
