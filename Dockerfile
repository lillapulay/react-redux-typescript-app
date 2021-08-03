FROM node:latest

WORKDIR /app 

COPY package*.json . 

RUN npm install 

COPY . . 

EXPOSE 3000

CMD [ "npm" , "start" ]

# To build the image:
# docker builder build -t country-image:v1 .

# To check the image: 
# docker image ls

# Running the container and mapping it to port 9000
# docker container run -it --rm -p 9000:3000 -v $(pwd):/app country-image:v1
# If you're running Git Bash under Windows, you need to prefix the above command with MSYS_NO_PATHCONV=1 like so:
# MSYS_NO_PATHCONV=1 docker container run -it --rm -p 9000:3000 -v $(pwd):/app country-image:v1

# The app now runs on http://localhost:9000/

# Due to the --rm flag the container will be removed upon stopping