const groupByPost = () => {
  let comments = [
    {
      postId: 1,
      text: "Great Post",
    },
    {
      postId: 2,
      text: "Thanks",
    },
    {
      postId: 1,
      text: "Very Helpful",
    },
  ];

  let groupedComments = {};

  comments.forEach((item) => {
    const postId = item.postId;

    // If this postId doesn't exist in our grouped object yet, create an array for it
    if (!groupedComments[postId]) {
      groupedComments[postId] = [];
    }

    // Add the comment to the appropriate postId array
    groupedComments[postId].push(item.text);
  });
  console.log(groupedComments);
  // console.log(groupedComments);
  return groupedComments;
};

window.addEventListener("DOMContentLoaded", () => {
  let result = groupByPost();
  console.log(result); // This will now show the grouped comments
});
