document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const content = document.getElementById('content');
  const fontSelector = document.getElementById('font-choice');

  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  // Font Selection Logic
  function initializeFontSelection() {
    const savedFont = localStorage.getItem('selectedFont') || content.className;
    fontSelector.value = savedFont;

    // Remove all existing font classes
    const fontClasses = ['bebas-neue-regular', 'jost-regular', 'lora-regular', 'outfit-regular'];
    fontClasses.forEach(fontClass => {
      content.classList.remove(fontClass);
    });

    // Add selected font class
    content.classList.add(savedFont);

    // Event listener for font changes
    fontSelector.addEventListener('change', (event) => {
      // Remove all font classes
      fontClasses.forEach(fontClass => {
        content.classList.remove(fontClass);
      });

      // Add selected font class
      content.classList.add(event.target.value);

      // Save font preference
      localStorage.setItem('selectedFont', event.target.value);
    });
  }

  // Dark Mode Logic
  function initializeDarkMode() {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Apply saved preference
    if (savedDarkMode) {
      body.classList.add('dark-mode');
      toggleIcons(true);
    } else {
      toggleIcons(false);
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
      // Toggle dark mode class
      body.classList.toggle('dark-mode');

      // Determine current mode
      const isDarkMode = body.classList.contains('dark-mode');

      // Toggle icons
      toggleIcons(isDarkMode);

      // Save preference
      localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });
  }

  // Icon Toggle Function
  function toggleIcons(isDarkMode) {
    if (isDarkMode) {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  }

  // Initialize both features
  initializeFontSelection();
  initializeDarkMode();
});
