import { Lists } from ".keystone/types";
import { User } from "./schemas/User";
import { Post } from "./schemas/Post";
import { Course } from "./schemas/Course";
import { Chapter } from "./schemas/Chapter";
import { Lesson } from "./schemas/Lesson";
import { Tag } from "./schemas/Tag";
export const lists: Lists = {
  User,
  Post,
  Course,
  Chapter,
  Lesson,
  Tag
};
