import { getStories } from "../lib/stories";
import StoriesClient from "./StoriesClient";

export default async function StoriesPage() {
  const stories = getStories();
  return <StoriesClient stories={stories} />;
}
