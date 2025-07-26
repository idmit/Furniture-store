document.getElementById('credit-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const years = parseInt(document.getElementById('years').value, 10);
    const rate = parseFloat(document.getElementById('rate').value);

    // Формула аннуитетного платежа
    // P = S * (r * (1 + r)^n) / ((1 + r)^n - 1)
    const n = years * 12;
    const r = rate / 100 / 12;

    if (amount <= 0 || years <= 0 || rate <= 0) {
        document.getElementById('result').textContent = "Проверьте корректность введённых данных.";
        return;
    }

    const monthly = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const overpay = total - amount;

    document.getElementById('result').innerHTML =
        `<b>Ежемесячный платёж:</b> ${monthly.toLocaleString('ru-RU', {maximumFractionDigits: 2})} ₽<br>
         <b>Переплата:</b> ${overpay.toLocaleString('ru-RU', {maximumFractionDigits: 2})} ₽<br>
         <b>Общая сумма выплат:</b> ${total.toLocaleString('ru-RU', {maximumFractionDigits: 2})} ₽`;
});