const URLroot = "https://maqay.org/wp-json/";
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
};

const getOptions = {
  method: "GET",
  mode: "cors",
  headers,
};

export const getAllPosts = () => {
  return fetch(`${URLroot}wp/v2/posts`, getOptions).then((res) => res.json());
};

export const getAllTagsNameAndNumber = () => {
  return fetch(`${URLroot}tag-groups/v1/terms/`, getOptions)
    .then((res) => res.json())
    .then((tagGroups) => {
      return tagGroups.map((object) => {
        return { id: object.id, name: object.name };
      });
    });
};

export const getTagName = (tagNumber) => {
  return fetch(`${URLroot}tag-groups/v1/terms/${tagNumber}`, getOptions)
    .then((res) => res.json())
    .then((res) => {
      return res.name;
    });
};

export const getTagsByGroupName = (groupName) => {
  return fetch(`${URLroot}tag-groups/v1/groups/`, getOptions)
    .then((resp) => resp.json())
    .then((groups) => {
      return groups.find((group) => group.label === groupName);
    })
    .then((group) => {
      return group.terms;
    });
};
