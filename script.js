document.addEventListener('DOMContentLoaded', function () {

    var img = document.querySelectorAll('.img'),
        namber = 0;
    img[namber].classList.add('active');
    img[namber].classList.add('index');
    setInterval(function () {

        if (namber <= 2) {
            namber++;
        } else {
            namber = 0;
        }

        ar = Array.from(img);

        if (namber === 0) {
            img[3].classList.remove('active');
        } else {
            img[namber - 1].classList.remove('active');
        }

        ar.forEach(function (item) {
            function sayHi() {
                if (namber === 0) {
                    img[3].classList.remove('index');
                } else {
                    img[namber - 1].classList.remove('index');
                }
                img[namber].classList.add('active');
                img[namber].classList.add('index');
                console.log(namber)
            }

            setTimeout(sayHi, 850);

        });
    }, 5000)
});
