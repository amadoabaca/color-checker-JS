const colorInput = document.getElementById('color')
colorInput.addEventListener('input', event => {
    const color = event.target.value
    const hexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if( color.match(hexColor) ) {
        colorInput.style.borderColor = color
    } else {
        colorInput.style.borderColor = 'rgb(226, 226, 226)'
    }
})