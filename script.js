var chooseElement;
const move = function (element) {
  const elements = document.querySelectorAll(".element");

  elements.forEach((element) => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      chooseElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;
        chooseElement.style.left = x - 50 + "px";
        chooseElement.style.top = y - 50 + "px";
        console.log(chooseElement);
      };
    });
  });
  document.onmouseup = function (e) {
    chooseElement = null;
  };
};
