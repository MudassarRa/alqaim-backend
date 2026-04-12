FROM node:20-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Ye wahi build command hai jo aapne abhi laptop par chalayi
RUN npm run build
EXPOSE 9000
CMD ["sh", "-c", "npx medusa db:migrate && npx medusa start"]