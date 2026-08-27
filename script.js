// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

  // Quote form — builds a mailto link with the submission details
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var body =
        'Name: ' + (data.get('name') || '') + '\n' +
        'Contact: ' + (data.get('contact') || '') + '\n' +
        'Pickup location: ' + (data.get('pickup') || '') + '\n' +
        'Drop-off location: ' + (data.get('dropoff') || '') + '\n' +
        'Preferred date: ' + (data.get('date') || '') + '\n' +
        'Service type: ' + (data.get('service') || '') + '\n\n' +
        'Details:\n' + (data.get('details') || '');

      var mailto =
        'mailto:kos@epkstay.com' +
        '?subject=' + encodeURIComponent('Quote Request - EPKTruck') +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;

      var success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        form.reset();
      }
    });
  }
});
