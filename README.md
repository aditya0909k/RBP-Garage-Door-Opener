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
7. Through VNC Viewer, a software that allowed me to remotely program the Zero W, I made a very simple .py program that used Flask to build a web server, and researched on how to set on/off GPIO pins. After this, I made a simple HTML file that would allow me to test my entire project with an open and close button for the garage door. It failed at first, but eventually I fixed it and got it working.  
8. At this point I decided that I did not want to enter the Zero W's IP address everytime I wanted to open/close my garage, so I began to pursue app development. With only knowledge of Java and Python, I spent the following month learning HTML, CSS, JavaScript, and React, a JS library, in order to build an app.  
9. 



