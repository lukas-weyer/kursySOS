import { list } from "@keystone-6/core";
import { text, relationship, password } from "@keystone-6/core/fields";

export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true
    }),
    password: password({ validation: { isRequired: true } }),
    posts: relationship({ ref: "Post.author", many: true }),
    courses: relationship({ ref: "Course.users", many: true })
  },
  ui: {
    listView: {
      initialColumns: ["name", "posts"]
    }
  }
});
