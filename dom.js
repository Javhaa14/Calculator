let body = document.querySelector("body");
body.className = "body";
let butt = document.createElement("div");
body.appendChild(butt);
butt.className = "";
butt.innerText = "";
butt.onclick = log;
function log() {
  console.log("work");
}
let ulaan = document.createElement("div");
let tsenher = document.createElement("div");
body.appendChild(ulaan);
body.appendChild(tsenher);
body.className = "body";
ulaan.className = "ulaan";
tsenher.className = "tsenher";
ulaan.style.width = "0%";
tsenher.style.width = "100%";
ulaan.onclick = () => {
  log1("red");
};

document.addEventListener("keydown", (event) => {
  if (event.key === "l" || event.key === "L") {
    console.log("You pressed the L key!");
    log1("red");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "d" || event.key === "D") {
    console.log("You pressed the D key!");
    log1("");
  }
});

tsenher.onclick = () => {
  log1("Element clicked!");
};

function log1(message) {
  console.log("Log1:", message);
}

function log1(side) {
  if (side == "red") {
    ulaan.style.width = `${parseInt(ulaan.style.width) + 100}%`;
    tsenher.style.width = `${parseInt(tsenher.style.width) - 100}%`;
  } else {
    tsenher.style.width = `${parseInt(tsenher.style.width) + 100}%`;
    ulaan.style.width = `${parseInt(ulaan.style.width) - 100}%`;
  }
}

const light = document.createElement("h2");
light.innerText = "to turn on Light mode (click 'L')";
light.className = "light";
body.appendChild(light);
const Dark = document.createElement("h2");
Dark.innerText = "to turn on Dark mode (click 'D')";
Dark.className = "Dark";
body.appendChild(Dark);
const h1 = document.createElement("h1");
console.log(h1, "h1");
h1.innerText = "Hello, This is Calculator";
h1.className = "h1";
body.appendChild(h1);

const div = document.createElement("div");
const div01 = document.createElement("input");
const div02 = document.createElement("input");
const div1 = document.createElement("div");
const div2 = document.createElement("div");

body.appendChild(div);
div.appendChild(div1);
div.appendChild(div2);
div1.appendChild(div01);
div1.appendChild(div02);

div.className = "Tom-div";
div2.className = "buttons";
div1.className = "deed";
div01.className = "input0";
div02.className = "input";

div02.type = "text";
div02.id = "inputid";
div01.type = "text";
div01.id = "inputid0";

div01.value = "";
div02.value = "0";
let arr = [];
let result = "";
let num1 = "";
let input = document.getElementById("inputid");
let input0 = document.getElementById("inputid0");

const array = [
  "AC",
  "DEL",
  "-",
  " % ",
  "7",
  "8",
  "9",
  " / ",
  "4",
  "5",
  "6",
  " * ",
  "1",
  "2",
  "3",
  " - ",
  "0",
  "( ",
  " )",
  " + ",
  " =",
  ".",
];
for (let i = 0; i < array.length; i++) {
  let but = document.createElement("button");
  div2.appendChild(but);
  but.className = "button";
  if (
    array[i] === " / " ||
    array[i] === " * " ||
    array[i] === " - " ||
    array[i] === " + " ||
    array[i] === "."
  ) {
    but.id = "id";
  } else if (
    array[i] === "AC" ||
    array[i] === "-" ||
    array[i] === " % " ||
    array[i] === "DEL"
  ) {
    but.id = "ido";
  } else if (array[i] === " =") {
    but.id = "idten";
  }
  but.innerText = array[i];
  if (array[i] === "-") {
    but.innerText = "+/-";
  }
  but.onclick = () => tooOruulah(i);
}

