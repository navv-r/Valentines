// YES BUTTON
document.querySelector('.yes').addEventListener('click', function() {
    const image = document.querySelector('.yes__img');
    
    image.style.display = 'block'; 
    setTimeout(() => {
        image.style.opacity = 1; 
    }, 10); 

    setTimeout(() => {
        image.style.opacity = 0; 
        setTimeout(() => {
            image.style.display = 'none'; 
        }, 500); 
    }, 4000); 
});

// NO BUTTON
document.querySelector('.no').addEventListener('click', function() {
    const image = document.querySelector('.no__img');
    
    image.style.display = 'block'; 
    setTimeout(() => {
        image.style.opacity = 1; 
    }, 10); 

    setTimeout(() => {
        image.style.opacity = 0; 
        setTimeout(() => {
            image.style.display = 'none'; 
        }, 500); 
    }, 4000);
});