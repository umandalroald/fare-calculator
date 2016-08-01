# fare-calculator
Fare Calculator Drupal 7 a basic module that computes [taxi, etc] fare per kilometer.

Steps in configuring fare calculator:

Setup first your google Account

1. Create your own account at https://developers.google.com/.
2. Enable your google api's library at https://console.developers.google.com/apis/library if not yet enabled (Google Maps Javascript API, Google Maps Geocoding API).
2. Create your google app project and configure permission
3. Get the generated api-key.
4. Enable fare calculator module.
5. Setup your api key at admin/config/system/fare_calculator and fill in the input fields for api key the saved.
6. Voila you can now visit your fare calculator page your.domain/fare/calculator