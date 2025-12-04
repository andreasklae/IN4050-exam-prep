// Comprehensive curriculum data based on IN4050 course content
export const topics = [
  {
    id: 1,
    title: "Introduction to AI & Intelligence",
    icon: "🧠",
    description: "Fundamentals of AI, intelligence definitions, Turing Test, and philosophical debates",
    color: "#6366f1",
    questions: [
      {
        id: "ai-1",
        question: "What is the primary definition of intelligence in AI?",
        options: [
          "Ability to pass the Turing Test through behavioral imitation",
          "Capacity for flexible, goal-oriented action in diverse environments",
          "Mental abilities and cognitive aptitude similar to humans",
          "Consciousness, self-awareness, and subjective experience"
        ],
        correct: 1,
        explanation: "In AI, intelligence is defined primarily as the capacity for flexible, goal-oriented action in diverse environments, based on maximizing utility from classical decision theory."
      },
      {
        id: "ai-2",
        question: "What does the Turing Test measure?",
        options: [
          "Whether a machine can think and reason like a human",
          "Whether a machine demonstrates consciousness and self-awareness",
          "Whether a human judge can distinguish a machine from a human based on behavior",
          "Whether a machine can solve complex mathematical problems faster than humans"
        ],
        correct: 2,
        explanation: "The Turing Test defines machine intelligence behaviorally: if a human judge cannot reliably distinguish the machine from the human through interaction, the machine passes the test."
      },
      {
        id: "ai-3",
        question: "What is the main criticism presented by Searle's Chinese Room Argument?",
        options: [
          "Machines lack physical embodiment and sensory experience",
          "Manipulating symbols based on rules does not constitute genuine understanding",
          "Machines cannot process information fast enough for real-time tasks",
          "Machines cannot learn from experience and adapt to new situations"
        ],
        correct: 1,
        explanation: "The Chinese Room Argument argues that a person (or machine) manipulating symbols based on rules does not genuinely understand the meaning, only simulates comprehension."
      },
      {
        id: "ai-4",
        question: "What is Artificial General Intelligence (AGI)?",
        options: [
          "AI that can pass the Turing Test by imitating human behavior",
          "AI that uses rule-based systems with logic and deduction",
          "A machine with human-level ability across any cognitive task with transfer learning and flexible reasoning",
          "AI that can perform one specific task very well with narrow expertise"
        ],
        correct: 2,
        explanation: "AGI refers to a hypothetical machine with human-level ability across any cognitive task, featuring transfer learning, autonomous goal-setting, and flexible reasoning."
      },
      {
        id: "ai-5",
        question: "What is the Frame Problem in AI?",
        options: [
          "How to determine what is relevant versus irrelevant without exhaustively considering every possibility",
          "How to create frames for video processing and temporal analysis",
          "How to physically frame and structure a robot's body",
          "How to frame ethical questions and moral dilemmas in AI systems"
        ],
        correct: 0,
        explanation: "The Frame Problem is a core challenge concerning how a rational agent can determine what is relevant versus irrelevant in a situation without having to exhaustively consider every possibility."
      },
      {
        id: "ai-6",
        question: "Which approach to AI dominated books until the late 20th century?",
        options: [
          "Machine Learning with neural networks and data-driven methods",
          "Deep Learning with convolutional and recurrent architectures",
          "Rule-based systems using logic and deduction",
          "Evolutionary algorithms inspired by natural selection"
        ],
        correct: 2,
        explanation: "Rule-based AI, which relies on logic, deduction, and explicit coding of knowledge as formulas or rules (e.g., Expert Systems), dominated AI books until the late 20th century."
      },
      {
        id: "ai-7",
        question: "What scoring did GPT-4.5 achieve in a 2025 Turing Test study?",
        options: [
          "58%",
          "65%",
          "73%",
          "84%"
        ],
        correct: 2,
        explanation: "GPT-4.5 scored 73% when prompted to act human in a 2025 study, sometimes outperforming human participants."
      },
      {
        id: "ai-8",
        question: "What is Multiple Realizability in the context of AI?",
        options: [
          "Running multiple AI systems simultaneously for parallel processing",
          "Mental states can be realized in different physical systems (carbon, silicon) if embodied in some causal medium",
          "Creating multiple copies of the same AI for redundancy and reliability",
          "Realizing multiple goals and objectives simultaneously in an agent"
        ],
        correct: 1,
        explanation: "Multiple Realizability means that if the mind equals function, then mental states can be realized in different physical systems, provided the system is embodied in some causal medium."
      },
      {
        id: "ai-9",
        question: "What are the two main goals of AI?",
        options: [
          "Theoretical: building models of human thinking; Practical: replacing or assisting human activities",
          "Academic: publishing papers; Industrial: making profits",
          "Short-term: passing tests; Long-term: achieving consciousness",
          "Local: optimizing algorithms; Global: solving world problems"
        ],
        correct: 0,
        explanation: "The goals of AI are categorized as Theoretical (building models of how humans think and act) and Practical (replacing human activities that demand intelligence or assisting humans)."
      },
      {
        id: "ai-10",
        question: "What is the danger of using anthropomorphic language when describing AI?",
        options: [
          "It leads to false expectations and failures, masking the lack of genuine human abilities",
          "It makes AI systems too expensive to develop",
          "It requires more computational resources",
          "It violates privacy regulations"
        ],
        correct: 0,
        explanation: "Attributing human traits ('think,' 'see') to AI is dangerous as it leads to false expectations and failures, masking the lack of genuine human abilities."
      },
      {
        id: "ai-11",
        question: "In which tasks do machines generally outperform humans?",
        options: [
          "Maths/logic, board games, and some complex computer games",
          "Communication with other humans and emotional understanding",
          "Creative writing and artistic expression",
          "Physical manipulation and fine motor skills"
        ],
        correct: 0,
        explanation: "Machines generally outperform humans in tasks like maths/logic, board games (chess, go), and some complex computer games (Starcraft II, Dota 2)."
      },
      {
        id: "ai-12",
        question: "What are the two meanings of 'Strong AI'?",
        options: [
          "Searle's philosophical claim vs. Futurist AGI (human-level ability across tasks)",
          "Supervised learning vs. Unsupervised learning",
          "Rule-based systems vs. Machine learning",
          "Narrow AI vs. General AI"
        ],
        correct: 0,
        explanation: "Strong AI has two meanings: 1) Searle's Philosophical 'Strong AI' (claim that a program literally possesses a mind - rejected by most philosophers), and 2) Futurist/Popular 'Strong AI' (refers to AGI - human-level ability across any cognitive task)."
      }
    ]
  },
  {
    id: 2,
    title: "Optimization & Search",
    icon: "🔍",
    description: "Optimization techniques, search methods, gradient descent, and the No Free Lunch Theorem",
    color: "#ec4899",
    questions: [
      {
        id: "opt-1",
        question: "What is the main problem with exhaustive search for large problems?",
        options: [
          "It gets stuck in local optima and cannot escape",
          "It is computationally infeasible due to exponential complexity",
          "It only works for continuous problems, not discrete ones",
          "It cannot find the optimal solution, only approximate ones"
        ],
        correct: 1,
        explanation: "Exhaustive search tests all possible solutions and guarantees finding the optimum, but is computationally infeasible for large problems (e.g., TSP with 70 cities has N! > 10^100 solutions)."
      },
      {
        id: "opt-2",
        question: "What does the gradient $\\nabla f(x)$ represent in optimization?",
        options: [
          "The direction in which $f(x)$ increases the most",
          "The direction in which $f(x)$ decreases the most",
          "The minimum value of the function at point x",
          "The optimal solution to the optimization problem"
        ],
        correct: 0,
        explanation: "The gradient $\\nabla f(x)$ indicates the direction in which $f(x)$ increases the most, used in gradient ascent/descent algorithms."
      },
      {
        id: "opt-3",
        question: "What is the key feature of Simulated Annealing?",
        options: [
          "It always moves to better solutions, never accepting worse ones",
          "It uses gradient information to guide the search direction",
          "It probabilistically accepts worse solutions to escape local optima",
          "It evaluates all possible solutions before making a decision"
        ],
        correct: 2,
        explanation: "Simulated Annealing aims to escape local optima by accepting worse solutions probabilistically, with acceptance probability decreasing as temperature decreases."
      },
      {
        id: "opt-4",
        question: "What does the No Free Lunch Theorem state?",
        options: [
          "All optimization algorithms are equally good across all problem types",
          "No search method is best for all problems",
          "Optimization problems cannot be solved efficiently without domain knowledge",
          "Free computational resources don't exist in computer science"
        ],
        correct: 1,
        explanation: "The No Free Lunch Theorem states that no search method is best for all problems. The choice of method and search operators must suit the specific problem."
      },
      {
        id: "opt-5",
        question: "In gradient descent, what is the update rule for $x$?",
        options: [
          "$x^{(k+1)} = x^{(k)} + \\gamma \\nabla f(x^{(k)})$",
          "$x^{(k+1)} = x^{(k)} - \\gamma \\nabla f(x^{(k)})$",
          "$x^{(k+1)} = x^{(k)} - \\frac{\\gamma}{\\nabla f(x^{(k)})}$",
          "$x^{(k+1)} = \\gamma \\nabla f(x^{(k)}) - x^{(k)}$"
        ],
        correct: 1,
        explanation: "For gradient descent (minimization), the update rule is $x^{(k+1)} = x^{(k)} - \\gamma \\nabla f(x^{(k)})$, where $\\gamma$ is the learning rate. For ascent, we add instead of subtract."
      },
      {
        id: "opt-6",
        question: "What is the difference between continuous and discrete optimization?",
        options: [
          "Continuous finds minima/maxima of functions, discrete finds items with specified properties",
          "Continuous uses gradient descent, discrete always uses exhaustive search",
          "Continuous is easier than discrete and always finds global optima",
          "There is no difference; both use the same algorithms"
        ],
        correct: 0,
        explanation: "Continuous optimization is concerned with finding maxima and minima of functions, while discrete optimization involves finding an item with specified properties among a collection of items."
      },
      {
        id: "opt-7",
        question: "What is the main strategy of Greedy Search?",
        options: [
          "Making locally optimal choices hoping for a global optimum",
          "Evaluating all possible solutions before making a decision",
          "Randomly selecting solutions to explore the search space",
          "Using gradient information to guide the search direction"
        ],
        correct: 0,
        explanation: "Greedy search generates and evaluates only a single solution, making several locally optimal choices, hoping these lead to a global optimum."
      },
      {
        id: "opt-8",
        question: "What parameter controls the step size in gradient descent?",
        options: [
          "The learning rate ($\\gamma$)",
          "The gradient magnitude $|\\nabla f(x)|$",
          "The momentum coefficient",
          "The temperature parameter"
        ],
        correct: 0,
        explanation: "The learning rate ($\\gamma$) controls the step size in gradient descent, determining how far we move in the direction of the gradient."
      },
      {
        id: "opt-9",
        question: "What is Hill Climbing in optimization?",
        options: [
          "A search method that moves toward better local solutions",
          "A method that always finds the global optimum",
          "A technique that uses gradient information exclusively",
          "An algorithm that evaluates all possible solutions"
        ],
        correct: 0,
        explanation: "Hill Climbing is a search method that moves toward better local solutions, similar to gradient ascent but can be applied to discrete problems."
      },
      {
        id: "opt-10",
        question: "Why is exhaustive search computationally infeasible for the Traveling Salesman Problem with 70 cities?",
        options: [
          "The number of possible solutions exceeds $10^{100}$ (factorial growth)",
          "It requires too much memory to store all solutions",
          "It needs specialized hardware that doesn't exist",
          "The problem is inherently unsolvable"
        ],
        correct: 0,
        explanation: "For TSP with 70 cities, there are $N!$ possible solutions. Since $70! > 10^{100}$, exhaustive search is computationally infeasible."
      },
      {
        id: "opt-11",
        question: "What is the difference between gradient ascent and gradient descent?",
        options: [
          "Ascent adds the gradient (maximization), descent subtracts it (minimization)",
          "Ascent is for discrete problems, descent is for continuous problems",
          "Ascent uses larger learning rates, descent uses smaller ones",
          "There is no difference; they are the same algorithm"
        ],
        correct: 0,
        explanation: "Gradient ascent uses $x^{(k+1)} = x^{(k)} + \\gamma \\nabla f(x^{(k)})$ for maximization, while gradient descent uses subtraction for minimization."
      },
      {
        id: "opt-12",
        question: "What does optimization require?",
        options: [
          "A numerical representation, a quality function, and a way to find max/min",
          "Only a quality function and gradient information",
          "Only labeled training data",
          "Only discrete search space"
        ],
        correct: 0,
        explanation: "Optimization requires a numerical representation ($\\mathbf{x}$), a quality function $f(\\mathbf{x})$, and a way to find $\\max f(\\mathbf{x})$ (benefit) or $\\min f(\\mathbf{x})$ (cost)."
      }
    ]
  },
  {
    id: 3,
    title: "Machine Learning Paradigms",
    icon: "🤖",
    description: "Supervised, unsupervised, and reinforcement learning concepts",
    color: "#10b981",
    questions: [
      {
        id: "ml-1",
        question: "What type of data is used in supervised learning?",
        options: [
          "Labeled data (x and y)",
          "Unlabeled data (only x)",
          "Reward signals and punishments",
          "No data is needed, only rules"
        ],
        correct: 0,
        explanation: "Supervised learning uses labeled data where each input $x$ has a corresponding label $y$, and the goal is to learn the mapping $f: x \\to y$."
      },
      {
        id: "ml-2",
        question: "What is the primary goal of unsupervised learning?",
        options: [
          "To predict labels on unseen items using learned patterns",
          "To maximize reward through trial and error",
          "To learn something interesting about the distribution of data",
          "To classify data into predefined categories with known labels"
        ],
        correct: 2,
        explanation: "Unsupervised learning works with unlabeled data and aims to learn something interesting about the distribution of x's, identify similarities, and categorize without predefined labels."
      },
      {
        id: "ml-3",
        question: "Which machine learning paradigm is used for complex game playing?",
        options: [
          "Reinforcement Learning",
          "Supervised Learning with labeled game states",
          "Unsupervised Learning to discover game patterns",
          "Transfer Learning from pre-trained game models"
        ],
        correct: 0,
        explanation: "Reinforcement Learning uses training with rewards and punishments to adapt behavior and maximize reward, making it ideal for complex game playing."
      },
      {
        id: "ml-4",
        question: "What is the difference between binary and multiclass classification?",
        options: [
          "Binary has two classes, multiclass has three or more classes",
          "Binary uses neural networks, multiclass uses decision trees",
          "Binary is supervised, multiclass is unsupervised",
          "Binary requires more training data than multiclass"
        ],
        correct: 0,
        explanation: "Binary classification involves two classes (e.g., spam/no spam), while multiclass classification involves three or more classes (e.g., recognizing 10 different handwritten digits)."
      },
      {
        id: "ml-5",
        question: "What is a feature vector in machine learning?",
        options: [
          "A numerical representation of an object's attributes ($x_1, x_2, \\ldots, x_m$)",
          "A vector pointing in the direction of optimization (gradient)",
          "The output of a classifier (predicted labels)",
          "A vector of labels for training examples"
        ],
        correct: 0,
        explanation: "A feature vector is a numerical representation of an object's attributes, written as $x = (x_1, x_2, \\ldots, x_m)$, used to transform prediction tasks into mathematical operations."
      },
      {
        id: "ml-6",
        question: "Which of the following is an unsupervised learning task?",
        options: [
          "K-means clustering",
          "Email spam detection with labeled examples",
          "Image classification with known categories",
          "Sentiment analysis with labeled reviews"
        ],
        correct: 0,
        explanation: "K-means clustering is an unsupervised learning task that groups data without labels. The other options require labeled training data (supervised learning)."
      },
      {
        id: "ml-7",
        question: "What does generalization mean in machine learning?",
        options: [
          "Applying learned patterns to analyze new, unseen data",
          "Making the model more complex with additional layers",
          "Using general-purpose programming languages instead of specialized ones",
          "Simplifying the model to reduce computational cost"
        ],
        correct: 0,
        explanation: "Generalization is the ability to apply learned patterns from training data to analyze new, unseen data successfully."
      },
      {
        id: "ml-8",
        question: "What type of features can be used in classification?",
        options: [
          "Both categorical and numerical features",
          "Only numerical features (real numbers)",
          "Only categorical features (discrete categories)",
          "Neither, only image pixels or text tokens"
        ],
        correct: 0,
        explanation: "Features can be both categorical (e.g., format: html/text) or numerical (e.g., number of characters/lines), and both can be used in classification tasks."
      },
      {
        id: "ml-9",
        question: "What is the MNIST dataset?",
        options: [
          "A dataset of 10 different handwritten digits (0-9) used for classification",
          "A dataset of natural images with 22,000 classes",
          "A dataset of text documents for sentiment analysis",
          "A dataset of audio recordings for speech recognition"
        ],
        correct: 0,
        explanation: "MNIST is a dataset of hand-written digits with 10 classes (digits 0-9), commonly used for multiclass classification tasks."
      },
      {
        id: "ml-10",
        question: "What is ImageNet?",
        options: [
          "A dataset with 15 million images and 22,000 classes used for image classification",
          "A dataset of 10 handwritten digits",
          "A dataset of text documents",
          "A dataset of audio recordings"
        ],
        correct: 0,
        explanation: "ImageNet is a large-scale dataset with 15 million images and 22,000 classes, used for image classification tasks."
      },
      {
        id: "ml-11",
        question: "What is a feature vector in machine learning?",
        options: [
          "A numerical representation $(x_1, x_2, \\ldots, x_m)$ that transforms prediction tasks into mathematical operations",
          "A vector pointing in the direction of optimization",
          "The output of a classifier",
          "A vector of labels for training examples"
        ],
        correct: 0,
        explanation: "A feature vector is a numerical representation $\\mathbf{x} = (x_1, x_2, \\ldots, x_m)$ used to transform prediction tasks into mathematical operations."
      },
      {
        id: "ml-12",
        question: "What is the main difference between rule-based AI and Machine Learning?",
        options: [
          "Rule-based uses deduction and explicit rules; ML uses induction and adapts to data",
          "Rule-based is faster; ML is slower",
          "Rule-based works with images; ML works with text",
          "There is no difference"
        ],
        correct: 0,
        explanation: "Rule-based AI relies on logic, deduction, and explicit coding of knowledge as formulas or rules. Machine Learning focuses on induction rather than deduction, allowing systems to adapt to the environment."
      }
    ]
  },
  {
    id: 4,
    title: "Linear Models & Perceptron",
    icon: "📊",
    description: "Perceptron, linear regression, multi-class strategies, and logistic regression",
    color: "#f59e0b",
    questions: [
      {
        id: "lin-1",
        question: "What does a perceptron compute?",
        options: [
          "A weighted sum of inputs with a binary threshold activation",
          "The mean of all inputs followed by normalization",
          "The maximum input value across all features",
          "The derivative of the loss function with respect to weights"
        ],
        correct: 0,
        explanation: "A perceptron computes a weighted sum of inputs ($z = b + \\sum w_i x_i$) and applies a binary, threshold-based activation function to determine the output (0 or 1)."
      },
      {
        id: "lin-2",
        question: "What loss function does linear regression minimize?",
        options: [
          "Mean Squared Error (MSE)",
          "Cross-Entropy Loss for classification",
          "Hinge Loss for support vector machines",
          "KL Divergence for probability distributions"
        ],
        correct: 0,
        explanation: "Linear regression seeks to minimize the Mean Squared Error (MSE) loss function: $\\frac{1}{N}\\sum(t_j - \\sum w_i x_{j,i})^2$."
      },
      {
        id: "lin-3",
        question: "What is the advantage of the MSE loss function being convex?",
        options: [
          "There is only one global minimum, avoiding local optima",
          "It is easier to compute than non-convex functions",
          "It works with categorical data without encoding",
          "It requires less training data to converge"
        ],
        correct: 0,
        explanation: "Since the MSE function is convex, there is only one global minimum, which avoids the problem of getting stuck in local optima during optimization."
      },
      {
        id: "lin-4",
        question: "In the One vs. Rest (OvR) multi-class strategy, how are ambiguities resolved?",
        options: [
          "The class with the highest prediction score is chosen",
          "Random selection among all matching classes",
          "The first matching class encountered is selected",
          "Multiple labels are assigned to handle ambiguity"
        ],
        correct: 0,
        explanation: "In OvR, when an item falls into multiple classes or no classes, the ambiguity is resolved by selecting the class with the highest prediction score."
      },
      {
        id: "lin-5",
        question: "What does the Softmax function do in multinomial logistic regression?",
        options: [
          "Converts linear outputs to a probability distribution over classes",
          "Selects the maximum value among all outputs",
          "Applies a binary threshold to each output independently",
          "Computes the weighted sum of inputs and bias"
        ],
        correct: 0,
        explanation: "The Softmax function converts linear outputs (z) to a predicted probability distribution over n classes, where values are between 0 and 1 and sum to 1."
      },
      {
        id: "lin-6",
        question: "What is the formula for the Softmax function?",
        options: [
          "$y_j = \\frac{e^{z_j}}{\\sum e^{z_k}}$",
          "$y_j = z_j / \\sum z_k$",
          "$y_j = \\max(z_j)$",
          "$y_j = \\log(z_j)$"
        ],
        correct: 0,
        explanation: "The Softmax function is defined as $y_j = \\frac{e^{z_j}}{\\sum_k e^{z_k}}$, which normalizes exponentials of the inputs to create a probability distribution."
      },
      {
        id: "lin-7",
        question: "What loss function is used with multinomial logistic regression?",
        options: [
          "Cross-Entropy (CE) Loss",
          "Mean Squared Error for regression",
          "Absolute Error (L1 loss)",
          "Hinge Loss for support vector machines"
        ],
        correct: 0,
        explanation: "Multinomial logistic regression uses Cross-Entropy (CE) Loss for training, which is appropriate for probability distributions over multiple classes."
      },
      {
        id: "lin-8",
        question: "Why is gradient descent preferred over the closed-form solution for linear regression?",
        options: [
          "It is less complex for high dimensions (closed-form is O(m³))",
          "It is more accurate and finds better solutions",
          "It always finds the global minimum, unlike closed-form",
          "It doesn't require calculus or matrix operations"
        ],
        correct: 0,
        explanation: "While a closed-form solution exists for linear regression, it is computationally complex for high dimensions ($O(m^3)$), making gradient descent the preferred method for training."
      },
      {
        id: "lin-9",
        question: "What is the decision boundary in a perceptron?",
        options: [
          "The linear boundary where the weighted sum equals zero ($z=0$)",
          "The point where the activation function outputs 0.5",
          "The maximum value of the weighted sum",
          "The gradient of the loss function"
        ],
        correct: 0,
        explanation: "The decision boundary in a perceptron is linear, defined by $z=0$, where $z = b + \\sum w_i x_i$ is the weighted sum."
      },
      {
        id: "lin-10",
        question: "What biological components does the perceptron model?",
        options: [
          "Dendrites (inputs), synapses (weights), cell body (weighted sum), axon (output)",
          "Neurons, glial cells, and synapses only",
          "DNA, chromosomes, and genes",
          "Muscles, bones, and joints"
        ],
        correct: 0,
        explanation: "The perceptron models: dendrites correspond to inputs, synapses to weighted inputs, cell body to weighted sum, and axon to output."
      },
      {
        id: "lin-11",
        question: "What is the computational complexity of the closed-form solution for linear regression?",
        options: [
          "$O(m^3)$ where m is the number of features",
          "$O(m)$ linear in the number of features",
          "$O(m^2)$ quadratic in the number of features",
          "$O(\\log m)$ logarithmic in the number of features"
        ],
        correct: 0,
        explanation: "The closed-form solution for linear regression has computational complexity $O(m^3)$ for high dimensions, making it inefficient compared to gradient descent."
      },
      {
        id: "lin-12",
        question: "In linear regression, what does the function output?",
        options: [
          "The weighted sum of inputs directly ($g(z_j) = z_j$)",
          "A probability distribution over classes",
          "A binary classification (0 or 1)",
          "The gradient of the loss function"
        ],
        correct: 0,
        explanation: "Linear regression outputs the weighted sum of inputs directly, with $g(z_j) = z_j$ (no activation function transformation)."
      }
    ]
  },
  {
    id: 5,
    title: "Deep Learning & Neural Networks",
    icon: "🧬",
    description: "Deep networks, CNNs, RNNs, backpropagation, and embeddings",
    color: "#8b5cf6",
    questions: [
      {
        id: "dl-1",
        question: "What was the breakthrough moment for deep learning?",
        options: [
          "AlexNet winning the 2012 ImageNet competition",
          "The invention of the perceptron in 1958",
          "The development of backpropagation in 1986",
          "The Turing Test in 1950"
        ],
        correct: 0,
        explanation: "The breakthrough was the 2012 ImageNet competition, where AlexNet (a deep neural network) won, dropping the error rate from 26% to 16%."
      },
      {
        id: "dl-2",
        question: "What is the preferred activation function in deep networks?",
        options: [
          "ReLU (Rectified Linear Unit)",
          "Sigmoid for smooth gradients",
          "Tanh for zero-centered outputs",
          "Step function for binary classification"
        ],
        correct: 0,
        explanation: "The Rectified Linear Unit (ReLU), defined as $\\text{ReLU}(x) = \\max(x, 0)$, is the preferred activation function in deep networks due to its computational advantages."
      },
      {
        id: "dl-3",
        question: "What does the Universal Approximation Theorem state?",
        options: [
          "Any continuous function can be approximated by a neural network with one hidden layer and infinite nodes",
          "Neural networks can solve any problem without limitations",
          "Deep networks are always better than shallow networks",
          "All functions are continuous and can be learned"
        ],
        correct: 0,
        explanation: "The Universal Approximation Theorem states that any continuous function can be approximated by a neural network with one hidden layer, a non-linear activation function, and an infinite number of nodes."
      },
      {
        id: "dl-4",
        question: "What is backpropagation?",
        options: [
          "An algorithm to reduce loss by applying gradient descent iteratively across layers",
          "A type of neural network architecture with backward connections",
          "A method for data preprocessing and normalization",
          "A technique for data augmentation through transformations"
        ],
        correct: 0,
        explanation: "Backpropagation is the algorithm used to reduce the loss function in neural networks by applying gradient descent iteratively across the layers."
      },
      {
        id: "dl-5",
        question: "What do early layers of a deep network typically learn?",
        options: [
          "Simple patterns like edges",
          "Abstract concepts and high-level features",
          "Final classifications and decision boundaries",
          "Complete objects and full scene understanding"
        ],
        correct: 0,
        explanation: "Each layer learns hierarchical representations—early layers learn simple patterns like edges, while deeper layers capture more abstract concepts."
      },
      {
        id: "dl-6",
        question: "What is the main advantage of CNNs for image processing?",
        options: [
          "They use convolutional layers designed for spatial relationships in images",
          "They require less data than other network types",
          "They train faster than all other architectures",
          "They don't need backpropagation for learning"
        ],
        correct: 0,
        explanation: "CNNs (Convolutional Neural Networks) were originally developed for image tasks and use convolutional layers that are specifically designed to capture spatial relationships in images."
      },
      {
        id: "dl-7",
        question: "Why are word embeddings better than one-hot encoding for language?",
        options: [
          "They represent words in lower dimensions with semantic relationships",
          "They are easier to compute and require less memory",
          "They work with any alphabet without preprocessing",
          "They don't require training and can be used directly"
        ],
        correct: 0,
        explanation: "Word embeddings represent each word with a fixed-dimension vector (50-300 dimensions) where similar words have similar vectors, unlike one-hot encoding which uses inefficient 100,000+ dimension sparse vectors."
      },
      {
        id: "dl-8",
        question: "What is the current state ($h_t$) in an RNN determined by?",
        options: [
          "Both the current input ($x_t$) and previous state ($h_{t-1}$)",
          "Only the current input ($x_t$), independent of history",
          "Only the previous state ($h_{t-1}$), ignoring current input",
          "The final output from the last time step"
        ],
        correct: 0,
        explanation: "In RNNs, the current state $h_t$ is determined by both the current input $x_t$ and the state $h_{t-1}$ at time $t-1$, allowing the network to maintain temporal dependencies."
      },
      {
        id: "dl-9",
        question: "What breakthrough technology enabled the deep learning revolution?",
        options: [
          "GPUs (Graphics Processing Units)",
          "CPUs with increased clock speeds",
          "Quantum computers for parallel computation",
          "Cloud computing infrastructure"
        ],
        correct: 0,
        explanation: "GPUs (Graphics Processing Units) were crucial for the deep learning revolution, providing the powerful parallel processing needed for training deep networks."
      },
      {
        id: "dl-10",
        question: "What architecture is used for machine translation?",
        options: [
          "Encoder-Decoder architecture",
          "Simple feedforward network with fully connected layers",
          "CNN only for spatial feature extraction",
          "Single layer perceptron for binary classification"
        ],
        correct: 0,
        explanation: "Machine translation uses an Encoder-Decoder architecture, typically trained on large amounts of bi-text (sentence pairs aligned between two languages)."
      },
      {
        id: "dl-11",
        question: "What are the weight matrices in deep feed-forward networks?",
        options: [
          "One matrix of weights associated with each layer",
          "A single weight matrix shared across all layers",
          "No weight matrices; only activation functions",
          "Weight matrices only in the output layer"
        ],
        correct: 0,
        explanation: "Deep feed-forward networks have one matrix of weights associated with each layer, connecting nodes from one layer to the next."
      },
      {
        id: "dl-12",
        question: "What software frameworks handle backpropagation automatically?",
        options: [
          "TensorFlow and PyTorch",
          "NumPy and SciPy only",
          "Scikit-learn and Pandas",
          "Matplotlib and Seaborn"
        ],
        correct: 0,
        explanation: "Software frameworks like TensorFlow and PyTorch handle the backpropagation automatically once the forward architecture is defined."
      },
      {
        id: "dl-13",
        question: "In RNNs, what are the weight matrices U, W, and V?",
        options: [
          "Weights shared across all time steps: U (input), W (hidden), V (output)",
          "Different weights for each time step",
          "Only activation functions, not weights",
          "Weights only in the first layer"
        ],
        correct: 0,
        explanation: "In RNNs, the weights (matrices U for input, W for hidden state, and V for output) are shared across all layers in the unfolded network."
      },
      {
        id: "dl-14",
        question: "What is the task of a language model?",
        options: [
          "To predict the next word in a sequence",
          "To classify text into categories",
          "To translate between languages",
          "To generate random text"
        ],
        correct: 0,
        explanation: "The task of a language model is typically to predict the next word, which is supervised learning from self-labeled text data."
      },
      {
        id: "dl-15",
        question: "How is machine translation trained?",
        options: [
          "Auto-regressively on the sequence: source sentence <s> target sentence",
          "With separate encoders and decoders trained independently",
          "Using only the source language without target",
          "With random word order"
        ],
        correct: 0,
        explanation: "Machine translation networks are trained auto-regressively on the sequence: source sentence <s> target sentence, where <s> is an end-of-sequence token."
      },
      {
        id: "dl-16",
        question: "How is a color image represented in CNNs?",
        options: [
          "As an $m \\times n \\times 3$ input vector (height × width × RGB channels)",
          "As a single grayscale value",
          "As text descriptions",
          "As audio waveforms"
        ],
        correct: 0,
        explanation: "In image classification, a color image can be represented as an $m \\times n \\times 3$ input vector (height × width × RGB channels)."
      }
    ]
  },
  {
    id: 6,
    title: "Evolutionary Algorithms",
    icon: "🧬",
    description: "Genetic algorithms, fitness functions, selection, crossover, and mutation",
    color: "#06b6d4",
    questions: [
      {
        id: "ea-1",
        question: "What biological process inspired Evolutionary Algorithms?",
        options: [
          "Natural Selection",
          "Photosynthesis for energy optimization",
          "Cellular respiration for metabolic processes",
          "DNA replication for genetic copying"
        ],
        correct: 0,
        explanation: "Evolutionary Algorithms are inspired by Biological Evolution, particularly Natural Selection, where traits providing a fitness advantage become more common through reproduction and survival."
      },
      {
        id: "ea-2",
        question: "What is the difference between genotype and phenotype?",
        options: [
          "Genotype is the full set of genes; phenotype is the observable traits",
          "There is no difference; they are interchangeable terms",
          "Genotype is for animals; phenotype is for plants",
          "Phenotype is the DNA sequence; genotype is the expression"
        ],
        correct: 0,
        explanation: "Genotype is the full set of genes (genetic information), while phenotype is the observable traits that result from the genotype and environment."
      },
      {
        id: "ea-3",
        question: "What is the purpose of the fitness function in EAs?",
        options: [
          "To assign a quality score to each individual enabling selection",
          "To create random solutions for initialization",
          "To stop the algorithm when convergence is reached",
          "To initialize the population with diverse individuals"
        ],
        correct: 0,
        explanation: "The fitness function assigns a single real-valued fitness score to each individual, representing the quality of the solution, which enables selection of better solutions."
      },
      {
        id: "ea-4",
        question: "What is Fitness-Proportionate Selection (FPS)?",
        options: [
          "Selection probability is proportional to fitness",
          "All individuals have equal selection probability regardless of fitness",
          "Only the fittest individual is selected, ignoring others",
          "Random selection without considering fitness scores"
        ],
        correct: 0,
        explanation: "In Fitness-Proportionate Selection, the probability of selecting an individual is proportional to its fitness score, favoring better solutions while maintaining diversity."
      },
      {
        id: "ea-5",
        question: "What is the purpose of mutation in EAs?",
        options: [
          "To introduce random changes for diversity",
          "To combine parent solutions through crossover",
          "To evaluate fitness of individuals",
          "To stop the algorithm when optimal solution is found"
        ],
        correct: 0,
        explanation: "Mutation introduces random changes to offspring's genes to maintain diversity in the population and help explore new areas of the solution space."
      },
      {
        id: "ea-6",
        question: "What is elitism in survivor selection?",
        options: [
          "Always keeping the N fittest solution(s) found so far",
          "Selecting only random individuals for diversity",
          "Removing all previous solutions each generation",
          "Selecting the weakest individuals to maintain balance"
        ],
        correct: 0,
        explanation: "Elitism is a strategy that always keeps the N fittest solution(s) found so far, ensuring that the best solutions are never lost across generations."
      },
      {
        id: "ea-7",
        question: "What is the difference between (μ, λ) and (μ+λ) selection?",
        options: [
          "(μ,λ) chooses from offspring only; (μ+λ) chooses from both parents and offspring",
          "No difference; they are equivalent selection strategies",
          "(μ,λ) is for maximization; (μ+λ) is for minimization",
          "(μ,λ) uses mutation; (μ+λ) doesn't use mutation"
        ],
        correct: 0,
        explanation: "(μ,λ)-selection chooses the best μ individuals only from the offspring (λ), while (μ+λ)-selection chooses from both parents and offspring, making it an elitist strategy."
      },
      {
        id: "ea-8",
        question: "What is recombination (crossover) in EAs?",
        options: [
          "Combining genetic material from parents to create offspring",
          "Random mutation of genes to introduce variation",
          "Evaluating fitness of individuals in the population",
          "Selecting survivors for the next generation"
        ],
        correct: 0,
        explanation: "Recombination (crossover) combines genetic material (chromosomes) from parent solutions to create offspring, mixing characteristics from both parents."
      },
      {
        id: "ea-9",
        question: "Why is parent selection usually probabilistic rather than deterministic?",
        options: [
          "To push toward higher fitness while helping escape local optima through stochasticity",
          "It's easier to implement than deterministic selection",
          "To slow down the algorithm and prevent premature convergence",
          "It's not probabilistic; it's always deterministic"
        ],
        correct: 0,
        explanation: "Parent selection is usually probabilistic (higher fitness = higher probability) to push the population toward higher fitness, but the stochastic nature helps escape local optima."
      },
      {
        id: "ea-10",
        question: "What is Cycle Crossover used for?",
        options: [
          "Permutation problems like TSP where order matters",
          "Binary string problems with fixed-length chromosomes",
          "Continuous optimization with real-valued parameters",
          "Classification tasks with discrete class labels"
        ],
        correct: 0,
        explanation: "Cycle Crossover is a complex recombination operator designed for permutation problems like the Traveling Salesman Problem (TSP), where order/adjacency matters and it preserves absolute positions of alleles."
      },
      {
        id: "ea-11",
        question: "What is Uniform Selection in parent selection?",
        options: [
          "Every individual has the same probability to be selected",
          "Selection probability is proportional to fitness",
          "Only the fittest individual is selected",
          "Random selection without considering fitness"
        ],
        correct: 0,
        explanation: "Uniform Selection gives every individual the same probability to be selected, regardless of fitness."
      },
      {
        id: "ea-12",
        question: "What are DNA, Chromosomes, and Genes in the biological context?",
        options: [
          "DNA is hereditary material; Chromosomes are strings of DNA; Genes encode traits with variations called alleles",
          "They are all the same thing",
          "Genes are DNA; Chromosomes are genes",
          "They are unrelated to evolutionary algorithms"
        ],
        correct: 0,
        explanation: "DNA is the hereditary material. Chromosomes are strings of DNA containing genes. Genes encode traits, having variations called alleles."
      },
      {
        id: "ea-13",
        question: "What is fitness in evolutionary algorithms?",
        options: [
          "A real-valued score representing the quality of a solution, enabling selection",
          "The number of generations the algorithm runs",
          "The size of the population",
          "The mutation rate"
        ],
        correct: 0,
        explanation: "Fitness reflects how well an organism (solution) reproduces before it dies. In EAs, it's a real-valued score representing solution quality."
      },
      {
        id: "ea-14",
        question: "What are termination conditions in evolutionary algorithms?",
        options: [
          "Maximum generations reached or desired solution quality achieved",
          "Only when all individuals are identical",
          "Only when the population size reaches zero",
          "Only when mutation rate becomes zero"
        ],
        correct: 0,
        explanation: "Termination stops the algorithm when conditions are met, such as maximum generations or desired solution quality."
      }
    ]
  },
  {
    id: 7,
    title: "Evaluation & Metrics",
    icon: "📈",
    description: "Confusion matrix, accuracy, precision, recall, F-score, ROC curves, and cross-validation",
    color: "#ef4444",
    questions: [
      {
        id: "eval-1",
        question: "Why is evaluation on training data alone unreliable?",
        options: [
          "It doesn't predict future performance on unseen data",
          "Training data is usually incorrect or contains errors",
          "It takes too long to compute on large datasets",
          "Training data is too small to be representative"
        ],
        correct: 0,
        explanation: "Performance on training data alone is unreliable for predicting future performance because the model may have overfitted to the training data and won't generalize well to new, unseen data."
      },
      {
        id: "eval-2",
        question: "What is a True Positive (TP)?",
        options: [
          "Predicted positive, actually positive",
          "Predicted positive, actually negative",
          "Predicted negative, actually positive",
          "Predicted negative, actually negative"
        ],
        correct: 0,
        explanation: "A True Positive (TP) occurs when the model predicted positive and the actual label is also positive - a correct positive prediction."
      },
      {
        id: "eval-3",
        question: "What is a False Positive also known as?",
        options: [
          "Type I error",
          "Type II error",
          "Type III error",
          "Correct classification"
        ],
        correct: 0,
        explanation: "A False Positive (predicted positive, actually negative) is also known as a Type I error."
      },
      {
        id: "eval-4",
        question: "What does Precision measure?",
        options: [
          "Accuracy of positive predictions: $\\frac{TP}{TP + FP}$",
          "Percentage of actual positives found: $\\frac{TP}{TP + FN}$",
          "Overall accuracy: $\\frac{TP + TN}{TP + TN + FP + FN}$",
          "True negative rate: $\\frac{TN}{TN + FP}$"
        ],
        correct: 0,
        explanation: "Precision measures the accuracy of positive predictions: $\\frac{TP}{TP + FP}$. It focuses on minimizing False Positives."
      },
      {
        id: "eval-5",
        question: "What does Recall (Sensitivity) measure?",
        options: [
          "Percentage of actual positives found: $\\frac{TP}{TP + FN}$",
          "Accuracy of positive predictions: $\\frac{TP}{TP + FP}$",
          "Overall accuracy: $\\frac{TP + TN}{TP + TN + FP + FN}$",
          "True negative rate: $\\frac{TN}{TN + FP}$"
        ],
        correct: 0,
        explanation: "Recall (Sensitivity or True Positive Rate) measures the percentage of actual positives that were correctly identified: $\\frac{TP}{TP + FN}$. It focuses on minimizing False Negatives."
      },
      {
        id: "eval-6",
        question: "What is the F1 score?",
        options: [
          "The harmonic mean of precision and recall",
          "The arithmetic mean of precision and recall",
          "The sum of precision and recall",
          "The maximum of precision and recall"
        ],
        correct: 0,
        explanation: "The F1 score (F-score) is the harmonic mean of precision and recall, providing a single metric that balances both measures."
      },
      {
        id: "eval-7",
        question: "Why can accuracy be misleading?",
        options: [
          "It can be misleading with imbalanced datasets",
          "It's difficult to compute for large datasets",
          "It only works for binary classification, not multiclass",
          "It requires too much data to be reliable"
        ],
        correct: 0,
        explanation: "Accuracy can be misleading in imbalanced datasets. For example, if 95% of samples are negative, a model that always predicts negative achieves 95% accuracy but is useless."
      },
      {
        id: "eval-8",
        question: "What does the ROC curve plot?",
        options: [
          "True Positive Rate vs. False Positive Rate",
          "Precision vs. Recall across thresholds",
          "Accuracy vs. threshold",
          "Training error vs. test error"
        ],
        correct: 0,
        explanation: "The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate (TPR) against the False Positive Rate (FPR) across a range of thresholds."
      },
      {
        id: "eval-9",
        question: "What does AUC = 1.00 indicate in a ROC curve?",
        options: [
          "The model is perfect",
          "The model is random (AUC = 0.5)",
          "The model is overfitted to training data",
          "The model is biased toward one class"
        ],
        correct: 0,
        explanation: "AUC (Area Under the Curve) = 1.00 indicates a perfect model that can perfectly separate positive and negative classes at some threshold."
      },
      {
        id: "eval-10",
        question: "When are Precision-Recall curves more useful than ROC curves?",
        options: [
          "For imbalanced datasets where the positive class is rare",
          "For balanced datasets with equal class distribution",
          "For regression problems with continuous outputs",
          "They are never more useful; ROC is always better"
        ],
        correct: 0,
        explanation: "Precision-Recall curves are often more useful than ROC curves when dealing with imbalanced datasets where the positive class is rare, as they focus more on the minority class performance."
      },
      {
        id: "eval-11",
        question: "What is the purpose of cross-validation?",
        options: [
          "To get robust internal validation by partitioning data into k folds",
          "To increase training data size by reusing samples",
          "To test the final model on unseen data",
          "To clean the data by removing outliers"
        ],
        correct: 0,
        explanation: "Cross-validation (e.g., k-fold) involves randomly partitioning the non-test data into k folds for robust internal validation, reducing the variance of performance estimates."
      },
      {
        id: "eval-12",
        question: "What is required for unbiased estimation?",
        options: [
          "Setting aside a test set before experimentation and using it only once on the final model",
          "Using all data for training to maximize model performance",
          "Using cross-validation on all available data",
          "Training multiple models and selecting the best one"
        ],
        correct: 0,
        explanation: "Unbiased estimation requires that the test set be set aside before any experimentation begins and used only for a single analysis on the final model, preventing information leakage."
      },
      {
        id: "eval-13",
        question: "What is a True Negative (TN)?",
        options: [
          "Predicted negative, actually negative",
          "Predicted positive, actually positive",
          "Predicted positive, actually negative",
          "Predicted negative, actually positive"
        ],
        correct: 0,
        explanation: "A True Negative (TN) occurs when the model predicted negative and the actual label is also negative - a correct negative prediction."
      },
      {
        id: "eval-14",
        question: "What is the False Positive Rate (FPR)?",
        options: [
          "$\\frac{FP}{FP + TN}$ - proportion of negatives incorrectly predicted as positive",
          "$\\frac{TP}{TP + FP}$ - accuracy of positive predictions",
          "$\\frac{TP}{TP + FN}$ - percentage of actual positives found",
          "$\\frac{TN}{TN + FP}$ - true negative rate"
        ],
        correct: 0,
        explanation: "False Positive Rate (FPR) is $\\frac{FP}{FP + TN}$, measuring the proportion of negatives incorrectly predicted as positive."
      },
      {
        id: "eval-15",
        question: "What is a key property of AUC (Area Under the ROC Curve)?",
        options: [
          "It is invariant to score transformations (e.g., scaling all scores by 1/10)",
          "It changes when scores are transformed",
          "It only works for balanced datasets",
          "It requires normalized scores"
        ],
        correct: 0,
        explanation: "AUC is notably invariant to score transformations (e.g., scaling all scores by $1/10$), making it robust to different scoring scales."
      },
      {
        id: "eval-16",
        question: "What is AUC-PR (Area Under the Precision-Recall Curve) also known as?",
        options: [
          "Average Precision (AP)",
          "F1 Score",
          "Accuracy",
          "Recall"
        ],
        correct: 0,
        explanation: "AUC-PR (Area Under the PR Curve) is also known as Average Precision (AP), and higher values indicate better performance."
      },
      {
        id: "eval-17",
        question: "How should data be split for repeated development (model tuning)?",
        options: [
          "Training and Validation set for iterative development, and a final Test set",
          "Only Training and Test sets",
          "All data for training only",
          "Only Test set, no training data"
        ],
        correct: 0,
        explanation: "For repeated development (model tuning), data should be split into a large Training and Validation set for iterative development, and a final Test set."
      }
    ]
  },
  {
    id: 8,
    title: "Unsupervised Learning",
    icon: "🔮",
    description: "Clustering, dimensionality reduction, autoencoders, and generative models",
    color: "#84cc16",
    questions: [
      {
        id: "unsup-1",
        question: "What type of data does unsupervised learning work with?",
        options: [
          "Unlabeled data (only x)",
          "Labeled data (x and y)",
          "Reward signals and punishments",
          "Bi-text data with aligned sentence pairs"
        ],
        correct: 0,
        explanation: "Unsupervised learning works with unlabeled data where we only have feature vectors x (no labels y), and the goal is to discover patterns or structure."
      },
      {
        id: "unsup-2",
        question: "What is the goal of k-means clustering?",
        options: [
          "To group data into k clusters based on similarity",
          "To predict labels for new data points",
          "To reduce dimensionality of feature vectors",
          "To generate new data samples similar to training data"
        ],
        correct: 0,
        explanation: "K-means clustering is an unsupervised learning algorithm that groups data into k clusters based on similarity, without using any labels."
      },
      {
        id: "unsup-3",
        question: "What is the purpose of dimensionality reduction?",
        options: [
          "To represent data in lower dimensions while preserving important information",
          "To increase the number of features for better classification",
          "To classify data into predefined categories",
          "To clean the data by removing noise and outliers"
        ],
        correct: 0,
        explanation: "Dimensionality reduction aims to represent data in a lower dimension while preserving important information, making it easier to visualize and process."
      },
      {
        id: "unsup-4",
        question: "What is an autoencoder used for?",
        options: [
          "Data compression and learning compressed representations",
          "Classification of data into categories",
          "Optimization of objective functions",
          "Selection of relevant features from data"
        ],
        correct: 0,
        explanation: "Autoencoders are neural networks used for data compression, learning to encode data into a compressed representation and then decode it back."
      },
      {
        id: "unsup-5",
        question: "What is a generative model?",
        options: [
          "A model that learns to generate similar data to the training data",
          "A model that classifies data into predefined categories",
          "A model that compresses data into lower dimensions",
          "A model that evaluates performance metrics"
        ],
        correct: 0,
        explanation: "A generative model learns the underlying distribution of the training data and can generate new, similar data samples."
      },
      {
        id: "unsup-6",
        question: "Which of the following is NOT an unsupervised learning task?",
        options: [
          "Classification with labeled data",
          "Clustering to group similar data points",
          "Dimensionality reduction to compress features",
          "Density estimation to model data distribution"
        ],
        correct: 0,
        explanation: "Classification with labeled data is a supervised learning task, not unsupervised. The others (clustering, dimensionality reduction, density estimation) are unsupervised tasks."
      },
      {
        id: "unsup-7",
        question: "What is PCA (Principal Component Analysis)?",
        options: [
          "A dimensionality reduction technique that finds principal components",
          "A clustering algorithm to group similar data points",
          "A classification method for labeled data",
          "An optimization algorithm for finding minima"
        ],
        correct: 0,
        explanation: "PCA (Principal Component Analysis) is a dimensionality reduction technique that identifies the principal components (directions of maximum variance) in the data."
      },
      {
        id: "unsup-8",
        question: "What are self-organizing maps used for?",
        options: [
          "Dimensionality reduction and visualization",
          "Classification of data into categories",
          "Regression to predict continuous values",
          "Optimization of objective functions"
        ],
        correct: 0,
        explanation: "Self-organizing maps are a type of neural network used for dimensionality reduction and visualization, mapping high-dimensional data to lower dimensions while preserving topology."
      },
      {
        id: "unsup-9",
        question: "What is hierarchical clustering?",
        options: [
          "A clustering method that builds a tree of clusters",
          "A classification method with labeled data",
          "A regression method for continuous outputs",
          "An optimization algorithm"
        ],
        correct: 0,
        explanation: "Hierarchical clustering is an unsupervised learning task that learns how data are grouped by building a tree structure of clusters."
      },
      {
        id: "unsup-10",
        question: "What does PCA (Principal Component Analysis) identify?",
        options: [
          "Principal components (directions of maximum variance) in the data",
          "Clusters of similar data points",
          "Classification boundaries",
          "Optimal feature weights"
        ],
        correct: 0,
        explanation: "PCA is a dimensionality reduction technique that identifies the principal components (directions of maximum variance) in the data."
      },
      {
        id: "unsup-11",
        question: "What is the structure of an autoencoder?",
        options: [
          "An encoder that compresses data and a decoder that reconstructs it",
          "A single layer perceptron",
          "A classifier with multiple output nodes",
          "A regression model with continuous outputs"
        ],
        correct: 0,
        explanation: "Autoencoders are neural networks with an encoder that compresses data into a compressed representation and a decoder that reconstructs it back."
      },
      {
        id: "unsup-12",
        question: "What is density estimation in unsupervised learning?",
        options: [
          "Learning how to generate similar data by modeling the data distribution",
          "Classifying data into predefined categories",
          "Predicting continuous values",
          "Optimizing objective functions"
        ],
        correct: 0,
        explanation: "Density estimation (generative models) involves learning how to generate similar data by learning the underlying distribution of the training data."
      }
    ]
  },
  {
    id: 9,
    title: "Formulas & Math Foundations",
    icon: "📐",
    description: "Mathematical formulas, equations, and their applications in AI/ML",
    color: "#14b8a6",
    questions: [
      {
        id: "form-1",
        question: "What does this formula calculate?\n\n$$z_j^{[k]} = \\sum_{i=0}^{n^{[k-1]}} w_{ij}^{[k]} a_i^{[k-1]}$$",
        options: [
          "The weighted sum in node j in layer k",
          "The activation of node j in layer k after applying activation function",
          "The output of the neural network (final layer)",
          "The gradient of the loss function with respect to weights"
        ],
        correct: 0,
        explanation: "This is the weighted sum formula for node j in layer k. It sums the products of weights and activations from the previous layer."
      },
      {
        id: "form-2",
        question: "What does this formula represent?\n\n$$a_j^{[k]} = g(z_j^{[k]})$$",
        options: [
          "The activation/output of node j in layer k after applying activation function g",
          "The weighted sum in node j before activation",
          "The loss function for node j",
          "The learning rate parameter for layer k"
        ],
        correct: 0,
        explanation: "This represents the activation of node j in layer k, obtained by applying the activation function g to the weighted sum."
      },
      {
        id: "form-3",
        question: "What is this formula?\n\n$$\\text{ReLU}(x) = \\max(x, 0)$$",
        options: [
          "Rectified Linear Unit (ReLU) activation function",
          "Sigmoid activation function: $\\frac{1}{1+e^{-x}}$",
          "Softmax function for multi-class classification",
          "Tanh activation function: $\\frac{e^x - e^{-x}}{e^x + e^{-x}}$"
        ],
        correct: 0,
        explanation: "This is the ReLU (Rectified Linear Unit) activation function, the preferred activation in deep networks. It outputs x if x > 0, otherwise 0."
      },
      {
        id: "form-4",
        question: "What does this formula calculate?\n\n$$\\text{MSE} = \\frac{1}{N} \\sum_{j=1}^{N} (t_j - y_j)^2$$",
        options: [
          "Mean Squared Error for regression",
          "Cross-entropy loss: $-\\sum t_j \\log(y_j)$",
          "Precision: $\\frac{TP}{TP + FP}$",
          "Recall: $\\frac{TP}{TP + FN}$"
        ],
        correct: 0,
        explanation: "This is the Mean Squared Error (MSE) loss function, used in regression tasks. It measures the average squared difference between target values and predicted values."
      },
      {
        id: "form-5",
        question: "What is this the formula for?\n\n$$y_j = \\frac{e^{z_j}}{\\sum_{k=1}^{n} e^{z_k}}$$",
        options: [
          "ReLU activation",
          "Sigmoid function",
          "Softmax function for multi-class classification",
          "Linear activation"
        ],
        correct: 2,
        explanation: "This is the Softmax function used in multinomial logistic regression. It converts linear outputs (z) into a probability distribution over classes."
      },
      {
        id: "form-6",
        question: "What does the gradient $\\nabla f(x)$ represent in this update rule?\n\n$$x^{(k+1)} = x^{(k)} + \\gamma \\nabla f(x^{(k)})$$",
        options: [
          "The minimum of the function",
          "The direction of steepest ascent (maximization)",
          "The learning rate",
          "The loss value"
        ],
        correct: 1,
        explanation: "This is the gradient ascent update rule. The gradient points in the direction of steepest increase, so adding it maximizes f(x). For descent (minimization), we subtract."
      },
      {
        id: "form-7",
        question: "What is $\\gamma$ (gamma) in this formula?\n\n$$x_{i+1} = x_i - \\gamma f'(x_i)$$",
        options: [
          "The gradient",
          "The learning rate (step size)",
          "The loss function",
          "The activation function"
        ],
        correct: 1,
        explanation: "γ (gamma) is the learning rate in gradient descent. It controls how large a step we take in the direction of the gradient."
      },
      {
        id: "form-8",
        question: "What does this formula calculate?\n\n$$\\text{Precision} = \\frac{TP}{TP + FP}$$",
        options: [
          "The percentage of actual positives found",
          "The accuracy of positive predictions",
          "The overall accuracy",
          "The false positive rate"
        ],
        correct: 1,
        explanation: "Precision measures the accuracy of positive predictions: what proportion of items predicted as positive are actually positive. It focuses on minimizing false positives."
      },
      {
        id: "form-9",
        question: "What does this formula calculate?\n\n$$\\text{Recall} = \\frac{TP}{TP + FN}$$",
        options: [
          "The accuracy of positive predictions",
          "The percentage of actual positives that were correctly identified",
          "The overall accuracy",
          "The precision"
        ],
        correct: 1,
        explanation: "Recall (sensitivity or TPR) measures what percentage of actual positive cases were correctly identified. It focuses on minimizing false negatives."
      },
      {
        id: "form-10",
        question: "What is this formula used for in gradient descent?\n\n$$w_{ij} = w_{ij} - \\eta \\frac{\\partial L}{\\partial w_{ij}}$$",
        options: [
          "Calculating the loss",
          "Updating weights to minimize loss",
          "Computing activations",
          "Calculating the gradient"
        ],
        correct: 1,
        explanation: "This is the weight update formula in gradient descent. It adjusts weight by subtracting the learning rate times the partial derivative of the loss with respect to that weight."
      },
      {
        id: "form-11",
        question: "What does this represent?\n\n$$L_{CE}(\\mathbf{y}, \\mathbf{t}) = -\\sum_{j=1}^{n} t_j \\log(y_j)$$",
        options: [
          "Mean Squared Error",
          "Cross-Entropy Loss for classification",
          "ReLU activation",
          "Gradient descent"
        ],
        correct: 1,
        explanation: "This is the Cross-Entropy Loss function used in classification, particularly with softmax. It measures how well the predicted probability distribution matches the true distribution."
      },
      {
        id: "form-12",
        question: "What does this formula describe in evolutionary algorithms?\n\n$$x'_i = x_i + N(0, \\sigma)$$",
        options: [
          "Crossover operation",
          "Fitness evaluation",
          "Mutation with Gaussian noise",
          "Selection probability"
        ],
        correct: 2,
        explanation: "This is the mutation formula in evolutionary algorithms with real-valued representation. It adds Gaussian noise with mean 0 and standard deviation σ to create variation."
      },
      {
        id: "form-13",
        question: "What operation does this formula perform?\n\n$$z_i = \\alpha x_i + (1-\\alpha) y_i \\text{ where } 0 \\leq \\alpha \\leq 1$$",
        options: [
          "Mutation",
          "Selection",
          "Intermediate Recombination (crossover)",
          "Fitness evaluation"
        ],
        correct: 2,
        explanation: "This is the Intermediate Recombination formula in evolutionary algorithms. It creates offspring z by blending parent values x and y with weight α."
      },
      {
        id: "form-14",
        question: "What is the Chain Rule formula used in backpropagation?\n\n$$\\frac{d f(g(x))}{d x} = \\text{?}$$",
        options: [
          "$\\frac{df}{dx} \\times \\frac{dg}{dx}$",
          "$\\frac{df}{dg} \\times \\frac{dg}{dx}$",
          "$\\frac{df}{dx} + \\frac{dg}{dx}$",
          "$\\frac{df}{dg} + \\frac{dg}{dx}$"
        ],
        correct: 1,
        explanation: "The Chain Rule states: df(g(x))/dx = (df/dg) × (dg/dx). This is fundamental to backpropagation for computing gradients through multiple layers."
      },
      {
        id: "form-15",
        question: "What does L2 regularization add to the loss function?\n\n$$R(\\mathbf{w}) = \\sum_{i=0}^{m} w_i^2$$",
        options: [
          "Sum of absolute weights",
          "Sum of squared weights",
          "Product of weights",
          "Maximum weight value"
        ],
        correct: 1,
        explanation: "L2 regularization (Ridge) adds the sum of squared weights to the loss function. This penalizes large weights and helps prevent overfitting."
      },
      {
        id: "form-16",
        question: "What is the difference between L1 and L2 regularization?\n\n$$L1: R(\\mathbf{w}) = \\sum_{i=0}^{m} |w_i| \\quad \\text{vs} \\quad L2: R(\\mathbf{w}) = \\sum_{i=0}^{m} w_i^2$$",
        options: [
          "L1 uses absolute values, L2 uses squares",
          "L1 is for classification, L2 is for regression",
          "L1 is faster to compute",
          "There is no difference"
        ],
        correct: 0,
        explanation: "L1 (Lasso) uses sum of absolute values, while L2 (Ridge) uses sum of squares. L1 tends to create sparse weights (some become exactly 0), while L2 shrinks weights toward 0."
      },
      {
        id: "form-17",
        question: "What does this represent in the perceptron?\n\n$$f(x) = \\begin{cases} 1, & \\text{if } \\sum w \\cdot x + b \\geq 0 \\\\ 0, & \\text{otherwise} \\end{cases}$$",
        options: [
          "The weighted sum",
          "The activation function (threshold-based)",
          "The loss function",
          "The gradient"
        ],
        correct: 1,
        explanation: "This is the binary threshold activation function in a perceptron. It outputs 1 if the weighted sum plus bias is non-negative, otherwise 0."
      },
      {
        id: "form-18",
        question: "In neural networks, what does $\\delta_j$ (delta) represent in backpropagation?",
        options: [
          "The activation value",
          "The error signal/gradient at node j",
          "The weight value",
          "The input value"
        ],
        correct: 1,
        explanation: "Delta (δ) represents the error signal or local gradient at a node during backpropagation. It's used to compute how much each weight should be adjusted."
      },
      {
        id: "form-19",
        question: "What type of crossover is this?\n\n$$\\text{Child} = \\alpha \\times \\text{parent}_1 + (1-\\alpha) \\times \\text{parent}_2$$",
        options: [
          "Single-point crossover",
          "Uniform crossover",
          "Whole Arithmetic Crossover",
          "Cycle crossover"
        ],
        correct: 2,
        explanation: "This is Whole Arithmetic Crossover for real-valued representations in evolutionary algorithms. It creates a weighted average of two parents."
      },
      {
        id: "form-20",
        question: "What does the derivative of ReLU equal?\n\n$$\\text{ReLU}'(x) = \\text{?}$$",
        options: [
          "0 for all x",
          "1 for x > 0, and 0 for x < 0",
          "x for all x",
          "$e^x$"
        ],
        correct: 1,
        explanation: "The derivative of ReLU is 1 when x > 0 (the function is increasing) and 0 when x < 0 (the function is flat). At x = 0, we typically use 0."
      }
    ]
  }
];

