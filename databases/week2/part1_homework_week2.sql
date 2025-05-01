/*PART 1 HOMEWORK (MADE IN CLASS) */ 

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES ('Learn SQL', 'Complete the homework', NOW(), NOW(), '2025-09-20', 2, 3);

SELECT * FROM task;

/*v1*/ 
UPDATE task SET title = 'Finish Homework on SQL' WHERE id = 37;
/*v2*/ 
UPDATE task t1 SET t1.title = 'Finish Homework on SQL' WHERE t1.id = (SELECT t2.id FROM (SELECT * FROM task) t2 ORDER BY t2.id DESC LIMIT 1);
/*v3*/ 
UPDATE task t1
JOIN (SELECT id FROM task ORDER BY id DESC LIMIT 1) t2 ON t1.id = t2.id SET t1.title = 'Finish  SQL';

UPDATE task SET due_date = '2025-10-20' WHERE id = 37;

/*v1*/ 
UPDATE task SET status_id = 2 WHERE id = 37;
/*v2*/ 
UPDATE task SET status_id = (SELECT id FROM status WHERE name = 'Done') WHERE id = 37;

DELETE FROM task WHERE id = 37;