# Sprint support engineer

The Support Engineer is an engineering scrum team member who is assigned, on rotation, to work on support concerns for a sprint. 

## What does a Support Engineer do?

The Support engineer should stay on top of the following things, in rough priority order.

## Priorities
### Update support information
Update the slack support channel with your name and the dates you are the support engineer.

### Critical bugs
These issues block a release and need to be resolved as soon as possible

### Build Failures
* Monitor Bamboo and CircleCI to verify that all tests are passing. 
* Monitors unit test failures
* If tests are failing, check if it’s due to infrastructure issues (build machines losing connectivity, running out of disk space, etc.)
* If it is due to infrastructure issues, either fix them or enlist the most appropriate engineer to fix them.
* If one of the tests we own is broken because of an external PR, contact the PR author and make sure the issue gets resolved one way or another

### Acknowledge customer support requests
* Slack questions in support channel.
* Any other requests coming through app team members (sometimes engineers get contacted directly) You don't have to know the answers - but you're in charge of making sure somebody responds in a timely fashion

### Major bugs
We want to resolve all of our major issues before releasing

### Manual testing + Releases
Whenever the team decides we should release, the support engineer might be responsible for performing that release. See the appropriate process for each product under the code directory docs.

### Sprint assigned work
Each sprint we'll typically choose a specific issue we would like to see resolve within that sprint.

### Minor / trivial bugs

## Why are Support Engineers important?
### Limits context switching / supports focus
By having someone allocated to keeping an eye on live issues, it allows the other engineers to focus on their work. Context switching can take up to 20 minutes. That time is applies to the whole team if they are all looking at the support channel. Only one person needs to keep a close eye and they can triage if they need help.

### Limits impact on emergent work
With a support engineer, sprint emergent work has less impact on the sprint goals. This ties in with limiting context switching, but the team is more prepared for things to not go as planned.

## How to track support work
The time spent on support is tracked in “Work Actual”. This helps the organization measure how much time was put on support that sprint, and what kind of support it was. (Build breaks, critical bugs, customer support, etc). This helps gauge areas of improvement.

## Support Engineer Sprint Allocation
Given the needs of the team, are two different models for a typical support engineer:

**Full time:** the Support Engineer focuses on support priorities the whole sprint. (See table above)

**As needed:** the Support Engineer limits support work, and response to only critical items as they appear.
