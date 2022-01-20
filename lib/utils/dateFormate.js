let options = { year: "numeric", month: "long", day: "numeric" };
const currentDate = new Date();
export const dateFormate = (date) => {
  const dateFormate =
    currentDate.getFullYear() > new Date(date).getFullYear() ? (
      new Date(date).toLocaleDateString("en-US", options)
    ) : currentDate.getMonth() > new Date(date).getMonth() ? (
      new Date(date).toLocaleDateString("en-US", options)
    ) : currentDate.getDate() == new Date(date).getDate() ? (
      <span>Today</span>
    ) : currentDate.getDate() - new Date(date).getDate() <= 3 ? (
      <span>{currentDate.getDate() - new Date(date).getDate()} day ago </span>
    ) : (
      new Date(date).toLocaleDateString("en-US", options)
    );
  return dateFormate;
};

export const sortByDate = (array) => {
  const post = array.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
  return post;
};
