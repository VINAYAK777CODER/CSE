// function roll(num,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("roll no",num);
//             reject();
//         },delay)
//     })
// }
// roll(121,1000).then(()=>{
//     roll(123,2000).then(()=>{
//         roll(124,3000).then(()=>{
//         console.log("viva compleyted")
//         })
        
//     })
// }).catch(()=>{
//     console.log("error")
// })
// async function getroll(){
//     await roll(121,1000);
//     await roll(121,1000);
//     await roll(121,1000);

// }
// getroll();
// function foodorder(item,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("item is ", item);
//             resolve();
//         },time)
//     })
// }
// async function fooditems(){
//     await foodorder("kacha aam",1000);
//     await foodorder("pakka aam",1000);
//     await foodorder("khatta aam",1000);

// }
// fooditems();

// let url ='https://api.github.com/users/VINAYAK777CODER';
// let b=fetch(url);
// b.then((data)=>{
//     console.log(data)
//     return data.json();
// }).then((data)=>{
//     console.log(data)
// }).catch(()=>{
//     console.log("error")
// }).finally(()=>{
//     console.log("first")
// })

let url = 'https://api.github.com/users';

async function fetchData() {
    try {
        const response = await fetch(url); 
        console.log(response);
        const data = await response.json();
        console.log(data.login);
    } catch (error) {
        console.log("error");
    } finally {
        console.log("first");
    }
}

fetchData();

