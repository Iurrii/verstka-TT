const seasons = [
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

let parentForGenerationTable = document.getElementById("table-of-results-output");

// createTable(parentForGenerationTable, 5, 4)

// function createTable(parent, rows, cols) {
//   var tbody = document.createElement('tbody');
//   for (let i = 0; i < rows; i++) {
//     var tr = document.createElement('tr');
//     for (let j = 0; j < cols; j++) {
//       var td = document.createElement('td')
//       tr.appendChild(td);
//     }
//     tbody.appendChild(tr);
//   }
//   parent.appendChild(tbody);
// }

addContentForTable(seasons);

function addContentForTable(arr) {
  for (let item of arr) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = item.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = item.valueOfGames;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = item.goal;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerHTML = item.pass;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerHTML = item.rating;
    tr.appendChild(td5);

    parentForGenerationTable.appendChild(tr);
  }
}
