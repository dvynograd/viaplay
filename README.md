## How to run

To start the development server:
yarn dev 
open http://localhost:3000/


## How to build

yarn build 
see genereate files .next/server/pages

## Tests
yarn jest


## Solution

First, solve the solution in the simplest way. 
Create an API GET endpoint http://localhost:3000/api/trailers?resource_url=https://content.viaplay.se/pc-se/film/arrival-2016 
which first loading movie info from content.viaplay.se and find IMDB ID inside.
Then let's use an id and get youtube keys from themoviedb, contract URLs and return them back.

The next step is to improve performace to handle tens of thousands of requests per second. Here I decided to use Static rendering, and include data as json files into the HTML artifactes, which will give us possobilities to use CDN servers and handle haivy traffic. For solution I usued Next.js and build-in server side rendering based on getStaticProps and getStaticPaths. 

On top I've added couple of tests, and decided that I already spent enough time for this assignment.

But there still a problem, building 50K static pages during a build would take enourmous amount of time, 
I think that It would be better use Server side rendering together with Redis cache or/and implement a cache layer or server side. 

I meant I can keep processed trailers urls into mongoDb or Redis, with the following algoritm 
