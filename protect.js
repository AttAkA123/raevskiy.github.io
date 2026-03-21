
// 🚫 Отключаем правый клик
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// ⌨️ Блокировка клавиш DevTools
document.addEventListener("keydown", function (e) {

  // F12
  if (e.key === "F12") {
    e.preventDefault();
    return false;
  }

  // Ctrl+Shift+I / J / C
  if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
    e.preventDefault();
    return false;
  }

  // Ctrl+U
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
    return false;
  }

});

// 🧠 Детект DevTools (примерный)
setInterval(function () {
  const devtoolsOpen = window.outerWidth - window.innerWidth > 160 ||
                       window.outerHeight - window.innerHeight > 160;

  if (devtoolsOpen) {
    document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:20%'>Закрой DevTools</h1>";
  }
}, 1000);
