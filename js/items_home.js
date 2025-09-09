fetch('js/items.json')

            .then(response => response.json())
            .then(data =>{
                // console.loga(data)
            const swiper_items_sale = document.getElementById("swiper_items_sale")

            const other_products_swiper = document.getElementById("other_products_swiper")
            
            const other_products_swiper2 = document.getElementById("other_products_swiper2") 
            

            all_products_json= data

            data.forEach(product => {
                if(product.old_price){

                    const percent_disc = Math.floor((product.old_price - product.price) /product.old_price *100)
                    swiper_items_sale.innerHTML +=`
                    
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick = "addToCart( ${product.id} , this)" class="fas fa-cart-arrow-down"></i></span>
                            <span><i class="fas fa-heart"></i></span>
                            <span><i class="fas fa-share"></i></span>
                        </div>
                        <span class="sale_present">%${percent_disc}</span>
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name_product"><a href="#">${product.name} </a></h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old_price">$${product.old_price}</p>
                    </div>
                    </div>
                    </div>

                    `
                }
            });

            data.forEach(product => {

                    other_products_swiper.innerHTML +=`
                    
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick = "addToCart( ${product.id} , this)" class="fas fa-cart-arrow-down"></i></span>
                            <span><i class="fas fa-heart"></i></span>
                            <span><i class="fas fa-share"></i></span>
                        </div>
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name_product"><a href="#">${product.name} </a></h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                    </div>
                    </div>
                    </div>

                    `
            });

            data.forEach(product => {

                other_products_swiper2.innerHTML +=`
                
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick = "addToCart( ${product.id} , this)" class="fas fa-cart-arrow-down"></i></span>
                        <span><i class="fas fa-heart"></i></span>
                        <span><i class="fas fa-share"></i></span>
                    </div>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name_product"><a href="#">${product.name} </a></h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                </div>
                </div>
                </div>

                `
        });
            })