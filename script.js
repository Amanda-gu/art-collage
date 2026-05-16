let showSquare = 'show'
let mondrianSquares = document.querySelectorAll('#mondrian div')

mondrianSquares.forEach((sq) => {
    sq.addEventListener('click', () => {
        sq.classList.toggle(showSquare)
    })
})


// mondrianSquares.addEventListener('click', function(){
//     mondrianSquares.classList.toggle(showSquare)
// })