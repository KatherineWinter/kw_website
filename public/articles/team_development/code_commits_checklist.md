# Code Commit Template and Checklist

Code commit formats are a holy war within engineers. The follow is my favorite code commit format. I believe it creates mindfulness, and helps future-me out.

## Related blog posts

https://fatbusinessman.com/2019/my-favourite-git-commit


## Commit message example

DESCRIPTION_OF_FIX
**By:** DEVELOPER_NAME
**Issue:** ISSUE_URL
**Reviewed By:** REVIEWER_NAME
**Review URL:** URL
**Test Path:** PATH_TO_AUTOTEST_AND_TEST_NAME
**How did you test?:** TEST_CASE_NOTES
**Notes To QA:** NOTES
**Checklist:**

[ ] Pending release notes & change log updated?
[ ] Support documentation updated

## Justifications

- Using a uniform submission template allows for information to not be lost.
- Create mindfulness about steps needed for submitting a change.
- It allows for quick copy/paste for Development Directors, Production, or QA to use in emails, confluence, status reports, etc.
- Allows for consistency across bugs, and submissions.
- Creates an easy overview of where all information that is relative to change is located.
- Developers can easily find follow-up information.

### By

- Way to see who submitted the change. See IR example.
- Great for copy/paste in reports.

### Issue

- Great for copy/paste in reports.
- Great for backtracking if looking at knock-ons.
- Required for frostbite-dev copy-up permission.

### Reviewed By

- A record that a specific developer DID and DID NOT review it. E.g. of DID: A change that happened in another system needs to
- be reviewed by the system owners. This will make a record that they did review it, and who from that team did.
- If the developer who made submission leaves EA, there is a record of who reviewed it and where the review was. 
- Create accountability for the CLs a developer reviews.

### Review URL

- Great for backtracking on why decisions in the code were made.
- Proof that a code review was done.

### Test Path

- Creates mindfulness in the developer on whether or not an autotest should be created for the bug.
- Shows QA where the auto test is. That way they can run autotest themselves.

### How did you test?

- Explains how the issue that is being fixed could have been reproduced.
- Describes any edge cases you accounted for, or even more importantly, what you didn't account for.

### Notes To QA

A record of test cases that WERE and WEREN'T tried out prior to submitting the bug.
