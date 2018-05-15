var CACHE_NAME = 'bead-cache-v7';
var urlsToCache = [
    'index.html',
    'example.html',
    'css/style.css',
    'js/main.js',
    'js/main-example.js',
    'js/vue.js',
    'js/vue.min.js',
    'images/products/2018.03.25-1.jpg',
    'images/products/2018.03.25.jpg',
    'images/products/2017.11.11-6.jpg',
    'images/products/2017.11.11-5.jpg',
    'images/products/2017.11.11-4.jpg',
    'images/products/2017.11.11-3.jpg',
    'images/products/2017.11.11-2_981x773.jpg',
    'images/products/2017.11.11-1.jpg',
    'images/products/2017.11.11.jpg',
    'images/products/2016.12.26.jpg',
    'images/products/2016.12.16_grek zelenyiy_1296x972.jpg',
    'images/products/2016.11.12_гердан индейка.jpg',
    'images/products/2016.10.29_гердан теплая осень (4).jpg',
    'images/products/2017.11.11-2_981x773.jpg',
    'images/products/2016.09.24_gerdan chernobryivets_1296x972.jpg',
    'images/products/2016.09.17_kapralova_69_1296x972.jpg',
    'images/products/2016.08.14_gerdan_kras chern zol (1)_1296x972.jpg',
    'images/products/2016.07.16_chernobelyiy grek_1296x972.jpg',
    'images/products/2016.06.21_izmorozy (1)_1296x972.jpg',
    'images/products/2016.06.06_povtor maki di (1)_1296x972.jpg',
    'images/products/2016.05.11_barberi (1)_1296x972.jpg',
    'images/products/2016.03.31_гердан розы на черном.jpg',
    'images/products/2016.01.32_питон_серный.jpg',
    'images/products/2016.01.32_лариат_красный01.jpg',
    'images/products/2016.01.31_гердан ковер теплый (2).jpg',
    'images/products/2015.12.13.jpg',
    'images/products/2015.10.13.jpg',
    'images/products/2015.10.01.jpg',
    'images/products/2015.07.30_IMG_4895ааа.jpg',
    'images/products/2015.07.26_lariat iz rubki (4)_743x839.jpg',
    'images/products/2015.06.28_лариат меланж.jpg',
    'images/products/2015.06.28_ге2015.06.28_гердан полевые цветы (4).jpg',
    'images/products/2015.05.08_жгут кает.jpg',
    'images/products/2015.04.22_kobalytovyie kvadratyi_981x775.jpg',
    'images/products/2015.04.09_perehod_981x744.jpg',
    'images/products/2015.03.16_питон (1).jpg',
    'images/products/2015.02.01_klever (3)_981x978.jpg',
    'images/products/2015.01.10_grecheskiy 1_981x950.jpg',
    'images/products/2014.11_1.jpg',
    'images/favicon/android-chrome-192x192.png',
    'images/favicon/android-chrome-384x384.png',
    'images/favicon/apple-touch-icon.png',
    'images/favicon/favicon.ico',
    'images/favicon/favicon-16x16.png',
    'images/favicon/favicon-32x32.png',
    'images/favicon/mstile-150x150.png'

];

self.addEventListener('install', function(event) {
    // установка
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', function(event) {

    var cacheWhitelist = [CACHE_NAME];
    console.log('activate');

    event.waitUntil(

        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // ресурс есть в кеше
                if (response) {
                    return response;
                }

                /* Важно: клонируем запрос. Запрос - это поток, может быть обработан только раз. Если мы хотим использовать объект request несколько раз, его нужно клонировать */
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // проверяем, что получен корректный ответ
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        /* ВАЖНО: Клонируем ответ. Объект response также является потоком. */
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

