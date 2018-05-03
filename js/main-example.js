
new Vue({


    el: '#app',

    data: function () {
        return {
            products: [
                {
                    name: 'Пример №006',
                    img: 'images/examples/example(5).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №005',
                    img: 'images/examples/example(4).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №004',
                    img: 'images/examples/example(3).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №003',
                    img: 'images/examples/example(2).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №002',
                    img: 'images/examples/example(1).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №001',
                    img: 'images/examples/image (2).jpg',
                    category: 'gerdan'
                },
            ],
            productsList: [],
            currentProduct: false
        }
    },
    methods: {
        filtering(category = null) {

            if(category) {
                this.productsList = this.products.filter((item) => {
                    window.location.hash = category;

                    return item.category === category;
                });
            } else {
                window.location.hash = '';
                return this.productsList = this.products;

            }
        },
        setCurrentProduct(product) {
            this.currentProduct = product;

        },
        closePopup () {
            this.currentProduct = false;
        },

    },
    mounted() {

        this.productsList = this.products;

        if (window.location.hash) {
            var hash = window.location.hash.substring(1);
            this.filtering(hash);
        }

    },
    created: function () {
        var self = this;

        window.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) {
                self.closePopup();
            }
        })
    }
});