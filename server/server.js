require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

// ---first solution
// const Shopify = require("shopify-api-node");

//----second solution
const https = require("https");
const bodyParser = require("body-parser");
// ---
const apiKey = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;
const apiVersion = process.env.API_VERSION;
const shopifyShopName = process.env.STORE_NAME;

const shopifyHosting = `${shopifyShopName}.myshopify.com`;
// const locationId = "93183443237";
// const inventoryItemId = "48641030324517";

// const shopify = new Shopify({
//   shopName: shopifyShopName,
//   apiKey: apiKey,
//   password: apiToken,
// });

// app.get("/", (req, res) => {
//   res.send(`<h1>Check the Item inventory</h1>`);
// });

// app.get("/products", async (req, res) => {
//   await shopify.product
//     .list({ limit: 5 })
//     .then((product) => res.send(product))
//     .catch((err) => console.error(err));
// });
// app.get("/locations", async (req, res) => {
//   await shopify.location
//     .list({ limit: 5 })
//     .then((location) => res.send(location))
//     .catch((err) => console.error(err));
// });

// app.get("/inventory", async (req, res) => {
//   const locationId = "93183443237";
//   const inventoryItemId = "48641030324517";
//   // await shopify.rest.InventoryLevel.list({location_ids: [locationId] })
//   //   .then((inventoryLevels) => res.send(inventoryLevels))
//   //   .catch((err) => {
//   //     console.error(err);
//   //   });
//   try {
//     const inventoryLevels = await shopify.inventoryLevel.list({
//       limit: 10,
//       inventory_item_ids: inventoryItemId,
//       location_ids: [locationId],
//     });
//     res.json();
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error.message);
//   }
// });

// ---- second option
// Middleware
app.use(bodyParser.json());

const getInventory = (sku) => {
  return;
};

const URL_locations = `https://${apiKey}:${apiToken}@${shopifyHosting}/admin/api/${apiVersion}/locations.json`;
const URL_variants = `htpps://${apiKey}:${apiToken}@${shopifyHosting}/admin/api/${apiVersion}/variants/{variants_id}.json`;
// const URL_inventory_single_location = `https://${apiKey}:${apiToken}@${shopifyHosting}/admin/api/${apiVersion}/inventory_levels.json?location_ids=${locationId}`;
// const URL_inventory_single_item_single_location = `https://${apiKey}:${apiToken}@${shopifyHosting}/admin/api/${apiVersion}/inventory_levels.json?inventory_item_ids=${inventoryItemId}&location_ids=${locationId}`;

app.get("/", (req, res) => {
  res.send(`<h1>Check the Item inventory</h1>`);
});

// Function to make a GET request using https with async/await

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
