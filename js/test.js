(function () {
    function insertDataWithCSSSelectorsAndLoop(jsonData) {
        console.log("Функция запустилась");
        
        jsonData = jsonData.replace(/\\/g, '');
        var jsonData = jsonData.trim().replace(/^"|"$/g, '');
        jsonData = JSON.parse(jsonData);
        // console.log(jsonData);
        for (var i = 1; i <= 20; i++) {
            // console.log("начался цикл");
            var cssImg = "#img-" + i + "";
            var cssName = "#name-" + i + "";
            var cssKP = "#kp-rating-" + i + "";
            var cssImdb = "#imdb-rating-" + i + "";
            var cssOpis = "#opis-" + i + "";
            var cssUrl = "#url-" + i + "";
            var dataKey = "data" + i;
            var data = jsonData[dataKey];
             // console.log(jsonData);

            if (data) {
                // console.log("залетел в иф дата");
                var [img, name, rkp, rimdb, opis, url] = data;
                // var [id_kp, name, rkp, rimdb, opis, url] = data;

                function insertData(selector, data) {
                    var element = document.querySelector(selector);
                    if (element) {
                        element.textContent = data;
                    }
                }

                var imgElement = document.querySelector(cssImg);

                if (imgElement) {
                    // console.log("если постер");
                    imgElement.addEventListener("load", function () {
                        imgElement.setAttribute("src", img);
                    });

                    imgElement.setAttribute("src", img);
                }

                var linkElement = document.querySelector(cssUrl);
                if (linkElement) {
                    // console.log("если ссылка");
                    linkElement.setAttribute("href", url);
                }
// console.log("после ссылки");
                insertData(cssName, name);
                insertData(cssKP, rkp);
                insertData(cssImdb, rimdb);
                insertData(cssOpis, opis);
                // console.log("Цикл выполняется для номера " + i);
            }
        }
    }

    window.addEventListener("load", function () {
        function loadGoogleScriptData() {
            var url = 'https://script.google.com/macros/s/AKfycbwALH5nSRNeazsRm4MF_kAYtRAHvZWUXY8siFkbqArjrrv610ttIzC7E1GhVQ4Lbp9GgA/exec';
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    var jsonData = JSON.stringify(data, null, 2);
                    // console.log("Данные получены: " + jsonData);

                    // Вызываем функцию insertDataWithCSSSelectorsAndLoop с данными jsonData
                    insertDataWithCSSSelectorsAndLoop(jsonData);
                })
                .catch(error => {
                    console.error("Ошибка загрузки данных: " + error);
                });
        }

        loadGoogleScriptData();
    });
})();



// (function () {
//     window.addEventListener("load", function () {
//         function loadGoogleScriptData() {
//             var url = 'https://script.google.com/macros/s/AKfycbwALH5nSRNeazsRm4MF_kAYtRAHvZWUXY8siFkbqArjrrv610ttIzC7E1GhVQ4Lbp9GgA/exec';
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => {
//                     var jsonData = JSON.stringify(data, null, 2);
//                     console.log("Данные получены: " + jsonData);

//                     // Вызываем функцию insertDataWithCSSSelectorsAndLoop с данными jsonData
//                     insertDataWithCSSSelectorsAndLoop(data);
//                 })
//                 .catch(error => {
//                     console.error("Ошибка загрузки данных: " + error);
//                 });
//         }

//         loadGoogleScriptData();

//         function insertDataWithCSSSelectorsAndLoop(jsonData) {
//             for (var i = 1; i <= 20; i++) {
//                 var cssImg = "#img-" + i + "";
//                 var cssName = "#name-" + i + "";
//                 var cssKP = "#kp-rating-" + i + "";
//                 var cssImdb = "#imdb-rating-" + i + "";
//                 var cssOpis = "#opis-" + i + "";
//                 var cssUrl = "#url-" + i + "";
//                 var dataKey = "data" + i;
//                 var data = jsonData[dataKey];

//                 if (data) {
//                     var [img, name, rkp, rimdb, opis, url] = data;

//                     function insertData(selector, data) {
//                         var element = document.querySelector(selector);
//                         if (element) {
//                             element.textContent = data;
//                         }
//                     }

//                     var imgElement = document.querySelector(cssImg);

//                     if (imgElement) {
//                         imgElement.addEventListener("load", function () {
//                             imgElement.setAttribute("src", img);
//                         });

//                         imgElement.setAttribute("src", img);
//                     }

//                     var linkElement = document.querySelector(cssUrl);
//                     if (linkElement) {
//                         linkElement.setAttribute("href", url);
//                     }

//                     insertData(cssName, name);
//                     insertData(cssKP, rkp);
//                     insertData(cssImdb, rimdb);
//                     insertData(cssOpis, opis);
//                     console.log("Цикл выполняется для номера " + i);
//                 }
//             }
//         }
//     });
// })();


// function insertDataWithCSSSelectorsAndLoop(jsonData) {
//     for (var i = 1; i <= 20; i++) {
//         var cssImg = "#img-" + i + "";
//         var cssName = "#name-" + i + "";
//         var cssKP = "#kp-rating-" + i + "";
//         var cssImdb = "#imdb-rating-" + i + "";
//         var cssOpis = "#opis-" + i + "";
//         var cssUrl = "#url-" + i + "";
//         var dataKey = "data" + i;
//         var data = jsonData[dataKey];

//         if (data) {
//             var [img, name, rkp, rimdb, opis, url] = data;

//             function insertData(selector, data) {
//                 var element = document.querySelector(selector);
//                 if (element) {
//                     element.textContent = data;
//                 }
//             }

//             var imgElement = document.querySelector(cssImg);

//             if (imgElement) {
//                 imgElement.addEventListener("load", function () {
//                     imgElement.setAttribute("src", img);
//                 });

//                 imgElement.setAttribute("src", img);
//             }

//             var linkElement = document.querySelector(cssUrl);
//             if (linkElement) {
//                 linkElement.setAttribute("href", url);
//             }

//             insertData(cssName, name);
//             insertData(cssKP, rkp);
//             insertData(cssImdb, rimdb);
//             insertData(cssOpis, opis);
//             console.log("Цикл выполняется для номера " + i);
//         }
//     }
// }

// (function () {
//     window.addEventListener("load", function () {
//         function loadGoogleScriptData() {
//             var url = 'https://script.google.com/macros/s/AKfycbwALH5nSRNeazsRm4MF_kAYtRAHvZWUXY8siFkbqArjrrv610ttIzC7E1GhVQ4Lbp9GgA/exec';
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => {
//                     var jsonData = JSON.stringify(data, null, 2);
//                     console.log("Данные получены: " + jsonData);

//                     // Вызываем функцию insertDataWithCSSSelectorsAndLoop с данными jsonData
//                     insertDataWithCSSSelectorsAndLoop(data);
//                 })
//                 .catch(error => {
//                     console.error("Ошибка загрузки данных: " + error);
//                 });
//         }

//         loadGoogleScriptData();
//     });
// })();
