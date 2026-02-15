export const logger = (msg: string) => {
  const el = document.getElementById("consoleLog");
  if (el) {
    el.innerHTML += `> ${msg}<br>`;
    el.scrollTop = el.scrollHeight;
  }
};
