const getTagName = (tagNumber) => {
  return fetch(`https://maqay.org/wp-json/tag-groups/v1/terms/${tagNumber}`)
    .then((res) => res.json())
    .then((res) => {
      return res.name;
    });
};

export default getTagName;
