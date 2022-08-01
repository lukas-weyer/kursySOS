import { list } from "@keystone-6/core";
import { text, relationship } from "@keystone-6/core/fields";

export const Chapter = list({
  fields: {
    name: text({
      validation: {
        isRequired: true
      }
    }),
    description: text(),
    lessons: relationship({ ref: "Lesson.chapter", many: true }),
    course: relationship({ ref: "Course.chapters", many: true })
  }
});
