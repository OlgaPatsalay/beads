
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
            productsList: []
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
                window.location.hash = '#';
                return this.productsList = this.products;

            }
        }
    },
    mounted() {

        this.productsList = this.products;

        if (window.location.hash) {
            var hash = window.location.hash.substring(1);
            this.filtering(hash);

        }

    }
});