# Ad Formats: Feature Development Process

* **Published date:** Aug 25, 2023
* **Authors:** Katherine Winter
* **Decision by:** TODO
* **Consulted:** TODO
* **Informed:** TODO
* **Status:** Draft
* **Decision Record:** TODO
* **Related:**

Adhering to distinct phases and steps is imperative to ensure seamless feature development. By rigorously committing to a structured development process, we guarantee alignment amongst all stakeholders and leave no room for oversight. This document outlines the meticulous feature development procedure we uphold at Ad Formats. 

Concentrate much of our effort on the Think It, Design, and Investigation stages. Sometimes, our Investigation might produce a prototype or even a near-complete product. Remember, it's always wise to "Measure twice. Cut once."


## Feature Development Process
The following are the phases and steps of the feature development process. Progress should be completed in stages (e.g., the implementation should not start until the technical investigation is complete).

### 1. Think it

**Goal**: Define clearly what you're building and what success looks like.

**Key Stakeholders**: Product leadership, dependencies (relevant teams), design, data science, engineering.

**Steps:**

* *1.1* The product team creates a PRD.
    * Internal team reviews
    * Dependencies are identified
    * Dependencies review
    * Data Science experiment objectives are defined
    * Discuss a high-level timeline
    * The team and dependencies sign off PRD.
* *1.2* Feedback loop- Light retrospective on how this phase went and what you could do better next time.

### 2. Design/Production 

**Goal**: To define what the feature will look like, act, user experience, etc.

**Key Stakeholders**: Product, dependencies (relevant teams), design, engineering

**Steps:**

* *2.1* Rapid Prototype
* *2.2* Create workflow design
* *2.3* Reviewed by:
    * Engineering team
    * Dependencies 
    * Signed off by both
* *2.4* Feedback loop- Light retrospective on how this phase went and what you could do better next time.

### 3. Technical Investigation

**Goal**: To define the architecture and system. Work out contentious implementation details.

**Key Stakeholders**: dependencies (relevant teams), functional-area guilds, engineering

**Steps:**

* *3.1*  Create Technical Design doc
* *3.2* Review the document at 30%, 60%, and 90%. Reviewed by:
    * Guilds where the changes are touching
    * Data Science
* *3.3* Feedback loop- Light retrospective on how this phase went and what you could do better next time.

### 4. Implementation

**Goal**: Bring the planned feature to life. 

**Key Stakeholders**: dependencies (relevant teams), functional-area guilds, engineering, production

**Steps:**

* *4.1* Work is done inside feature flags or a branch.
* *4.2* Implementation is designed with automated tests in mind
* *4.3* Tech doc is updated with new findings, and functional-area guilds are consulted.
* *4.4* Automated testing complete
* *4.5* Code reviewed by guild
* *4.6* Manual test cases written
* *4.7* Post-release monitoring tools are created.
* *4.8* Documentation created & reviewed by key stakeholders (help articles, release notes, readme, etc.)
* *4.9* Feedback loop- Light retrospective on how this phase went and what you could do better next time.

### 5. Finalize

**Goal**: Verify that the feature matches the agreed-upon criteria and launch it publically.

**Key Stakeholders**: Product leadership, dependencies (relevant teams), design, data science, engineering

**Steps:**

* *5.1* Production & design sign-off of feature
    * Production does a high-level review of the feature and verifies that the feature meets user stories.
    * May stop feature complete (Making the feature return to Implementation).
    * Test cases are written.
    * Found issues could be marked as "Known Shippable" and addressed.
* *5.2* Manual testing complete
* *5.3* Experiment launched
* *5.4* Stakeholders notified
    * Demo shown in Team Time.
    * Slack communication
    * Email communication
* *5.5* Feedback loop- Light retrospective on how this phase went and what you could do better next time.

### 6. Experiment Analysis

**Goal**: Verify that the feature achieves the expected results and meets the success metrics.

**Key Stakeholders**: Product leadership, dependencies (relevant teams), design, data science, engineering.

**Steps:**

* *6.1* Data Science presents findings
* *6.2* Data Science shares a proposal on when we should remove the experiment flags
* *6.3* Follow-up work filed in Jira.
* *6.4* Stakeholders notified
    * Results shared in Team Time.
    * Slack communication
    * Email communication
* *6.5* Feedback loop- Light retrospective on how this phase went and what you could do better next time.

# 7. Final Approval

**Goal**: To officially launch to the public. Learn from our experience.

**Key Stakeholders**: Product leadership, dependencies (relevant teams), design, data science, engineering

**Steps:**

* *7.1* Retrospective
* *7.2* Stakeholders notified
    * Demo shown in Team Time.
    * Slack communication
    * Email communication

### 8. Post-Release Monitoring

**Goal**: To review the long-term success of the feature. Consider removing experiment flags or setting a timeline for removing them.

**Key Stakeholders**: Product leadership, data science, engineering

**Steps:**

* *8.1* Review tools on feature performance every six months.
* *8.2* Review if now is a good time to remove experiment flags or set a timeline for removing them.

### 9. Post Release Bugs

**Goal**: Maintain the quality of the feature.

**Key Stakeholders**: engineering, data science

**Steps:**

* *9.1* This process is defined in the [Support Engineer](sprint_support_engineer.md) document.

## FAQ

***What happens if a phase doesn't go as planned? For example, what if the technical investigation reveals a need for more resources or a change in strategy?***

Based on the findings, the development cycle will return to the previous phase.

***How to resolve conflicts or disagreements among stakeholders will be resolved. Knowing how to resolve disputes is crucial, especially when multiple stakeholders have varying perspectives and stakes.***

* Document disagreement in Google doc - put in this drive. Follow the ADR process of those sections.
* Section document out into pieces
* Send out for review of peers - people with strong opinions are obligated to participate/follow.
* Having a decision date
* Peers: Qualify opinions with “strongly held opinion” or “loosely held opinion”
* Use communication techniques for Communicating through disagreement:
    * Recognize you could be wrong
    * Identify your objective
    * Summarize their stance
    * Listen to their opinion [(see listening tips)](listening.md)
