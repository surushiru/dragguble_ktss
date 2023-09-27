var chooseElement;
const move = function (element) {
  function mobile() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  if (mobile()) {
    // mobile
    document.body.innerHTML =
      "このサイトはPCブラウザのみです、パソコンでご覧ください。";
  } else {
    // PC
  }

  const elements = document.querySelectorAll(".element");

  elements.forEach(element => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      chooseElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;
        chooseElement.style.left = x -60 + "px";
        chooseElement.style.top = y -60 + "px";
        // console.log(chooseElement);
      };
    });
  });
  document.onmouseup = function (e) {
    chooseElement = null;
  };
};
