FROM node:12-alpine

ARG SOURCE_COMMIT
ENV SOURCE_COMMIT $SOURCE_COMMIT
RUN echo "SOURCE_COMMIT = $SOURCE_COMMIT"

# Create application directory
WORKDIR './app'

# Bundle app
COPY . .

# Install depedencies
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]