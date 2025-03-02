
// JavaScript for ABNA TECH website
document.addEventListener('DOMContentLoaded', function() {
  console.log('ABNA TECH website loaded');
  
  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const formResponse = document.getElementById('formResponse');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Disable submit button during submission
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;
      
      // Create form data object
      const formData = new FormData(contactForm);
      
      // Send AJAX request
      fetch('process-contact.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Show response message
        formResponse.textContent = data.message;
        formResponse.className = 'form-response ' + data.status;
        formResponse.style.display = 'block';
        
        // Reset form if successful
        if (data.status === 'success') {
          contactForm.reset();
        }
        
        // Re-enable submit button
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        
        // Hide the message after 5 seconds
        setTimeout(() => {
          formResponse.style.display = 'none';
        }, 5000);
      })
      .catch(error => {
        console.error('Error:', error);
        formResponse.textContent = 'Une erreur s\'est produite. Veuillez réessayer.';
        formResponse.className = 'form-response error';
        formResponse.style.display = 'block';
        
        // Re-enable submit button
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      });
    });
  }
  
  // Sticky navbar functionality
  const header = document.querySelector('header');
  
  // Scroll to top button functionality
  const scrollUpButton = document.getElementById('scrollUp');
  
  // Show/hide scroll button and make navbar sticky based on scroll position
  window.addEventListener('scroll', function() {
    // Sticky navbar
    if (window.pageYOffset > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
    
    // Scroll button
    if (window.pageYOffset > 300) {
      scrollUpButton.style.display = 'block';
    } else {
      scrollUpButton.style.display = 'none';
    }
  });
  
  // Smooth scroll to top when button is clicked
  scrollUpButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Portfolio filtering functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to current button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Initialize animations for elements when they become visible during scroll
  const animateOnScroll = () => {
    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If element is in viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 }); // Trigger when at least 15% of the element is visible
    
    // Observe each element
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  };
  
  // Initialize animations
  animateOnScroll();
});
