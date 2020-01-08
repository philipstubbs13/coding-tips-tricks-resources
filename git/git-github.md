# Git

* <http://marklodato.github.io/visual-git-guide/index-en.html>
* Excellent overview of git: <http://www.tricksofthetrades.net/2015/08/18/notes-git-version-control/>
* Diffing between working tree and other commits: <http://365git.tumblr.com/post/3464927214/getting-a-diff-between-the-working-tree-and-other>
* Gitflow: <http://nvie.com/posts/a-successful-git-branching-model/>
* Github Desktop: <https://desktop.github.com/>
* <http://ohshitgit.com/>
* Git stash: <https://medium.freecodecamp.org/useful-tricks-you-might-not-know-about-git-stash-e8a9490f0a1a>

## GitHub Pages

* <https://pages.github.com/>

## Other links

* Git Credential Manager: <https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/tag/v1.14.0>
	* <https://githubengineering.com/crypto-removal-notice/>
* Installing GitBash: <https://openhatch.org/missions/windows-setup/install-git-bash>
* GitHub
  * GitHub getting started guide: <https://guides.github.com/activities/hello-world/>
  * GitHub flow guide: https://guides.github.com/introduction/flow/
  * GitHub Explore: https://github.com/explore
  * GitHub guides: https://guides.github.com/
  * GitHub Youtube: https://www.youtube.com/githubguides
  * GitHub On-Demand Training: https://services.github.com/on-demand/
  * Generating a new ssh key: <https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/>
  * Github Pull Request, Branching, Merging and Team Workflow: <https://www.youtube.com/watch?v=oFYyTZwMyAg>
  * Try Git: https://try.github.io/levels/1/challenges/1
* Glitch
* https://stackoverflow.com/questions/28364023/gits-error-on-push-empty-reply-from-server
* <https://www.robinwieruch.de/git-essential-commands/>
* <http://gitready.com/>

## Steps to upload to GitHub
* git clone https://github.com/philipstubbs13/quickdemoapp.git
* git status
* git add -A
	* A means All
* git commit -m  "Added new files"
	* m means message
* git push origin master
* Fork - I want my own copy of your own project.
* git log

* Free Course: https://www.codeschool.com/courses/try-git
* http://umn.bootcampcontent.com/University-of-Minnesota-Boot-Camp/11-06-2017-St-Paul-Class-Repository-FSF/tree/master/02-lesson-plans/part-time/01-Week/02-Day/Supplemental/GitHub-Help


* For Windows users - if you are copying and pasting the file path into git bash - instead of changing the back slashes to forward slashes, you can simply put the file path inside single quotes

1. If you git stash and still encounter issues, you have a few options:

  run

  ```bash
  git checkout -- file1.ipynb file2.ipynb file3.py ...
  ```

  (change it to be the filenames git flagged & no ...). This will remove local changes, so only do this if you’re okay removing your changes to files

2. Similarly, you can do a git reset --hard HEAD. Like (1), this will remove your changes.

3. Clone the repo to a new folder. You’ll now have multiple copies... but at least you can keep both your files and the latest from the repo.
A Stack Overflow answer here that might help is <https://stackoverflow.com/questions/3207029/git-unmerged-path-issue/11095107>