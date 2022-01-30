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

Firstly, I solved it straightforward way. 

Created an API GET endpoint http://localhost:3000/api/trailers?resource_url=https://content.viaplay.se/pc-se/film/arrival-2016 
which load json from content.viaplay.se and parsa and find IMDB ID inside.
After I used an id and get youtube keys from themoviedb, construct URLs and return them back.

The next step was to improve performance since we have a requirement to handle 10K of requests per second. 

One of the solutions which are the easiest one is to use Frontend Static Render. During the build script will generate all movies pages and attach trailers as part of the Static HTML page, deploying the final HTML to the CDN server. To do so I used Next.js https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props.  

But there is still a problem, building 50K static pages during a build would take an enormous amount of time, the solution here can be look into building only unexisting pages https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration


or use Server-side rendering together with Redis cache or/and implement a cache layer or server-side. 

![Diagram](/assets/diagram.drawio.png)

However, this solution also has a drawback. There is potential can be a problem with a cold cache. Huge traffic means tons of concurrent users requesting the same data simultaneously, without cache a server will start executing the script for every request, which in turn might overload and crash the server. The solution there either lock other users requesting the same data while processing the response or pre-warn database cache before the first start.


