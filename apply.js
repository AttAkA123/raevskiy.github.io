const webhookURL = "https://discord.com/api/webhooks/1484577768401408002/V9fGpUF4FXO5DYNULvQgXimjnte8bfHHkSmJ9x3-gRGM32O6vMy98N54qKR1_s4E0j2E";

function sendApplication() {

  const nickname = document.getElementById("nickname").value;
  const Discord = document.getElementById("Discord").value;
  const age = document.getElementById("age").value;
  const reason = document.getElementById("reason").value;

  if (!nickname || !age || !reason) {
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
          { name: "Discord", value: Discord },
          { name: "Ник", value: nickname },
          { name: "Возраст", value: age },
          { name: "Причина", value: reason }
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

  alert("Заявка отправлена!");
}