

let menu=document.querySelector(".menu");
let navBar=document.querySelector(".navbar");
let header=document.querySelector("header");
let links_product=document.querySelector(".links");
let icon_product=document.querySelector(".icon-product");




// Scroll header change background
addEventListener("scroll",()=>{
     header.classList.toggle('shadow',window.scrollY > 0 );
});
 

// nav bar click
menu.addEventListener("click",()=>{
   navBar.classList.toggle("Acitve-nav");

})

// links product to change 
icon_product.addEventListener("click",()=>{
     links_product.classList.toggle("active-link");
})


// icon plus to add product in 
products_in_list=[

    {
        img:"images/products/collection.png",
        name:"The Classic Lip Essentials Kit",
        price:"$75",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Element Small.png",
        name:"The Nude Essentials Eye Palette",
        price:"$48",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/makeup.png",
        name:"The Petal Pink Beauty Box ",
        price:"$160",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/makuep.png",
        name:"The Essential Artist Makeup Kit",
        price:"$250",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Nail polish with.png",
        name:"Cosmic Shimmer Trio",
        price:"$40",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Natural Lotion.png",
        name:"Pure Aloe Calming Essence",
        price:"$18",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Naturally Created FaceWash for.png",
        name:"Citrus Glow Foaming Cleanser",
        price:"$22",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Red LipsStick For Sell,buy.png",
        name:"Red LipsStick",
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Red LipsStick For Sell,buy.png",
        name:"Element Small",
        price:"	$35",
        add_product:' <i class="fa-solid fa-plus"></i>',
    }
    ,  {
        img:"images/products/image_5.png",
        name:"Fire Red Lacquer",
        price:"$12",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Shiny Red Nail Polish For woman.png",
        name:"Ruby Ink Nail Lacquer",
        price:"$48",
        add_product:' <i class="fa-solid fa-plus"></i>',
    }
]

let product=document.querySelector(".new-product")
let div_child_product=document.querySelector(".new-product-child");

function add(){
    products_in_list.forEach(element => {
    let new_div=document.createElement('div');
      new_div.classList.add("new-product-child");
      new_div.innerHTML=`
      
            <div> 
                <img src="${element.img}" alt="Element Small">
                <div class="details-product">
                     <h3>${element.name}</h3>
                <div class="price-add">
                     <p>${element.price}</p>
                      ${element.add_product}
                </div>
                </div>
                
            </div>
      
        `;
    product.appendChild(new_div);
        
    });

}

add();



new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