// Achievements system
export const achievements = [
  {
    id: "first_quiz",
    title: "First Steps",
    description: "Complete your first quiz",
    icon: "🎯",
    requirement: { type: "quizzes_completed", value: 1 }
  },
  {
    id: "topic_master",
    title: "Topic Master",
    description: "Get 100% on any topic",
    icon: "🏆",
    requirement: { type: "perfect_score", value: 1 }
  },
  {
    id: "dedicated_learner",
    title: "Dedicated Learner",
    description: "Study for 3 days in a row",
    icon: "🔥",
    requirement: { type: "streak", value: 3 }
  },
  {
    id: "knowledge_seeker",
    title: "Knowledge Seeker",
    description: "Complete all 9 topics",
    icon: "📚",
    requirement: { type: "topics_completed", value: 9 }
  },
  {
    id: "speed_demon",
    title: "Speed Demon",
    description: "Complete a quiz in under 2 minutes",
    icon: "⚡",
    requirement: { type: "fast_quiz", value: 120 }
  },
  {
    id: "perfectionist",
    title: "Perfectionist",
    description: "Get 3 perfect scores",
    icon: "💎",
    requirement: { type: "perfect_score", value: 3 }
  },
  {
    id: "exam_ready",
    title: "Exam Ready",
    description: "Score 80%+ on all topics",
    icon: "🎓",
    requirement: { type: "all_topics_80", value: 1 }
  }
];

