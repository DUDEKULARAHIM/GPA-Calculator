// src/serviceWorkerRegistration.js

// This function will handle registering the service worker
export function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // Register service worker when the environment is production
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`; // Ensure the correct path
        navigator.serviceWorker.register(swUrl)
          .then((registration) => {
            console.log('Service Worker registered with scope: ', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed: ', error);
          });
      });
    }
  }
  
  // This function will handle unregistering the service worker
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
  