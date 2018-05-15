# GitHub resources

* How to test a pull request before merging it: https://stackoverflow.com/questions/42982266/how-can-i-test-a-pull-request-before-merging-it
  * https://github.com/blog/2186-https-for-github-pages
* Git stash
* Git rebase
* Git stash -show -p
* Git pop
* Git stash pop
* https://git-scm.com/book/en/v1/Git-Tools-Stashing
* Workflow
  * https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b7eb5328-e18d-499b-8f5e-a86d00087cda
  * To find out what branch you are on:
    *  git branch
  * If you are not on the master branch, check out master branch:
    * git checkout master
  * Pull latest changes from master
    * git pull origin master
  * Create and checkout branch
    * git checkout -b <branch_name>
	* When creating a branch name, best practice is to use your name with the feature you are working on (for example, phil-create-index-html).
  * Make your code changes.
  * After making changes, get the list of changes:
    * git status
  * Add and commit changes to your branch:
    * git commit -am "commit message goes here"
  * Push changes to your branch:
    * git push origin <branch_name>
  * Go to the main page of the Github repository and click Compare & pull request for the branch you just pushed. 
  * Click Create pull request.
    * Github will check if the branch can be automatically merged (branch has no conflicts with the base branch).
	* If no conflicts, merge into master/base branch.
  * If you want to create another branch after merging a branch, checkout master:
	* git checkout master
  * Create and checkout new branch:
	* git checkout -b <another_branch_name>
	* When creating a branch name, best practice is to use your name with the feature you are working on (for example, phil-add-body-content).
  * Make code changes. 
    * After making changes, get list of changes:
	  * git status
	* Add and commit changes to your branch:
	  * git commit -am "commit message goes here"
	* If you make more changes to code, now you have changes that are committed to branch and changes that aren't committed to branch.
      * Get list of changes:
	    * git status
		* This command will show you that you have changes in progress.
		* If you try to pull down master (git checkout master), it's going to tell you that you have to commit your changes or stash them before you can switch branches.
		* If you have stuff in progress and don't want to lose it:
		  * git stash
		    * A queue where you can push anything in progress.
			* Stash your current changes, and it will push them onto the stash.
			* This moves you back to your last commit and stashes the changes that were in progress.
		* After stashing, you can now checkout master
		  * git checkout master
		* Pull latest changes from master
		  * Git pull origin master
		* See your branches:
		  * git branch
		* Include changes from master with the feature that you are working on (the stuff in your stash):
			* Checkout feature branch:
			  * git checkout <another_branch_name>
			* Pull in master:
			  * git rebase master
			    * Rebase unwinds all the changes you made in feature branch (but still remembers them) and then merges in master branch. Then, it will replay all your changes after the head of the master branch.
				* Now you have all the changes committed to master and all the changes you have been working on.
			* Get changes from stash.
			  * The last thing you push to stash will be the first thing that comes out of stash.
			  * Shows you what is in the stash:
			    * git stash show -p
				* git stash show
			* "Pop" off of stash
			  * git stash pop
			    * Brings in the change that you were working on.
				* If you do a git status, you will see that it is modified.
				* Pulls changes back into working folder.
				* This clears out that item from the stash.
				* Stash is independent of your branches. You can stash from any branch and pop it back off on any branch.
				* If you want to pop off something, you can do:
				  * git stash pop {index_number} 
			* Add and commit changes:
			  * git commit -am "commit message goes here"
* Pull requests are cheap in GitHub. Create as many as you want. Keep them small and focused on one feature. This will help with resolving merge conflicts when they come up.
* Resources on Workflow
  * GitHub- Standard Forking: https://gist.github.com/Chaser324/ce0505fbed06b947d962 
  * GitHub - Fork a Repo: https://help.github.com/articles/fork-a-repo/ 
  * GitHub - Accepting and Merging Pull Requests: https://gist.github.com/Chaser324/ce0505fbed06b947d962#accepting-and-merging-a-pull-request 
  * GitHub - Checking Out a Pull: Request:https://help.github.com/articles/checking-out-pull-requests-locally/ (edited)
  * GitHub Workflow video: How to Use the Github Workflow