function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
const newpage=()=>{
    window.location.href='detail.html'
}
const newpage2=()=>{
    window.location.href='product2.html'
}
const newpage3=()=>{
    window.location.href='product3.html'
}
const newpage4=()=>{
    window.location.href='product4.html'
}
const remove1 =()=>{
    document.getElementById('row1').style.display = 'none';
}
const remove2 =()=>{
    document.getElementById('row2').style.display = 'none';
}
const remove3 =()=>{
    document.getElementById('row3').style.display = 'none';
}
const remove4 =()=>{
    document.getElementById('row4').style.display = 'none';
}
const display1 =()=>{
    window.location.href='cart.html'
   
}
const display2 =()=>{
    window.location.href='cart.html'
    document.getElementById('row2').style.display ='0';
}
const display3 =()=>{
    window.location.href='cart.html'
    document.getElementById('row2').style.display ='0';
}
const display4 =()=>{
    window.location.href='cart.html'
    document.getElementById('row2').style.display ='0';
}
const formsubmit =()=>{
    alert("your response is submitted")
}
const shop = ()=>{
    window.location.href='shop.html'
}
