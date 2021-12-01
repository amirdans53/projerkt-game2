let rand=Math.ceil(Math.random()*21);
let t=0;

document.querySelector('.btn').addEventListener('click',(e)=>{
    let inp=document.querySelector('.vorod').value;
    let tek=document.querySelector('.help > h3')
    t++
    alert(t)
    if(t<8){
        if(inp >0 && inp<21){
            if(inp<rand){
                tek.textContent='عدد بزرگ تر است'
                
            }else if(inp>rand){
                tek.textContent='عدد کوچک تر است'

            }else{
                tek.textContent='شما برنده شدید برای بازی مجدد رفرش کنید';
                document.querySelector('body').style.backgroundColor='rgb(0,255,0)';
                document.querySelector('.btn').style.backgroundColor='rgb(255,255,255)';
                document.querySelector('.btn').style.color='rgb(0,0,0)';

            }
        }else{alert('قوانین را مطالعه کنید')}


    }else{alert('شما باختید')}    




        e.preventDefault()
    
})

console.log(rand)
