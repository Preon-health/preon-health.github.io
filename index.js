document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById('scrollBtn');

    btn.addEventListener('click', function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});
