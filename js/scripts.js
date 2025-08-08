// 當滾動時改變導覽列背景
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 35, 126, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 35, 126, 0.7)';
    }
});

// 平滑滾動到錨點
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 滾動顯示動畫
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section > div').forEach((element) => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// 回到頂部按鈕
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});
