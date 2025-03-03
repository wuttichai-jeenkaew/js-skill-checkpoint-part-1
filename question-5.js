// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";
// เริ่มเขียนโค้ดตรงนี้
console.log(calculateTotalPrice(products, promotionCode));

//funtion
//loop
//if-else

function calculateTotalPrice(products, promotionCode) {
  let discountPrice = 0;

  for (let i = 0; i < products.length; i++) {
    if (promotionCode === "SALE20") {
      discountPrice += products[i].price * products[i].quantity * 0.8;
    } else if (promotionCode === "SALE50") {
      discountPrice += products[i].price * products[i].quantity * 0.5;
    } else if (promotionCode === "") {
      discountPrice += products[i].price * products[i].quantity;
    }
  }
  return `มูลค่ารวมสินค้าเท่ากับ ${discountPrice}`
}
