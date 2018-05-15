
new Vue({


    el: '#app',

    data: function () {
        return {
            products: [
                {
                    name: 'Пример №008',
                    img: 'images/examples/example(8).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №007',
                    img: 'images/examples/example(7).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №006',
                    img: 'images/examples/example(6).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №005',
                    img: 'images/examples/example(5).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №004',
                    img: 'images/examples/example(4).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №003',
                    img: 'images/examples/example(3).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №002',
                    img: 'images/examples/example(2).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Пример №001',
                    img: 'images/examples/example(1).jpg',
                    category: 'gerdan'
                }
            ],
            productsList: [],
            currentProduct: false,
            indexCurrentProduct: false
        }
    },
    methods: {

        filtering(category, e) {
            let el = document.getElementsByClassName('btn-filter active')[0];

            if (el) {
                el.classList.remove('active');
            }

            e.target.classList.add("active");

            if(category) {
                this.productsList = this.products.filter((item) => {
                    // window.location.hash = category;           <-- для сохранения фильтрации при перезагрузке страницы

                    return item.category === category;
                });
            } else {
                // window.location.hash = '';                     <-- для сохранения фильтрации при перезагрузке страницы
                return this.productsList = this.products;
            }
        },

        setCurrentProduct(product, index) {
            this.currentProduct = product;
            this.indexCurrentProduct = index;
        },

        closePopup () {
            this.currentProduct = false;
        },

        changeSlide(direction) {
            let i,
                count = this.productsList.length;

            direction === 'next' ? i = this.indexCurrentProduct + 1 : i = this.indexCurrentProduct - 1;

            if (i > count - 1) {
                i = 0;
            }
            else if (i < 0) {
                i = count - 1;
            }

            let product = this.productsList[i];
            this.setCurrentProduct(product, i);
        }
    },

    mounted() {

        this.productsList = this.products;

        // if (window.location.hash) {                             <-- для сохранения фильтрации при перезагрузке страницы
        //     let hash = window.location.hash.substring(1);
        //     this.filtering(hash, '');
        // }
    },

    created: function () {
        let self = this;

        window.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) {
                self.closePopup();
            } else
            if (self.currentProduct && e.keyCode === 39) {
                self.changeSlide('next');
            } else if (self.currentProduct && e.keyCode === 37) {
                self.changeSlide('prev');
            }
        });
    }
});