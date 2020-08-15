
const subjects =[
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
   "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química",
]
const weekdays =[
"Domingo",
"Segunda-feira",
"Terça-feira",
"Quarta-feira",
"Quinta-feira",
"Sexta-feira",
"Sábado",
]

function getSubjects(subjectnumber){
const position = +subjectnumber -1
return subjects[position]
}
function convertHoursToMinutes(time) {
 const [hour, minutes] = time.split(':')
 return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubjects,
    convertHoursToMinutes

}