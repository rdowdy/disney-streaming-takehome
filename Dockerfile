# The Heroku CLI doesn't play nice with Apple Silicon chips so I had to specify an architecture here
# Unfortunately, this breaks the Docker build on Mac machines, so
# TODO: Change this line to be cross-platform compatible
FROM --platform=linux/amd64 node:14.17.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT=8080
EXPOSE $PORT

CMD ["npm", "start"]