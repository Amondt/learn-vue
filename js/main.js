Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <p>Would you recommand this product?</p>
        <label for="recommand">Yes</label>
        <input type="radio" name="recommand" value="yes" style="width:auto;">
        <label for="recommand" style="marginLeft:10px;">No</label>
        <input type="radio" name="recommand" value="no" style="width:auto;">
      <p>

        <input type="submit" value="Submit">  
      </p>
    
    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if(this.name && this.review && this.rating) {
                let productReview = {
                  name: this.name,
                  review: this.review,
                  rating: this.rating
                }
                this.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
            } else {
                if(!this.name) this.errors.push("Name required.")
                if(!this.review) this.errors.push("Review required.")
                if(!this.rating) this.errors.push("Rating required.")
            }
        }
    }
})

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
})

Vue.component('product', {
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image" :alt="altText">
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <a :href="link">See more products like this</a>

            <p v-if="inStock">In Stock</p>
            <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p> -->
            <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
            <span>{{ sale }}</span>
            <p>Shipping : {{ shipping }}</p>

            <product-details :details="details"></product-details>

            <div id="color-select">
                <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{ backgroundColor: variant.variantColor }" 
                @mouseover="updateProduct(index)"></div>
            </div>

            <div id="sizes">
                <div v-for="size in sizes" :key="size.size">
                    <h3>{{ size.size }}</h3>
                    <ul>
                        <li>{{ "EU: " + size.sizeEU }}</li>
                        <li>{{ "US: " + size.sizeUS }}</li>
                        <li>{{ "UK: " + size.sizeUK }}</li>
                    </ul>
                </div>
            </div>

            <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to <br> cart</button>
            <button @click="removeToCart" :class="{ disabledButton: this.cart == 0 }">Remove from <br> cart</button>

            <div>
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul>
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>Rating: {{ review.rating }}</p>
                        <p>{{ review.review }}</p>
                    </li>
                </ul>
            </div>
            <product-review @review-submitted="addReview"></product-review>
        </div>
    </div>
    `,
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            product: "Socks",
            brand: "BeCode",
            description: "A pair of warm, fuzzy socks",
            // image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
            selectedVariant: 0,
            altText: "A pair of socks",
            link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
            // inStock: true,
            // inventory: 0,
            onSale: true,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 254,
                    variantColor: "green",
                    variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 255,
                    variantColor: "blue",
                    variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                    variantQuantity: 5
                }
            ],
            sizes: [
                {
                    size: "XL",
                    sizeEU: "46-49",
                    sizeUS: "12-14.5",
                    sizeUK: "11-13.5"
                },
                {
                    size: "L",
                    sizeEU: "42-45",
                    sizeUS: "9-11.5",
                    sizeUK: "8-10.5"
                },
                {
                    size: "M",
                    sizeEU: "38-41",
                    sizeUS: "6-8.5",
                    sizeUK: "5-7.5"
                },
                {
                    size: "S",
                    sizeEU: "34-37",
                    sizeUS: "3-5.5",
                    sizeUK: "2-4.5"
                },
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        removeToCart() {
            this.$emit('rem-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview) {
            this.reviews.push(productReview)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.title + ' are on sale!'
            }
            return this.title + ' are not on sale'
        },
        shipping() {
            if (this.premium) {
                return "Free"
            } else {
                return 2.99
            }
        }
    }
})

var app = new Vue ({
    el: "#app",
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeToCart(id) {
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
})