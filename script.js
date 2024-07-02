
var main = document.body;
const blob = document.getElementById("blob")

main.onmousemove = (e) => {
    const {clientX, clientY} = e;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 2500, fill: "forwards"});

}

function updateTime() {
  const currentTimeUTC = document.getElementById("currentTimeUTC");
  const currentDay = document.getElementById("currentDay");
  const now = new Date();

  currentTimeUTC.textContent = `Current Time in UTC: ${
    now.toUTCString().split(" ")[4]
  }`;
  currentDay.textContent = `Current Day: ${now.toLocaleDateString("en-US", {
    weekday: "long",
  })}`;
}

updateTime();
setInterval(updateTime, 60000);

