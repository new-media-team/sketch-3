from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_socketio import send, emit
from flask import request
from engineio.payload import Payload

Payload.max_decode_packets = 5000

app = Flask(__name__)
app.config['SECRET_KEY'] = 'banana'
app.debug = False
socketio = SocketIO(app)

@socketio.on('eval')
def handle_message(message):
    socketio.emit("eval", message, skip_sid=request.sid)

@app.route("/index.html")
def home():
    return render_template("index.html", SCRIPT=render_template("script.js"))

if __name__ == '__main__':
    print("running app")
    socketio.run(app, host='0.0.0.0')
