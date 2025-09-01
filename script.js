function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function decideLunch() {
  const namesInput = document.getElementById("namesInput").value;
  const totalAmount = parseFloat(document.getElementById("totalAmount").value);
  const payeeCount = parseInt(document.getElementById("payeeCount").value);
  const resultBox = document.getElementById("result");

  const names = namesInput
    .split(",")
    .map(n => n.trim())
    .filter(n => n)
    .map(capitalize);

  if (
    names.length === 0 ||
    isNaN(totalAmount) ||
    totalAmount <= 0 ||
    isNaN(payeeCount) ||
    payeeCount < 1 ||
    payeeCount > names.length
  ) {
    resultBox.innerText = "⚠️ Please enter valid inputs.";
    return;
  }

  const shuffled = [...names].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, payeeCount);

  const perPerson = (totalAmount / payeeCount).toFixed(2);
  const payersText =
    selected.length > 1
      ? selected.slice(0, -1).join(", ") + " ve " + selected.slice(-1)
      : selected[0];

  resultBox.innerText = `${payersText} will treat lunch today! 🍽️\nTotal bill: ₺${totalAmount.toFixed(2)}\nEach pays: ₺${perPerson}`;
}

// Update Istanbul datetime
function updateDateTime() {
  const now = new Date();
  const options = {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  document.getElementById("datetime").innerText = now.toLocaleString("en-GB", options);
}

setInterval(updateDateTime, 1000);