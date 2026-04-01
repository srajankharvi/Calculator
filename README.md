# 🌟 Neon Calculator

A beautiful, interactive calculator website with a stunning neon theme, built with Python Flask backend and vanilla JavaScript frontend.

## Features

✨ **Neon Theme Design**
- Vibrant neon colors (green, magenta, cyan, gold)
- Glowing effects and animations
- Dark gradient background
- Glass-morphism calculator card
- Responsive design for all devices

🧮 **Calculator Functionality**
- All basic operations: addition, subtraction, multiplication, division
- Percentage (%) support
- Decimal numbers
- Clear (C) and Delete (DEL) functions
- Error handling
- Keyboard support:
  - Numbers: 0-9
  - Operators: +, -, *, /, %
  - Enter or = to calculate
  - Backspace to delete
  - Escape to clear

💻 **Technology Stack**
- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Advanced CSS with neon effects, animations, and gradients

## Installation

1. **Clone or download the project**
   ```bash
   cd calculator
   ```

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

   Or install Flask manually:
   ```bash
   pip install Flask
   ```

## Running the Application

1. **Start the Flask server**
   ```bash
   python calculate.py
   ```

2. **Open your browser**
   - Navigate to: `http://localhost:5000`

3. **Start calculating!**
   - Click buttons or use your keyboard
   - The calculator will respond to both mouse clicks and keyboard input

## Project Structure

```
calculator/
├── calculate.py              # Flask backend
├── templates/
│   └── calculator.html       # HTML template
├── static/
│   ├── calsi.css            # Neon theme stylesheet
│   └── operation.js         # Calculator logic
├── requirements.txt         # Python dependencies
└── README.md               # This file
```

## Keys & Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Enter numbers |
| `+, -, *, /, %` | Operations |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last digit |
| `Escape` | Clear display |
| `.` | Decimal point |

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Color Scheme

- **Green (#00ff00)**: Number buttons
- **Magenta (#ff00ff)**: Operation buttons
- **Cyan (#00ffff)**: Function buttons
- **Gold (#ffd700)**: Equals button
- **Background**: Dark gradient with purple accents

## Notes

- The calculator uses JavaScript's `eval()` for calculations
- All operations are performed client-side
- Error handling prevents division by zero and invalid operations
- Floating-point precision is rounded to 8 decimal places

## Author

Created with ✨ and ❤️

---

**Enjoy your neon calculator! 🎉**