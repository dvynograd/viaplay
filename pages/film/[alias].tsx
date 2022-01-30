import { GetStaticPaths, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { movies, moviesMap } from '../index'

interface FilmPageProps {
  trailers: string[]
}

interface FilmPageParams { 
  params: {
    alias: string 
  }
};

const FilmPage: NextPage<FilmPageProps> = ({trailers}): JSX.Element => {
  const router = useRouter()
  const { alias } = router.query as { alias: string }

  return <>
    {moviesMap.get(alias)?.name}: 
    {trailers.map((trailer, index) => (
      <div key={index}>
        <Link href={trailer}>
          <a>{trailer}</a>
        </Link>
      </div>
    ))}
  </>
}


export const getStaticPaths: GetStaticPaths<{ alias: string}> = async () => {
  const paths = movies.map((movie) => ({ params: { alias: movie.slug }}));
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { alias } }: FilmPageParams) => {
 
  const result = await fetch(`http://localhost:3000/api/trailers?resource_url=${moviesMap.get(alias)?.resource_url}`)

  return {
    props: {
      trailers: await result.json(),
    }
  };
};
export default FilmPage
