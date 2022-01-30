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

The next step is to improve performance to handle tens of thousands of requests per second. Here I decided to use Static rendering, and include data as JSON files into the HTML artifacts, which will give us possibilities to use CDN servers and handle heavy traffic. For the solution, I used Next.js and build-in server-side rendering based on getStaticProps and getStaticPaths. 

On top, I've added a couple of tests and decided that I already spent enough time on this assignment.

But there is still a problem, building 50K static pages during a build would take an enormous amount of time, the solution here can be look into building only unexisting pages or use Server-side rendering together with Redis cache or/and implement a cache layer or server-side. 

![Diagram](/assets/diagram.drawio.png)

There also might be a problem with a first hit, with such huge traffic it might end up with a big queue of concurrent requests receiving the same data, which might overload servers, a solution might be to lock other users while processing the first response, or pre warn database cache before the first start, here we can use a queue with workers to pre-warm it in a reasonable time.



