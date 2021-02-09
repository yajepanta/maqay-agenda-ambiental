const keySheetsBest = process.env.REACT_APP_SHEETS_BEST_API_KEY;

export const writeLike = (isLike, idPost, titlePost) => {
  const number = isLike ? 1 : -1;

  const data = {
    "Post ID": idPost,
    "Título de post": titlePost,
    Like: number,
    "Created at": new Date(),
  };
  return fetch(`${keySheetsBest}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((data) => {
      // The response comes here
      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
};

/* export const writeLikeGoogle = (like, idPost, titlePost) => {
  return fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/A2:B2:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        range: "A2:B2",
        majorDimension: "ROWS",
        values: [[idPost, titlePost]],
      }),
    }
  );
}; */
