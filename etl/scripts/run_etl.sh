#!/bin/bash
if [ $(id -u) -ne 0 ]
	then echo "The script must be executed with sudo rights"
	exit 1
fi

LOCKFILE=/tmp/etl.lock
TOKEN=$(cat tokens/bot_user_oauth_token)
SERVERNAME=$(uname -n)

if ! mkdir $LOCKFILE 2>/dev/null; then
	curl -X POST https://slack.com/api/chat.postMessage -H "Authorization: Bearer ${TOKEN}" -H 'Content-type: application/json' --data '{"channel":"CSY0DLRDG","text":"Error! Could not acquire lock file for the ETL-process on server '${SERVERNAME}'! It seems there is already a process running","as_user":"true"}'
    exit 1
fi

mkdir -p logs
script -q -c "./scripts/etl.sh" /dev/null | tee ./logs/etl.log
