const countDownDate = new Date("Feb 17, 2026 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây là đến Tết!`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "CHÚC MỪNG NĂM MỚI!";
    }
}, 1000);
