import { list } from "@keystone-6/core";
import { relationship, text, json, select } from "@keystone-6/core/fields";

export const Course = list({
  fields: {
    title: text({
      validation: {
        isRequired: true
      }
    }),
    subtitle: text(),
    slug: text({
      validation: {
        isRequired: true,
        match: { regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/ }
      },
      isIndexed: "unique"
    }),
    description: text(),
    chapters: relationship({
      ref: "Chapter.course",
      many: true
    }),
    lessons: relationship({
      ref: "Lesson.course",
      many: true
    }),
    users: relationship({ ref: "User.courses", many: true })
  }
});
