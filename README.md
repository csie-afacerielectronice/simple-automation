# journey-automation

Testing website journeys and prices

# Requirements

* NodeJS >= 10
* NPM
* Chromium (automaticaly installed by pupetter)

# Install

1. Clone the repo
```bash
git clone https://github.com/csie-afacerielectronice/journey-automation
```

2. Install dependencies

```bash
npm install
```

in case proxy setup is needed

```
npm config set proxy http://cache.ase.ro:8080
npm config set https-proxy http://cache.ase.ro:8080
```
remove proxy
```
npm config rm proxy
npm config rm https-proxy
`