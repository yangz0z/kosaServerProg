from flask import Flask, request, render_template, jsonify, _app_ctx_stack


app = Flask(__name__, static_folder='static', template_folder='template')


@app.route('/')
def hello():
    return 'Hello'

@app.route('/hi')
def hi():
    return 'Hi'

@app.route('/sample')
def sample():
    return render_template('sample.html')

@app.route('/add', methods=['GET', 'POST'])
def add():
    a = 0
    b = 0
    if request.method == 'GET' :
        a = int(request.args.get('a'))
        b = int(request.args.get('b'))
    if request.method == 'POST' :
        data = request.get_json() #flask에서 json으로 받기
        a = int(data['a'])
        b = int(data['b'])
    return str(a+b)

if __name__ == '__main__':
    app.run(
    host="127.0.0.1",
    port=7070,
    debug=True)