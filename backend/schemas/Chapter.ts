import { list } from "@keystone-6/core";
import { text, relationship, checkbox, integer } from "@keystone-6/core/fields";

export const Chapter = list({
  fields: {
    name: text({
      validation: {
        isRequired: true
      }
    }),
    number: integer({
      // defaultValue: { kind: "autoincrement" }, Zmienić przy produkcji
      validation: {
        isRequired: true
      }
    }),
    mirror: checkbox(),
    description: text(),
    lessons: relationship({ ref: "Lesson.chapter", many: true }),
    course: relationship({ ref: "Course.chapters", many: true })
  }
});
