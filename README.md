# tbh-tech-test

## SETUP

I'll send over the env variables in another manner somehow. I would normally have them in a password manager for each user to go and grab.

You will need to setup an `.env.local` file in the root of the repo and have these 2 keys

```
NEXT_PUBLIC_SUPABASE_URL='url'
NEXT_PUBLIC_SUPABASE_ANON_KEY="key'
```

Then run the following

```
npm install
npm run dev
```

## Approach

Step one was to establish the design that the task was after. From there I built out the basic things that the app would need, e.g. global variables and layout, stripping out unnecessary code, etc. I kept the basic fonts and things from the initial setup. After this I set up the backend in Supabase. I set up the `createClient` in one file to export. I did this so that it doesn't initialise a bunch. After this it was just a matter of building out the components and responsiveness on them.

I did consider using a UI library for the `<select>` but deemed it to be absolute overkill for the task. Another thing, I kept the filtering client-side due to the small size of the dataset. I deemed it unnecessary to be done on the backend. If this was an application that was to be scaled, then yes, it would be backend filtering instead.

## AI Usage

With regards to this, I used ChatGPT to generate the string helper, the global variables (I reused them from a previous project), and I used it to generate the `onChange` filter option just to speed things up a tad.
