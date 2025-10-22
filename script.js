// Showmens Hairstyle site interactions

// Intersection Observer for reveal animations
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.3,
  };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // elements to reveal
  const revealElements = document.querySelectorAll(
    '.gallery-grid figure, .service-card, .about-images figure'
  );
  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // Booking form submission handler (demo only)
  const bookingForm = document.getElementById('booking-form');
  const successBox = document.getElementById('booking-success');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple form validation
      const formData = new FormData(bookingForm);
      const emptyFields = [...formData.entries()].some(
        ([_, value]) => !value
      );
      if (emptyFields) {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
        return;
      }
      // Display success message and reset form
      bookingForm.reset();
      successBox.hidden = false;
      setTimeout(() => {
        successBox.hidden = true;
      }, 5000);
    });
  }
});