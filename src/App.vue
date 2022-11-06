<script >
//import Mouse from './components/Mouse.vue'
import {ref,computed} from 'vue'
const products =ref([
 'Мышка',
 'Ноутбук',
 'Наушники',
 'Клавиатура',
 'Телевизоры'
])

const query =ref('')

const queryProducts = computed(()=>{
  return products.value.filter((product)=>product.indexOf(query.value)!== -1)//Колбек функция
})
console.log(queryProducts);
export default{
data() {
    return {
    
      products: [
        { id: 1, title: 'Клавиатура', price: 645,
        },
        { id: 2, title: 'Клавиатура', price: 951, 
        },
        { id: 3, title: 'Клавиатура', price: 1256,
         },
        { id: 4, title: 'Клавиатура', price: 600,
        }
      ],
      cart: [],
      total: 0
    };
  },
  methods: {
    addItem(prod){
      // Increment total price
      this.total += prod.price;
      
      let inCart = false; 
      // Update quantity if the item is already in the cart
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].id === prod.id){
          inCart = true;
          this.cart[i].quantity++;
          break;
        }
      }
      // Add item if not already in the cart
      if(! inCart){
        this.cart.push({
          id: prod.id,
          title: prod.title,
          price: prod.price,
          quantity: 1
        }); 
      }
    },
    add(item){
      this.total += item.price;
      item.quantity++;
    },
    sub(item){
      this.total -= item.price;
      if(item.quantity > 1){
        item.quantity--; 
      } else{
        for( let i = 0; i < this.cart.length; i++){
          if(this.cart[i].id === item.id){
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    }
  },
  filters: {
    currency(price){
      return '$' + price.toFixed(2);
    }
  },
}
       

</script>
<style>
li{
  color:red;
}
.title{
  color: aliceblue;
}
</style>
<template>
<header>
   <div class="container">
     <div class="row" >
       <div class="col-lg-3">
         <div class="header__logo">
           <a href="#" class="logo">
           <img class="set" 
          src="https://roi4cio.com/uploads/roi/company/TirAEHT.png" alt="">
          </a>
         </div>
       </div>
       <div class="col-lg-6">
         <nav class="header__menu">
           <ul>
             <li class="active"><a href="#/">Главное</a></li>
             <li><a href="./components/Mouse.vue">Заказать</a></li>
             <li><a href="#">Товары</a>
               <ul class="header__menu__dropdown">
                 <li><a href="#">Клавиатура</a></li>
                 <li><router-link to="#/mouse">
                  Мышка
                 </router-link></li>
                 <li><router-link to="#/main">Наушники</router-link></li>
                 <li><a href="#">Телевизоры</a></li>
                 <li><a href="#">Ноутбуки</a></li>
               </ul>
             </li>
             <li><a href="#">Контакты</a></li>
           </ul>
         </nav>
       </div>
       <div class="col-lg-3">
         <div class="header__cart">
        
           <div class="header__cart__price">Скидка при <span>регистрации</span></div>
         </div>
       </div>
     </div>
    
   </div>
 </header>
 <section class="hero">
   <div class="container">
     <div class="row">
       <div class="col-lg-3"  >
         <div class="hero__categories">
           <div class="hero__categories__all">
             
             <span>Весь осортимент товаров</span>
           </div>
           <ul>
             <li><a href="#">Компьютерная техника</a></li>
             <li><a href="#">Беспроводные наушники</a></li>
             <li><a href="#">Фото и видеокамеры</a></li>
             <li><a href="#">Хранение данных</a></li>
             <li><a href="#">Оптические приборы</a></li>
             <li><a href="#">Видеооборудование</a></li>
             <li><a href="#">Умный дом</a></li>
             <li><a href="#">Все для гейминга</a></li>
             <li><a href="#">Наушники и аудиотехника</a></li>
             <li><a href="#">Телефоны и аксессуары</a></li>
             <li><a href="#">Телевизоры</a></li>
           </ul>
         </div>
       </div>
       <div class="col-lg-9">
         <div class="hero__search">
           <div class="hero__search__form">
             <form action="#">
               <div class="hero__search__categories">
               Поиск 
                 <span class="arrow_carrot-down"></span>
               </div>

               <input type="text" 
              placeholder="Что вам нужно??"
              v-model="query">
                {{products}}
                <ul class="product-ul">
    <li class="product-li"
     v-for="products in queryProducts"
     :key="products">
      {{products}}
    </li>
   </ul>
               <button type="submit" class="site-btn">Искать</button>


             </form>
             
           </div>
           
           <div class="hero__search__phone">
             <div class="hero__search__phone__icon">
              <i class="bi bi-search"></i>
             </div>
             <div class="hero__search__phone__text">
               <h5>+373 777-666</h5>
               <span>работаем 24/7</span>
             </div>
           </div>
         </div>
         
          
           <div class="hero__text">
             <span>Твой</span>
             <h2>Идеальный <br/>Набор</h2>
             <p>Со скидкой</p>
             <a href="#" class="primary-btn">Заказать</a>
           </div>
         </div>
       </div>
     </div>

 </section>
 <div class="grid">
    <div class="col-sx">
      <div class="products"  >
        <h2>Корзина товаров</h2>
        <ul class="products-list">
          <li class="product" v-for="(prod, ind) in products" :key="'ind-' + ind">
            <div class="box">
              <div class="image">
              <img src="https://img.joomcdn.net/f3bc485fa430ea5e6c021703a8862e481fdbf8d2_1024_1024.jpeg" alt="">
                
              </div>
              <h3 class="title">{{ prod.title }}</h3>
              <p class="price">{{ prod.price | currency }}Р</p>
              <button @click="addItem(prod)">Добавить в корзину</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-dx">
      <div class="cart">
        <h2>Ваша карзина</h2>
        <table class="cart-list" >
          <thead>
            <tr>
              <th class="head-title">Товар</th>
              <th class="head-price">Цена</th>
              <th class="head-quantity">КОЛИЧЕСТВО</th>
              <th class="head-total">Общяя цена</th>
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
      
         
        </div>
      </div>
    </div>
 

 <section class="featured spad">
   <div class="container">
     <div class="row">
       <div class="col-lg-12">
         <div class="section-title" >
           <h2>Новый товар</h2>
         </div>
         <div class="featured__controls">
           <ul>
             <li class="active" data-filter="*">Зарядки</li>
             <li data-filter=".oranges">Звуковые карты</li>
             <li data-filter=".fresh-meat">Корпуса</li>
             <li data-filter=".vegetables">Адаптеры</li>
             <li data-filter=".fastfood">Картридеры</li>
           </ul>
         </div>
       </div>
     </div>
     <div class="row featured__filter">
       <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
         <div class="featured__item">
           <div class="featured__item__pic set-bg">
            <img src="https://img.tiraet.com/img/450_450_1/77662_1.png" alt="">
             <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
              
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">LogicPower LP-6106/C011 400W / 80mm</a></h6>
             <h5>634Р</h5>
           </div>
         </div>
       </div>
       <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
         <div class="featured__item">
           <div class="featured__item__pic set-bg">
            <img src="https://img.tiraet.com/img/450_450_1/76774_1.jpg" alt="">
             <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
              
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">SVGA PCI-E 1Gb DDR3 AFOX GT610, 64b (AF610-1024D3L5) DVI-I/HDMI/DSub</a></h6>
             <h5>951,2Р</h5>
           </div>
         </div>
       </div>
       <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
         <div class="featured__item">
           <div class="featured__item__pic set-bg" >
            <img src="https://img.tiraet.com/img/450_450_1/54527_1.jpg" alt="">
            <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
              
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">B360M-V3 (mATX,2DDR4,3*PCIE,HDMI)</a></h6>
             <h5>1269Р</h5>
           </div>
         </div>
       </div>
       <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
         <div class="featured__item">
           <div class="featured__item__pic set-bg">
            <img src="https://img.tiraet.com/img/450_450_1/74668_1.jpg" alt="">
             <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
             
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">Компьютер OPTIMUS (E-Sport GB450T-CR3)</a></h6>
             <h5>18 998,9Р</h5>
           </div>
         </div>
       </div>
       <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
         <div class="featured__item">
           <div class="featured__item__pic set-bg">
            <img src="https://img.tiraet.com/img/450_450_1/61871_1.jpg" alt="">
             <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
               
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">KEYBOARD Genesis THOR 300 RGB Limined RU</a></h6>
             <h5>1 164,4 Р</h5>
           </div>
         </div>
       </div>
       <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
         <div class="featured__item">
           <div class="featured__item__pic set-bg" >
            <img src="https://img.tiraet.com/img/450_450_1/74504_1.jpg" alt="">
             <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
               
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">MOUSE Gembird (MUSW-4BSC-01)</a></h6>
             <h5>106.6 Р</h5>
           </div>
         </div>
       </div>
       <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
         <div class="featured__item">
           <div class="featured__item__pic set-bg">
            <img src="https://img.tiraet.com/img/450_450_1/71564_1.jpg" alt="">
             <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
              
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">HUB 4PORT USB 2.0</a></h6>
             <h5>69 Р</h5>
           </div>
         </div>
       </div>
       <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
         <div class="featured__item">
           <div class="featured__item__pic set-bg">
            <img src="https://img.tiraet.com/img/450_450_1/70858_1.jpg" alt="">
             <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
              
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">Руль +2 педали GENESIS SEABORG 400</a></h6>
             <h5>2 299 Р</h5>
           </div>
         </div>
       </div>
       <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
         <div class="featured__item">
           <div class="featured__item__pic set-bg">
            <img src="https://img.tiraet.com/img/450_450_1/56431_1.jpg" alt="">
             <ul class="featured__item__pic__hover">
               <li><a href="#"><i class="bi bi-basket"></i></a></li>
             
             </ul>
           </div>
           <div class="featured__item__text">
             <h6><a href="#">M/B LGA1151: ASUS EX-B360M-V3</a></h6>
             <h5>1 199,1 Р</h5>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="mb-3">
    <h1>Оставь свой отзыв</h1>
  <label for="exampleFormControlInput1" class="form-label">Почта</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nikita@gmail.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Оставь свой отзыв или отправь свое возмущение</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div class="mb-3">
  <label for="formFileDisabled" class="form-label">Отправь фото товара</label>
  <input class="form-control" type="file" id="formFileDisabled" disabled>
</div>
</div>
 </section>
 <div class="banner">
   <div class="container">
     <div class="row">
       <div class="col-lg-6 col-md-6 col-sm-6">
       
       </div>
       <div class="col-lg-6 col-md-6 col-sm-6">
        
       </div>
     </div>
   </div>
 </div>
 <section class="latest-product spad">
   <div class="container">
     <div class="row">
       <div class="col-lg-4 col-md-6">
         <div class="latest-product__text"  >
           <h4>Новый товар</h4>
           <div class="latest-product__slider owl-carousel">
             <div class="latest-prdouct__slider__item">
               <a href="#" class="latest-product__item">
                 <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/44033_1.png" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Антивирус Касперского Kaspersky Internet Security 2016 (на 1+1 ПК)</h6>
                   <span>221,1 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                 <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/36544_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Блок UPS 1500VA Energenie UPS-RACK-1500 (RM,ЖК,USB,LI)</h6>
                   <span>2 788 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                 <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/36544_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                  <h6>Блок UPS 1500VA Energenie UPS-RACK-1500 (RM,ЖК,USB,LI)</h6>
                   <span>2 788 Р</span>
                 </div>
               </a>
             </div>
             <div class="latest-prdouct__slider__item">
               <a href="#" class="latest-product__item">
                 <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
             </div>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-6">
         <div class="latest-product__text">
           <h4>Самый покупаемые товар</h4>
           <div class="latest-product__slider owl-carousel">
             <div class="latest-prdouct__slider__item">
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
             </div>
             <div class="latest-prdouct__slider__item">
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
             </div>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-6">
         <div class="latest-product__text">
           <h4>Товар со скидкой</h4>
           <div class="latest-product__slider owl-carousel">
             <div class="latest-prdouct__slider__item">
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
             </div>
             <div class="latest-prdouct__slider__item">
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
               <a href="#" class="latest-product__item">
                <div class="latest-product__item__pic">
                   <img src="https://img.tiraet.com/img/origin/78211_1.jpg" alt="" />
                 </div>
                 <div class="latest-product__item__text">
                   <h6>Tablet PC Blackview (TAB 6 GRAY) </h6>
                   <span>2 042 Р</span>
                 </div>
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 <section class="from-blog spad">
   <div class="container">
     <div class="row">
       <div class="col-lg-12">
         <div class="section-title from-blog__title" >
           <h2>Новости сайта</h2>
         </div>
       </div>
     </div>
     <div class="row">
       <div class="col-lg-4 col-md-4 col-sm-6">
         <div class="blog__item"  >
           <div class="blog__item__pic">
             <img src="https://tiraet.com/upload/CMax/762/zldaqwbjdzom78g3xkrwmdk3f064pppc/logo30centrsite.png" alt="" />
           </div>
           <div class="blog__item__text">
             <ul>
               <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
               <li><i class="fa fa-comment-o"></i> 5</li>
             </ul>
             <h5><a href="#">TEXT</a></h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas dolore neque beatae, perspiciatis.</p>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-4 col-sm-6">
         <div class="blog__item" >
          <div class="blog__item__pic">
             <img src="https://tiraet.com/upload/CMax/762/zldaqwbjdzom78g3xkrwmdk3f064pppc/logo30centrsite.png" alt="" />
           </div>
           <div class="blog__item__text">
             <ul>
               <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
               <li><i class="fa fa-comment-o"></i> 5</li>
             </ul>
             <h5><a href="#">TEXT</a></h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas dolore neque beatae, perspiciatis.</p>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-4 col-sm-6">
         <div class="blog__item" >
          <div class="blog__item__pic">
             <img src="https://tiraet.com/upload/CMax/762/zldaqwbjdzom78g3xkrwmdk3f064pppc/logo30centrsite.png" alt="" />
           </div>
           <div class="blog__item__text">
             <ul>
               <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
               <li><i class="fa fa-comment-o"></i> 5</li>
             </ul>
             <h5><a href="#">TEXT</a></h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas dolore neque beatae, perspiciatis.</p>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 <footer class="footer spad">
   <div class="container">
     <div class="row">
       <div class="col-lg-3 col-md-6 col-sm-6">
         <div class="footer__about" >
           <div class="footer__about__logo">
             <a href="#" class="logo">Тираэт</a>
           </div>
           <ul>
             <li>Адресс:Магистральная,5 </li>
             <li>Телефон: 777-666</li>
             <li>Почта: tiraet@gmail.com</li>
           </ul>
         </div>
       </div>
       <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
         <div class="footer__widget">
           <h6>Полезные ссылки</h6>
           <ul>
            <li><a href="#">О нас</a></li>
             <li><a href="#">О нашем магазине</a></li>
             <li><a href="#">Безопасные покупки</a></li>
             <li><a href="#">Информация о доставке</a></li>
             <li><a href="#">Политика конфиденциальности</a></li>
             <li><a href="#">Наш файл Sitemap</a></li>
           </ul>
           <ul>
            <li><a href="#">Кто мы</a></li>
             <li><a href="#">Наши услуги</a></li>
             <li><a href="#">Проекты</a></li>
             <li><a href="#">Контакты</a></li>
             <li><a href="#">Инновации</a></li>
             <li><a href="#">Отзывы</a></li>
           </ul>
         </div>
       </div>
       <div class="col-lg-4 col-md-12">
         <div class="footer__widget" >
          <h6>Подпишитесь на нашу рассылку сейчас</h6>
           <p>Получайте по электронной почте новости о нашем последнем магазине и специальных предложениях.</p>
           <form action="#">
             <input type="text" placeholder="Ваша почта" />
             <button type="submit" class="site-btn">Отправить</button>
           </form>
           <div class="footer__widget__social"  >
             <a href="#"><i class="bi bi-facebook"></i></a>
             <a href="#"><i class="bi bi-youtube"></i></a>
             <a href="#"><i class="bi bi-instagram"></i></a>
             <a href="https://github.com/424Nkita-Csharsfta4"><i class="bi bi-github"></i></a>
           </div>
         </div>
       </div>
     </div>
     <div class="row">
       <div class="col-lg-12">
         <div class="footer__copyright" >
           <div class="footer__copyright__text"><p>
 Мошой Никита 313Гр<i class="fa fa-heart" aria-hidden="true"></i> Я на <a href="https://github.com/424Nkita-Csharsfta4" target="_blank">Github</a>
 </p></div>
       
         </div>
       </div>
     </div>
   </div>
 </footer>
    
     <router-view></router-view>
 </template>
 