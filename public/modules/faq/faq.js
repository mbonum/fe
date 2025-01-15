document.querySelectorAll('.learn-more-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('learnMoreModal');
    modal.style.display = 'block';
  });
});

// Close the modal when the user clicks on the close button
document.querySelector('.close-btn').addEventListener('click', () => {
  const modal = document.getElementById('learnMoreModal');
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
  const modal = document.getElementById('learnMoreModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function toggleAccordion(event) {
  event.preventDefault();
  const toggle = event.target;
  const contentId = toggle.getAttribute('href').substring(1);
  const content = document.getElementById(contentId);

  // Check if the clicked content is already active
  const isActive = content.classList.contains('active');

  // Close all other accordions
  document.querySelectorAll('.accordion-content').forEach((accordion) => {
    accordion.classList.remove('active');
    accordion.style.maxHeight = null; // Collapse
  });
  document.querySelectorAll('.accordion-toggle').forEach((toggleItem) => {
    toggleItem.classList.remove('active');
  });

  // Toggle the clicked accordion
  if (!isActive) {
    toggle.classList.add('active');
    content.classList.add('active');
    content.style.maxHeight = content.scrollHeight + "px"; // Expand with height
  } else {
    toggle.classList.remove('active');
    content.classList.remove('active');
    content.style.maxHeight = null; // Collapse
  }

  // Smooth scroll of accordion-content
  content.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

// function toggleAccordion(event) {
//   event.preventDefault();
//   const toggle = event.target;
//   const contentId = toggle.getAttribute('href').substring(1);
//   const content = document.getElementById(contentId);

//   // Close other accordions if needed (optional)
//   document.querySelectorAll('.accordion-content').forEach((accordion) => {
//     if (accordion !== content) {
//       accordion.classList.remove('active');
//       accordion.style.maxHeight = null;
//     }
//   });
//   document.querySelectorAll('.accordion-toggle').forEach((toggleItem) => {
//     if (toggleItem !== toggle) {
//       toggleItem.classList.remove('active');
//     }
//   });

//   // Toggle the clicked accordion
//   toggle.classList.toggle('active');
//   if (content.classList.contains('active')) {
//     content.classList.remove('active');
//     content.style.maxHeight = null; // Close accordion-content
//   } else {
//     content.classList.add('active');
//     content.style.maxHeight = content.scrollHeight + "px"; // Expand with height
//   }

//   // Smooth scroll of accordion-content
//   content.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//   });
// }