console.log('Adaam this side')

const btn = document.getElementById('btn')
const inp = document.getElementById('inp')
const chn = document.getElementById('chn')

btn.addEventListener('click',()=>{
    const value = inp.value
    localStorage.setItem('name',value)
    location.reload()
})

window.addEventListener('load',()=>{
    const val = localStorage.getItem('name')
    chn.innerText = val

})