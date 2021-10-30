Materials used:

Raspberry Pi Zero W  
GPIO header pins  
Soldering iron, solder, desoldering wick, brass sponge  
Female to female jumper wires  
5V 2 channel relay switch  
Two core wire  
8GB microSD card  

Steps:

1. Downloaded Raspian to my computer, and then flashed the file onto the microSD card.  
2. Inserted the microSD card into the Zero W, then connected it to power, a monitor, keyboard, etc.  
3. Once setup was complete, I enabled SSH and VNC on the Zero W to remotely access.  
4. Taught myself how to solder in order to solder GPIO header pins to the Zero W.  
5. Connected jumper wires to relay swtich and GPIO header pins using the following diagram:  
![layout](https://user-images.githubusercontent.com/85547196/126401893-7dd53e74-63f2-4ad2-a378-5dd02059c506.jpg)  
6. Connected two core wire to relay switch and garage door operator. Had to do a bit of research into the COM and OPEN terminal on my specific garage door operator, since no terminals were explicitly labeled as "COM" or "OPEN", but as numbers. I used this [https://support.garagedoorzone.com/uploads/1/2/1/0/12109531/m55manual.pdf], Page 14 to conclude that since terminals 3&4 go to the garage door control panel, they must be the COM & OPEN terminal. At this point I was done with all the hardware related parts of this project, and was able to move on to actually programming the Zero W.  
7. Through VNC Viewer, a software that allowed me to remotely program the Zero W, I made a simple .py program that used Flask to build a web server, and researched on how to set on/off GPIO pins. After this, I made a simple HTML file that would allow me to test my entire project with an open and close button for the garage door. It failed at first, but eventually I fixed it and got it working.  
8. At this point I decided that I did not want to enter the Zero W's IP address everytime I wanted to open/close my garage, so I began to pursue app development. With only knowledge of Java and Python, I spent the following month learning HTML, CSS, JavaScript, and React, a JS library, in order to build an app.  
9. Built an app using React JS and used the Expo Go client [https://expo.dev/client] to test the app's useablity through my house's private network.
10. Through configuring the main router via the AT&T website, I used port forwarding to allow for the garage to be opened without needing a connection to the same network as the Raspberry Pi. 
11. Presently, the development of this project has ceased since the original goal has been achieved. I am now able to open my garage from anywhere in the world through my ability to learn and implement elements of hardware engineering, programming, and networking.

Pictures of hardware:  
![IMG_2578](https://user-images.githubusercontent.com/85547196/139164978-13fc7812-fc3a-428c-9bd4-fbf8d90143d9.JPG)
![IMG_2581](https://user-images.githubusercontent.com/85547196/139164985-38d7ba84-c477-4005-93ef-e4cdcc79628a.JPG)
![IMG_2585](https://user-images.githubusercontent.com/85547196/139165014-02eb97ae-6d60-46be-b066-6be0b101a6ce.jpg)
![IMG_2583](https://user-images.githubusercontent.com/85547196/139165033-e9094fe1-a98b-46eb-8187-e2fa999d3769.JPG)
![IMG_2586](https://user-images.githubusercontent.com/85547196/139165044-aad9c2a1-0e4c-43fb-84d7-774dd72ffb3c.JPG)  
  
Pictures of app:  
![IMG_3061](https://user-images.githubusercontent.com/85547196/139525479-79ec84f6-b935-4991-9516-0b52ef03f223.PNG)  
  
Video demonstration:  
https://user-images.githubusercontent.com/85547196/139525603-c5152384-deb4-4325-aaf4-c6107bcba698.mp4
