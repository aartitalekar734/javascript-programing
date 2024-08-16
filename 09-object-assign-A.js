let professor = {
  name: "aarti",
  collegeName: "Agasti college",
  subject: "javascript",
  classTime: 8,
  regularLecture: true,
  degrees: {
    engineering: "CSC",
    phd: "Adv Computing",
    hsc: "Science",
    graduation: "Bcs",
    postGraduation: "Mca",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "certificate in Adv Programming",
  ],
};
console.log(professor);
console.log(
  "============Adding new properties totalExperience================================================================"
);
professor.totalExperience = 14;
console.log(professor);

console.log(
  "============update class time======================================================================================"
);
professor.classTime = 9;
console.log(`professor Time is updated: ${professor.classTime}`);

console.log(
  "==========Adding new element to array=============================================================================="
);
professor.certificates.splice(2, 0, "Oracle certificate");
console.log(`2 nd array element is:${professor.certificates[2]}`);

console.log(
  "last element of an array certificates is:",
  professor.certificates[3]
);

console.log(
  "===========array traversing=========================================================================="
);

let totalCertificates = professor.certificates;
for (const element of totalCertificates) {
  console.log(element);
}
console.log(
  "==========complit object traversing==================================================================="
);
for (const key in professor) {
  if (Object.prototype.hasOwnProperty.call(professor, key)) {
    const element = professor[key];
    console.log(`${key},${element}`);
  }
}
