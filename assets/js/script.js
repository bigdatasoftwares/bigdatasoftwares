document.addEventListener('DOMContentLoaded', function() {
    // Get individual elements
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    const launchDate = new Date('2025-06-30T00:00:00'); // Set your launch date here

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = launchDate - now;

        if (timeRemaining <= 0) {
            document.getElementById('timer').innerHTML = '<h2 class="launched">We have launched! 🚀</h2>';
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update each element individually with padding and data attribute
        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        // Add data attributes for styling
        [daysElement, hoursElement, minutesElement, secondsElement].forEach(el => {
            el.setAttribute('data-value', el.textContent);
        });
    }

    // Initial call
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});