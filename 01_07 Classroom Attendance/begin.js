function getStudents(classRoom) {
  let { hasTeachingAssistant, classList } = classRoom;
  let teacher, teachingAssistant, students;
  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(
  getStudents({
    hasTeachingAssistant: true,
    classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Omair', 'Lukas'],
  })
);

// function getStudents(classroom) {
//   let { hasTeachingAssistant, classList } = classroom;
//   let teacher, teachingAssitant, students;

//   if (hasTeachingAssistant) {
//     [teacher, teachingAssitant, ...students] = classList;
//   } else {
//     [teacher, ...students] = classList;
//   }
//   return students;
// }

// console.log(
//   getStudents({
//     hasTeachingAssistant: false,
//     classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Omair', 'Lukas'],
//   })
// );
