window.addEventListener('turbo:load', () => {
  const localeSelector = document.querySelector('.locale-selector select');

  if(localeSelector) {
    localeSelector.addEventListener('change', (event) => {
      event.target.form.submit();
    });
  }
});
