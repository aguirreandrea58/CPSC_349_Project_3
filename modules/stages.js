class Stage {
  constructor () {
    this.num = 0
  }

  getStage () {
    return this.num
  }

  changeStage (stage) {
    const img = document.getElementById('stage')
    img.src = `/assets/images/hangman-${stage}.png`
    img.alt = `Stage ${stage} of Hangman`
    this.num = stage
  }
}

function createWordHolder (word) {
  const table = document.getElementById('word-holder')

  // create row
  const row = document.createElement('tr')

  row.classList = 'flex space-x-5'

  for (let i = 0; i < word.length; ++i) {
    const cell = document.createElement('td')
    cell.classList = 'text-4xl w-10  border-b-4 border-indigo-500 text-center'

    // if letter has been found and stored in local storage, set the cells
    // textcontent to the letter
    // code goes here

    row.appendChild(cell)
  }

  table.appendChild(row)
}

function fillLetter (word, letter) {
  const cells = document.getElementsByTagName('td')

  let matchFound = false

  // fill in a letter only if the word contains the letter
  for (let i = 0; i < word.length; ++i) {
    if (word[i] === letter) {
      cells[i].textContent = letter
      matchFound = true
    }
  }

  return matchFound
}

function saveStageAndWord() {
  // save stage number 
  // save found 
}

function loadSavedStageAndWord() {

}

export { createWordHolder, fillLetter, Stage }