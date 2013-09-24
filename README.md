hacktoolkit
===========

[![Build Status](https://travis-ci.org/hacktoolkit/hacktoolkit.png?branch=master)](https://travis-ci.org/hacktoolkit/hacktoolkit)

Hacktoolkit is the ONE open source project to rule them all (we try to, at least).

The spirit of this project is summarized in this tagline: _**Win hackathons by using bootstrap code to build complete websites and apps in 24 hours.**_

## About this `README`

This `README` is about the hacktoolkit library hosted at: https://github.com/hacktoolkit/hacktoolkit

For information about the project, see the website: http://hacktoolkit.com

* Code is organized into sub-folders or submodules, each with their own `README` files.
* **Always** read the `README` files in subdirectories before using the code so that your computer or mobile device doesn't blow up.

## Goals and Philosophy

* There will only be one main repository, ever, for Hacktoolkit (with the exception of submodules--more on this later)
* The goal is to be one repository that users can clone and immediately start using, not 47 different repositories.
* Easy to use; easy onboarding process
* Clean, robust code
* Find the best examples that are already existing (don't reinvent the wheel), and import them as submodules
* **We love skeletons and bootstrap code**

## Nomenclature

### Hacktoolkit vs hacktoolkit

Use **Hacktoolkit** (capital, proper name, one word, no spaces or hyphens) when referring to the project or code.

Use `hacktoolkit` (all lowercase) only when referring to the code, library, or package name.

### Names in code

* Java or Android package names, for example, should start with `com.hacktoolkit` and `com.hacktoolkit.android`, respectively
* `htk` is the preferred abbreviation for lowercase names
* Java class names can use the prefix `HTK`, e.g. `HTKUtils.java`, `HTKConstants.java`, `HTKSettings.java`

## Getting Started

Three simple steps:

1. **Clone the repository**  
   `git clone git@github.com:hacktoolkit/hacktoolkit.git`
2. **Update submodules**  
   `git submodule init` (inside the directory of the newly cloned repository; only run the first time)  
   `git submodule update` (Download the submodule codes the first time)
3. **Profit**  
   Start coding away with Hacktoolkit and share your delight with everyone else.  
   To get future updates, run: `git pull && git submodule update`

## Submodules

This project makes extensive use of Git Submodules.

For information on how to use Git Submodules, read <http://git-scm.com/book/en/Git-Tools-Submodules>.

In addition to the normal `git clone` or `git pull`, two commands are necessary to keep the submodules up-to-date:

1. `git submodule init` after cloning
2. `git submodule update` updates all the submodules

## Contributing

Hacktoolkit is always looking for help, whether you are a designer or a developer.
If you would like to be a maintainer for Hacktoolkit, contact Jonathan Tsai (<https://github.com/jontsai>).
The majority of people should probably just fork this repository and issue pull requests.

* Always include a `README`(`.md` is preferred) file in each directory, unless it is a leaf
* Follow the best practices and coding style guides for that language, platform, or API
* Use your best judgment and common sense, always.
* More coming...

