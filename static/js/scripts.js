document.addEventListener('DOMContentLoaded', function () {
    // Show the button when scrolled down 100px
    
    window.onscroll = function() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Smooth scroll to top
    document.getElementById("scrollToTopBtn").addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
