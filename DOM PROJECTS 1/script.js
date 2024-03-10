const allBtn = document.querySelectorAll('.button')
console.log(allBtn);
const bone = document.querySelector('body')
console.log(bone);
allBtn.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', (e) => {
        if (e.target.id === 'black')
            bone.style.backgroundColor = e.target.id
        else if (e.target.id === 'skyblue')
            bone.style.backgroundColor = e.target.id
        else if (e.target.id === 'yellow')
            bone.style.backgroundColor = e.target.id
        else if (e.target.id === 'green')
            bone.style.backgroundColor = e.target.id
    })
})