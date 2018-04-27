// import Slick from '../node_modules/vue-slick';

new Vue({

    // components: { Slick },

    

    el: '#app',

    data: function () {
        return {
            products: [
                {
                    name: 'Гердан В коричневых тонах',
                    dscr: '',
                    img: 'images/products/2018.03.25-1.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Серебристые розы на черном',
                    dscr: '',
                    img: 'images/products/2018.03.25.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Восточный (черно-золотой)',
                    dscr: 'Длина около 53 см. Ширина центрального элемента около 6 см.',
                    img: 'images/products/2017.11.11-6.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Винтажные розы',
                    dscr: 'Длина около 54 см. Ширина центрального элемента около 68 мм.',
                    img: 'images/products/2017.11.11-5.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан в теплых тонах',
                    dscr: 'Длина около 52 см. Ширина центрального элемента около 6 см.',
                    img: 'images/products/2017.11.11-4.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Браслет',
                    dscr: 'Вязаный из бисера браслет на проволоке с памятью',
                    img: 'images/products/2017.11.11-3.jpg',
                    category: 'rope'
                },
                {
                    name: 'Гердан Бирюзовые завитки на черном',
                    dscr: '',
                    img: 'images/products/2017.11.11-2.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Золотые розы на черном',
                    dscr: '',
                    img: 'images/products/2017.11.11-1.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Черно-серебристый',
                    dscr: '',
                    img: 'images/products/2017.11.11.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Черно-бело-золотой',
                    dscr: 'Длина около 53 см. Ширина центрального элемента около 6 см.',
                    img: 'images/products/2016.12.26.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Жгут Греческий (зеленый)',
                    dscr: 'Длина около 45 см. Диаметр около 15 мм.',
                    img: 'images/products/2016.12.16_грек зеленый.jpg',
                    category: 'rope'
                },
                {
                    name: 'Гердан Индейский',
                    dscr: '',
                    img: 'images/products/2016.11.12_гердан индейка.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Теплая осень',
                    dscr: '',
                    img: 'images/products/2016.10.29_гердан теплая осень (4).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Бирюзовый',
                    dscr: 'Ширина центрального элемента около 6 см.',
                    img: 'images/products/2016.10.29_астафьева бирюзовый (1).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Чернобрывец',
                    dscr: 'Длина около 53 см. Ширина центрального элемента около 6 см.',
                    img: 'images/products/2016.09.24_гердан чернобрывец.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Жгут из бисера №69',
                    dscr: 'Длина около 42 см. Диаметр около 12мм',
                    img: 'images/products/2016.09.17_капралова_69.jpg',
                    category: 'rope'
                },
                {
                    name: 'Гердан Черно-красно-золотой',
                    dscr: 'Длина около 53 см. Ширина центрального элемента около 6,5 см.',
                    img: 'images/products/2016.08.14_гердан_крас черн зол (1).jpg',
                    category: 'gerdan'
                },









                {
                    name: 'Жгут Греческий черно-белый',
                    dscr: 'Длина около 42 см.',
                    img: 'images/products/2016.07.16_чернобелый грек.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут из мелкого японского бисера Изморозь',
                    dscr: 'Длина около 43 см, диаметр около 12мм.',
                    img: 'images/products/2016.06.21_изморозь (1).jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Маки Ди',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2016.06.06_повтор маки ди (1).jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Барберри',
                    dscr: 'Длина около 45 см, диаметр около 12мм.',
                    img: 'images/products/2016.05.11_барбери (1).jpg',
                    category: 'rope'
                },
                {
                    name: 'Гердан Розы на черном',
                    dscr: 'Длина около 54 см. Ширина центрального элемента около 6 см.',
                    img: 'images/products/2016.03.31_гердан розы на черном.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Жгут Питон серый',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2016.01.32_питон_серный.jpg',
                    category: 'rope'
                },
                {
                    name: 'Лариат Красный',
                    dscr: 'Длина около 140 см.',
                    img: 'images/products/2016.01.32_лариат_красный01.jpg',
                    category: 'rope'
                },
                {
                    name: 'Гердан в теплых тонах',
                    dscr: 'Длина около 52 см.',
                    img: 'images/products/2016.01.31_гердан ковер теплый (2).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан черно-белый',
                    dscr: 'Длина около 52 см.',
                    img: 'images/products/2015.12.13.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Алатырь',
                    dscr: 'Длина около 51 см.',
                    img: 'images/products/2015.10.13.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Жгут Треугольный печворк',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2015.10.01.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут с переходом цвета (синий)',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2015.07.30_IMG_4895ааа.jpg',
                    category: 'rope'
                },
                {
                    name: 'Лариат меланжевый фиолетовый',
                    dscr: 'Длина около 145 см.',
                    img: 'images/products/2015.06.28_лариат меланж.jpg',
                    category: 'rope'
                },
                {
                    name: 'Гердан Полевые цветы',
                    dscr: 'Длина около 53 см.',
                    img: 'images/products/2015.06.28_ге2015.06.28_гердан полевые цветы (4).jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Жгут из бисера тонкий',
                    dscr: 'Длина около 45 см, диаметр около 9 мм.',
                    img: 'images/products/2015.05.08_жгут кает.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Кобальтовые квадраты',
                    dscr: 'Длина около 42 см.',
                    img: 'images/products/2015.04.22_кобальтовые квадраты.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут с переходом цвета (зеленый)',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2015.04.09_переход.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Янтарный питон',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2015.03.16_питон (1).jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Клевер',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2015.02.01_клевер (3).jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Греческий (золотой)',
                    dscr: 'Длина около 42 см.',
                    img: 'images/products/2015.01.10_греческий 1.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Гематитовые квадраты',
                    dscr: 'Длина около 42 см.',
                    img: 'images/products/2014.11_1.jpg',
                    category: 'rope'
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