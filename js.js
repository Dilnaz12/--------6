const shop = {
  shopname: "baribar.Market",
  phonenumber: "7 777 777 7777",
  products: [
    {
      name: "laptop",
      category: "техника",
      price: "250 000",
      stock: "150 000",
    },
    {
      name: "phone",
      category: "техника",
      price: "450 000",
      stock: "330 000",
    },
    {
      name: "table",
      category: "үйге арналған",
      price: "100 000",
      stock: "50 000",
    },
    {
      name: "kreslo",
      category: "үйге арналған",
      price: "50 000",
      stock: "30 000",
    },
    {
      name: "t-shirt",
      category: "одежда",
      price: " 9000",
      stock: "8000",
    },
  ],
};


function listProductNames() {
  shop.products.forEach(function (product) {
    console.log(product.name);
  });
}

listProductNames();

function addProduct() {
  let name = prompt("өнім атауын енгіз");
  let price = prompt("өнім бағасын енгіз");
  let category = prompt("өнім категориясын енгіз");

  shop.products.push(name, price, category);
}

addProduct();

