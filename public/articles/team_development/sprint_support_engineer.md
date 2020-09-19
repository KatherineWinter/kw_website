# Sprint support engineer

The Support Engineer is an engineering scrum team member who is assigned, on rotation, to work on support concerns for a sprint. 

## What does a Support Engineer do?

The Support engineer should stay on top of the following things, in rough priority order.

Attend the standup meeting for their "epic theme" to unblock. Don’t attend sprint planning. Sprint plan is with QA.

Post your daily status.  This might include progress on the [support queue](support_queue), or if another 🔥 spread quickly, whatever the status there is.

## Priorities
### Update support information
Update the slack support channel with your name and the dates you are the support engineer.

### Critical bugs
These issues block a release and need to be resolved as soon as possible

### Build Failures
* Monitor build system to verify that all tests are passing. 
* Monitors unit test failures
* If tests are failing, check if it’s due to infrastructure issues (build machines losing connectivity, running out of disk space, etc.)
* If it is due to infrastructure issues, either fix them or enlist the most appropriate engineer to fix them.
* If one of the tests we own is broken because of an external PR, contact the PR author and make sure the issue gets resolved one way or another

### Acknowledge customer support requests
* Slack questions in support channel.
* Any other requests coming through app team members (sometimes engineers get contacted directly) You don't have to know the answers - but you're in charge of making sure **somebody** responds in a timely fashion

### PR reviews
Support engineer are responsible for reviewing the PRs of non-epic work (e.g. bugs, incoming requests, etc)

The technical director reviews the Support Engineer’s PRs if the other Support Engineers cannot.

### Manual testing + Releases
Whenever the team decides we should release, the support engineer might be responsible for performing that release. See the appropriate process for each product under the code directory docs.

### Support Queue
A support queue maintained by QA which has issues that need addressed in priority order.


## How to measure success
1. Customer satisfaction increase: fewer bugs
1. Feature velocity: feature engineers aren't distracted
1. Overtime: fewer fires because we have someone on it
1. Fewer CS calls: more bugs are fixed
1. Rollbar cost decrease: We have someone fixing the issues

## Why are Support Engineers important?
### Limits context switching / supports focus
By having someone allocated to keeping an eye on live issues, it allows the other engineers to focus on their work. Context switching can take up to 20 minutes. That time is applies to the whole team if they are all looking at the support channel. Only one person needs to keep a close eye and they can triage if they need help.

### Limits impact on emergent work
With a support engineer, sprint emergent work has less impact on the sprint goals. This ties in with limiting context switching, but the team is more prepared for things to not go as planned.

### CS / QA issues are address
Using the +Support Queue, CS/CMS/QA know when issues are going to be address. Issues go directly into the support queue and are not lost.


## Planning

Support engineer has their own sprint planning.

- QA is the Project Manager for the Support Engineers.
- Customer Support and Technical Directors work with QA to prioritize issues.
- Stand up between support engineers and QA


## Support Engineer Allocation

The Support Engineer is assigned by the PM or volunteers, on rotation in the workplan, to work on support concerns for a 6-weeker.

Ideally, not required, we would have cross domain experience on support at the same time:

- One backend
- One Apps
- One frontend 

Each cross-domain team should donate one engineer from their team each 6-weeker.

- Exception: There always must be an Apps team member on support until the day our engineers are more “full stack”. E.g. Image Below, Core has Apps(Katherine, Kyle) and support engineers swapping between Steel and Anna-Sophie.



## A model for doing major release during the busy season

Doing a major release during a busy season is tricky, but not impossible!

**Goal:** To have zero impact on Customer Support for major release during the busy season.

**Support Engineer does in addition:**

- Monitor the new tickets every ~30mins and look for issues that look like release problems.
- Details on the daily overall/good/bad of the release
- Going to Customer Support daily standup
