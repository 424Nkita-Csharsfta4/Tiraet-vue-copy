<template>
 <header>
    <h1>{{ appTitle }}</h1>
  </header>
  <div class="grid">
    <div class="col-sx">
      <div class="products">
        <h2>Products</h2>
        <ul class="products-list">
          <li class="product" v-for="(prod, ind) in products" :key="'ind-' + ind">
            <div class="box">
              <div class="image"></div>
              <h3 class="title">{{ prod.title }}</h3>
              <p class="price">{{ prod.price | currency }}</p>
              <button @click="addItem(prod)">Add to cart</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-dx">
      <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-list" v-if="cart.length">
          <thead>
            <tr>
              <th class="head-title">Product</th>
              <th class="head-price">Price</th>
              <th class="head-quantity">Quantity</th>
              <th class="head-total">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr class="cart-item" v-for="(item, id) in cart" :key="'id-' + id">
              <td>
                <h4 class="title">{{ item.title }}</h4>
              </td>
              <td>
                <div class="price">{{ item.price | currency }}</div>
              </td>
              <td>
                <div class="quantity">
                   {{ item.quantity }}<span class="qty-handler"><span @click="add(item)">+</span><span @click="sub(item)">-</span></span></div>
              </td>
              <td>
                <div class="total">{{ item.price * item.quantity | currency }}</div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">
                <h4 class="total-title">Total</h4>
              </th>
              <th>{{ total | currency }}</th>
            </tr>
          </tfoot>
        </table>
        <div class="empty-contents" >
          <div class="draw">
            <div class="cactus">
              <div class="arm"></div>
              <div class="arm"></div>
            </div>
            <div class="cactus">
              <div class="arm"></div>
              <div class="arm"></div>
            </div>
            <div class="cactus">
              <div class="arm"></div>
              <div class="arm"></div>
            </div>
            <div class="sky">
              <div class="montain"></div>
              <div class="montain two"></div>
              <div class="sun"></div>
            </div>
          </div>
          <p class="no-items-text">Your cart is actually empty</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style>


body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  padding: 3rem;
  display: flex;
  justify-content: center;
}

#app {
  width: 100%;
  max-width: 70rem;
}

h1 {
  margin: 0 0 3rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
}

.grid {
  display: flex;
}
.grid .col-sx,
.grid .col-dx {
  width: 50%;
}

.products {
  padding: 0 1rem 0 0;
}
.products h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  font-weight: 400;
  border-bottom: 1px solid #555;
}
.products .products-list {
  margin: 0.5rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.products .products-list .product {
  margin: 0;
  list-style: none;
  width: 50%;
}
.products .products-list .product:nth-child(odd) {
  padding-right: 1rem;
}
.products .products-list .product:nth-child(even) {
  padding-left: 1rem;
}
.products .products-list .product .box {
  margin-bottom: 2.15rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.15);
}
.products .products-list .product .box:nth-child(even) {
  margin-left: 0.5rem;
}
.products .products-list .product .box .image {
  display: block;
  width: 100%;
  height: 100px;
  background: #eee;
  margin-bottom: 1rem;
}
.products .products-list .product .box .title {
  margin-top: 0;
}
.products .products-list .product .box button {
  padding: 0.35rem 0.7rem 0.28rem;
  border: 0;
  text-transform: uppercase;
  font-size: 0.85em;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 18px 10px -10px rgba(0, 0, 0, 0.25);
  transition: background 0.4s, box-shadow 0.4s;
  cursor: pointer;
  outline: none;
}
.products .products-list .product .box button:hover, .products .products-list .product .box button:focus {
  background: #000;
  box-shadow: 0 18px 10px -10px rgba(0, 0, 0, 0);
}

.cart {
  padding: 0 0 0 1rem;
}
.cart h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  font-weight: 400;
  text-align: right;
  border-bottom: 1px solid #555;
}
.cart .cart-list {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.15);
}
.cart .cart-list tr:nth-child(even) td {
  background: #eee;
}
.cart .cart-list td, .cart .cart-list th {
  padding: 1rem;
}
.cart .cart-list td h3, .cart .cart-list td h4, .cart .cart-list th h3, .cart .cart-list th h4 {
  margin: 0;
}
.cart .cart-list th {
  font-size: 0.9em;
  text-transform: uppercase;
  text-align: left;
}
.cart .cart-list th.head-quantity {
  text-align: center;
}
.cart .cart-list th.head-price, .cart .cart-list th:last-of-type {
  text-align: right;
}
.cart .cart-list th .total-title {
  text-align: right;
}
.cart .cart-list td {
  background: #f9f9f9;
}
.cart .cart-list td .title {
  font-weight: 400;
  font-size: 0.9em;
}
.cart .cart-list td .price {
  text-align: right;
}
.cart .cart-list td .quantity {
  position: relative;
  padding: 0 1rem;
  text-align: center;
}
.cart .cart-list td .quantity .qty-handler {
  position: absolute;
  top: 0;
  left: 1rem;
  right: 1rem;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}
