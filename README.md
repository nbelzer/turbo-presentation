# README

### Exercise 0 Set up the app

```
# Setup the database.
bin/setup
bin/rails db:seed
bin/rails spree_sample:load

# Start the application
bin/rails s
```

### Exercise 1 Pagination

Pagination has been enabled for the products, use a turbo frame to encapsulate the pagination to within each turbo frame.

[Turbo Frames Documentation](https://turbo.hotwired.dev/handbook/frames)

The template you should look at is `products/_products.html`.

### Exercise 2 Infinite Loading

Use lazy loaded turbo frames to show the next page.

The template you should work in is the same as the previous exercise.
The url of the next page is `path_to_next_page(paginated_products)`.

### Exercise 3 Cart Popup

Encapsulate the cart view in a turbo frame and lazy load it in the cart popup.

You can find the cart in `carts/show.html.erb` and the popup in `layouts/_top_bar.html.erb`

Also make sure that the checkout button still works by setting the navigation.

### Exercise 4 Cart Bubble

Use Turbo Streams to update the number shown on the popup.

[Documentation for Turbo Streams](https://turbo.hotwired.dev/handbook/streams).

Also make sure the popup refreshes when an update takes place.

### Exercise 5 Lazy loaded reviews

Our product page has been slow mostly due to the reviews, extract the action and use a turbo frame to lazily load it.

Check out the ``products/product_header.html.erb`` file to see where the reviews are located.
