
/*HOMEWORK */

/*Find out how many tasks are in the task table */
SELECT COUNT(*) AS total_tasks FROM task;

/*Find out how many tasks in the task table do not have a valid due date */
SELECT COUNT(*) AS no_due_tasks FROM task WHERE due_date IS NULL;

/*Find all the tasks that are marked as done */
SELECT t.title, s.name AS status_name FROM task t JOIN status s ON t.status_id = s.id WHERE s.name = 'Done';

/*Find all the tasks that are not marked as done */
SELECT t.title, s.name AS status_name FROM task t JOIN status s ON t.status_id = s.id WHERE s.name <> 'Done';

/*Get all the tasks, sorted with the most recently created first */
SELECT * FROM task ORDER BY created DESC;

/*Get the single most recently created task */
SELECT * FROM task ORDER BY created DESC LIMIT 1;

/*Get the title and due date of all tasks where the title or description contains database */
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

/*Get the title and status (as text) of all tasks */
SELECT t.title, s.name AS status FROM task t JOIN status s ON t.status_id = s.id;

/*Get the name of each status, along with a count of how many tasks have that status */ 
SELECT s.name, COUNT(t.id) AS task_count FROM status s LEFT JOIN task t ON t.status_id = s.id GROUP BY s.name;

/*Get the names of all statuses, sorted by the status with most tasks first */
SELECT s.name, COUNT(t.id) AS task_count FROM status s LEFT JOIN task t ON t.status_id = s.id GROUP BY  s.name ORDER BY task_count DESC;