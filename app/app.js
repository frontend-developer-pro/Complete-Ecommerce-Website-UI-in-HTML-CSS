
document.addEventListener('DOMContentLoaded', function () {
    // Set the countdown date (3 days, 23 hours, 19 minutes and 56 seconds from now)
    const now = new Date();
    const countdownDate = new Date(now);
    countdownDate.setDate(now.getDate() + 3);
    countdownDate.setHours(now.getHours() + 23);
    countdownDate.setMinutes(now.getMinutes() + 19);
    countdownDate.setSeconds(now.getSeconds() + 56);

    // Update the countdown every second
    const countdown = setInterval(function () {
        // Get current date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countdownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }, 1000);

    // Function to format time (add leading zero if needed)
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    // Add event listeners for wishlist buttons
    const wishlistButtons = document.querySelectorAll('.wishlist');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle the heart icon (empty/filled)
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#DB4444';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });
    });

    // Add event listeners for add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Animation effect when clicking "Add to Cart"
            this.innerHTML = '✓ Added';
            this.style.backgroundColor = '#4CAF50';

            // Reset after 2 seconds
            setTimeout(() => {
                this.innerHTML = 'Add To Cart';
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
});

// Category card selection functionality
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function () {
        // Remove active class from all cards
        categoryCards.forEach(c => c.classList.remove('active'));
        // Add active class to clicked card
        this.classList.add('active');

        const categoryName = this.querySelector('.category-name').textContent;
        console.log(`Category selected: ${categoryName}`);
        // Here you would typically filter products based on the selected category
    });
});


