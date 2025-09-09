// open & close filter 

var filter = document.querySelector(".filter")
function open_close_filter() {
    filter.classList.toggle("active")
}

fetch('js/items.json')

            .then(response => response.json())
            .then(data =>{
            
            const products_dev = document.getElementById("products_dev") 
            

            all_products_json= data


            data.forEach(product => { 
                const old_price_pargraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>`: "";
                    const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) /product.old_price *100)}</span>` : ""
                    products_dev.innerHTML +=`
                    
                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick = "addToCart( ${product.id} , this)" class="fas fa-cart-arrow-down"></i></span>
                            <span><i class="fas fa-heart"></i></span>
                            <span><i class="fas fa-share"></i></span>
                        </div>
                        ${percent_disc_div}
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
                        ${old_price_pargraph}
                    </div>
                    </div>
                    </div>

                    `
            });
            })