document.addEventListener('DOMContentLoaded', function () {

    var img = document.querySelectorAll('.img'),
        namber = 0;


    function sayHii() {

        img[namber].classList.add('active');
        img[namber].classList.add('index');

    }

    setTimeout(sayHii, 1500);


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
            }

            setTimeout(sayHi, 1500);

        });
    }, 5000)
});
