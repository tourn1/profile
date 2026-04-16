document.addEventListener('DOMContentLoaded', () => {
    const profileHeader = document.querySelector('.profile-header');
    const ratingDisplay = document.querySelector('.rating-large');
    const decimalsDisplay = document.querySelector('.decimals');
    
    let currentRating = 4.802;

    // Cookie Helpers
    function setCookie(name, value, days = 30) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Initialize Saved Ratings
    const starContainers = document.querySelectorAll('.stars-interactive');
    starContainers.forEach(container => {
        const postId = container.getAttribute('data-post-id');
        const savedRating = getCookie(`rating_${postId}`);
        if (savedRating) {
            const input = container.querySelector(`input[value="${savedRating}"]`);
            if (input) input.checked = true;
        }

        // Add event listeners for new ratings
        container.querySelectorAll('.star-input').forEach(star => {
            star.addEventListener('change', (e) => {
                const rating = e.target.value;
                setCookie(`rating_${postId}`, rating);
                showSocialPing(`Rated ${rating} Stars!`);
                
                // Simulate Nosedive effect on the rating bar
                container.style.transform = 'scale(1.05)';
                setTimeout(() => container.style.transform = 'scale(1)', 200);
            });
        });
    });

    // Profile Click Simulation
    profileHeader.addEventListener('click', () => {
        currentRating += 0.001;
        updateRatingDisplay(currentRating);
        ratingDisplay.classList.add('glow');
        setTimeout(() => ratingDisplay.classList.remove('glow'), 1500);
        showSocialPing('Rated 5 Stars!');
    });

    function updateRatingDisplay(val) {
        const parts = val.toFixed(3).split('.');
        ratingDisplay.firstChild.textContent = parts[0] + '.' + parts[1].substring(0, 1);
        decimalsDisplay.textContent = parts[1].substring(1);
    }

    function showSocialPing(message) {
        const ping = document.createElement('div');
        ping.className = 'social-notification';
        ping.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--card-white);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-left: 4px solid #2196F3;
            padding: 15px 25px;
            border-radius: 4px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            font-size: 0.9rem;
            font-weight: 600;
            color: #333;
            z-index: 1000;
            transform: translateX(120%);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        `;
        
        ping.textContent = message;
        document.body.appendChild(ping);
        
        setTimeout(() => ping.style.transform = 'translateX(0)', 100);
        setTimeout(() => {
            ping.style.transform = 'translateX(120%)';
            setTimeout(() => ping.remove(), 400);
        }, 3000);
    }

    // Tabs behavior
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});