function tooOruulah(buttonindex) {
  if (div02.value == "0") {
    input.value = "";
  }
  if (array[buttonindex] !== "AC" && array[buttonindex] !== "DEL") {
    input.value += array[buttonindex];
    if (num1.includes(result)) {
    } else {
      num1 += result;
      console.log(result);
    }
    num1 += array[buttonindex];
    arr = num1.split(" ");
    console.log(arr);
    console.log(num1);
    tempArr = [];

    if (arr[arr.length - 1] === "=") {
      input0.value = num1;
      for (let i = 0; i < arr.length; i++) {
        while (arr[i] == "(") {
          let tar1 = "(";
          let ehhaalt = [];
          arr.forEach((val, index) => {
            if (val == tar1) ehhaalt.push(index);
          });
          let tar2 = ")";
          let tugshaalt = [];
          arr.forEach((val, index) => {
            if (val == tar2) tugshaalt.push(index);
          });
          let aarhal = [];
          let temp1arr = [];
          let resultaarhal = 0;
          console.log(ehhaalt, "ehhaalt");
          console.log(tugshaalt, "tugshaalt");
          for (let k = ehhaalt[0] + 1; k < tugshaalt[0]; k++) {
            aarhal.push(`${arr[k]}`);
          }
          console.log(aarhal, "aarhal");
          if (ehhaalt.length === 0) {
            console.log("haaltgui bodlogo");
          } else {
            for (let z = 0; z < aarhal.length; z++) {
              console.log(aarhal[z]);
              if (aarhal[z] === "*" || aarhal[z] === "/") {
                let zuun = Number(temp1arr.pop());
                let baruun = Number(aarhal[z + 1]);
                if (aarhal[z] === "*") {
                  temp1arr.push(zuun * baruun);
                } else if (aarhal[z] === "/") {
                  temp1arr.push(zuun / baruun);
                }
                z++;
              } else if (aarhal[z] !== "=") {
                temp1arr.push(aarhal[z]);
              }
            }
            resultaarhal = Number(temp1arr[0]);
            for (let z = 1; z < temp1arr.length; z++) {
              if (temp1arr[z] === "+") {
                resultaarhal += Number(temp1arr[z + 1]);
                z++;
              } else if (temp1arr[z] === "-") {
                resultaarhal -= Number(temp1arr[z + 1]);
                z++;
              }
            }
            console.log(resultaarhal);
            console.log("haalttai");
            arr.splice(ehhaalt[0], aarhal.length + 2, resultaarhal);
            console.log(arr);
          }
          i++;
        }
      }

      for (let z = 0; z < arr.length; z++) {
        console.log(arr[z]);

        if (arr[z] === "*" || arr[z] === "/") {
          let zuun = Number(tempArr.pop());
          let baruun = Number(arr[z + 1]);
          if (arr[z] === "*") {
            tempArr.push(zuun * baruun);
          } else if (arr[z] === "/") {
            tempArr.push(zuun / baruun);
          }
          z++;
        } else if (arr[z] !== "=") {
          tempArr.push(arr[z]);
        }
      }
      result = Number(tempArr[0]);
      for (let z = 1; z < tempArr.length; z++) {
        if (tempArr[z] === "+") {
          result += Number(tempArr[z + 1]);
          z++;
        } else if (tempArr[z] === "-") {
          result -= Number(tempArr[z + 1]);
          z++;
        }
      }
      input.value = result;
      result = `${result}`;
      tempArr = [];
      num1 = "";
      arr = [];
      if (result !== "") {
        num1 += result;
      }
    }
  }
  if (array[buttonindex] === "DEL") {
    if (input.value[input.value.length - 1] !== " ") {
      input.value = input.value.slice(0, -1);
      arr.splice(arr.length - 1, 1);
      console.log(arr, "h");
      num1 = num1.slice(0, -1);
      result = result.slice(0, -1);
    } else if (
      (input.value[input.value.length - 1] == " " &&
        input.value[input.value.length - 2] == "(") ||
      (input.value[input.value.length - 1] == ")" &&
        input.value[input.value.length - 2] == " ")
    ) {
      input.value = input.value.slice(0, -2);
      arr.splice(arr.length - 1, 2);
      num1 = num1.slice(0, -2);
      result = result.slice(0, -2);
    } else {
      input.value = input.value.slice(0, -3);
      arr.splice(arr.length - 1, 3);
      num1 = num1.slice(0, -3);
      result = result.slice(0, -3);
    }
  }
  if (array[buttonindex] === "AC") {
    input.value = "0";
    arr = [];
    num1 = "";
    result = "";
    input0.value = "";
  } else if (array[buttonindex] === " % ") {
    input.value = arr[0] / 100;
    result = arr[0] / 100;
    num1 = "";
    arr = [];
  }
}
function haalttai(array, inputdood) {
  aarhal = [];
  for (h = 0; array < array.length; h++) {
    if (h == " (") {
      aarhal.push(array);
      inputdood.value = "()";
    }
  }
}
