const URLroot = "https://maqay.org/wp-json/";
const method = {
  method: "GET",
  mode: "cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};
export const getAllPosts = () => {
  return fetch(`${URLroot}wp/v2/posts`, method).then((res) => res.json());
};

export const getAllTagsNameAndNumber = () => {
  return fetch(`${URLroot}tag-groups/v1/terms/`, method)
    .then((res) => res.json())
    .then((tagGroups) => {
      return tagGroups.map((object) => {
        return { id: object.id, name: object.name };
      });
    });
};

export const getTagName = (tagNumber) => {
  return fetch(`${URLroot}tag-groups/v1/terms/${tagNumber}`, method)
    .then((res) => res.json())
    .then((res) => {
      return res.name;
    });
};

export const getTagsByGroupName = (groupName) => {
  return fetch(`${URLroot}tag-groups/v1/groups/`, method)
    .then((resp) => resp.json())
    .then((groups) => {
      return groups.find((group) => group.label === groupName);
    })
    .then((group) => {
      return group.terms;
    });
};
