const name = ["하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열",
              "열하나", "열둘", "열셋", "열넷", "열다섯", "열여섯", "열일곱", "열여덟", "열아홉", "스물",
              "스물하나", "스물둘", "스물셋", "스물넷", "스물다섯", "스물여섯", "스물일곱", "스물여덟", "스물아홉", "서른",
              "서른하나", "서른둘", "서른셋", "서른넷", "서른다섯", "서른여섯", "서른일곱", "서른여덟", "서른아홉", "마흔"];

window.onload = function() {
  const fs = document.getElementById('fieldset_name');
  var ul = document.createElement('ul');
  fs.appendChild(ul);

  for (i=0; i<name.length; i++) {
    var li = document.createElement('li');
    li.innerText = name[i];
    ul.appendChild(li);
  }

  var li = document.createElement('li');
  let n = name.length;
  li.innerText = "(총 " + n + "명)";
  li.style.fontWeight = "bold";
  ul.appendChild(li);

  const bt = document.getElementById('button_result');
  bt.addEventListener("click", showResult);

  function showResult() {
    bt.style.display = "none";
    let nameRandom = [];

    for (i=0; i<name.length; i++) {
      nameRandom.push(name[i]);
    }

    nameRandom.sort(function() {
      return Math.random() - .5;
    });

    let rdFs = document.getElementById('fieldset_result');
    var ol = document.createElement('ol');
    rdFs.appendChild(ol);

    for (i=0; i<name.length; i++) {
      var li = document.createElement('li');
      li.innerText = nameRandom[i];
      ol.appendChild(li);
    }

  }
}
