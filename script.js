let showSquare = 'show'
let mondrianSquares = document.querySelectorAll('#mondrian div')

let resetButton = document.querySelector('#reset')
let showReset = 'show-reset'

let instruction = document.querySelector('p')
let removeInstruction = 'remove-instruction'

let about = document.querySelector('#about')
let aboutModal = document.querySelector('dialog')
let closeModal = document.querySelector('#close')


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


about.addEventListener('click', () => { // “Listen” for clicks.
	aboutModal.showModal() // This opens it up.
})

closeModal.addEventListener('click', () => {
	aboutModal.close() // And this closes it!
})

document.addEventListener('click', (event) => {
	// Only clicks on the page itself behind the `dialog`.
	if (event.target == document.documentElement) {
		aboutModal.close() // Close it too then.
	}
})
