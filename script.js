// 🔥 СЮДА ВСТАВЬ ССЫЛКИ СБП ОТ ПЛАТЁЖКИ
const payLinks = {
  vip: "https://example.com/sbp/vip",
  case: "https://example.com/sbp/case",
  skin: "https://example.com/sbp/skin"
};

function buy(item) {
  const url = payLinks[item];

  if (!url) {
    alert("Ссылка оплаты не настроена!");
    return;
  }

  // редирект на СБП оплату
  window.location.href = url;
}