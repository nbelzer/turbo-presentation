# frozen_string_literal: true

module ProductHelper
  def product_score(product)
    sleep 3
    product.hash.to_i % 2 + 3
  end
end
