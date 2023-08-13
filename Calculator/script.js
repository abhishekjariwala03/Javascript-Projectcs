document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("one").addEventListener("click", () => {
          let input = document.querySelector("#input");
          input.value += 1;
        });

        document.getElementById("two").addEventListener("click", () => {
          input.value += 2;
        });

        document.getElementById("three").addEventListener("click", () => {
          input.value += 3;
        });

        document.getElementById("four").addEventListener("click", () => {
          input.value += 4;
        });

        document.getElementById("five").addEventListener("click", () => {
          input.value += 5;
        });

        document.getElementById("six").addEventListener("click", () => {
          input.value += 6;
        });

        document.getElementById("seven").addEventListener("click", () => {
          input.value += 7;
        });

        document.getElementById("eignt").addEventListener("click", () => {
          input.value += 8;
        });

        document.getElementById("nine").addEventListener("click", () => {
          input.value += 9;
        });

        document.getElementById("divide").addEventListener("click", () => {
          input.value += "/";
        });

        document.getElementById("multi").addEventListener("click", () => {
          input.value += "x";
        });

        document.getElementById("sub").addEventListener("click", () => {
          input.value += "-";
        });

        document.getElementById("dot").addEventListener("click", () => {
          input.value += ".";
        });

        document.getElementById("add").addEventListener("click", () => {
          input.value += "+";
        });

        document.getElementById("equal").addEventListener("click", () => {
          let input = document.querySelector("#input");

          if (input.value == "") {
            alert("Please Enter Number to calculate!!");
          } else {
            input.value = eval(input.value);
          }
        });

        let clear = document.querySelector("#clear");
        clear.addEventListener("click", () => {
          input.value = "";
        });
      });
