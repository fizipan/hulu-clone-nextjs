import axios from 'axios';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Results from 'components/Results';
import Head from 'next/head';
import requests from 'utils/requests';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu With React & Next</title>
        <meta name="description" content="Hulu Apllication With React & Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await axios.get(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then((res) => res.data);

  return {
    props: {
      results: request.results,
    },
  };
}
