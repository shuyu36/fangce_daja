//tab切換

document.addEventListener("DOMContentLoaded", function () {
  const switchLane = document.querySelector(".switch_lane");
  const switchBridge = document.querySelector(".switch_bridge");
  const switchMarket = document.querySelector(".switch_market");

  const laneInformation = document.querySelector(".lane_information");
  const bridgeInformation = document.querySelector(".bridge_information");
  const marketInformation = document.querySelector(".market_information");

  // 预设顯示
  laneInformation.style.display = "flex";
  switchLane.style.marginTop = "-50px";
  switchLane.style.transition = "margin-top 0.5s ease";

  function hideBlocks() {
    laneInformation.style.display = "none";
    bridgeInformation.style.display = "none";
    marketInformation.style.display = "none";
  }

  // 添加效果
  function addShiftEffect(element) {
    element.style.marginTop = "-50px";
    element.style.transition = "margin-top 0.5s ease";
  }

  // 移除效果
  function removeShiftEffect(element) {
    element.style.marginTop = "0";
    element.style.transition = "margin-top 0.5s ease";
  }

  // 點擊時切換並將其他選項退回原位
  switchLane.addEventListener("click", () => {
    hideBlocks();
    laneInformation.style.display = "flex";
    addShiftEffect(switchLane);
    removeShiftEffect(switchBridge);
    removeShiftEffect(switchMarket);
  });

  switchBridge.addEventListener("click", () => {
    hideBlocks();
    bridgeInformation.style.display = "flex";
    addShiftEffect(switchBridge);
    removeShiftEffect(switchLane);
    removeShiftEffect(switchMarket);
  });

  switchMarket.addEventListener("click", () => {
    hideBlocks();
    marketInformation.style.display = "flex";
    addShiftEffect(switchMarket);
    removeShiftEffect(switchLane);
    removeShiftEffect(switchBridge);
  });
});
