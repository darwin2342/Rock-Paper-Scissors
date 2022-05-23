const selectionButtons = document.querySelectorAll('[date-selection]')

    selectionButtons.forEach(selectionButtons =>{
        selectionButtons.addEventListener('click', e => {
            const selectionName = selectionButtons.dataset.selection
            makeSelection(selectionName)
        })
    })
function makeSelection(selection) {
    console.log(selection)
}