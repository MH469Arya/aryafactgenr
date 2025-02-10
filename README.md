<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun Facts Generator</title>
    <style>
        /* CSS styles here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
        }

        h1 {
            margin: 0;
        }

        #fun-fact-display {
            margin-top: 20px;
        }

        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <header>
        <h1>Fun Facts Generator</h1>
    </header>
    <main>
        <section id="fun-fact-display">
            <p id="fun-fact">Click the button to generate a fun fact!</p>
            <button id="generate-btn">Generate Fun Fact</button>
        </section>
    </main>
    <script>
        // JavaScript code here
        const facts = [
            "Fun fact 1",
            "Fun fact 2",
            "Fun fact 3",
            "Fun fact 4",
            "Fun fact 5"
        ];

        const generateBtn = document.getElementById('generate-btn');
        const funFactDisplay = document.getElementById('fun-fact');

        generateBtn.addEventListener('click', () => {
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            funFactDisplay.textContent = randomFact;
        });
    </script>
</body>
</html>
