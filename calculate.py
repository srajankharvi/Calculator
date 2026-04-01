from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('calculator.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        expression = request.json.get('expression', '')
        
        # Validate and evaluate the expression
        if not expression:
            return jsonify({'result': '0', 'error': False})
        
        # Remove spaces
        expression = expression.replace(' ', '')
        
        # Safely evaluate the expression
        result = eval(expression)
        
        return jsonify({'result': str(result), 'error': False})
    except Exception as e:
        return jsonify({'result': 'Error', 'error': True, 'message': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)