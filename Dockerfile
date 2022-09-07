# The Heroku CLI doesn't play nice with Apple Silicon chips so I had to specify an architecture here
FROM --platform=linux/amd64 node:16.17.0-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV PORT=8080
EXPOSE $PORT

CMD ["yarn", "run", "start:prod"]