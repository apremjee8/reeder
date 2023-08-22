// [x] have a script that gets data from readwise - data should be a list of all my reader articles
// paste in a table with title and tag and link

import { getData } from "./scripts/getData";

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
