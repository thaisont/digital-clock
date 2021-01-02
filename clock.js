const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
 <span>${leadingZero(h)}</span> :
    <span>${leadingZero(m)}</span> :
    <span>${leadingZero(s)}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);

const leadingZero = (s) => {
  if (s < 10) {
    return "0" + String(s);
  } else {
    return s;
  }
};
