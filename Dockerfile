# Stage 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Install deps (cached layer)
COPY package.json package-lock.json ./
RUN npm ci

# Copy ONLY what's needed for build
COPY public ./public
COPY app ./app
COPY components ./components
COPY next.config.mjs ./

# Build (creates .next folder)
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app

# Copy ONLY production essentials
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Non-root user
RUN adduser -D nextjs
USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]