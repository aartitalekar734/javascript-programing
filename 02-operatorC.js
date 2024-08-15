function interviewCheck(gradScore, hscScore, sscScore, candidateName) {
  console.log(
    `Student name is "${candidateName}" and marks are ${gradScore} ${hscScore} ${sscScore}`
  );

  var result =
    gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? console.log(`"${candidateName}" you are eligible for interview`)
      : console.log(`${candidateName} you are  not eligible for interview`);
}
interviewCheck(80, 86, 90, "aarti");
console.log("============================================");

interviewCheck(70, 65, 55, "swati");
console.log("============================================");

interviewCheck(60, 79, 88, "Bharti");
