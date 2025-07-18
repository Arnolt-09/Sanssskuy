// Interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Smooth reveal animation for sections
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInLeft 0.8s ease-out forwards';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Button interactions
    document.querySelectorAll('.live-demo-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                alert('Demo akan segera tersedia! 🚀');
            }, 100);
        });
    });

    // Message button interaction
    document.querySelector('.message-btn').addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
      
        
    });

    // Avatar interaction
    document.querySelector('.avatar').addEventListener('click', function() {
        this.style.animation = 'bounceIn 0.6s ease-out';
        setTimeout(() => {
            this.style.animation = 'floating 3s ease-in-out infinite';
        }, 600);
    });

    // Card hover effects
    document.querySelectorAll('.education-card, .project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social links interaction
  

    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.portfolio-card');
        const speed = scrolled * 0.1;
        parallax.style.transform = `translateY(${speed}px)`;
    });
});

