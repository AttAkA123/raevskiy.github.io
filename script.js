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
  .then(async res => {
    const data = await res.json();
    console.log("RESPONSE:", data);

    if (data.success) {
      alert("Успешно ✔");
    } else {
      alert("Ошибка: " + (data.error || "unknown"));
    }
  })
  .catch(err => {
    console.error("FETCH ERROR:", err);
    alert("Сервер недоступен");
  });
}