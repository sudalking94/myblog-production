export const removeTag = (content) => {
  const regex = /(<([^>]+)>)/gi;
  const removedTagContent = content.replace(regex, "");
  return removedTagContent.toString().substring(0, 100) + " .....";
};
