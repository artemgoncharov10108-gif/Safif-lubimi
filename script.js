// ========== ПРИЧИНЫ (можно добавлять/менять) ==========
const reasons = [
    "за твою улыбку, от которой мир становится ярче",
    "за твои глаза, в которых я теряюсь",
    "за то, как ты смеёшься над моими шутками",
    "за то, что ты всегда поддерживаешь меня",
    "за твою доброту к людям",
    "за то, как ты морщишь носик",
    "за каждое наше утро вместе",
    "за твой голос — лучшую музыку",
    "за то, что ты веришь в меня",
    "за твои объятия, лечащие всё",
    "за то, что ты всегда настоящая",
    "за наши разговоры до рассвета",
    "за то, как ты заботишься",
    "за твою честность",
    "за радость от маленьких вещей",
    "за умение молчать вместе",
    "за то, что ты мой дом",
    "за то, что ты выбираешь меня",
    "за то, что ты — это ты",
    "за то, что я каждый день влюбляюсь заново"
];

// ========== ОТРИСОВКА КАРТОЧЕК ==========
function renderReasons() {
    const grid = document.getElementById('reasonsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    reasons.forEach((text, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="card-number">❤️ ${index+1}</div>
            <div class="card-text">${text}</div>
        `;
        card.addEventListener('click', () => {
            toast(`❤️ ${text} ❤️`);
        });
        grid.appendChild(card);
    });
}

// ========== ВСПЛЫВАЮЩЕЕ УВЕДОМЛЕНИЕ ==========
function toast(msg) {
    const toastEl = document.createElement('div');
    toastEl.innerText = msg;
    toastEl.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: #ff6b8a;
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        font-weight: bold;
        z-index: 9999;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        font-size: 1rem;
        white-space: nowrap;
        animation: fadeInUp 0.3s ease;
    `;
    document.body.appendChild(toastEl);
    setTimeout(() => toastEl.remove(), 2000);
}

// ========== СЮРПРИЗ (модальное окно) ==========
function showSurprise() {
    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal';
    modalDiv.innerHTML = `
        <div class="modal-content">
            <div style="font-size: 4rem;">🎉💖🎉</div>
            <h2>Сафийчик, я тебя люблю!</h2>
            <p style="margin: 1rem 0;">Ты — лучшее, что случилось в моей жизни. Спасибо, что ты есть ❤️</p>
            <button class="close-modal">Закрыть</button>
        </div>
    `;
    document.body.appendChild(modalDiv);
    modalDiv.querySelector('.close-modal').addEventListener('click', () => {
        modalDiv.remove();
    });
}

// ========== ПАРЯЩИЕ СЕРДЦА НА ФОНЕ ==========
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-bg';
        heart.innerHTML = ['❤️', '💖', '💕', '💗', '💓'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = 8 + Math.random() * 8 + 's';
        heart.style.fontSize = 1 + Math.random() * 2 + 'rem';
        container.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 12000);
    }, 600);
}

// ========== ЗАПУСК ВСЕГО ==========
document.addEventListener('DOMContentLoaded', () => {
    renderReasons();
    createFloatingHearts();
    const surpriseBtn = document.getElementById('surpriseBtn');
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', showSurprise);
    }
});
