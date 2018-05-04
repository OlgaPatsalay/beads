
new Vue({


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
                    img: 'images/products/2017.11.11-2_981x773.jpg',
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
                    img: 'images/products/2016.12.16_grek zelenyiy_1296x972.jpg',
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
                    img: 'images/products/2017.11.11-2_981x773.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Гердан Чернобрывец',
                    dscr: 'Длина около 53 см. Ширина центрального элемента около 6 см.',
                    img: 'images/products/2016.09.24_gerdan chernobryivets_1296x972.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Жгут из бисера №69',
                    dscr: 'Длина около 42 см. Диаметр около 12мм',
                    img: 'images/products/2016.09.17_kapralova_69_1296x972.jpg',
                    category: 'rope'
                },
                {
                    name: 'Гердан Черно-красно-золотой',
                    dscr: 'Длина около 53 см. Ширина центрального элемента около 6,5 см.',
                    img: 'images/products/2016.08.14_gerdan_kras chern zol (1)_1296x972.jpg',
                    category: 'gerdan'
                },
                {
                    name: 'Жгут Греческий черно-белый',
                    dscr: 'Длина около 42 см.',
                    img: 'images/products/2016.07.16_chernobelyiy grek_1296x972.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут из мелкого японского бисера Изморозь',
                    dscr: 'Длина около 43 см, диаметр около 12мм.',
                    img: 'images/products/2016.06.21_izmorozy (1)_1296x972.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Маки Ди',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2016.06.06_povtor maki di (1)_1296x972.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Барберри',
                    dscr: 'Длина около 45 см, диаметр около 12мм.',
                    img: 'images/products/2016.05.11_barberi (1)_1296x972.jpg',
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
                    name: 'Лариат из рубки',
                    dscr: 'Длина около 140 см.',
                    img: 'images/products/2015.07.26_lariat iz rubki (4)_743x839.jpg',
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
                    img: 'images/products/2015.04.22_kobalytovyie kvadratyi_981x775.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут с переходом цвета (зеленый)',
                    dscr: 'Длина около 45 см.',
                    img: 'images/products/2015.04.09_perehod_981x744.jpg',
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
                    img: 'images/products/2015.02.01_klever (3)_981x978.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Греческий (золотой)',
                    dscr: 'Длина около 42 см.',
                    img: 'images/products/2015.01.10_grecheskiy 1_981x950.jpg',
                    category: 'rope'
                },
                {
                    name: 'Жгут Гематитовые квадраты',
                    dscr: 'Длина около 42 см.',
                    img: 'images/products/2014.11_1.jpg',
                    category: 'rope'
                },
            ],
            productsList: [],
            currentProduct: false,
            indexCurrentProduct: false
        }
    },
    methods: {

        filtering(category = null, e) {
            let el = document.getElementsByClassName('filter__btn active')[0];

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