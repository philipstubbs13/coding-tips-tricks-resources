## Git help

* Choose a representative to create a Git Repo

* Add collaborators for your team.

* All team members clone the repo.

* Work together to determine starting file structure (it can change, but give yourself a framework to get started)

* When you start coding
	* <pre>git checkout -b branch_name --track origin/master</pre>

* When you are ready to commit your changes:
	* <pre>git add .</pre>
	* <pre>git commit -m "Your message about your changes here."</pre>
	* <pre>git push origin branch_name:pr_name</pre>
	* Go to github.com > branches > Create Pull Request
	* Merge pull request.
* Keep working
	* <pre>git remote update</pre>
		* This pulls down the PR that was just merged, that happened on Github, not on your laptop.
	* <pre>git pull origin master</pre>