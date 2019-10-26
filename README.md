
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
File list will be presented with file stats.

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

#### For Writing result in file
##### Example: Optionally you can provide write flag (-w="true" or --writeFile="true"). By default this flag is false.This flag will create search.txt file in C:\filesearch directory. 

Example: 
```js
filesearch search --fileName="full file name or keywords" --writeFile="true"
```

###### *You can also use shortcuts for all arguments as mentioned below*
Example: 
```js
filesearch search -f="full file name or keywords"  -w="true"
```

#### For help
```js
filesearch search --help 
```
### Result
<img src="https://cdn1.imggmi.com/uploads/2019/10/26/c5b67d5d1cd4c6c4ffca06ad7a1ca493-full.png" width="600" />
