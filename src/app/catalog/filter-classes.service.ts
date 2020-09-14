import { Injectable } from "@angular/core";

@Injectable()
export class FilterClassesService {
  constructor() {}

  applyFilter(filter, classes) {
    if (!filter) {
      return classes;
    }
    if (filter === "GEN") {
      return this.showOnlyGeneralCourses(classes);
    }
    return classes.filter((c) => c.course.courseNumber.startsWith(filter));
  }

  showOnlyGeneralCourses(classes) {
    return classes.filter((c) => {
      const cn = c.course.courseNumber;
      return (
        !cn.startsWith("CH") && !cn.startsWith("PO") && !cn.startsWith("SP")
      );
    });
  }
}
