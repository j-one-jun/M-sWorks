// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// メニューボタンが存在する場合のみイベントリスナーを設定
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}


// フェードインアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.fade-in-target');

    if (targets.length === 0) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // 10%見えたら発動
    });

    targets.forEach(target => {
        observer.observe(target);
    });
});
