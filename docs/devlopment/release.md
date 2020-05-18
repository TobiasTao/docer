# Auto build&release
- Modify [WHATSNEW.md](../../WHATSNEW.md)，add app's [version information](https://keepachangelog.com) 。
- Modify the value of version in package.json
- Run:
```shell script
 git commit  
 git push  
 git tag v*.*.*  
 git push --tags
 ```
- github actions works now!
- If you need to delete a tag:
```shell script
// delete local tag
git tag -d v*.*.*
// delete remote tag
it push --delete origin v*.*.*
```
