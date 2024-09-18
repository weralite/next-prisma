import { PrismaClient } from '@prisma/client';

// Funktion för att skapa en slug från en titel
const createSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');

// PrismaClient singleton funktion
const prismaClientSingleton = () => {
  // Skapa en Prisma Client med extension
  return new PrismaClient().$extends({
    query: {
      post: {
        async create({ args, query }) {
          // Automatisk slug-skapning vid post-creation
          if (args.data.title) {
            args.data.slug = createSlug(args.data.title);
          }
          return query(args);
        },
        async update({ args, query }) {
          // Automatisk slug-skapning vid post-update
          if (args.data.title) {
            args.data.slug = createSlug(args.data.title);
          }
          return query(args);
        },
      },
    },
  });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

export default prisma;
