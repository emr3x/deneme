/*const numbers = [1, 2, 3, 4, 5,]
const newArr= []
let sum = 0
for(let i=0;i<numbers.length;i++){
    newArr.push(numbers[i]**2)
}
console.log(newArr)
let i = 0
while (i<=5){
    console.log(i)
    i++
}
let a = 0
do {
    console.log(a)
    a++

} while (a<5)
*/
/*const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
 let b = 6
 while(b<10){
 b++
 console.log(b)
 }
 let c = 5 
 do{
    console.log(c)
    c++


 } while (c<12)

const numbers= [5,10,15,20]
for(const num of numbers){
    console.log(num)
}
*/
/*
for (let i = '#';i<7; i++){
    console.log(i)
}


let a = '##'
let b = '###'
let c = '####'
let d = '#####'

const hepsiList = a.concat(b).concat(c).concat(d)
console.log(hepsiList.length)

for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

  for ( let c = 2; c<=100; c++){
    if (c % 2 !==0){
        console.log(c+c)
    }
  }
  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(makeid(5));
  
function birdenFazla (numara1,numara2){
  return numara1**numara2
}
 let   total=birdenFazla(11,14)
 console.log('Toplam', total)

 function topla (){
    let toplam = 0
  for (let i=0; i<arguments.length;i++){
         toplam += arguments[i]

  }
  return toplam
  console.log(arguments)
 }
 console.log( topla (2,5,7,9,10))
      



const hello3 = name => `hello ${name}`
  
console.log (hello3('Hosgeldin biladerim'))
*/





const emre = {
  firstName:'Emre',
  lastName:'Ates',
  age : 22,
  country:'Finland',
  skills:[
   'HTML',
   'CSS',
   'JavaScript',
   'React',
  ], 
  
  getFullName: function () {
  return `${this.firstName} ${this.lastName}`
}
}
   emre.getPersonInfo = function(){
     let fullName = this.getFullName()
     let statement = `${fullName} is a ${emre.hoobies}.\n He lives ${emre.city}.\n his title ${emre.title}.\n He is learning ${emre.skills}`
     return statement
   }
   emre.name = 'Emre'
   emre.skills.push('PhP')
   emre.skills.push('C++')
   emre.skills.pop()
   emre.city = 'Izmit'
   emre.hoobies= 'coding'
   emre.title = 'student'

   
   console.log(emre)
   console.log(emre.getPersonInfo())

   let newUser=Object.assign({})

   Object.freeze(emre);

   

   
   
   
   
