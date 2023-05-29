export default async function Forums() {
  const forumsRes = await fetch(`${process.env.APP_URL}/api/forums`);
  const forums = await forumsRes.json();

  return (
    <main>
      <h1>Forums</h1>
      <ul>
        {forums.map((r: any) => (
          <li key={r.id}>
            {r.name}
          </li>
        ))}
      </ul>
    </main>
  )
}
