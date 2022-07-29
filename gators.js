'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let addRaccoon = () => {
  let theRaccoonMeter = document.getElementById("blueBox");
  theRaccoonMeter.append("🐊");
};


function Button1(){
  const num = document.getElementById("number");
  const output = num.value;

  for (let i = 1; i <= output; i++) {
    addRaccoon();
  }
}
