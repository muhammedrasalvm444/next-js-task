export async function getServerSideProps(context) {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Other props for the page
  };
}
