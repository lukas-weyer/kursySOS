import { list } from "@keystone-6/core";
import { integer, text, select, relationship } from "@keystone-6/core/fields";

export const Lesson = list({
  fields: {
    number: integer({
      validation: {
        isRequired: true
      }
    }),
    lessonSlug: text({
      validation: {
        isRequired: true,
        match: { regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/ }
      },
      isIndexed: "unique"
    }),
    title: text({
      validation: {
        isRequired: true
      }
    }),
    status: select({
      options: [
        { label: "Published", value: "published" },
        { label: "Draft", value: "draft" }
      ],
      defaultValue: "draft",
      ui: {
        displayMode: "segmented-control"
      }
    }),
    youtube: text(),
    course: relationship({
      ref: "Course.lessons",
      many: false
    }),
    chapter: relationship({
      ref: "Chapter.lessons",
      many: false
    })
  }
});
