set -x

echo '------ Running Test Cases on Docker Machine ----- '
docker container ls

echo '------ Make Docker instance Up and Run in deattach mode -----'
docker-compose up -d

echo '------- Run Test Cases -------- '
npm i

npm run test

echo '------ Taking docker instance down -----'
docker-compose down