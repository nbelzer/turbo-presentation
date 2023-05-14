// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

window.addEventListener('turbo:load', () => {
  const button = document.getElementById('link-to-cart')
  const cart = document.getElementById('cart-popper')

  button.addEventListener('click', (event) => {
    event.preventDefault();
    cart.classList.toggle('show')
  })

  const popperInstance = Popper.createPopper(button, cart, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [10, 0],
        },
      },
    ],
  });

  cart.addEventListener('turbo:frame-render', () => {
    popperInstance.update();
  });
});
