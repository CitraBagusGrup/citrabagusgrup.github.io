from flask import Flask
from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/5200411081")
def ifan():
    return render_template('user.html')
@app.route("/5200411078")
def ade():
    return render_template('user.html')
@app.route("/5200411098")
def tofiq():
    return render_template('user.html')
@app.route("/5200411117")
def dwiki():
    return render_template('user.html')
