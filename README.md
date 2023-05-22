# Manipulating files with NodeJS #

this step by step assume that you have node ~v19 installed

After cloning the repo on you local machine navegate to terminal and go to the folder path.

After that follow the stream of the functinos from top to bottom. <br>
1. Execute 
```writeFile(string, path)```
+ if the path param is omitted a file with the current year will be created with the string provided. <br>

2. To read the file execute 
```readFile()```
+ It will log the content of the file created on your terminal

3. To compress the file execute
```compressFile()```
+ It will compress the file into a .gz

4. To print a message recursive execute
```printRecursive()```
+ It will print every 1 sec "hello there", to stop press control + c 

5. To list the content of the user directory execute
```listContent()```
+ It will list all your folders and files on the user directory

6. To encode your file to hex and base64 execute
```createCodFileHexBase(path)```
+ It will create 2 new files one encoded in "hex" and the other in "base64"

7. To encrypt your file execute
```encryptFiles(path1, path2, key, iv)```
+ It will encrypt the files

8. To decrypt and decoded the files execute
```decryptFile(path1, path2, key, iv)```
+ It will create 2 new files with the decrypted and decoded text