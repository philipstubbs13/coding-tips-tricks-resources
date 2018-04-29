## GitHub Workflow Guide

* To find out what branch you are on:
<pre>git branch</pre>
* If you are not on the master branch, check out master branch:
<pre>git checkout master</pre>
* Pull latest changes from master
<pre>git pull origin master</pre>
* Create and checkout branch
    * When creating a branch name, best practice is to use your name with the feature you are working on (for example, phil-create-index-html).
    <pre>git checkout -b branch_name</pre>
* Make your code changes.
* After making changes, get the list of changes:
<pre>git status</pre>
* Add and commit changes to your branch:
<pre>git commit -am "commit message goes here"</pre>
* Push changes to your branch:
<pre>git push origin branch_name</pre>
* Go to the main page of the Github repository and click <b>Compare & pull request</b> for the branch you just pushed.
* Click <b>Create pull request</b>.
    * Github will check if the branch can be automatically merged (branch has no conflicts with the base branch).
    * If no conflicts, merge into master/base branch.
* If you want to create another branch after merging a branch, checkout master:
<pre>git checkout master</pre>
* Create and checkout new branch.
    * When creating a branch name, best practice is to use your name with the feature you are working on (for example, phil-add-body-content).
    <pre>git checkout -b another_branch_name</pre>
* Make code changes.
* After making changes, get list of changes:
<pre>git status</pre>
* Add and commit changes to your branch:
<pre>git commit -am "commit message goes here"</pre>
* If you make more changes to code, now you have changes that are committed to branch and changes that aren't committed to branch.
* Get list of changes.
    * This command will show you that you have changes in progress.
    * If you try to pull down master (git checkout master), it's going to tell you that you have to commit your changes or stash them before you can switch branches.
    <pre>git status</pre>
* If you have stuff in progress and don't want to lose it.
    * A queue where you can push anything in progress.
    * Stash your current changes, and it will push them onto the stash.
    * This moves you back to your last commit and stashes the changes that were in progress.
    <pre>git stash</pre>
* After stashing, you can now checkout master
<pre>git checkout master</pre>
* Pull latest changes from master
<pre>Git pull origin master</pre>
* See your branches:
<pre>git branch</pre>
* Include changes from master with the feature that you are working on (the stuff in your stash):
    * Checkout feature branch:
    <pre>git checkout another_branch_name</pre>
    * Pull in master.
        * Rebase unwinds all the changes you made in feature branch (but still remembers them) and then merges in master branch. Then, it will replay all your changes after the head of the master branch.
        * Now you have all the changes committed to master and all the changes you have been working on.
        <pre>git rebase master</pre>
    * Get changes from stash.
        * The last thing you push to stash will be the first thing that comes out of stash.
        * Shows you what is in the stash:
        <pre>git stash show -p</pre>
        <pre>git stash show</pre>
        * "Pop" off of stash
            * Brings in the change that you were working on.
            * If you do a git status, you will see that it is modified.
            * Pulls changes back into working folder.
            * This clears out that item from the stash.
            * Stash is independent of your branches. You can stash from any branch and pop it back off on any branch.
            <pre>git stash pop</pre>
            * If you want to pop off something, you can do:
            <pre>git stash pop {index_number}</pre>
    * Add and commit changes:
    <pre>git commit -am "commit message goes here"</pre>
 * Create as many pull requests as you want. Keep them small and focused on one feature. This will help with resolving merge conflicts when they come up.
