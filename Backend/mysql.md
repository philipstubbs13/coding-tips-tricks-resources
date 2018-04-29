# MySQL Download
* https://dev.mysql.com/downloads/mysql/5.6.html#downloads 

# MySQL commands
<pre>mysql -u root</pre>

# MySQL study quizzes
* Quiz1:https://andreahansen.typeform.com/to/lZW9ZO
* Quiz 2: https://andreahansen.typeform.com/to/iuffQ8
* Quiz3:https://andreahansen.typeform.com/to/zhJuCJ 

# MySQL Resources
* To view the columns in the table you created: https://dev.mysql.com/doc/refman/5.7/en/show-columns.html
* W3 Schools Introduction to SQL: https://www.w3schools.com/sql/sql_intro.asp
* Workbench documentation: https://dev.mysql.com/doc/workbench/en/
* MySQL npm package: https://www.npmjs.com/package/mysql
* Intro to SQL: https://www.khanacademy.org/computing/computer-programming/sql 
* SQL Join: https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins
* https://sqlbolt.com/
* Table Data Export and Import Wizard: https://dev.mysql.com/doc/workbench/en/wb-admin-export-import-table.html
* MySQL Truncate or not truncate: https://stackoverflow.com/questions/10783193/mysql-table-to-truncate-or-not-to-truncate
* SQL Injection: https://www.w3schools.com/sql/sql_injection.asp
	* Escaping in SQL: use ?? rather than ? (single question mark) - for example, "SELECT * FROM ?? WHERE ?? = ?"
	* Wikipedia: https://en.wikipedia.org/wiki/SQL_injection
* https://www.npmjs.com/package/mysql2
* SQL Foreign Key Constraint: https://www.w3schools.com/sql/sql_foreignkey.asp
* SQL Server with Cascade Delte: https://www.techonthenet.com/sql_server/foreign_keys/foreign_delete.php

# MySQL Workbench built-in EER diagram creator
	* https://dev.mysql.com/doc/workbench/en/wb-creating-eer-diagram.html

# Acronyms
* C - CREATE
* R - READ
* U - UPDATE
* D - DELETE

# Best Practices

## SELECT * Usage

Throughout this and future units we commonly use SELECT * in our SQL queries. This is primarily for readability, debugging, and ease of comprehension purposes. However, it is NOT considered best practice to do so in production code.

Specifically, in production code it is typically best practice to only select the columns you need in the result. For example, instead of

<pre>SELECT * FROM characters;</pre>

you would write:

<pre>SELECT id, name, power FROM characters;</pre>

This would select the id, name, and power columns specifically, instead of all columns.

In short, in your homeworks, projects, and production code you should select only the columns you need.

For more information on why SELECT * is generally considered bad practice (and for tips on when it does make sense to use it), see https://stackoverflow.com/a/3639964/1759514.

# User login
* https://medium.com/technoetics/handling-user-login-and-registration-using-nodejs-and-mysql-81b146e37419
* https://github.com/sameeri/Code-Inquirer/wiki/Asking-questions-away-with-Inquirer!
* http://www.expertphp.in/article/user-login-and-registration-using-nodejs-and-mysql-with-example

#Big Data

#Index
* MySQL Add Index: https://dev.mysql.com/doc/refman/5.7/en/create-index.html
* Adding Indices to table (stackoverflow): https://stackoverflow.com/questions/3002605/how-do-i-add-indices-to-mysql-tables
* https://www.essentialsql.com/what-is-a-database-index/
* https://atech.blog/viaduct/mysql-indexes-primer 
* MySQL Range: https://dev.mysql.com/doc/refman/5.7/en/range-optimization.html

# JOINS
* Visualizing SQL Joins: https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins

* SQL JOIN REVIEW (Using top_songsDB from week 12)
* Links:
	* https://www.codeproject.com/Articles/33052/Visual-Representation-of-SQL-Joins
	* https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_orig.jpg
	* https://www.codeproject.com/KB/database/Visual_SQL_Joins/Visual_SQL_JOINS_orig.jpg

* INNER JOIN Example - Artists with a Top 10 Song and a 10 Top Album
<pre>
SELECT songs.song, songs.artist, songs.position, albums.year, albums.album, albums.artist, albums.position
FROM top5000 songs
INNER JOIN top_albums albums ON songs.artist = albums.artist
WHERE songs.position <= 10 AND albums.position <= 10
ORDER BY albums.year
</pre>

* INNER JOIN Example - Artists with a Top 10 Song or a 10 Top Album
<pre>
SELECT songs.song, songs.artist, songs.position, albums.year, albums.album, albums.artist, albums.position
FROM top5000 songs
INNER JOIN top_albums albums ON songs.artist = albums.artist
WHERE songs.position <= 10 OR albums.position <= 10
ORDER BY albums.year
</pre>

* LEFT JOIN Example (Notice null values for the album columns)
<pre>
SELECT songs.song, songs.artist, songs.position, albums.year, albums.album, albums.artist, albums.position
FROM top5000 songs
LEFT JOIN top_albums albums ON songs.artist = albums.artist
where albums.artist is NULL
ORDER BY songs.position
</pre>

* LEFT Excluding JOIN Example - Hank Williams has 3 songs in the table top5000 and no albums in top_albums
<pre>
SELECT songs.song, songs.artist, songs.position, albums.year, albums.album, albums.artist, albums.position
FROM top5000 AS songs
LEFT JOIN top_albums AS albums ON songs.artist = albums.artist
WHERE albums.artist is NULL and songs.artist = "Hank Williams"
ORDER BY albums.position
</pre>

* LEFT Excluding JOIN with GROUP BY and HAVING Example - Artists who have more than 1 song in top5000 and no albums in top_albums
<pre>
SELECT songs.artist, count(*) song_count
FROM top5000 songs
LEFT JOIN top_albums albums ON songs.artist = albums.artist
WHERE albums.artist is NULL
GROUP BY songs.artist HAVING song_count > 1
ORDER BY song_count DESC
</pre> 

* RIGHT Excluding JOIN with GROUP BY and HAVING Example - Artists who have more than 1 album in top albums and no songs in top5000
<pre>
SELECT albums.artist, count(*) album_count
FROM top5000 songs
RIGHT JOIN top_albums albums ON songs.artist = albums.artist
WHERE songs.artist IS NULL
GROUP BY albums.artist HAVING album_count > 1
ORDER BY album_count DESC
</pre>

* Garth Brooks is one of the artists returned in the last query... very suprising that he does not have a song in top5000. We can verify that this is indeed the case:
<pre>SELECT * FROM top5000 WHERE artist = "Garth Brooks"</pre>