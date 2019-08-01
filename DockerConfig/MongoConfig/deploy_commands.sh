#!/bin/bash
SCRIPT_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Script path is $SCRIPT_PATH"

USER='nikhil'
PASS='nikhil123'
DB_NAME='NodeDatabase'
TMP_FILE=/tmp/db_commands.txt

# create the database
echo "use $DB_NAME;" >> $TMP_FILE
echo "if (db.system.users.find({user:'$USER'}).count() == 0) {" >> $TMP_FILE
echo "    db.createUser({user: '$USER', pwd: '$PASS', roles: [{role: 'readWrite', db: '$DB_NAME'}]});" >> $TMP_FILE
echo "} else {" >> $TMP_FILE
echo "    db.grantRolesToUser('$USER', [{role: 'readWrite', db: '$DB_NAME'}]);" >> $TMP_FILE
echo "}" >> $TMP_FILE

cat /tmp/db_commands.txt
mongo admin -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD < $TMP_FILE


echo "Database and user created"
rm -f $TMP_FILE