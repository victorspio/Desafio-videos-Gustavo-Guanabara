let imgs = document.querySelectorAll('.images')
imgs.forEach((imgs) => {
    imgs.addEventListener('click', () => {
        imgs.forEach((img) => {
            console.log(img)
        })
    });
})