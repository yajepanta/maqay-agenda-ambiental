const URLroot = "https://maqay.org/wp-json/";

export const getAllPosts = () => {
  return fetch(`${URLroot}wp/v2/posts`).then((res) => res.json());
};

export const getAllTagsNameAndNumber = () => {
  return fetch(`${URLroot}tag-groups/v1/terms/`, {
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

export const getTagName = (tagNumber) => {
  return fetch(`${URLroot}tag-groups/v1/terms/${tagNumber}`)
    .then((res) => res.json())
    .then((res) => {
      return res.name;
    });
};

export const getTagsByGroupName = (groupName) => {
  return fetch(`${URLroot}tag-groups/v1/groups/`)
    .then((resp) => resp.json())
    .then((groups) => {
      return groups.find((group) => group.label === groupName);
    })
    .then((group) => {
      return group.terms;
    });
};
