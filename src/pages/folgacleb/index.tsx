import { useState } from "react";
import { random } from "@/utils/math";
import { range } from "@/utils/range";
import {
  HOURS_IN_A_DAY,
  MILISECONDS_IN_AN_HOUR,
  dateIsToday,
  getAmountOfWeeks,
  getFirstAndLastDayOfMonth,
  months,
  weekdays,
} from "@/utils/date";
import "./style.css";

let diaAlternado = Number(localStorage.getItem("diaAlternado"));
if (isNaN(diaAlternado)) {
  diaAlternado = 0;
}

const qtd_fotos = {
  semfolga: 8,
  folga: 8,
};

function taDeFolga(date: Date, alternate: boolean) {
  const HOURS_PASSED_SINCE_1_1_1970 =
    date.getTime() / MILISECONDS_IN_AN_HOUR - 3; //UTC -3
  const DAYS_PASSED = Math.floor(HOURS_PASSED_SINCE_1_1_1970 / HOURS_IN_A_DAY);
  return (DAYS_PASSED + (alternate ? 1 : 0)) % 2;
}

type BaseCalendarProps = {
  firstDay: Date;
  lastDay: Date;
  alternate: boolean;
};

function BaseCalendar({ firstDay, lastDay, alternate }: BaseCalendarProps) {
  let totalWeeks = getAmountOfWeeks(firstDay, lastDay);
  let firstWeekdayOfMonth = firstDay.getDay();
  let lastDayOfMonth = lastDay.getDate();

  return (
    <div className="calendar">
      <div className="month">{months[firstDay.getMonth()]}</div>
      <div className="calendar-row weekrow">
        {weekdays.map((weekday) => (
          <div className="weekday">{weekday}</div>
        ))}
      </div>
      {range(0, totalWeeks).map((week) => {
        return (
          <div key={`week-${week}`} className="calendar-row">
            {range(0, 7).map((weekDay) => {
              const currentDay = week * 7 + (weekDay + 1 - firstWeekdayOfMonth);
              const currentDayDate = new Date(
                firstDay.getFullYear(),
                firstDay.getMonth(),
                currentDay,
              );
              return (weekDay < firstWeekdayOfMonth && week == 0) ||
                currentDay > lastDayOfMonth ? (
                <div key={"day" + week + "-" + weekDay}></div>
              ) : (
                <div
                  key={"day" + week + "-" + weekDay}
                  className={`
                    calendar-day
                    ${taDeFolga(currentDayDate, alternate) ? "folga" : "sem-folga"}
                    ${dateIsToday(currentDayDate) && "hoje"}`}
                >
                  {currentDay}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export function FolgaCleb() {
  const [alternate, setAlternate] = useState(diaAlternado === 1);
  const folga = taDeFolga(new Date(), alternate);
  const [photoIndex, setPhotoIndex] = useState(
    random(1, folga ? qtd_fotos.folga : qtd_fotos.semfolga),
  );

  function generateNewPhotoIndex() {
    setPhotoIndex((prevPhotoIndex) => {
      let newPhotoIndex = prevPhotoIndex;
      while (newPhotoIndex == prevPhotoIndex) {
        newPhotoIndex = random(1, folga ? qtd_fotos.folga : qtd_fotos.semfolga);
      }
      return newPhotoIndex;
    });
  }

  return (
    <html>
      <head>
        <title>Folga do cleb</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1 id="folga">
          {folga ? "Cleb ta de folga hoje" : "Cleb não ta de folga hoje"}
        </h1>
        <main>
          <div>
            <img
              onClick={generateNewPhotoIndex}
              width="500px"
              src={`
                /src/assets/folgacleb/${
                  folga
                    ? "folga/" + photoIndex + ".png"
                    : "semfolga/" + photoIndex + ".png"
                }`}
            />
          </div>
          <div id="calendarios">
            <BaseCalendar
              firstDay={getFirstAndLastDayOfMonth(new Date())[0]}
              lastDay={getFirstAndLastDayOfMonth(new Date())[1]}
              alternate={alternate}
            />
            <BaseCalendar
              firstDay={getFirstAndLastDayOfMonth(new Date(2026, 10, 9))[0]}
              lastDay={getFirstAndLastDayOfMonth(new Date(2026, 10, 9))[1]}
              alternate={alternate}
            />
          </div>
          <div id="extra">
            <div
              id="alternar"
              onClick={() => {
                localStorage.setItem(
                  "diaAlternado",
                  String(Number(!alternate)),
                );
                setAlternate(!alternate);
                generateNewPhotoIndex();
              }}
            >
              Alternar dias
            </div>
            <div id="legendas">
              <h2>Legendas</h2>
              <div>
                <div className="leg folga">Folga</div>
                <div className="leg sem-folga">Trabaia</div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
