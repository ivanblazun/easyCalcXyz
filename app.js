const numbers=document.querySelector('#numbers');
const display=document.querySelector('#display')
const sum=document.querySelector('#sum');
const c=document.querySelector('#c')
const result=document.getElementById('result')
const memory=document.getElementById('memory')



document.addEventListener('DOMContentLoaded',function loadMemory(){
    let mem=[]
    mem=JSON.parse(localStorage.getItem('sumAll'))
    console.log(mem)


    // mem.slice(Math.max(mem.length-5,1))

    console.log(mem.length)

 
    
    // if(mem.length>=5){
    //     mem.shift()
    //     mem.push(result.textContent)
    // }
    // memory.children[0].textContent=mem[0]
    // memory.children[1].textContent=mem[1]
    // memory.children[2].textContent=mem[2]
    // memory.children[3].textContent=mem[3]
    // memory.children[4].textContent=mem[4]
})



numbers.addEventListener('click',addToDisplay)

sum.addEventListener('click',sumAll)

c.addEventListener('click',clearDisplay)



function addToDisplay(e){
    if(e.target===numbers){
        
    }else{
        // display.textContent=''
        display.classList.add('btn2-active')
        display.appendChild(document.createTextNode(e.target.value))
        console.log(e.target.value)
    }
}

function sumAll(e){
    let res;  
    res=eval(display.textContent)
    result.textContent=''
    result.appendChild(document.createTextNode(res))
    result.classList.remove('btn-dark')
    result.classList.add('btn2-active')

    

    if(localStorage.getItem('sumAll')===null){
        allRes=[]
    }else{
        allRes=JSON.parse(localStorage.getItem('sumAll'))
    }
    allRes.push(result.textContent)  
    localStorage.setItem('sumAll',JSON.stringify(allRes))

    let mem=[]
    mem=JSON.parse(localStorage.getItem('sumAll'))
    console.log(mem) 
    
}

function clearDisplay(e){
    result.textContent='';
    result.classList='btn2 btn-dark'
    display.textContent=''




    // let mem=[]
    // mem=JSON.parse(localStorage.getItem('sumAll'))
    // console.log(mem)

    // if(mem.length>5){
    //     mem.shift()
    //     mem.push(result.textContent)
    // }

    // memory.children[0].textContent=mem[0]
    // memory.children[1].textContent=mem[1]
    // memory.children[2].textContent=mem[2]
    // memory.children[3].textContent=mem[3]
    // memory.children[4].textContent=mem[4]
}