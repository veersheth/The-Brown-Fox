const referenceText = document.getElementById("referenceText")
const inputVal = document.getElementById("inputVal")

var totalIncorrect = 0

inputVal.addEventListener('input', () => {
    const letters_array = referenceText.querySelectorAll('span')
    const arrayVal = inputVal.value.split('')
    letters_array.forEach((characterSpan, index) => {
        const character = arrayVal[index]
        if (character == null) 
            // IF IT DOESN'T EXIST
            {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        } else if (character === characterSpan.innerText) 
            // IF IT IS CORRECT
            {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else 
            // IF IT IS WRONG
             {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            totalIncorrect = totalIncorrect + 1
        }
    })
})

