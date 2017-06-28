Chad's Intergalactic Shipping Company
==

Welcome to Chad's Intergalactic Shipping Co. I know it's your first day but we have something of a disaster on our hands. The previous IT team was vapourised when the star system they were based at went supernova unexpectedly. Unfortunately, they failed to follow basic redundancy principles and all of their source code was not backed up off star system.

Fortunately, they were at least smart enough to do an hourly dump of all of the packages that were in transit. So we have a nice excel document of all the packages.

We're going to need to very rapidly rebuild our infrastructure before our clients notice this little hiccup. It wouldn't do for us to lose all those hard won clients to our arch rival Occhipinti Express.

To get started we need to build up a RESTful API that can serve out information about these packages. Being the good agile company that we are I've created a list of cards and put them in priority order to get you started.

1. Get a list of all the shipments
2. Get a given shipment using the tracking number
3. Create a new package
4. Update an shipment with a new event
5. A second special method of updating the shipment to modify details discretely if we need to. *cough*
6. Delete a package in case it gets lost (just kidding, no not really I need to be able to delete packages, and we can't document this feature).
7. Get a list of packages in a given state (i.e. all the packages that haven't been delivered)
8. Handle when shipments are made of multiple packages
9. Create a new spacetruck
10. All the spacetrucks
11. Update a spacetrucks details
12. Remove a spacetruck
13. Find all the packages in a given spacetruck
14. Assign a package to a spacetruck
15. Create a new planet
16. Get all the planets
17. Update a planets details
18. Remove a planet (necessary more often than we'd like)
19. Find all the packages from a given planet
20. Find all the packages to a given planet
21. Secure the API with API keys
22. Make sure that my special abilities can only be used with my special API keys. Wouldn't do to have other people updating events.

That should be enough to get you started. A few things to bear in mind:

- I want this in a modern language. The last version was in COBOL, and if we hadn't accidentally vapourised the team we'd have had to make them redundant anyway. Too expensive. Come to think of it, that probably saved us some money.
- I need tests, lots of tests. I need to make sure that your shit doesn't break.
- I need them to be pushed to github.intergalactic, can't afford to lose that source code again
- I need them deployed to heroku. It's our company host of choice and we don't have time to do due diligence on another host.
- I need all that data loaded ASAP so we can resume operations. Those spacetrucks have all been halted to ensure we don't deliver to the wrong person. We are after all professionals, and that would not do.
