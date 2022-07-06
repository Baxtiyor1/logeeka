echo "Switching to branch master"
git checkout master
logeekascience
echo "Building app..."
npm run build

echo "Deploying files to serevr..."
scp -r build/* root@65.108.217.216:/var/www/logeekascience/ 

echo "Done!"