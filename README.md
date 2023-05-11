# Kernal Coding Challenge

## Plan of Action

1. Inspect the data from the API and figure out if need to do multiple requests or just one
1. Get the data from the API and store in state
1. Using data, produce a list of cards that contain each episode's information: image, title, air date, list of characters associated with that episode
1. once the list has been done, need to add pagination to show 10 episodes per page
1. add state for tracking of this pagination state
1. make it look like the design/wireframe

## Notes

- looks like the API for /episodes returns a max of 23 episodes and that you cannot add pagination to the API request so I will go ahead and grab all of this data first.
- each episode has an array of characters and each has a url for grabbing that character's data. So instead of doing many requests on a component level to find the character information I am going to first get the episodes data, then create an array of unique character urls and for each of these character urls fetch the data and store that at a page level.
- using next to grab all the data first in async way and pass to the EpisodesList as props
- use Material UI to provide some components e.g. Typography, Button, Avatar, Skeleton.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
