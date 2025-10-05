

products_in_list=[

    {
        img:"images/products/collection.png",
        name:"collection",
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Element Small.png",
        name:"Element Small",
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/makeup.png",
        name:"makeup",
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/makuep.png",
        name:"Element Small",
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Nail polish with.png",
        name:"Nail polish with",
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Natural Lotion.png",
        name:"Natural Lotion",
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Naturally Created FaceWash for.png",
        name:"Naturally Created FaceWash for",
        price:"$19.00",
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
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    }
    ,  {
        img:"images/products/image_5.png",
        name:"Element Small",
        price:"$19.00",
        add_product:' <i class="fa-solid fa-plus"></i>',
    },
      {
        img:"images/products/Shiny Red Nail Polish For woman.png",
        name:"Shiny Red Nail Polish ",
        price:"$19.00",
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
