const statistics = [
  {
    name: "Сезон 2021/2020",
    valueOfGames: 5,
    goal: 5,
    pass: 2,
    rating: 89.4,
  },
  {
    name: "Сезон 2020/2019",
    valueOfGames: 3,
    goal: 6,
    pass: 2,
    rating: 89.4,
  },
  {
    name: "Сезон 2019/2018",
    valueOfGames: 2,
    goal: 5,
    pass: 3,
    rating: 89.4,
  },
  {
    name: "Сезон 2018/2017",
    valueOfGames: 4,
    goal: 4,
    pass: 3,
    rating: 89.4,
  },
  {
    name: "Сезон 2017/2016",
    valueOfGames: 1,
    goal: 1,
    pass: 4,
    rating: 89.4,
  },
];
let games = document.getElementById("1");
let goals = document.getElementById("2");
let pass = document.getElementById("3");
let goalsEndPass = document.getElementById("4");
let rating = document.getElementById("5");
let listnersForTableBtns = [games, goals, pass, goalsEndPass, rating];

let parentForGenerationTable = document.getElementById(
  "table-of-results-output"
);

window.onload = () => {
  createTable(parentForGenerationTable, statistics);
  addListenersForTableBtns(listnersForTableBtns);
};

function createTable(tbody, array) {
  //сделать более универсальную функцию
  array.forEach((item) => {
    let tr = document.createElement("tr");
    let tdname = document.createElement("td");
    let tdvalueOfGames = document.createElement("td");
    let tdgoal = document.createElement("td");
    let tdpass = document.createElement("td");
    let tdgoalEndPass = document.createElement("td");
    let tdrating = document.createElement("td");

    tdname.innerText = item.name;
    tdvalueOfGames.innerText = item.valueOfGames;
    tdgoal.innerText = item.goal;
    tdpass.innerText = item.pass;
    tdgoalEndPass.innerHTML = item.goal + item.pass;
    tdrating.innerText = item.rating;

    tr.appendChild(tdname);
    tr.appendChild(tdvalueOfGames);
    tr.appendChild(tdgoal);
    tr.appendChild(tdpass);
    tr.appendChild(tdgoalEndPass);
    tr.appendChild(tdrating);
    tbody.appendChild(tr);
  });
}

// parent - родитель, куда возвращается отсортированный список строк
// id - берется из заголовка для каждого типа данных и определяет ячейку в строке
// trendTo - берётся из кнопки и определяет направление сортировки
function sortTable(parent, id, trendTo) {
  let arr = Array.from(parent.rows);

  if (trendTo === "less") {
    arr.sort((a, b) => {
      let str = a.cells[id].textContent;
      let str2 = b.cells[id].textContent;
      return str2.localeCompare(str);
    });
  }

  if (trendTo === "more") {
    arr.sort((a, b) => {
      let str = a.cells[id].textContent;
      let str2 = b.cells[id].textContent;
      return str.localeCompare(str2);
    });
  }
  parent.append(...arr);
}

function addListenersForTableBtns(arr) {
  arr.forEach((item) => {
    item.addEventListener("click", (e) => {
      let idParent = e.target.parentElement.id;
      let trend = e.target.dataset.trend;

      sortTable(parentForGenerationTable, idParent, trend);
    });
  });
}
