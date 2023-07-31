// let textbox = document.getElementById("textarea");

// textbox.addEventListener("input", () => {
//   let text = textbox.value;
//   //   console.log(text);
//   let char = (document.getElementById("char").innerHTML = text.length);
//   //   console.log(char);
//   text = text.trim();
//   let word = text.split(" ");
//   //   console.log(word);
//   let wordArr = word.filter((elm) => elm != "");
//   //   console.log(wordArr);
//   let words = (document.getElementById("word").innerHTML = wordArr.length);
// });

let textbox = document.getElementById("textarea");

textbox.addEventListener("input", () => {
  let text = textbox.value;
  let char = (document.getElementById("char").innerHTML = text.length);

  let word = text.split(" ");
  let wordArry = word.filter((elem) => elem != "");
  let words = (document.getElementById("word").innerHTML = wordArry.length);
});
