document.addEventListener('DOMContentLoaded', () => {
    const profileHeader = document.querySelector('.profile-header');
    const ratingDisplay = document.querySelector('.rating-large');
    const decimalsDisplay = document.querySelector('.decimals');

    let currentRating = 4.802;

    // --- postsManifest (Synced with latest file scan) ---
    const postsManifest = {
        "firenze": {
            folder: 1,
            files: [
                "tourn1_1774681051_3862626811729811455_11672319_1.jpg", "tourn1_1774681051_3862626815747955434_11672319_2.jpg", "tourn1_1774681051_3862626817249567692_11672319_3.jpg",
                "tourn1_1774681051_3862626821645151748_11672319_4.jpg", "tourn1_1774681051_3862626820311355138_11672319_5.jpg", "tourn1_1774681051_3862626919783480280_11672319_6.mp4",
                "tourn1_1774681051_3862626821116684530_11672319_7.jpg", "tourn1_1774681051_3862626873612593605_11672319_8.mp4", "tourn1_1774681051_3862626823423544732_11672319_9.jpg",
                "tourn1_1774681051_3862626824732156377_11672319_10.jpg", "tourn1_1774681051_3862626826711870738_11672319_11.jpg", "tourn1_1774681051_3862626829295578122_11672319_12.jpg",
                "tourn1_1774681051_3862626828523807104_11672319_13.jpg", "tourn1_1774681051_3862626831141102442_11672319_14.jpg", "tourn1_1774681051_3862626833867371531_11672319_15.jpg",
                "tourn1_1774681051_3862626835066970558_11672319_16.jpg", "tourn1_1774681051_3862626838682436082_11672319_17.jpg", "tourn1_1774681051_3862626839051519968_11672319_18.jpg",
                "tourn1_1774681051_3862626840611791145_11672319_19.jpg", "tourn1_1774681051_3862626842331482115_11672319_20.jpg"
            ]
        },
        "acdc": {
            folder: 2,
            files: [
                "tourn1_1774678678_3862606165570350467_11672319_1.jpg", "tourn1_1774678678_3862606487567031452_11672319_2.mp4", "tourn1_1774678678_3862606169118714093_11672319_3.jpg",
                "tourn1_1774678678_3862606241965343068_11672319_4.mp4", "tourn1_1774678678_3862606172935527773_11672319_5.jpg", "tourn1_1774678678_3862606323838182568_11672319_6.mp4",
                "tourn1_1774678678_3862606177960288799_11672319_7.jpg", "tourn1_1774678678_3862606566612912388_11672319_8.mp4", "tourn1_1774678678_3862606182985067827_11672319_9.jpg",
                "tourn1_1774678678_3862606406726045521_11672319_10.mp4", "tourn1_1774678678_3862606182641148638_11672319_11.jpg", "tourn1_1774678678_3862606642328456710_11672319_12.mp4",
                "tourn1_1774678678_3862606184385969064_11672319_13.jpg", "tourn1_1774678678_3862606185887544769_11672319_14.jpg", "tourn1_1774678678_3862606718589300773_11672319_15.mp4",
                "tourn1_1774678678_3862606189662417915_11672319_16.jpg", "tourn1_1774678678_3862606804933252223_11672319_17.mp4", "tourn1_1774678678_3862606877972864998_11672319_18.mp4",
                "tourn1_1774678678_3862606194829776566_11672319_19.jpg", "tourn1_1774678678_3862606196541056673_11672319_20.jpg"
            ]
        },
        "barcelona": {
            folder: 3,
            files: [
                "tourn1_1764039412_3773358542032834986_11672319_1.jpg", "tourn1_1764039412_3773358542049608066_11672319_2.jpg", "tourn1_1764039412_3773358542234184699_11672319_3.jpg",
                "tourn1_1764039412_3773358542049583574_11672319_4.jpg", "tourn1_1764039412_3773358542041220893_11672319_5.jpg", "tourn1_1764039412_3773358542049633065_11672319_6.jpg",
                "tourn1_1764039412_3773358542083163455_11672319_7.jpg", "tourn1_1764039412_3773358542041223300_11672319_8.jpg", "tourn1_1764039412_3773358542041231273_11672319_9.jpg",
                "tourn1_1764039412_3773358542041239445_11672319_10.jpg", "tourn1_1764039412_3773358542049602584_11672319_11.jpg", "tourn1_1764039412_3773358542049618215_11672319_12.jpg",
                "tourn1_1764039412_3773358542041233175_11672319_13.jpg", "tourn1_1764039412_3773358542116730786_11672319_14.jpg", "tourn1_1764039412_3773358542041197502_11672319_15.jpg",
                "tourn1_1764039412_3773358542041236663_11672319_16.jpg", "tourn1_1764039412_3773358542049612696_11672319_17.jpg", "tourn1_1764039412_3773358542049614756_11672319_18.jpg",
                "tourn1_1764039412_3773358542234127282_11672319_19.jpg", "tourn1_1764039412_3773358542049628069_11672319_20.jpg"
            ]
        },
        "lolla": {
            folder: 4,
            files: [
                "tourn1_1773725751_3854611208536456944_11672319_1.jpg", "tourn1_1773725751_3854611211933820093_11672319_2.jpg", "tourn1_1773725751_3854611214408452469_11672319_4.jpg",
                "tourn1_1773725751_3854611217000545626_11672319_5.jpg", "tourn1_1773725751_3854611216136481892_11672319_6.jpg",
                "tourn1_1773725751_3854611218099412952_11672319_7.jpg", "tourn1_1773725751_3854611219710023122_11672319_8.jpg", "tourn1_1773725751_3854611221974975099_11672319_9.jpg",
                "tourn1_1773725751_3854611358893803593_11672319_10.mp4", "tourn1_1773725751_3854611223090639252_11672319_11.jpg", "tourn1_1773725751_3854611232385226647_11672319_12.jpg",
                "tourn1_1773725751_3854611407572940068_11672319_13.mp4", "tourn1_1773725751_3854611234398517726_11672319_14.jpg", "tourn1_1773725751_3854611289243213473_11672319_15.mp4",
                "tourn1_1773725751_3854611236713763844_11672319_16.jpg", "tourn1_1773725751_3854611532856818651_11672319_17.mp4", "tourn1_1773725751_3854611237602933295_11672319_18.jpg",
                "tourn1_1773725751_3854611479798855437_11672319_19.mp4"
            ]
        },
        "cobo": {
            folder: 5,
            files: [
                "tourn1_1767507711_3802450499321306163_11672319_1.mp4", "tourn1_1767507711_3802452741285864342_11672319_2.jpg", "tourn1_1767507711_3802452741378127972_11672319_3.jpg",
                "tourn1_1767507711_3802450646591683679_11672319_4.mp4", "tourn1_1767507711_3802452741260668655_11672319_5.jpg", "tourn1_1767507711_3802452741269082795_11672319_6.jpg",
                "tourn1_1767507711_3802452741495557036_11672319_7.jpg", "tourn1_1767507711_3802452741260687199_11672319_8.jpg", "tourn1_1767507711_3802452741302598786_11672319_9.jpg",
                "tourn1_1767507711_3802452741487154805_11672319_10.jpg", "tourn1_1767507711_3802452741302614716_11672319_11.jpg", "tourn1_1767507711_3802452741302640866_11672319_12.jpg",
                "tourn1_1767507711_3802450695052708905_11672319_13.mp4", "tourn1_1767507711_3802452741302624359_11672319_14.jpg", "tourn1_1767507711_3802450734042915054_11672319_15.mp4",
                "tourn1_1767507711_3802452741260680039_11672319_16.jpg", "tourn1_1767507711_3802452741285865325_11672319_17.jpg", "tourn1_1767507711_3802452741302595480_11672319_18.jpg",
                "tourn1_1767507711_3802452741302624089_11672319_19.jpg", "tourn1_1767507711_3802450804758916052_11672319_20.mp4"
            ]
        }
    };

    // Alphabetical sort of files
    Object.keys(postsManifest).forEach(key => postsManifest[key].files.sort());

    function setCookie(name, value, days = 30) {
        const expires = new Date(); expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
    function getCookie(name) {
        const nameEQ = name + "="; const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]; while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }


    // =============================================
    // COMMENT SYSTEM — EmailJS
    // =============================================
    // Each new comment is sent directly to tourn2@gmail.com via EmailJS.
    // No local storage or XML files are used.

    // ⚠ IMPORTANTE: reemplazá 'YOUR_PUBLIC_KEY' con tu Public Key de EmailJS
    // (Dashboard de emailjs.com → Account → API Keys → Public Key)
    emailjs.init('yv9VkHcHl7u1VaKud');

    const EMAILJS_SERVICE_ID = 'service_vjbj3fa';
    const EMAILJS_TEMPLATE_ID = 'template_v43fl6c'; // Cambiá si tu template tiene otro ID

    async function saveComment(postId, text, btn, input) {
        // Disable button while sending
        btn.disabled = true;
        btn.textContent = 'Sending...';

        const templateParams = {
            post_id: postId,
            comment: text,
            sent_at: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }),
            to_email: 'tourn2@gmail.com'
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
            showSocialPing('✅ Comentario enviado!');
            input.value = '';
            // Reset verification slider so the user must re-verify for next comment
            const section = btn.closest('.comments-section');
            const wrapper = section?.querySelector('.verification-wrapper');
            const slider = section?.querySelector('.verification-slider');
            if (wrapper && slider) {
                wrapper.classList.remove('verified');
                slider.style.transform = 'translateX(0)';
                slider.innerHTML = '❯';
            }
        } catch (err) {
            console.error('EmailJS error:', err);
            showSocialPing('❌ Error al enviar. Intentá de nuevo.');
        } finally {
            btn.disabled = false;
            btn.textContent = 'Post';
        }
    }


    // --- Media Helper ---
    function renderMedia(path, className, isModal = false) {
        const isVideo = path.toLowerCase().endsWith('.mp4');
        if (isVideo) {
            return `<video src="${path}" class="${className}" ${isModal ? 'controls' : 'autoplay muted loop playsinline'} onerror="this.style.display='none'"></video>`;
        }
        return `<img src="${path}" class="${className}" alt="Media" onerror="this.style.display='none'">`;  
    }

    // --- Gallery Renderer ---
    function renderPostGalleries() {
        document.querySelectorAll('.post-card').forEach(card => {
            const postId = card.id.replace('post-', '');
            const config = postsManifest[postId];
            if (!config) return;
            const container = card.querySelector('.post-images');
            if (!container) return;

            const displayFiles = config.files.slice(0, 3);
            container.innerHTML = `
                ${renderMedia(`images/POST/${config.folder}/${displayFiles[0]}`, 'post-img clickable-img')}
                <div class="post-sub-images">
                    ${displayFiles[1] ? renderMedia(`images/POST/${config.folder}/${displayFiles[1]}`, 'sub-img clickable-img') : ''}
                    ${displayFiles[2] ? renderMedia(`images/POST/${config.folder}/${displayFiles[2]}`, 'sub-img clickable-img') : ''}
                </div>
            `;
            initVerification(card.querySelector('.comments-section'));
            const btn = card.querySelector('.comment-submit');
            const input = card.querySelector('.comment-input');
            btn.addEventListener('click', () => { if (input.value.trim()) { saveComment(postId, input.value.trim(), btn, input); } });
        });
        attachImageListeners();
    }

    const modal = document.getElementById('image-modal');
    const modalWrapper = modal.querySelector('.modal-content-wrapper');
    const closeBtn = modal.querySelector('.modal-close');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let allMedia = []; let currentIndex = 0; let currentPostId = '';

    function updateModalMedia() {
        // Find existing media or placeholder
        let currentMedia = modal.querySelector('.modal-image, .modal-video');
        if (currentMedia) currentMedia.style.opacity = '0';

        setTimeout(() => {
            const path = allMedia[currentIndex].src;
            const isVideo = path.toLowerCase().endsWith('.mp4');
            const newMediaHTML = renderMedia(path, isVideo ? 'modal-video' : 'modal-image', true);

            // Re-render the media element inside the wrapper
            // We need to keep the rating and controls, so we only replace the media part
            const oldMedia = modal.querySelector('.modal-image, .modal-video');
            if (oldMedia) {
                oldMedia.outerHTML = newMediaHTML;
            } else {
                modalWrapper.insertAdjacentHTML('afterbegin', newMediaHTML);
            }

            const rating = getCookie(`rating_${currentPostId}`);
            modal.querySelectorAll('.star-input').forEach(input => input.checked = (input.value === rating));
        }, 200);
    }

    function attachImageListeners() {
        document.querySelectorAll('.clickable-img').forEach(img => {
            img.addEventListener('click', (e) => {
                const postCard = img.closest('.post-card');
                currentPostId = postCard.id.replace('post-', '');
                const config = postsManifest[currentPostId];
                allMedia = config.files.map(f => ({ src: `images/POST/${config.folder}/${f}` }));

                const clickedSrc = e.target.src || e.target.currentSrc;
                const clickedFilename = decodeURIComponent(clickedSrc.split('/').pop().split('?')[0]);
                currentIndex = config.files.indexOf(clickedFilename);
                if (currentIndex === -1) currentIndex = 0;

                modal.querySelector('.modal-stars').setAttribute('data-post-id', currentPostId);
                updateModalMedia();
                modal.classList.add('active');
            });
        });
    }

    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = (currentIndex > 0) ? currentIndex - 1 : allMedia.length - 1; updateModalMedia(); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); currentIndex = (currentIndex < allMedia.length - 1) ? currentIndex + 1 : 0; updateModalMedia(); });

    function initRatings(container) {
        const postId = container.getAttribute('data-post-id');
        const savedRating = getCookie(`rating_${postId}`);
        if (savedRating) { const input = container.querySelector(`input[value="${savedRating}"]`); if (input) input.checked = true; }
        container.querySelectorAll('.star-input').forEach(star => {
            star.addEventListener('change', (e) => {
                const rating = e.target.value; const targetPostId = container.getAttribute('data-post-id');
                if (targetPostId === 'modal') {
                    setCookie(`rating_${currentPostId}`, rating);
                    const mainContainer = document.querySelector(`.stars-interactive[data-post-id="${currentPostId}"]`);
                    if (mainContainer) { const mainInput = mainContainer.querySelector(`input[value="${rating}"]`); if (mainInput) mainInput.checked = true; }
                } else { setCookie(`rating_${targetPostId}`, rating); }
                showSocialPing(`Rated ${rating} Stars!`);
            });
        });
    }
    document.querySelectorAll('.stars-interactive').forEach(initRatings);

    function initVerification(section) {
        if (!section) return;
        const wrapper = section.querySelector('.verification-wrapper');
        const track = section.querySelector('.verification-track');
        const slider = section.querySelector('.verification-slider');
        const submitBtn = section.querySelector('.comment-submit');
        if (!wrapper || !track || !slider) return;
        const maxDelta = track.clientWidth - slider.clientWidth - 8;
        slider.addEventListener('mousedown', startDrag); slider.addEventListener('touchstart', startDrag);
        function startDrag(e) {
            if (wrapper.classList.contains('verified')) return;
            const startX = (e.type === 'mousedown') ? e.clientX : e.touches[0].clientX;
            const onDrag = (ev) => {
                const curX = (ev.type === 'mousemove') ? ev.clientX : ev.touches[0].clientX;
                let delta = curX - startX; if (delta < 0) delta = 0; if (delta > maxDelta) delta = maxDelta;
                slider.style.transform = `translateX(${delta}px)`; if (delta >= maxDelta * 0.95) verify(onDrag);
            };
            const endDrag = () => { if (!wrapper.classList.contains('verified')) slider.style.transform = 'translateX(0)'; document.removeEventListener('mousemove', onDrag); document.removeEventListener('mouseup', endDrag); };
            document.addEventListener('mousemove', onDrag); document.addEventListener('mouseup', endDrag);
        }
        function verify(cleanupFn) {
            wrapper.classList.add('verified'); slider.style.transform = `translateX(${maxDelta}px)`; slider.innerHTML = '✓'; submitBtn.disabled = false;
            document.removeEventListener('mousemove', cleanupFn);
        }
    }

    renderPostGalleries();
    const updateRatingDisplay = (val) => {
        const parts = val.toFixed(3).split('.');
        ratingDisplay.firstChild.textContent = parts[0] + '.' + parts[1].substring(0, 1);
        decimalsDisplay.textContent = parts[1].substring(1);
    };
    updateRatingDisplay(currentRating);
    profileHeader.addEventListener('click', () => { currentRating += 0.001; updateRatingDisplay(currentRating); ratingDisplay.classList.add('glow'); setTimeout(() => ratingDisplay.classList.remove('glow'), 1500); showSocialPing('Rated 5 Stars!'); });

    function showSocialPing(message) {
        const ping = document.createElement('div'); ping.className = 'social-notification';
        ping.style.cssText = `position: fixed; top: 20px; right: 20px; background: var(--card-white); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-left: 4px solid var(--gold); padding: 15px 25px; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); font-size: 0.9rem; font-weight: 600; color: #333; z-index: 5000; transform: translateX(120%); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);`;
        ping.textContent = message; document.body.appendChild(ping);
        setTimeout(() => ping.style.transform = 'translateX(0)', 100);
        setTimeout(() => { ping.style.transform = 'translateX(120%)'; setTimeout(() => ping.remove(), 400); }, 3000);
    }

    const revealObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
