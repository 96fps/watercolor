//registerSW();
function registerSW(){
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('sw.js')
             .then(function() { alert('Service Worker Registered'); });
  }                                                                                     }
function removeSW(){
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for (let registration of registrations) {
              registration.unregister()
            }
          });
  alert("removed");
}
