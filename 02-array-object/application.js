/*
// const array = [1, 2, 3, 5, 20, 42]
// // const arrayStrings = ['a', 'b', 'c', null, 12]
// // const array = new Array(1, 2, 3, 5, 20, 42)

// // console.log(array.length)

// console.log(array[array.length - 1])
// array[0] = 'Privet!'

// array[array.length] = 'becon'
// console.log(array) */

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value) 
const notes = ['записать блок про массивы', 'рассказать теорию объектов', 'bruh', 'qwe']

function render() {

    // for (let i = 0; i < notes.length; i++) {
    //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    // }    

    for (let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return // undefined
    }
    // listElement.innerHTML = `
    //    <li
    //       class="list-group-item d-flex justify-content-between align-items-center"
    //     >
    //       <span>${inputElement.value}</span>
    //       <span>
    //         <span class="btn btn-small btn-success">&check;</span>
    //         <span class="btn btn-small btn-danger">&times;</span>
    //       </span>
    //     </li>
    //     `

    listElement.insertAdjacentHTML(
        'beforeend', 
        getNoteTemplate(inputElement.value)
    )
    inputElement.value = ''
}

function getNoteTemplate(title) {
    return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span>${title}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>
        `
}

/**
 * object theory
 */

const person = {
    firstName: 'Timofey',
    lastName: 'Atlasov',
    bioAge: '28',
    sex: 'male',
    birthyear: 1996,
    religion: 'atheist',
    hasGirlfriend: false,
    languages: ['ru', 'en'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    },
    // status: 'single >> in suicide commit 65% && many thoughts of coup detat ignoring any risks of my life',
    // reason: 'destructive relatives in every social institute: family, friends, love, workspace. Also bad position in self-identify, physical health, mental health, education career, long-term loneliness, meritocracy/technocracy inner visions, psychosis state 2-3x times. Enough reasons to self-destruct right?'
}
console.log(person.birthyear)
console.log(person['languages'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true
console.log(person[key])
person.getFullName()
// console.log(typeof notes)
