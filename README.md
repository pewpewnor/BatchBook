# BatchBook

BatchBook is a collaboration-app prototype organized around shared workspaces. A workspace can contain sections and channels, with board channels modeled as columns (called pillars) containing cards and labels. The data model also includes thread channels and workspace membership.

## Stack

Next.js 13 with React and TypeScript, Tailwind CSS, Prisma, and PostgreSQL. The Prisma schema includes account and session models compatible with NextAuth.

## Run locally

You need Node.js and a PostgreSQL database. From the repository root:

~~~sh
npm install
~~~

Create a local `.env` file with a PostgreSQL connection string:

~~~dotenv
DATABASE_URL="postgresql://USER@localhost:5432/batchbook?schema=public"
~~~

Generate the Prisma client, sync the schema to the development database, and start Next.js:

~~~sh
npx prisma generate
npx prisma db push
npm run dev
~~~

Open http://localhost:3000. Keep the database URL private and use a disposable development database while the schema is changing.

## Project status

This repository is a work in progress. Some screens and flows are still placeholders or development views, so treat the current UI as a prototype rather than a finished collaboration service.
