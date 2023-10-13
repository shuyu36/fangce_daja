//tab切換

document.addEventListener("DOMContentLoaded", function () {
  const switchLane1 = document.querySelector(".switch_lane1");
  const switchLane2 = document.querySelector(".switch_lane2");
  const switchLane3 = document.querySelector(".switch_lane3");
  const switchLane4 = document.querySelector(".switch_lane4");

  const store1Introduce = document.querySelector(".store1_introduce");
  const store2Introduce = document.querySelector(".store2_introduce");
  const store3Introduce = document.querySelector(".store3_introduce");
  const store4Introduce = document.querySelector(".store4_introduce");

  // 预设顯示
  store1Introduce.style.display = "flex";
  switchLane1.style.marginTop = "-50px";
  switchLane1.style.transition = "margin-top 0.5s ease";

  function hideBlocks() {
    store1Introduce.style.display = "none";
    store2Introduce.style.display = "none";
    store3Introduce.style.display = "none";
    store4Introduce.style.display = "none";
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
  switchLane1.addEventListener("click", () => {
    hideBlocks();
    store1Introduce.style.display = "flex";
    addShiftEffect(switchLane1);
    removeShiftEffect(switchLane2);
    removeShiftEffect(switchLane3);
    removeShiftEffect(switchLane4);
  });

  switchLane2.addEventListener("click", () => {
    hideBlocks();
    store2Introduce.style.display = "flex";
    addShiftEffect(switchLane2);
    removeShiftEffect(switchLane1);
    removeShiftEffect(switchLane3);
    removeShiftEffect(switchLane4);
  });

  switchLane3.addEventListener("click", () => {
    hideBlocks();
    store3Introduce.style.display = "flex";
    addShiftEffect(switchLane3);
    removeShiftEffect(switchLane1);
    removeShiftEffect(switchLane2);
    removeShiftEffect(switchLane4);
  });

  switchLane4.addEventListener("click", () => {
    hideBlocks();
    store4Introduce.style.display = "flex";
    addShiftEffect(switchLane4);
    removeShiftEffect(switchLane1);
    removeShiftEffect(switchLane2);
    removeShiftEffect(switchLane3);
  });
});