.cart .cart-list td .quantity .qty-handler span {
  width: 1rem;
  height: 1rem;
  line-height: 16px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  transition: background 0.4s;
  cursor: pointer;
}
.cart .cart-list td .quantity .qty-handler span:hover {
  background: #000;
}
.cart .cart-list td .quantity .qty-handler span:last-of-type {
  line-height: 13px;
}
.cart .cart-list td .total {
  text-align: right;
}
.cart .draw {
  position: relative;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  margin: 4rem auto 2rem;
  background: #eaeaea;
  overflow: hidden;
}
.cart .draw .cactus {
  z-index: 1;
  position: absolute;
  width: 1.2rem;
  height: 10rem;
  border-radius: 7px 7px 0 0;
  background: currentColor;
}
.cart .draw .cactus::before {
  content: "";
  position: absolute;
  left: 0px;
  bottom: -32px;
  width: 1.2rem;
  height: 2rem;
  transform: skew(40deg);
  transform-origin: top center;
  border-radius: 0 0 6px 6px;
  -webkit-animation: lightAngle 8s linear infinite alternate;
          animation: lightAngle 8s linear infinite alternate;
}
.cart .draw .cactus:nth-child(1) {
  bottom: 0;
  left: 50%;
  transform: transalteX(-50%);
  color: #aaa;
}
.cart .draw .cactus:nth-child(2) {
  bottom: 4.5rem;
  left: 2rem;
  transform: scale(0.4);
  color: #dadada;
}
.cart .draw .cactus:nth-child(2)::before {
  background: #a7a7a7;
}
.cart .draw .cactus:nth-child(3) {
  bottom: 2.5rem;
  right: 2rem;
  transform: scale(0.6);
  color: #ccc;
}
.cart .draw .cactus:nth-child(3)::before {
  background: #999999;
}
.cart .draw .cactus .arm {
  position: absolute;
  width: 3rem;
  height: 1rem;
  background: currentColor;
}
.cart .draw .cactus .arm::before {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 1rem;
  height: 3rem;
  background: currentColor;
  border-radius: 6px 6px 0 0;
}
.cart .draw .cactus .arm:first-of-type {
  top: 35%;
}
.cart .draw .cactus .arm:last-of-type {
  top: 55%;
  left: -1.8rem;
}
.cart .draw .cactus .arm:last-of-type::before {
  right: auto;
  left: 0;
}
.cart .draw .sky {
  position: absolute;
  width: 100%;
  height: 50%;
  background: #fcfcfc;
  overflow: hidden;
}
.cart .draw .sky .montain {
  position: absolute;
  left: 42%;
  bottom: -2rem;
  width: 4rem;
  height: 4rem;
  background: #d8d8d8;
  transform: rotate(45deg);
  border-radius: 8px 0 0 0;
}
.cart .draw .sky .montain.two {
  left: 27%;
  transform: rotate(45deg) scale(0.6);
  background: #d8d8d8;
}
.cart .draw .sky .sun {
  position: absolute;
  top: 20px;
  left: -2rem;
  width: 2rem;
  height: 2rem;
  background: #d4d4d4;
  border-radius: 50%;
  -webkit-animation: sunWalk 8s linear infinite alternate;
          animation: sunWalk 8s linear infinite alternate;
}
.cart .no-items-text {
  text-align: center;
  text-transform: uppercase;
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.7);
}

@-webkit-keyframes sunWalk {
  from {
    left: -2rem;
  }
  to {
    left: 100%;
  }
}

@keyframes sunWalk {
  from {
    left: -2rem;
  }
  to {
    left: 100%;
  }
}
@-webkit-keyframes lightAngle {
  0%, 20% {
    transform: skew(40deg);
  }
  80%, 100% {
    transform: skew(-40deg);
  }
}
@keyframes lightAngle {
  0%, 20% {
    transform: skew(40deg);
  }
  80%, 100% {
    transform: skew(-40deg);
  }
}
@media all and (max-width: 768px) {
  body {
    padding: 3rem 1rem;
  }

  .grid {
    flex-direction: column;
  }
  .grid .col-sx,
.grid .col-dx {
    width: 100%;
  }
  .grid .products,
.grid .cart {
    padding: 0;
  }
  .grid .products {
    padding-bottom: 2rem;
  }
  .grid .cart h2 {
    text-align: left;
  }
}
</style>