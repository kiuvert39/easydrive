FROM node:23-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

RUN if [ ! -d "dist" ]; then echo "Dist folder not found!"; exit 1; fi

FROM nginx:alpine AS serve

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf  

EXPOSE 80

ENV HEALTHCHECK_URL=http://localhost
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f $HEALTHCHECK_URL || exit 1


CMD ["nginx", "-g", "daemon off;"]
