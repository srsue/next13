async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/bradtraversy/repos',
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div>
      {repos[0].name}
    </div>
  )
}

export default ReposPage;