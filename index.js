console.log(document)
var btPlus = document.getElementsByClassName('plus')
var btMinus = document.getElementsByClassName('minus')
var total= document.getElementById('total')
var prices=document.querySelectorAll('.price')
var like_btns=document.querySelectorAll('.like')
var delete_btns=document.querySelectorAll('.delete')

function sum()
{
var somme=0
    for (let i=0;i<prices.length;i++)
{
    somme+=Number(prices[i].innerHTML)
}
total.innerHTML=somme
}


function compte(c){
    var bt=c.target
        var div= bt.parentElement
        var p = div.querySelector('p')
// p.innerHTML++ 
var quantity=Number(p.innerHTML)
console.log(p)
quantity++
p.innerHTML=quantity 

var td= div.parentElement
var tr=  td.parentElement
var unit_price= tr.querySelector('.unitPrice')
var up=Number(unit_price.innerHTML)
var price=tr.querySelector('.price')
price.innerHTML=quantity*up
sum()
    }
    function compteM(c){
        var bt=c.target
            var div= bt.parentElement
            var p = div.querySelector('p')
            var quantity=Number(p.innerHTML)
    console.log(p)

    
    if ((bt.innerHTML==="-") && (Number(p.innerHTML)>0))
    {

        quantity--
console.log(p)
p.innerHTML=quantity 
        var td= div.parentElement
        var tr=  td.parentElement
        var unit_price= tr.querySelector('.unitPrice')
        var up=Number(unit_price.innerHTML)
        var price=tr.querySelector('.price')
        price.innerHTML=quantity*up
        sum()
    } 
        }
        function changeColor(e){
            var cible=e.target
            if (cible.style.color!=="red")
            {
                cible.style.color='red'
            } else cible.style.color='black'
        } 



function deleteRow(e){
    var cible=e.target
var tr=cible.parentElement.parentElement.parentElement.parentElement
var price=tr.querySelector('.price')
price.innerHTML=0
sum()
tr.remove()

}
for (let i=0;i<btPlus.length;i++){
    btPlus[i].addEventListener('click',compte)  
}

        for (let i=0;i<btMinus.length;i++){
            btMinus[i].addEventListener('click',compteM)  
        }
        for (let i=0;i<like_btns.length;i++)
        {
            like_btns[i].addEventListener('click', changeColor)
        }
        for (let i=0;i<delete_btns.length;i++)
        {
            delete_btns[i].addEventListener('click', deleteRow)
        }
       
       