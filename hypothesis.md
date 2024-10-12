## Main reason
N8N webhook integrations are not type-safe and in-production validation is currently beeing hard to deal with large-scale adapters and validators.

## Description
This project evaluate a strategy to deal with webhooks inside N8N webhook development. 

(HIP-1) Make a CLI instead of dealing with JS payload.
- Should test initialization and the time of the request and the entry and the response
- Should validate the request with an DTO(zod) to make sure the request have the essential items to continue.
- Should be able to return a stringified JSON in the process out instance and be parsed after 

(IF THE INITIALIZATION OF THE CLI IS FAST) Making a brand new http-server is out of the way because would have extra costs using a machine with N8N + 

## Packages that should be tested
- https://mael.dev/clipanion/
- https://github.com/tj/commander.js
- https://yargs.js.org/