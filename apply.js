const webhookURL = "https://discord.com/api/webhooks/1484577768401408002/V9fGpUF4FXO5DYNULvQgXimjnte8bfHHkSmJ9x3-gRGM32O6vMy98N54qKR1_s4E0j2E";

function sendApplication() {

  const name = document.getElementById("name").value;
  const nickname = document.getElementById("nickname").value;
  const age = document.getElementById("age").value;
  const wear = document.getElementById("wear").value;
  const Discord = document.getElementById("Discord").value;

  if (!name || !nickname || !age || !wear || !Discord) {
    alert("Заполни все поля!");
    return;
  }

  const message = {
    content: "📩 Новая заявка на сервер",
    embeds: [
      {
        title: "Заявка игрока",
        color: 16753920,
        fields: [
          { name: "Имя", value: name },
          { name: "Ник", value: nickname },
          { name: "Возраст", value: age },
          { name: "Причина", value: wear },
          { name: "Дискорд", value: Discord }
        ]
      }
    ]
  };

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  });

  alert("Заявка отправлена! Ожидайте ответа.");
}