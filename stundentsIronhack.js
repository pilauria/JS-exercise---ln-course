const students = [
  { name: 'Pietro Lauria', bootcamp: 'web', campus: 'Barcelona' },
  { name: 'Kevin Durant', bootcamp: 'web', campus: 'Miami' },
  { name: 'Giannis Antetokounmpo', bootcamp: 'cyber', campus: 'Miami' },
  { name: 'Stephen Curry', bootcamp: 'web', campus: 'Berlin' },
  { name: 'James Harden', bootcamp: 'cyber', campus: 'Miami' },
  { name: 'Kawhi Leonard', bootcamp: 'web', campus: 'Berlin' },
  { name: 'Anthony Davis', bootcamp: 'uxui', campus: 'Lisbon' },
  { name: 'Mamma Mimmo', bootcamp: 'web', campus: 'Lisbon' },
];

function getDevelopers(students) {
  // your code
  let studentsModified = [];
  // for (let i = 0; i < students.length; i++) {
  for (let student of students) {
    if (
      student.bootcamp === 'web' &&
      student.campus !== 'Miami' &&
      student.campus !== 'Berlin'
    ) {
      studentsModified.push(student);
    }
  }
  return studentsModified;
}

// console.log(getDevelopers(students));

// function getDevelopers(students) {
//   const filteredStudents = [];

//   for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const { bootcamp } = student;
//     const { campus } = student;

//     const isWeb = bootcamp === 'web';
//     const isNotFromMiamiAndBerlin = campus !== 'Miami' && campus !== 'Berlin';

//     if (isWeb && isNotFromMiamiAndBerlin) {
//       filteredStudents.push(student);
//     }
//   }

//   return filteredStudents;
// }

console.log(getDevelopers(students));
