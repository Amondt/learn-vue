window.onload = () => {

    var app = new Vue ({
        el: "#app",
        data: {
            product: "Socks",
            description: "A pair of warm, fuzzy socks",
            image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
            altText: "A pair of socks",
            link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
            inStock: false,
            inventory: 0,
            onSale: true,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 254,
                    variantColor: "green",
                    variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
                },
                {
                    variantId: 255,
                    variantColor: "blue",
                    variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg"
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
            cart: 0
        },
        methods: {
            addToCart() {
                this.cart += 1
            },
            removeToCart() {
                if (this.cart > 0) {
                    this.cart -= 1
                }
            },
            updateProduct(variantImage) {
                this.image = variantImage
            }
        }
    })
}