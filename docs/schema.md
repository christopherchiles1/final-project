# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
title       | integer   | not null
type        | string    | not null
status      | string    | not null
time        | integer   | not null
description | string    | not null

## todos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
task_id     | integer   | not null, foreign key (references tasks), indexed
order       | integer   | not null
completed   | boolean   | not null, default: false
body        | string    | not null

## notifications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
type        | string    | not null
viewed      | boolean   | not null, default: false
notifiable_id   | integer   | not null, foreign key, indexed
notifiable_type | string    | not null, foreign key, indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
task_id     | integer   | not null, foreign key (references tasks), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
