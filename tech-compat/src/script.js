const compatibilityData = {
  "phones-chargers": {
    "iPhone 15": {
      "Apple 20W USB-C Charger": "Yes, supports 20W fast charging.",
      "Samsung 25W USB-C Charger": "Yes, charges at 20W (phone’s max).",
      "Anker 65W USB-C Charger": "Yes, charges at 20W (phone’s max).",
      "Apple MagSafe Charger": "Yes, supports 15W MagSafe wireless charging.",
      "OnePlus 80W SuperVOOC Charger": "Yes, charges at 20W (USB-C compatible, no SuperVOOC)."
    },
    "iPhone 14": {
      "Apple 20W USB-C Charger": "No, needs a Lightning cable (USB-C to Lightning).",
      "Samsung 25W USB-C Charger": "No, needs a Lightning cable.",
      "Anker 65W USB-C Charger": "No, needs a Lightning cable.",
      "Apple MagSafe Charger": "Yes, supports 15W MagSafe wireless charging.",
      "OnePlus 80W SuperVOOC Charger": "No, needs a Lightning cable."
    },
    "Samsung Galaxy S24": {
      "Apple 20W USB-C Charger": "Yes, charges at 20W (below phone’s 25W max).",
      "Samsung 25W USB-C Charger": "Yes, supports 25W fast charging.",
      "Anker 65W USB-C Charger": "Yes, charges at 25W (phone’s max).",
      "Apple MagSafe Charger": "No, MagSafe is iPhone-specific; use a Qi charger for 15W.",
      "OnePlus 80W SuperVOOC Charger": "Yes, charges at 25W (USB-C compatible, no SuperVOOC)."
    },
    "Samsung Galaxy S23": {
      "Apple 20W USB-C Charger": "Yes, charges at 20W (below max).",
      "Samsung 25W USB-C Charger": "Yes, supports 25W fast charging.",
      "Anker 65W USB-C Charger": "Yes, charges at 25W (phone’s max).",
      "Apple MagSafe Charger": "No, MagSafe incompatible; use Qi for 15W.",
      "OnePlus 80W SuperVOOC Charger": "Yes, charges at 25W."
    },
    "Google Pixel 9": {
      "Apple 20W USB-C Charger": "Yes, charges at 20W (below max).",
      "Samsung 25W USB-C Charger": "Yes, charges at 25W (below max).",
      "Anker 65W USB-C Charger": "Yes, supports 30W fast charging.",
      "Apple MagSafe Charger": "No, MagSafe incompatible; use Qi or Pixel Stand for 23W.",
      "OnePlus 80W SuperVOOC Charger": "Yes, charges at 30W."
    },
    "Google Pixel 8": {
      "Apple 20W USB-C Charger": "Yes, charges at 20W (below max).",
      "Samsung 25W USB-C Charger": "Yes, charges at 25W (below max).",
      "Anker 65W USB-C Charger": "Yes, supports 27W fast charging.",
      "Apple MagSafe Charger": "No, use Qi or Pixel Stand for 18W.",
      "OnePlus 80W SuperVOOC Charger": "Yes, charges at 27W."
    },
    "OnePlus 12": {
      "Apple 20W USB-C Charger": "Yes, charges at 20W (slower than max).",
      "Samsung 25W USB-C Charger": "Yes, charges at 25W (slower than max).",
      "Anker 65W USB-C Charger": "Yes, charges at 65W (below SuperVOOC max).",
      "Apple MagSafe Charger": "No, use Qi for 50W wireless.",
      "OnePlus 80W SuperVOOC Charger": "Yes, supports 80W SuperVOOC fast charging."
    },
    "Xiaomi 14": {
      "Apple 20W USB-C Charger": "Yes, charges at 20W (slower).",
      "Samsung 25W USB-C Charger": "Yes, charges at 25W (slower).",
      "Anker 65W USB-C Charger": "Yes, charges at 65W (below max).",
      "Apple MagSafe Charger": "No, use Qi for 50W wireless.",
      "OnePlus 80W SuperVOOC Charger": "Yes, charges at 80W (close to 90W max)."
    },
    "Sony Xperia 1 VI": {
      "Apple 20W USB-C Charger": "Yes, charges at 20W (below max).",
      "Samsung 25W USB-C Charger": "Yes, charges at 25W (below max).",
      "Anker 65W USB-C Charger": "Yes, supports 30W fast charging.",
      "Apple MagSafe Charger": "No, use Qi for 15W wireless.",
      "OnePlus 80W SuperVOOC Charger": "Yes, charges at 30W."
    },
    "Motorola Edge 50 Pro": {
      "Apple 20W USB-C Charger": "Yes, charges at 20W (much slower).",
      "Samsung 25W USB-C Charger": "Yes, charges at 25W (slower).",
      "Anker 65W USB-C Charger": "Yes, charges at 65W (below max).",
      "Apple MagSafe Charger": "No, use Qi for 50W wireless.",
      "OnePlus 80W SuperVOOC Charger": "Yes, charges at 80W (below 125W max)."
    }
  }
};

function checkCompatibility() {
  const category = document.getElementById("category").value;
  const item1 = document.getElementById("item1").value;
  const item2 = document.getElementById("item2").value;
  const result = compatibilityData[category][item1][item2] || "No data yet—check back soon!";
  document.getElementById("result").innerHTML = result;
}