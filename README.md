
# Installation
### Local installation
```js
npm install --save cp-filesearch
```

### Global installation
```js
npm install -g cp-filesearch
```

Global installation will give you filesearch command in cmd

# How to use it
This utility package find filename or keyword of filename across all the attached drives of the system.
This utility will find filename all files containing keywords regardless uppercase, lowercase or capitalized word..
File list will be presented with file stats

#### For filesearch
##### Example: Provide full file name or just keyword of filename to find file across all the attached drives.


```js
filesearch search --fileName="full file name or keywords" 
```

###### *You can also use shortcuts for all arguments as mentioned below*
Example: 

```js
filesearch search -f="full file name or keywords" 
```
e.g
<img src="https://cdn1.imggmi.com/uploads/2019/10/26/3a383e5460811040191134ae8a75b42b-full.png" height="20" width="600">
#### Result
<img src="https://cdn1.imggmi.com/uploads/2019/10/26/923efdcc62b3f52bd4fb754898b02756-full.png" width="600"/>

#### For help
```js
filesearch search --help 
```
### Result
<img src="https://cdn1.imggmi.com/uploads/2019/10/26/ad7c66b80561ac3577ef40094d2f7185-full.png" width="600" />
