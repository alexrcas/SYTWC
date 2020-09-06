from flask import Flask
from flask import render_template, session, redirect, escape, request, url_for
from flask_login import logout_user, LoginManager
from flask_pymongo import PyMongo
import bcrypt

app = Flask(__name__)


app.config['MONGO_DBNAME'] = 'educaweb'
app.config['MONGO_URI'] = 'mongodb+srv://alex:1234@cluster0.iklun.gcp.mongodb.net/educaweb?retryWrites=true&w=majority'

mongo = PyMongo(app)




@app.route('/')
def index():
    if 'username' in session:
        return render_template('index.html', name=session['username'])
    else:
        return render_template('login.html')


@app.route('/game/<shapes>/<time>')
def game(shapes, time):
    if 'username' in session:
        return render_template('game.html', name=session['username'], shapes = shapes, time = time)
    else:
        return render_template('login.html')


@app.route('/scores/<score>')
def scores(score):
    return render_template('score.html', score = score, table = list(mongo.db.scores.find()) )

@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/login', methods = ['POST'])
def authorize():
    users = mongo.db.users
    login_user = users.find_one({'name': request.form['username']})
    if login_user:
        if bcrypt.hashpw(request.form['password'].encode('utf-8'), login_user['password'].encode('utf-8')) == login_user['password'].encode('utf-8'):
            session['username'] = request.form['username']
            return redirect(url_for('index'))
    return 'Invalid username or password'


@app.route('/save', methods = ['POST'])
def saveScore():
    score = request.get_json()
    print(score)
    mongo.db.scores.insert_one({'score': score['score'], 'user': session['username']})
    return 'ok'


app.secret_key = 'secret'
app.run(debug = True)

