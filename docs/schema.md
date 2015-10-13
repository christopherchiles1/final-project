# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | text      | not null
index       | integer   | not null

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects), indexed
title       | integer   | not null
description | string    | not null
index       | integer   | not null
deadline    | date      |
elapsed_time| integer   | not null
type        | string    | not null

## todos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
task_id     | integer   | not null, foreign key (references tasks), indexed
body        | string    | not null
completed   | boolean   | not null, default: false
index       | integer   | not null

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
