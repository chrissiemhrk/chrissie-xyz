---
title: How to use interactive rebase in git
excerpt: 'A short guide on how to use interactive rebase in git.'
date: 'June 26, 2021'
cover: '/images/posts/git.png'
cover_alt: 'Git logo'
tags: ['git']
---

I started my first professional job as a front-end developer a few months ago. It was both scary and thrilling. During that time, I learnt a lot of things and encountered a lot of problems, but one thing that really threw me off was git rebase.

It was my first time using git rebase in any capacity, so I had a lot of trouble getting it to work. I remember spending a whole day learning about git rebase so that I wouldn't have to ask my coworkers for help every time I needed to rebase.

I'll be sharing all I've learnt so far about git rebase with you.

## What is git rebase?

Rebasing is the process of moving or combining a sequence of commits to a new base commit. While it is similar to merge the difference between these two commands is that while rebasing combines all modifications made in a branch into one patch while merging takes the changes from a source branch and integrates them with a target branch.

## When do you use git rebase?

Below are a several use cases where git rebase might be used. I will go through them in detail in a short while.

- Edit commit messages
- Remove commits
- Combine commits together

### Edit commit messages

Let’s say you made a typo in your latest commit messages, the best way to fix that is to use git commit --amend. Git commit --amend is a git command that allows us to modify the most recent commit and we do it like

```git
git commit --amend -m “new commit message”
```

But what if you want to change multiple commit messages or your fourth commit message?

That’s when git rebase comes into play. Rebasing intervactively allows us to alter individual commits and to do so you type the following command in your terminal `git rebase -i HEAD~5`.

_the -i option is what indicates that we are rebasing interactively_

_HEAD~5 indicates the number of commits you want to work with. In this case, it means that I'll be working with the last five commits I made_

![List of the last five commits](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g7n1d8d7jf72oa5e3ezh.png)

As you can see in this image, after running `git rebase -i HEAD~5` I get a list of the last five commits I made in this particular repository.

Now if we want to edit the third and second commit message we have to replace the pick command with the reword command then save and quit the file.

In the editor, you are given a list of commands that you can use while rebasing. Pick is selected as the default option.

Replacing `pick` with `reword` indicates that you want to edit the commit message of that specific commit.

![Replaced pick with reword for the second and third commit in editor](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uodkxj3o58tbbh9i4yc6.png)

Once you save and quit, you will be taken to another editor where you can edit the commit messages. If we once again run `git rebase -i HEAD~5` this is the result.

![List of the last five commits with the newly edited commit messages](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/barzgyti3o3d26etrs82.png)

_You may have noticed that there are two ways to edit a commit when rebasing. Using the **edit** command allows you to change both the commit message and the content of the commit while using the **reword** command only allows you to change the commit message_

### Remove commits

This is especially useful when you find yourself with unwanted commits in your branch (whether made by you or your colleagues). Rebasing interactively allows us to select which commit we want to remove in our branch and gives us the possibility to remove that commit.

Just like for editing commit messages, what we need to do is to replace the `pick` command with the `drop` command on the commit you want to remove.

![Replaced pick with drop for the third commit in editor](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f8waaarm6pjylbsie5rt.png)

Once you save and quit your editor the changes will be applied and that commit will be removed along with all changes that had been made on that commit.

Now instead of running the command `git rebase -i HEAD~5` you'll run `git rebase -i HEAD~4` as you have remove one commit.

![List of the last four commits with the removed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q0iqelfp0aps1a4s3n58.png)

As you can see we have removed the third commit.

_Be careful when using drop so as to not lose important changes._

### Combine commits together

Next would be the `squash` command. The `squash` command allows us to combine two or more commits into one commit and write a new commit message to describe the new commit.

We'll replace the `pick` command with the `squash` command on the commit you want to combine into the previous one.

![Replaced pick command with squash on the second and fourth commit](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6w6jhe09u19n66cxix3.png)

Once we save and quit, the second and fourth commit will be merge into the first commit. When you are squashing you're commits together, you merge the latest commits into the older commit which is why it is important to remember that our commits will be squashed from bottom to top.

![New editor that allows us to change the commit message of the first, second, and fourth commit.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cy4g8mbdjkz7pu7zisex.png)

When you use the squash command, you are given the option to edit the commit messages of the commits you want to squash together. If you want to use only one commit message, you can go ahead and comment the commit messages you don't want and remain with the commit message you want to use.

_The `fixup` command works like the `squash` command, the only difference is that the `fixup` command will discard the commit message of the latest commit and remain with the commit message of the commit message of the commit they'll be merged into_

### Next step

Now the next step would be to push your commits to a remote branch. One thing to keep in mind is that you have rewritten you branch history by using git rebase so if the branch is already published you will have to force push the new changes by using

```git
git push --force origin name-of-the-branch-you-are-working-on
```

Using force push can cause problems for anyone else working on the branch so unless you are the only one work on that particular branch, it is safer to first check with your colleagues working on that branch before proceeding.

## Conclusion

This is it! While this article doesn't cover everything there is to know about interactive rebase in git, it should be enough to get your started.

Leave a comment and share it with your friends if you find it useful and let me know if you want me to cover any topic related to git or frontend.

Stay safe and thanks for reading.
