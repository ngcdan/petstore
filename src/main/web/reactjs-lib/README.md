#Problems

Invalid Hook call

https://stackoverflow.com/questions/56021112/react-hooks-in-react-library-giving-invalid-hook-call-error

```
Below are the steps I followed :
1. In Your Library(reacjs-lib):
a) cd node_modules/react && npm link
b) cd node_modules/react-dom && npm link

2. In Your App(openfreightone-ui)
a) npm link react
b) npm link react-dom

3)Stop your dev-server and do `npm start` again.

```
