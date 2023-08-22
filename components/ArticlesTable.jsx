import { getData } from "@/app/scripts/getData";

export default async function ArticlesTable() {
  // call getData to get reader data - gives an object
  const data = await getData();

  // pull the results array from the response object
  return <pre>{JSON.stringify(data.results, null, 2)}</pre>;
}
