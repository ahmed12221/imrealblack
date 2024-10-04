document.addEventListener('DOMContentLoaded', function () {
    // انتظار تحميل جميع الصور
    const images = document.querySelectorAll('.game-circle img');
    const totalImages = images.length;
    let loadedImages = 0;

    images.forEach((img) => {
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                console.log('تم تحميل جميع الصور بنجاح.');
                // الآن يمكنك تفعيل أي أزرار أو روابط إذا لزم الأمر
            }
        };
    });

    var gameModal = document.getElementById('gameModal');
    var closeModal = document.querySelector('.modal .close');
    var gameTitle = document.getElementById('gameTitle');
    var gameReview = document.getElementById('gameReview');
    var gameRating = document.getElementById('gameRating');

    var gameCircles = document.querySelectorAll('.game-circle');
    gameCircles.forEach(function (circle) {
        circle.addEventListener('click', function () {
            var gameIndex = circle.getAttribute('data-game') - 1;
            var game = games[gameIndex];

            gameTitle.innerText = game.title;
            gameReview.innerText = game.review;
            gameRating.innerHTML = getStars(game.rating);
            var modalContent = document.querySelector('.modal-content');
            modalContent.style.backgroundImage = game.background;

            gameModal.style.display = 'flex';
        });
    });

    // إغلاق النافذة عند النقر خارج حدودها
    window.addEventListener('click', function (event) {
        if (event.target == gameModal) {
            gameModal.style.display = 'none';
        }
    });

    closeModal.addEventListener('click', function () {
        gameModal.style.display = 'none';
    });

    function getStars(rating) {
        let fullStar = '<span class="star">&#9733;</span>';
        let halfStar = '<span class="star">&#9734;</span>';
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += fullStar;
            } else if (i - rating < 1) {
                stars += halfStar;
            } else {
                stars += halfStar;
            }
        }
        return stars;
    }
});  