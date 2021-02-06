const getAllTagsNameAndNumber = () => {
  return fetch(`https://maqay.org/wp-json/tag-groups/v1/terms/`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((tagGroups) => {
      return tagGroups.map((object) => {
        return { id: object.id, name: object.name };
      });
    });
};

export default getAllTagsNameAndNumber;

/*  */
