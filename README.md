# Follow the following steps to run this project

## Step 1

Pull the project from Github

## Step 2

Make sure to have all the dependencies like NPM and Node installed on your machine

## Step 3

Make port 4567 available as this project uses a static port instead of a .env file

## Step 4

Run npm install on the terminal inside the project folder

## Step 5

Make sure to create a database on mysql on your machine called user_records

## Step 6

Make sure to create a table on the database user_records with the following query
"create table user_form (
firstName varchar(255) not null,
lastName varchar(255) not null,
phoneNumber varchar(255) not null,
emailAddress varchar(255) not null,
password text not null
);"

On a normal scenario, we would have migration scripts set up to handle things like this

# Step 6

Run 'npm run dev' on the terminal inside the project folder
