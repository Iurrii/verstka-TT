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
    valueOfGames: 5,
    goal: 6,
    pass: 2,
    rating: 89.4,
  },
  {
    name: "Сезон 2019/2018",
    valueOfGames: 5,
    goal: 5,
    pass: 3,
    rating: 89.4,
  },
  {
    name: "Сезон 2018/2017",
    valueOfGames: 5,
    goal: 4,
    pass: 3,
    rating: 89.4,
  },
  {
    name: "Сезон 2017/2016",
    valueOfGames: 5,
    goal: 1,
    pass: 4,
    rating: 89.4,
  },
];

let parentForGenerationTable = document.getElementById(
  "table-of-results-output"
);

console.log(parentForGenerationTable.rows);

createTable(parentForGenerationTable, statistics);

function createTable(tbody, array) {
  //сделать более универсальную функцию
  array.forEach(function (item) {
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

sortTableToLess(parentForGenerationTable);

function sortTableToMore(parent) {
  //2 сортировка по голам, к большему
  let arr = Array.from(parent.rows);
  arr.sort((a, b) => {
    let str = a.cells[2].textContent;
    let str2 = b.cells[2].textContent;
    return str.localeCompare(str2);
  });
  parent.append(...arr);
}

function sortTableToLess(parent) {
  //2 сортировка по голам, к меньшему
  let arr = Array.from(parent.rows);
  arr.sort((a, b) => {
    let str = a.cells[2].textContent;
    let str2 = b.cells[2].textContent;
    return str2.localeCompare(str);
  });
  parent.append(...arr);
}


