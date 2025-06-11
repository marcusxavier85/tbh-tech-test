# tbh-tech-test

## SETUP

```
npm install
npm run dev
```

## Approach

Step one was establish the design that the task was after. From there I built out the basic things that the app would need, e.g global variables and layout, stripping out unecessary code etc. I kept the basic fonts and things from the initial setup. After this I setup up the backend in supabase. I setup the `createClient` in one file to export. I did this so that it doesn't initialise a bunch. After this it was just a matter of building out the components and responsiveness on them.

I did consider using a UI library for the `<select>` but deemed it to be absolute over kill for the task. Another thing, I kept the filtering client side due to the small size of the dataset. I deemed it unecessary to be done on the backend. If this was an application that was to be scaled then yes to would be backend filtering instead.

## AI Usage

With regards to this I used ChatGPT to generate me the string helper, the global variable (I ripped them from a previous project) and I used it to generate the onChange filter option just to speed things up a tad.
