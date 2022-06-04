// Exercise 1
const calculateSquare = (array)=>{
    return array.map(el=>Math.pow(el, 2))
};
console.log(calculateSquare([2, 4, 6, 8, 10]));


// Exercise 2
const sumCounters = (array)=>{
    const sum =  array.reduce(
        (prev, curr) => prev + curr.count,0);
    return sum

};
console.log(sumCounters([{count: 1}, {count: 2}, {count: 3}, {count: 3}]));


// Exercise 3
const moviesWithActor = (movies, actor) => {
    let copyOfMovies = {...movies}
    Object.keys(movies).map(movie=>{
        if(!movies[movie]["actors"].includes(actor)) copyOfMovies[movie]["actors"].push(actor)
    })
    return copyOfMovies;
};

const movies = {
    'big': {
        actors: ['Elizabeth Perkins', 'Robert Loggia'],
    },
    'forrest gump': {
        actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    },
    'cast away': {
        actors: ['Helen Hunt', 'Paul Sanchez'],
    },
};
console.log(moviesWithActor(movies,'Tom Hanks'));


// Exercise 4 - recursive
const treesAreEqual=(x, y)=>{

    if(!x && !y ) return true
    
    if(x && y){
        return treesAreEqual(x.left, y.left) && treesAreEqual(x.right, y.right)
    }else{
        return false
    }    
};

const a = {
    value: 1,
    left: {value: 2},
    right: {
        value: 1,
        left: {value: 2},
        right:  {
            value: 1,
            left: {value: 2},
            right: {value: 3},
        }
    }
}
const b = {
    value: 1,
    left: {value: 2},
    right: {
        value: 1,
        left: {value: 2},
        right:  {
            value: 1,
            left: {value: 2},
            right: {value: 3},
        }
    }
};    
console.log(treesAreEqual(a,b));


// Exercise 5
const axios = require('axios');

const fetchData = async()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const data = response.data;
    let first = false
    data.map(el=>{
        if(el.userId===7){
            if(!first){
                console.log(el.id);
                first=true;
            }
            if(el.title.split("")[0]==='e') console.log(el.title);

        }
    })
}

fetchData();

