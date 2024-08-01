//1
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });






//2
// +-----------+      HTTP Request      +-----------+
// |   Client  | ---------------------> |   Server  |
// | (Browser) |                        | (Web App) |
// +-----------+ <--------------------- +-----------+
//             HTTP Response







//3
// შექმენით ახალი Promise ობიექტი
const promise = new Promise((resolve, reject) => {
    // ასინქრონული ოპერაციის სიმულაცია setTimeout-ის გამოყენებით
    setTimeout(() => {
        const success = true; // შეცვლა ცრუზე ტესტის უარყოფისთვის
        
        if (success) {
            // თუ ოპერაცია წარმატებით დასრულდა, ზარის მოგვარება შედეგით
            resolve('Operation was successful');
        } else {
            // თუ ოპერაცია ვერ მოხერხდა, დაურეკეთ უარყოფას შეცდომის შეტყობინებით
            reject('Operation failed');
        }
    }, 1000); // დაელოდეთ 1 წამს, სანამ გადაწყვეტთ ან უარყოფთ
});

// გაუმკლავდეთ დაპირების გადაწყვეტილ მნიშვნელობას
promise.then(result => {
    console.log(result); // გამომავალი: ოპერაცია წარმატებული იყო (თუ წარმატება მართალია)
}).catch(error => {
    console.error(error); // გამომავალი: ოპერაცია ჩაიშალა (თუ წარმატება მცდარია)
});
