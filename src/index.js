const a = [
  {
    date: new Date(2025, 7, 1, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 3, 11),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 4, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 6, 10),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 7, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 8, 12),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 9, 12),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 11, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 12, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 14, 10),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 15, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 18, 13),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 19, 10),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 20, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 25, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 26, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 27, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 28, 11),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 30, 14),
    shiftTime: 9,
  },
];
const b = [
  {
    date: new Date(2025, 7, 25, 9),
    shiftTime: 7,
  },
  {
    date: new Date(2025, 7, 26, 14),
    shiftTime: 9,
  },
  {
    date: new Date(2025, 7, 27, 14),
    shiftTime: 8,
  },
  {
    date: new Date(2025, 7, 30, 14),
    shiftTime: 8,
  },
  {
    date: new Date(2025, 7, 31, 13),
    shiftTime: 8,
  },
];

// 1) get current data
// 2) Render days to the end of the month and render day-off

const tbody = document.querySelector("table tbody");

const currentDate = new Date(); // January

const lastDateCurrentMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
);
const firstDateCurrentMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
);

console.log();

// render empty days
let emptyDays = "";

for (let i = 1; i < firstDateCurrentMonth.getDay(); i++) {
  emptyDays += "<td class='empty'></td>";
}

tbody.insertAdjacentHTML("beforeend", `<tr>${emptyDays}</tr>`);

// render days to end of the week
const firstTd = tbody.querySelector("tr");
let days = "";
let j = 1;

for (let i = 0; i < 7 - (firstDateCurrentMonth.getDay() - 1); i++) {
  const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), j++);
  days += renderDay(d);
}

firstTd.insertAdjacentHTML("beforeend", `${days}`);

days = [];

for (let i = 0; i <= lastDateCurrentMonth.getDate(); i++) {
  const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + j);

  if (d.getDay() === 1 && i + j + 7 > lastDateCurrentMonth.getDate()) {
    j = i + j;
    break;
  }

  days.push(d);

  if ((i + j + 1) % 7 === 0) {
    tbody.insertAdjacentHTML(
      "beforeend",
      `<tr>
        ${days.map((date) => renderDay(date)).join("\n")}
      </tr>`
    );
    days = [];
  }
}

days = "";

for (let i = 0; i + j <= lastDateCurrentMonth.getDate(); i++) {
  const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + j);
  days += renderDay(d);
}

tbody.insertAdjacentHTML("beforeend", `<tr>${days}</tr>`);

function renderDay(d) {
  const aDay = a.filter(({ date }) => date.getDate() === d.getDate())[0];
  const bDay = b.filter(({ date }) => date.getDate() === d.getDate())[0];


  return `<td class='${(aDay && bDay) || (!aDay && !bDay) ? "green" : ""}'>
    <p>${d.getDate()}</p>
    <div>
        <p>
            Alex1 | 
            ${aDay !== undefined ? aDay.date.getHours() + 1 : ''}
            -
            ${aDay !== undefined ? aDay.date.getHours() + 1 + aDay.shiftTime + ':15' : ''} 
            | ${aDay !== undefined ? aDay.shiftTime : ''}
        </p>
    </div>
    <div>
        <p>
        Alex2 |
            ${bDay !== undefined ? bDay.date.getHours() + 1 : ''}
            -
            ${bDay !== undefined ? bDay.date.getHours() + 1 + bDay.shiftTime + ':15' : ''} 
            | ${bDay !== undefined ? bDay.shiftTime : ''}
        </p>
    </div>
    </td>`;
}

const caption = document.querySelector('caption');


let aShiftTime = a.reduceRight((acc, val) => acc + val.shiftTime,0);
let bShiftTime = b.reduceRight((acc, val) => acc + val.shiftTime,0);

let c = 25;
let aSal = aShiftTime * c;
let bSal = bShiftTime * c;


caption.innerHTML = `Alex1 - Shift time = ${aShiftTime} Salary = ${aSal}zł <br> Alex2 - Shift time = ${bShiftTime} Salary = ${bSal}zł`;
