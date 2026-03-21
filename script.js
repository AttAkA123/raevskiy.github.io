function buy(item) {
  const nickname = document.getElementById("nickname")?.value;

  if (!nickname) {
    alert("Введи ник Minecraft!");
    return;
  }

  fetch("http://5.42.109.215:3000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nickname,
      item
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.whitelist) {
      alert("Ты добавлен в вайтлист ✔");
    } else {
      alert("Ошибка");
    }
  });
}