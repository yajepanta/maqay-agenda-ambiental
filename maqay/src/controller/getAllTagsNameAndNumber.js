const getAllTagsNameAndNumber = () => {
  return fetch(`http://maqay.org/wp-json/tag-groups/v1/terms/`)
    .then((res) => res.json())
    .then((tagGroups) =>
      {return tagGroups.map((object) => {
        return { id: object.id, name: object.name };
      })}
    );
};

export default getAllTagsNameAndNumber;

/*  */