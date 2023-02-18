/*const callback = (a) =>{
    return a**2
}
console.log(callback)
function emre (callback,a){
    return callback(a)*a
}
console.log(emre(callback,3))

 const a = n1=> {
    const b = n2=>{
        const c = n3 =>{
            return n1+n2+n3

        }
        return c 
    }
    return b 

 }
 console.log(a(5)(10)(40))
 

 const sayilar =[1,2,3,4,5,6]
 let total=0
 sayilar.forEach(sayi=>total+=sayi)
 console.log(total)

 const numbers = [1,3,5,7,9]
 let total1 = 0 
 numbers.forEach(number=>total1+=number)
 console.log(total1)

 function sayHello(){
    console.log('hello!')
 }
 const emre3= setInterval(sayHello,1000)

//clearInterval
//clearTimeout 
setTimeout (() =>{
    clearInterval(emre3)
    console.log('işlem iptal edildi amk')
},5000)

const countries =[ 'Norway','America','Brasil','Mexico']



console.log(
    countries.findIndex(country=>country ===7)

)
countries.sort()
console.log(countries)
let users= [
    {
        id:14,
        name: 'Emre',
        age : 22,


        },
        {
            id : 18,
            name:'tolga',
            age : 21,
        },
        {
            id : 5,
            name: 'tuna',
            age:21,
            
        },


    
]
users=users.map(user=>{
    if (user.id===18){
        user.name='hazar'
    }
    return user
})
console.log(users)


const names5 = ['ahmet','mehmet','emre','tolga']
names5.sort((a,b)=>a.localeCompare(b))
console.log(names5)





const numbers1 = [5,7,14,28]
numbers1.sort()


/*numbers1.sort(function (a,b){
    return a - b
})
console.log(numbers1)
*/
