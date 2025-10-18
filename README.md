---
hide_table_of_contents: true
---

## docs.pioreactor

#### Install npm

https://nodejs.org/en/download/

### Clone this repo:

```
git clone git@github.com:Pioreactor/docs.pioreactor.git
```

#### Start local dev server

```
npx docusaurus start
```


#### Deploy
Deploys are done via Github actions, but manually they are done:

```
USE_SSH=true GIT_USER=<your github username>  npx docusaurus deploy
```

#### Decision logs
```
Rational for experiments tab: 

Focus less on repeating basic instructions (found in User Guide) and more on:
	*	experiment inspiration
	*	what our Pioreactor can achieve
	*	connecting the collected data with the big picture 

We assume that users know how to start experiment, autoclave/sterilize media, read growth curves/normalized OD. 

Tone of writing: less formal, more engaging. We aren't conducting research, we're showcasing the product and basic experiment guides. Goal is to foster ideas/allow users to see potential. 
```