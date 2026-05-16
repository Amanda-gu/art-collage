let showSquare = 'show'
let mondrianSquares = document.querySelectorAll('#mondrian div')
let resetButton = document.querySelector('#reset')
let showReset = 'show-reset'
let instruction = document.querySelector('p')
let removeInstruction = 'remove-instruction'

resetButton.addEventListener('click', () => {
    mondrianSquares.forEach((sq) => {
        sq.classList.remove(showSquare)
        instruction.classList.remove(removeInstruction)
        resetButton.classList.remove(showReset)
    })

})

mondrianSquares.forEach((sq) => {
    sq.addEventListener('click', () => {
        sq.classList.toggle(showSquare)
        instruction.classList.add(removeInstruction)
        resetButton.classList.add(showReset)
    })
})
