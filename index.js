const qs = require('qs');

// Options
const qsOptions = {
  encodeValuesOnly: true,
};

// Katalog Request Default
const katalogRequestNormal = {
  fields: ['title', 'brand', 'shopee_links', 'kesimpulan_description', 'price'], // Default is all
  pagination: {
    pageSize: 25, // Default is 25
    page: 1, // Default is 0
  },
  populate: ['tags', 'desain_images', 'performa_images', 'layar_images', 'baterai_images', 'konektivitas_images'], // Default is none
  filters: {
    price: {
      $between: [0, 20000000], // Example only
    }
  },
};

console.log(qs.stringify(katalogRequestNormal, qsOptions));

// Katalog Request Homepage querystring example
const katalogRequestExample1 = "";