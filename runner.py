import time
import RPi.GPIO as GPIO
from flask import Flask, render_template, request
from selenium import webdriver
app = Flask(__name__)

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT)
GPIO.setup(11, GPIO.OUT)
GPIO.output(7, True)
GPIO.output(11, True)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')
    
@app.route('/login', methods=['GET', 'POST'])
def garageCmd():
    GPIO.output(7, False)
    time.sleep(.8)
    GPIO.output(7, True)
    return render_template('index.html')
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)
