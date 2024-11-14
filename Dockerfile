# Stage 1: Build the application
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json из src в корневую директорию контейнера
COPY ./package.json ./package-lock.json ./

RUN ls -la /app
# Устанавливаем зависимости
RUN npm install

# Копируем весь код из директории src в контейнер
COPY src ./
COPY public ./public

# Сборка приложения
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV NEXT_PUBLIC_BASE_URL="http://backend:8080"


# Копируем необходимые файлы из builder stage
COPY --from=builder /app/ ./


EXPOSE 3000

# Запуск приложения через встроенный сервер Next.js
CMD ["npm", "run", "start"]
