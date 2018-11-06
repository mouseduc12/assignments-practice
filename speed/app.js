
var count = localStorage.getItem("count") || 0
document.getElementById('count').textContent = count


document.getElementById('increment').addEventListener("click", function(){
    count++
    localStorage.setItem("count", count);
    document.getElementById('count').textContent = count;
})

document.getElementById('decrement').addEventListener("click",function(){
    count--
    localStorage.setItem("count", count);
    document.getElementById('count').textContent = count;
})