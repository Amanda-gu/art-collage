let showSquare = 'show'
let mondrianSquares = document.querySelectorAll('#mondrian div')
let resetButton = document.querySelector('#reset')

resetButton.addEventListener('click', () => {
    mondrianSquares.forEach((sq) => {
        sq.classList.remove(showSquare)
    })
})

mondrianSquares.forEach((sq) => {
    sq.addEventListener('click', () => {
        sq.classList.toggle(showSquare)
    })
})


// mondrianSquares.addEventListener('click', function(){
//     mondrianSquares.classList.toggle(showSquare)
// })