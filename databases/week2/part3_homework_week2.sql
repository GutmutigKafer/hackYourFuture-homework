SELECT * FROM task;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT t.title AS task_title, u.name AS user_name, u.email AS user_email
FROM user u JOIN task t ON u.id = t.user_id 
WHERE u.email LIKE '%spotify.com%';

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT t.title AS task_title, u.name AS user_name, s.name AS status_name
FROM task t JOIN user u ON t.user_id = u.id JOIN status s ON t.status_id = s.id
WHERE u.name = 'Donald Duck' AND s.name = 'Not started';

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT t.title AS task_title, t.created AS created_date, u.name AS user_name
FROM task t JOIN user u ON t.user_id = u.id
WHERE u.name = 'Maryrose Meadows' AND MONTH(t.created) = 9;

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT MONTHNAME(t.created) AS month_name, COUNT(*) AS task_amount
FROM task t GROUP BY MONTH(t.created), MONTHNAME(t.created)
ORDER BY MONTH(t.created);