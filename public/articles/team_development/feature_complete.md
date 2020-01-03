# Development Process: Feature Complete
The purpose of this document is to outline the Feature Complete development process. Feature Complete is when a feature meets the criteria listed below.

The Goal of Feature Complete
* Always be release ready
* Control quality

## High level
* Development, Test, acceptance happens in branch off of master.
* The developer doesn't have to worry about external changes - until they merge down, but then they KNOW the source of the problem.
* QA can test a non-changing environment.
* Once ALL acceptable bugs are completed, it's merged into the master line. This keeps our master "release ready".
* If a feature misses its due date, no worries, it isn't in master and no worries about the knock-on of moving it out.
* Having features implemented in isolation — copy up is explicitly sign off that at least min-ship has been meant.
* All this controls quality.

## Definition of terms
* Workflow design: Document created by Producer and/or designer that defines behavior and user stories of a feature.
* Feature: A collection of User Stories directly from the Workflow design
* Sandbox: Child branch of master. Features are developed here
* Production Sign-off: Producer has approved feature for release.

## Phase of Feature Complete
### Feature Design/Production
* [Rapid Prototype](https://youtu.be/jTageuhPfAM)
* Create workflow design
* Engineer does high level review

### Feature Technical Investigation
* Create Technical Design doc
* Document is reviewed at 30%, 60%, 90% by another engineer.
* Sprint time is tracked as “work actual” (instead of burn down time)
* Note: majority of feature time should go into investigation. Investigation might produce a demo, or nearly done work. “Measure twice. Cut once.”

### Feature Implementation
* Work is done inside of branch
* Implementation is designed with unit tests in mind
* Manual test document is updated with edge-case tests
* Code reviewed

### Feature Finalize
* Production sign off
  * Production does a high-level review of the feature and verifies that feature meets user stories.
  * May stop feature complete (Making the feature go back to Implementation).
    * QA must create new test cases.
    * Found issues could be marked as "Known Shippable" and addressed.
* If issues are found. The result are solely up to production:
* Documentation created (help articles, release notes, etc)
* Documentation reviewed
* Unit testing complete
* Testing complete
* QA sign off
* Customer support notified

### Feature Complete
  * Team notified
  * Merged into master

### Post Release Bugs
  * Tests written about bugs
  * Fix verified by QA prior to release. Knock-on bugs checked for.

## Benefits of Feature Complete
  * No stale code: only feature ready code makes it into master
  * Less feature iteration
  * Morale Improvement: Expectations are clear and communication is improved across Design, Production, Engineering
  * Minimal live critical issues
  * Less overtime
  * The live product is exactly what Production agreed to
  * CSAT increase
  * Less customer support calls
