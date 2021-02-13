#create build folder 
npm run build

# move to build folder
cd build

#clone index.html into 200.html
cp index.html 200.html

#start deploying  via Surge
#the command means deploy current folder to domain
surge . vinhnguyen-photo-app.surge.sh