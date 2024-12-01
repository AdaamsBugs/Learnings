console.log('Adaams is side')

const myPro = new Promise((resolve,reject)=>{
    const Boarded = false
    if(Boarded){
         resolve('Yes')
    }
    else {
       reject('No')
    }
})

myPro
.then((data)=>console.log(data))
.catch((data)=> console.log(data))
.finally(()=>console.log('i always be excuted'))





