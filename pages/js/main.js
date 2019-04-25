const resourceObj = [
  {
    replId: 'Challenge-Variable-Assignment',
    challengeName: 'variable reassignment',
    challengeDescription: 'Now that we know what variables are, let\'s create one of our own. Declare a constant named lastName and assign it the value of your last name. Make sure you wrap your name in quotation marks, e.g. "Smith". <br /> <br /> Now, go back to line 1 and modify the value of firstName to be your first name. Uncomment the console.log statement on line 10 and run your code; you should see Jenny replaced by your first name—unless your first name is Jenny, of course.',
    resourceList: [
      {
        resourceName: 'mdn on const',
        resourceURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const\',',
      },
    ],
  },
  {
    replId: 'Challenge-Variable-Assignment',
    challengeName: 'variable reassignment',
    challengeDescription: 'Now that we know what variables are, let\'s create one of our own. Declare a constant named lastName and assign it the value of your last name. Make sure you wrap your name in quotation marks, e.g. "Smith". <br /> <br /> Now, go back to line 1 and modify the value of firstName to be your first name. Uncomment the console.log statement on line 10 and run your code; you should see Jenny replaced by your first name—unless your first name is Jenny, of course.',
    resourceList: [
      {
        resourceName: 'mdn on const',
        resourceURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const\',',
      },
    ],
  },
];

const challengeName = document.querySelector('#challenge-name');
challengeName.innerHTML = resourceObj[0].challengeName;

const challengeDescription = document.querySelector('#challenge-description');
challengeDescription.innerHTML = resourceObj[0].challengeDescription;

const challengeRepl = document.querySelector('#challenge-repl');
challengeRepl.innerHTML = `<iframe height="400px" width="100%" src="https://repl.it/@DavidKim12/${resourceObj[0].replId}?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>`;
