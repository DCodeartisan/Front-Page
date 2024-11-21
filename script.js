const circle = document.getElementById("circle");
      const upBtn = document.getElementById("upBtn");
      const downBtn = document.getElementById("downBtn");
      let rotateValue = 0;

      upBtn.addEventListener("click", () => {
          rotateValue -= 90;
          circle.style.transform = `rotate(${rotateValue}deg)`;
      });

      downBtn.addEventListener("click", () => {
          rotateValue += 90;
          circle.style.transform = `rotate(${rotateValue}deg)`;
      });