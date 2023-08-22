// function to get reader data - pass in the token in the headers and get the list as an output
export async function getData() {
  const headers = new Headers({
    Authorization: `Token ${process.env.READER_TOKEN}`,
  });

  const options = {
    method: "GET",
    headers: headers,
  };

  const res = await fetch("https://readwise.io/api/v3/list/", options);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  console.log(res);
  return res.json();
}
