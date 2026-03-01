var adminCourses = [
  { CourseID: "101", Name: "Math Basics", Grade: 7, Subject: "Math" },
  { CourseID: "102", Name: "Science Intro", Grade: 8, Subject: "Science" }
];

function fetchCoursesSim() {
  Logger.log(JSON.stringify(adminCourses, null, 2));
  return adminCourses;
}

function addCourseSim() {
  var newCourse = { CourseID: "103", Name: "History Basics", Grade: 9, Subject: "History" };
  adminCourses.push(newCourse);
  Logger.log("New course added!");
  return newCourse;
}

function testSyncSim() {
  Logger.log("=== BEFORE update ===");
  fetchCoursesSim();
  addCourseSim();
  Logger.log("=== AFTER update ===");
  fetchCoursesSim();
}