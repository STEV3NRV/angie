const heart = document.querySelector('#heart');

heart.addEventListener('mouseover',function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    heart.style.setProperty('top', randomY+'%');
    heart.style.setProperty('left',randomX+'%');
    heart.style.setProperty('transform',`translate (-${randomX}%,-${randomY}%)`);
})
        