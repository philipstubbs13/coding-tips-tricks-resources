# Moltin - E-commerce made easy

* Shopkit: <https://developers.moltin.com/developer-tools/shopkit>
* API requests: <https://developers.moltin.com/your-first-api-request>
* Moltin examples: <https://github.com/moltin-examples>
* Moltin API Reference: <https://docs.moltin.com/>
* JavaScript Quick Start: <https://moltin.com/quick-start/js/>
* JavaScript SDK: <https://github.com/moltin/js-sdk>
* moltin-react: <https://www.npmjs.com/package/moltin-react>
* Moltin dashboard: <https://dashboard.moltin.com/app>
* React based Moltin API ecommerce implementation: <https://github.com/TarikFojnica/react-moltin-ecommerce>
* Ecommerce made easy: <https://www.youtube.com/watch?v=Icltr-6nRLg>
* Javascript API

```bash
moltin.Category.List(null, function(categories) {
  console.log(categories);
});

moltin.Product.List({category: "929663968601965259"}, function(products){
  console.log(products);
});

moltin.Product.Get("929663968601965259", function(product){
  console.log(product);
});

moltin.Cart.Insert("929663968601965259", 3, null, function(cart){
  console.log(cart);
});

})
```