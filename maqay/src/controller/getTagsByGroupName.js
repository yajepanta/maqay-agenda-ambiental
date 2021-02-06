const getTagsByGroupName = (groupName) => {
  return fetch("http://maqay.org/wp-json/tag-groups/v1/groups/")
    .then((resp) => resp.json())
    .then((groups) => {
      return groups.find((group) => group.label === groupName);
    })
    .then((group) => {
      return group.terms;
    });
};

export default getTagsByGroupName;
