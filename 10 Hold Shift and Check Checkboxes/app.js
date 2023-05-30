const checkboxes = [...document.querySelectorAll("input")];
const inbox = document.querySelector(".inbox");
let flag = false;
const checkbox = function (e) {
  if (e.target.tagName === "INPUT") {
    if (e.shiftKey) {
      let startIndex;
      let endIndex;
      checkboxes.forEach((element, index) => {
        if (element.checked && !flag) {
          flag = true;
          startIndex = index;
          return;
        }
        if (element.checked && flag) {
          flag = false;
          endIndex = index;
          return;
        }
      });
      if (endIndex) {
        for (let i = startIndex; i <= endIndex; i++) {
          checkboxes[i].checked = true;
        }
        endIndex = undefined;
      }
      if (endIndex === undefined) {
        let anotherIndex;
        checkboxes.forEach((element, index) => {
          if (element.checked) {
            anotherIndex = index;
            for (let i = anotherIndex; i <= startIndex; i++) {
              checkboxes[i].checked = true;
            }
          }
        });
      }
    }
  }
};

inbox.addEventListener("click", checkbox);
