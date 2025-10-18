// Mobile menu functionality
const hamburger = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('mobile-nav-overlay');

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  mobileNav.classList.toggle('active');
  overlay.style.display = mobileNav.classList.contains('active') ? 'block' : 'none';
  document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
});

overlay.addEventListener('click', function() {
  hamburger.classList.remove('active');
  mobileNav.classList.remove('active');
  this.style.display = 'none';
  document.body.style.overflow = '';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.mobile-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
});

// Package Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
  const packageNavBtns = document.querySelectorAll('.package-nav-btn');
  const sections = document.querySelectorAll('.pricing, .website-packages, .advertising-packages, .seo-packages, .package-comparison, .custom-packages, .faq');
  
  // تفعيل التنقل بين الباقات
  packageNavBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // إزالة الفئة النشطة من جميع الأزرار
      packageNavBtns.forEach(b => b.classList.remove('active'));
      
      // إضافة الفئة النشطة للزر المحدد
      this.classList.add('active');
      
      // الانتقال إلى القسم المحدد
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // تحديث الزر النشط عند التمرير
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    packageNavBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('href') === `#${current}`) {
        btn.classList.add('active');
      }
    });
  });

  // تفعيل الأسئلة الشائعة
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');
      
      // إغلاق جميع الأسئلة الأخرى
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // فتح/إغلاق السؤال المحدد
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}); 