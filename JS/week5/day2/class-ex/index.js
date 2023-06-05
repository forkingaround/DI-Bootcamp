let cat = new XMLHttpRequest();
cat.open('GET','https://api.chucknorris.io/jokes/categories');
cat.responseType = 'text';
cat.send();
let categories;
let random;
cat.onload = function(){
    if(cat.status != 200){
        console.error(`Error ${cat.status}: ${cat.statusText}`);
    }else{
        categories = JSON.parse(cat.response);
        console.log(`Got ${categories.length} categories from API`,categories);
        random = Math.floor(categories.length * Math.random());
        console.log('selection:',random);
        let url = `https://api.chucknorris.io/jokes/random?category=${categories[random]}`;
        let joke = new XMLHttpRequest();
        joke.open('GET',url);
        joke.responseType = 'text';
        joke.send();
        joke.onload = function(){
            if(joke.status != 200){
                console.error(`Error ${joke.status}: ${joke.statusText}`);
            }else{
                const jObj = JSON.parse(joke.response);
                console.log(`Joke:\n ${jObj.value}`);
            }
        };
        joke.onerror = function(){
            console.error('Network error');
        }
    };
};

cat.onerror = function(){
    console.error('Network error');
};
console.log(categories);
// 

