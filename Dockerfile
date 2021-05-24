FROM node:13.12.0-alpine

# set working directory
WORKDIR /athlete_stats

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# RUN apk add curl
# RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
# RUN apk update && apk add nodejs
RUN apk add world[nodejs]
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]
# FROM node:10-alpine as build-step

# RUN mkdir /athletes_app

# WORKDIR /athletes_app

# COPY package.json /athletes_app

# RUN npm install

# COPY . /athletes_app

# RUN npm run build
# # Stage 2
# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/build /usr/share/nginx/html

