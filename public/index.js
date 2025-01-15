// Load modules dynamically

const modules = [
  // Preserve the order
  { id: 'sale-banner', html: 'modules/sale-banner/sale-banner.html', css: 'modules/sale-banner/sale-banner.css', js: 'modules/sale-banner/sale-banner.js' },
  { id: 'hero', html: 'modules/hero/hero.html', css: 'modules/hero/hero.css' },
  { id: 'spotlight', html: 'modules/spotlight/spotlight.html', css: 'modules/spotlight/spotlight.css', js: 'modules/spotlight/spotlight.js' },
  { id: 'newsletter', html: 'modules/newsletter/newsletter.html', css: 'modules/newsletter/newsletter.css' },
  { id: 'faq', html: 'modules/faq/faq.html', css: 'modules/faq/faq.css', js: 'modules/faq/faq.js' }
];

function loadModule(module) {
  // Asynch module loader
  return new Promise((resolve, reject) => {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = module.css;
    document.head.appendChild(link);

    // Load HTML
    fetch(module.html)
      .then(response => response.text())
      .then(html => {
        const content = document.getElementById('content');
        const section = document.createElement('section');
        section.id = module.id;
        section.innerHTML = html;
        content.appendChild(section);

        // Load JavaScript after the HTML
        if (module.js) {
          const script = document.createElement('script');
          script.src = module.js;
          script.onload = resolve; // Resolve when the script is loaded
          script.onerror = () => reject(new Error(`Failed to load JS: ${module.js}`));
          document.body.appendChild(script);
        } else {
          resolve(); // Resolve immediately if no JS is needed
        }
      })
      .catch(error => reject(new Error(`Failed to load module: ${module.id}, Error: ${error.message}`)));
  });
}

// Ensure the modules load maintaining the order
async function loadModulesSequentially(modules) {
  for (const module of modules) {
    try {
      await loadModule(module);
      console.log(`Loaded module: ${module.id}`);
    } catch (error) {
      console.error(error.message);
    }
  }
}

loadModulesSequentially(modules);
