// asynchronous programming
// promise resolved/fulfilled

import axios from "axios";
// https using anonymous function using the .then method for sucess
// axios.get('https://hn.algolia.com/api/v1/search?query=redux').then(
//     function(response){
//         console.log("sucess",response)
//         console.log(response.data.hits[0].title)
//     }
// )

// http request using anonymous arror function using the .then methode for sucess
console.log('data is starting')
// axios.get('https://hn.algolia.com/api/v1/search?query=redux').then((response)=>{
//     console.log("sucessful",response)
// })
console.log('data is ending')
// http request using named function for sucess
function respond(response){
    console.log("you are sucessful",response)
}
axios.get('https://hn.algolia.com/api/v1/search?query=redux')
    .then((r)=>respond(r)).catch((r)=>respond(r));



// http using named function for failed or rejected state using the .catch
// function error(err){
//     console.log("have an error",err)
// }
// axios.get('https://hn.algolia./api/v1/search?query=redux')
//     .then((r)=>error(r)).catch((r)=>error(r));


// http request error using the .catch method using anonymous arror function

axios.get('https://hn.algolia.api/v1/search?query=redux').then((error)=>{
    console.log(error)
}).catch(function(error){
    console.log("error",error)
})


