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
          "Mental abilities and aptitude in humans",
          "Capacity for flexible, goal-oriented action in diverse environments",
          "Ability to pass the Turing Test",
          "Consciousness and self-awareness"
        ],
        correct: 1,
        explanation: "In AI, intelligence is defined primarily as the capacity for flexible, goal-oriented action in diverse environments, based on maximizing utility from classical decision theory."
      },
      {
        id: "ai-2",
        question: "What does the Turing Test measure?",
        options: [
          "Whether a machine has consciousness",
          "Whether a machine can think like a human",
          "Whether a human judge can distinguish a machine from a human based on behavior",
          "Whether a machine can solve complex mathematical problems"
        ],
        correct: 2,
        explanation: "The Turing Test defines machine intelligence behaviorally: if a human judge cannot reliably distinguish the machine from the human through interaction, the machine passes the test."
      },
      {
        id: "ai-3",
        question: "What is the main criticism presented by Searle's Chinese Room Argument?",
        options: [
          "Machines cannot process information fast enough",
          "Manipulating symbols based on rules does not constitute genuine understanding",
          "Machines lack physical embodiment",
          "Machines cannot learn from experience"
        ],
        correct: 1,
        explanation: "The Chinese Room Argument argues that a person (or machine) manipulating symbols based on rules does not genuinely understand the meaning, only simulates comprehension."
      },
      {
        id: "ai-4",
        question: "What is Artificial General Intelligence (AGI)?",
        options: [
          "AI that can perform one specific task very well",
          "AI that can pass the Turing Test",
          "A machine with human-level ability across any cognitive task with transfer learning and flexible reasoning",
          "AI that uses rule-based systems"
        ],
        correct: 2,
        explanation: "AGI refers to a hypothetical machine with human-level ability across any cognitive task, featuring transfer learning, autonomous goal-setting, and flexible reasoning."
      },
      {
        id: "ai-5",
        question: "What is the Frame Problem in AI?",
        options: [
          "How to physically frame a robot",
          "How to determine what is relevant versus irrelevant without exhaustively considering every possibility",
          "How to create frames for video processing",
          "How to frame ethical questions in AI"
        ],
        correct: 1,
        explanation: "The Frame Problem is a core challenge concerning how a rational agent can determine what is relevant versus irrelevant in a situation without having to exhaustively consider every possibility."
      },
      {
        id: "ai-6",
        question: "Which approach to AI dominated books until the late 20th century?",
        options: [
          "Machine Learning",
          "Deep Learning",
          "Rule-based systems using logic and deduction",
          "Evolutionary algorithms"
        ],
        correct: 2,
        explanation: "Rule-based AI, which relies on logic, deduction, and explicit coding of knowledge as formulas or rules (e.g., Expert Systems), dominated AI books until the late 20th century."
      },
      {
        id: "ai-7",
        question: "What scoring did GPT-4.5 achieve in a 2025 Turing Test study?",
        options: [
          "45%",
          "58%",
          "73%",
          "91%"
        ],
        correct: 2,
        explanation: "GPT-4.5 scored 73% when prompted to act human in a 2025 study, sometimes outperforming human participants."
      },
      {
        id: "ai-8",
        question: "What is Multiple Realizability in the context of AI?",
        options: [
          "Running multiple AI systems simultaneously",
          "Mental states can be realized in different physical systems (carbon, silicon) if embodied in some causal medium",
          "Creating multiple copies of the same AI",
          "Realizing multiple goals at once"
        ],
        correct: 1,
        explanation: "Multiple Realizability means that if the mind equals function, then mental states can be realized in different physical systems, provided the system is embodied in some causal medium."
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
          "It cannot find the optimal solution",
          "It is computationally infeasible due to exponential complexity",
          "It only works for continuous problems",
          "It gets stuck in local optima"
        ],
        correct: 1,
        explanation: "Exhaustive search tests all possible solutions and guarantees finding the optimum, but is computationally infeasible for large problems (e.g., TSP with 70 cities has N! > 10^100 solutions)."
      },
      {
        id: "opt-2",
        question: "What does the gradient $\\nabla f(x)$ represent in optimization?",
        options: [
          "The minimum value of the function",
          "The direction in which $f(x)$ increases the most",
          "The rate at which the function decreases",
          "The optimal solution"
        ],
        correct: 1,
        explanation: "The gradient $\\nabla f(x)$ indicates the direction in which $f(x)$ increases the most, used in gradient ascent/descent algorithms."
      },
      {
        id: "opt-3",
        question: "What is the key feature of Simulated Annealing?",
        options: [
          "It always moves to better solutions",
          "It uses gradient information",
          "It probabilistically accepts worse solutions to escape local optima",
          "It evaluates all possible solutions"
        ],
        correct: 2,
        explanation: "Simulated Annealing aims to escape local optima by accepting worse solutions probabilistically, with acceptance probability decreasing as temperature decreases."
      },
      {
        id: "opt-4",
        question: "What does the No Free Lunch Theorem state?",
        options: [
          "All optimization algorithms are equally good",
          "No search method is best for all problems",
          "Free lunch doesn't exist in computer science",
          "Optimization problems cannot be solved efficiently"
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
          "$x^{(k+1)} = \\gamma \\nabla f(x^{(k)})$",
          "$x^{(k+1)} = x^{(k)} \\times \\nabla f(x^{(k)})$"
        ],
        correct: 1,
        explanation: "For gradient descent (minimization), the update rule is $x^{(k+1)} = x^{(k)} - \\gamma \\nabla f(x^{(k)})$, where $\\gamma$ is the learning rate. For ascent, we add instead of subtract."
      },
      {
        id: "opt-6",
        question: "What is the difference between continuous and discrete optimization?",
        options: [
          "Continuous uses gradient descent, discrete uses search algorithms",
          "Continuous finds minima/maxima of functions, discrete finds items with specified properties",
          "Continuous is easier than discrete",
          "There is no difference"
        ],
        correct: 1,
        explanation: "Continuous optimization is concerned with finding maxima and minima of functions, while discrete optimization involves finding an item with specified properties among a collection of items."
      },
      {
        id: "opt-7",
        question: "What is the main strategy of Greedy Search?",
        options: [
          "Evaluating all possible solutions",
          "Making locally optimal choices hoping for a global optimum",
          "Randomly selecting solutions",
          "Using gradient information"
        ],
        correct: 1,
        explanation: "Greedy search generates and evaluates only a single solution, making several locally optimal choices, hoping these lead to a global optimum."
      },
      {
        id: "opt-8",
        question: "What parameter controls the step size in gradient descent?",
        options: [
          "The gradient",
          "The learning rate ($\\gamma$)",
          "The momentum",
          "The temperature"
        ],
        correct: 1,
        explanation: "The learning rate ($\\gamma$) controls the step size in gradient descent, determining how far we move in the direction of the gradient."
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
          "Unlabeled data (only x)",
          "Labeled data (x and y)",
          "Reward signals",
          "No data is needed"
        ],
        correct: 1,
        explanation: "Supervised learning uses labeled data where each input $x$ has a corresponding label $y$, and the goal is to learn the mapping $f: x \\to y$."
      },
      {
        id: "ml-2",
        question: "What is the primary goal of unsupervised learning?",
        options: [
          "To predict labels on unseen items",
          "To maximize reward",
          "To learn something interesting about the distribution of data",
          "To classify data into predefined categories"
        ],
        correct: 2,
        explanation: "Unsupervised learning works with unlabeled data and aims to learn something interesting about the distribution of x's, identify similarities, and categorize without predefined labels."
      },
      {
        id: "ml-3",
        question: "Which machine learning paradigm is used for complex game playing?",
        options: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Reinforcement Learning",
          "Transfer Learning"
        ],
        correct: 2,
        explanation: "Reinforcement Learning uses training with rewards and punishments to adapt behavior and maximize reward, making it ideal for complex game playing."
      },
      {
        id: "ml-4",
        question: "What is the difference between binary and multiclass classification?",
        options: [
          "Binary uses neural networks, multiclass uses decision trees",
          "Binary has two classes, multiclass has three or more classes",
          "Binary is supervised, multiclass is unsupervised",
          "There is no difference"
        ],
        correct: 1,
        explanation: "Binary classification involves two classes (e.g., spam/no spam), while multiclass classification involves three or more classes (e.g., recognizing 10 different handwritten digits)."
      },
      {
        id: "ml-5",
        question: "What is a feature vector in machine learning?",
        options: [
          "A vector pointing in the direction of optimization",
          "A numerical representation of an object's attributes ($x_1, x_2, \\ldots, x_m$)",
          "The output of a classifier",
          "A vector of labels"
        ],
        correct: 1,
        explanation: "A feature vector is a numerical representation of an object's attributes, written as $x = (x_1, x_2, \\ldots, x_m)$, used to transform prediction tasks into mathematical operations."
      },
      {
        id: "ml-6",
        question: "Which of the following is an unsupervised learning task?",
        options: [
          "Email spam detection",
          "K-means clustering",
          "Image classification",
          "Sentiment analysis"
        ],
        correct: 1,
        explanation: "K-means clustering is an unsupervised learning task that groups data without labels. The other options require labeled training data (supervised learning)."
      },
      {
        id: "ml-7",
        question: "What does generalization mean in machine learning?",
        options: [
          "Making the model more complex",
          "Applying learned patterns to analyze new, unseen data",
          "Using general-purpose programming languages",
          "Simplifying the model"
        ],
        correct: 1,
        explanation: "Generalization is the ability to apply learned patterns from training data to analyze new, unseen data successfully."
      },
      {
        id: "ml-8",
        question: "What type of features can be used in classification?",
        options: [
          "Only numerical features",
          "Only categorical features",
          "Both categorical and numerical features",
          "Neither, only images"
        ],
        correct: 2,
        explanation: "Features can be both categorical (e.g., format: html/text) or numerical (e.g., number of characters/lines), and both can be used in classification tasks."
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
          "The mean of all inputs",
          "A weighted sum of inputs with a binary threshold activation",
          "The maximum input value",
          "The derivative of the loss function"
        ],
        correct: 1,
        explanation: "A perceptron computes a weighted sum of inputs ($z = b + \\sum w_i x_i$) and applies a binary, threshold-based activation function to determine the output (0 or 1)."
      },
      {
        id: "lin-2",
        question: "What loss function does linear regression minimize?",
        options: [
          "Cross-Entropy Loss",
          "Mean Squared Error (MSE)",
          "Hinge Loss",
          "KL Divergence"
        ],
        correct: 1,
        explanation: "Linear regression seeks to minimize the Mean Squared Error (MSE) loss function: $\\frac{1}{N}\\sum(t_j - \\sum w_i x_{j,i})^2$."
      },
      {
        id: "lin-3",
        question: "What is the advantage of the MSE loss function being convex?",
        options: [
          "It is easier to compute",
          "There is only one global minimum, avoiding local optima",
          "It works with categorical data",
          "It requires less training data"
        ],
        correct: 1,
        explanation: "Since the MSE function is convex, there is only one global minimum, which avoids the problem of getting stuck in local optima during optimization."
      },
      {
        id: "lin-4",
        question: "In the One vs. Rest (OvR) multi-class strategy, how are ambiguities resolved?",
        options: [
          "Random selection",
          "The class with the highest prediction score is chosen",
          "The first matching class is selected",
          "Multiple labels are assigned"
        ],
        correct: 1,
        explanation: "In OvR, when an item falls into multiple classes or no classes, the ambiguity is resolved by selecting the class with the highest prediction score."
      },
      {
        id: "lin-5",
        question: "What does the Softmax function do in multinomial logistic regression?",
        options: [
          "Selects the maximum value",
          "Converts linear outputs to a probability distribution over classes",
          "Applies a binary threshold",
          "Computes the weighted sum"
        ],
        correct: 1,
        explanation: "The Softmax function converts linear outputs (z) to a predicted probability distribution over n classes, where values are between 0 and 1 and sum to 1."
      },
      {
        id: "lin-6",
        question: "What is the formula for the Softmax function?",
        options: [
          "$y_j = z_j / \\sum z_k$",
          "$y_j = \\frac{e^{z_j}}{\\sum e^{z_k}}$",
          "$y_j = \\max(z_j)$",
          "$y_j = \\log(z_j)$"
        ],
        correct: 1,
        explanation: "The Softmax function is defined as $y_j = \\frac{e^{z_j}}{\\sum_k e^{z_k}}$, which normalizes exponentials of the inputs to create a probability distribution."
      },
      {
        id: "lin-7",
        question: "What loss function is used with multinomial logistic regression?",
        options: [
          "Mean Squared Error",
          "Cross-Entropy (CE) Loss",
          "Absolute Error",
          "Hinge Loss"
        ],
        correct: 1,
        explanation: "Multinomial logistic regression uses Cross-Entropy (CE) Loss for training, which is appropriate for probability distributions over multiple classes."
      },
      {
        id: "lin-8",
        question: "Why is gradient descent preferred over the closed-form solution for linear regression?",
        options: [
          "It is more accurate",
          "It is less complex for high dimensions (closed-form is O(m³))",
          "It always finds the global minimum",
          "It doesn't require calculus"
        ],
        correct: 1,
        explanation: "While a closed-form solution exists for linear regression, it is computationally complex for high dimensions ($O(m^3)$), making gradient descent the preferred method for training."
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
          "The invention of the perceptron in 1958",
          "AlexNet winning the 2012 ImageNet competition",
          "The Turing Test in 1950",
          "The development of backpropagation in 1986"
        ],
        correct: 1,
        explanation: "The breakthrough was the 2012 ImageNet competition, where AlexNet (a deep neural network) won, dropping the error rate from 26% to 16%."
      },
      {
        id: "dl-2",
        question: "What is the preferred activation function in deep networks?",
        options: [
          "Sigmoid",
          "Tanh",
          "ReLU (Rectified Linear Unit)",
          "Step function"
        ],
        correct: 2,
        explanation: "The Rectified Linear Unit (ReLU), defined as $\\text{ReLU}(x) = \\max(x, 0)$, is the preferred activation function in deep networks due to its computational advantages."
      },
      {
        id: "dl-3",
        question: "What does the Universal Approximation Theorem state?",
        options: [
          "Neural networks can solve any problem",
          "Any continuous function can be approximated by a neural network with one hidden layer and infinite nodes",
          "Deep networks are always better than shallow networks",
          "All functions are continuous"
        ],
        correct: 1,
        explanation: "The Universal Approximation Theorem states that any continuous function can be approximated by a neural network with one hidden layer, a non-linear activation function, and an infinite number of nodes."
      },
      {
        id: "dl-4",
        question: "What is backpropagation?",
        options: [
          "A type of neural network architecture",
          "An algorithm to reduce loss by applying gradient descent iteratively across layers",
          "A method for data preprocessing",
          "A technique for data augmentation"
        ],
        correct: 1,
        explanation: "Backpropagation is the algorithm used to reduce the loss function in neural networks by applying gradient descent iteratively across the layers."
      },
      {
        id: "dl-5",
        question: "What do early layers of a deep network typically learn?",
        options: [
          "Abstract concepts",
          "Final classifications",
          "Simple patterns like edges",
          "Complete objects"
        ],
        correct: 2,
        explanation: "Each layer learns hierarchical representations—early layers learn simple patterns like edges, while deeper layers capture more abstract concepts."
      },
      {
        id: "dl-6",
        question: "What is the main advantage of CNNs for image processing?",
        options: [
          "They require less data",
          "They use convolutional layers designed for spatial relationships in images",
          "They train faster than all other networks",
          "They don't need backpropagation"
        ],
        correct: 1,
        explanation: "CNNs (Convolutional Neural Networks) were originally developed for image tasks and use convolutional layers that are specifically designed to capture spatial relationships in images."
      },
      {
        id: "dl-7",
        question: "Why are word embeddings better than one-hot encoding for language?",
        options: [
          "They are easier to compute",
          "They represent words in lower dimensions with semantic relationships",
          "They work with any alphabet",
          "They don't require training"
        ],
        correct: 1,
        explanation: "Word embeddings represent each word with a fixed-dimension vector (50-300 dimensions) where similar words have similar vectors, unlike one-hot encoding which uses inefficient 100,000+ dimension sparse vectors."
      },
      {
        id: "dl-8",
        question: "What is the current state ($h_t$) in an RNN determined by?",
        options: [
          "Only the current input ($x_t$)",
          "Only the previous state ($h_{t-1}$)",
          "Both the current input ($x_t$) and previous state ($h_{t-1}$)",
          "The final output"
        ],
        correct: 2,
        explanation: "In RNNs, the current state $h_t$ is determined by both the current input $x_t$ and the state $h_{t-1}$ at time $t-1$, allowing the network to maintain temporal dependencies."
      },
      {
        id: "dl-9",
        question: "What breakthrough technology enabled the deep learning revolution?",
        options: [
          "CPUs",
          "GPUs (Graphics Processing Units)",
          "Quantum computers",
          "Cloud computing"
        ],
        correct: 1,
        explanation: "GPUs (Graphics Processing Units) were crucial for the deep learning revolution, providing the powerful parallel processing needed for training deep networks."
      },
      {
        id: "dl-10",
        question: "What architecture is used for machine translation?",
        options: [
          "Simple feedforward network",
          "CNN only",
          "Encoder-Decoder architecture",
          "Single layer perceptron"
        ],
        correct: 2,
        explanation: "Machine translation uses an Encoder-Decoder architecture, typically trained on large amounts of bi-text (sentence pairs aligned between two languages)."
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
          "Photosynthesis",
          "Natural Selection",
          "Cellular respiration",
          "DNA replication only"
        ],
        correct: 1,
        explanation: "Evolutionary Algorithms are inspired by Biological Evolution, particularly Natural Selection, where traits providing a fitness advantage become more common through reproduction and survival."
      },
      {
        id: "ea-2",
        question: "What is the difference between genotype and phenotype?",
        options: [
          "There is no difference",
          "Genotype is the full set of genes; phenotype is the observable traits",
          "Genotype is for animals; phenotype is for plants",
          "Phenotype is the DNA sequence"
        ],
        correct: 1,
        explanation: "Genotype is the full set of genes (genetic information), while phenotype is the observable traits that result from the genotype and environment."
      },
      {
        id: "ea-3",
        question: "What is the purpose of the fitness function in EAs?",
        options: [
          "To create random solutions",
          "To assign a quality score to each individual enabling selection",
          "To stop the algorithm",
          "To initialize the population"
        ],
        correct: 1,
        explanation: "The fitness function assigns a single real-valued fitness score to each individual, representing the quality of the solution, which enables selection of better solutions."
      },
      {
        id: "ea-4",
        question: "What is Fitness-Proportionate Selection (FPS)?",
        options: [
          "All individuals have equal selection probability",
          "Selection probability is proportional to fitness",
          "Only the fittest individual is selected",
          "Random selection without considering fitness"
        ],
        correct: 1,
        explanation: "In Fitness-Proportionate Selection, the probability of selecting an individual is proportional to its fitness score, favoring better solutions while maintaining diversity."
      },
      {
        id: "ea-5",
        question: "What is the purpose of mutation in EAs?",
        options: [
          "To combine parent solutions",
          "To introduce random changes for diversity",
          "To evaluate fitness",
          "To stop the algorithm"
        ],
        correct: 1,
        explanation: "Mutation introduces random changes to offspring's genes to maintain diversity in the population and help explore new areas of the solution space."
      },
      {
        id: "ea-6",
        question: "What is elitism in survivor selection?",
        options: [
          "Selecting only random individuals",
          "Always keeping the N fittest solution(s) found so far",
          "Removing all previous solutions",
          "Selecting the weakest individuals"
        ],
        correct: 1,
        explanation: "Elitism is a strategy that always keeps the N fittest solution(s) found so far, ensuring that the best solutions are never lost across generations."
      },
      {
        id: "ea-7",
        question: "What is the difference between (μ, λ) and (μ+λ) selection?",
        options: [
          "No difference",
          "(μ,λ) chooses from offspring only; (μ+λ) chooses from both parents and offspring",
          "(μ,λ) is for maximization; (μ+λ) is for minimization",
          "(μ,λ) uses mutation; (μ+λ) doesn't"
        ],
        correct: 1,
        explanation: "(μ,λ)-selection chooses the best μ individuals only from the offspring (λ), while (μ+λ)-selection chooses from both parents and offspring, making it an elitist strategy."
      },
      {
        id: "ea-8",
        question: "What is recombination (crossover) in EAs?",
        options: [
          "Random mutation of genes",
          "Combining genetic material from parents to create offspring",
          "Evaluating fitness",
          "Selecting survivors"
        ],
        correct: 1,
        explanation: "Recombination (crossover) combines genetic material (chromosomes) from parent solutions to create offspring, mixing characteristics from both parents."
      },
      {
        id: "ea-9",
        question: "Why is parent selection usually probabilistic rather than deterministic?",
        options: [
          "It's easier to implement",
          "To push toward higher fitness while helping escape local optima through stochasticity",
          "To slow down the algorithm",
          "It's not probabilistic"
        ],
        correct: 1,
        explanation: "Parent selection is usually probabilistic (higher fitness = higher probability) to push the population toward higher fitness, but the stochastic nature helps escape local optima."
      },
      {
        id: "ea-10",
        question: "What is Cycle Crossover used for?",
        options: [
          "Binary string problems",
          "Permutation problems like TSP where order matters",
          "Continuous optimization",
          "Classification tasks"
        ],
        correct: 1,
        explanation: "Cycle Crossover is a complex recombination operator designed for permutation problems like the Traveling Salesman Problem (TSP), where order/adjacency matters and it preserves absolute positions of alleles."
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
          "Training data is usually incorrect",
          "It doesn't predict future performance on unseen data",
          "It takes too long to compute",
          "Training data is too small"
        ],
        correct: 1,
        explanation: "Performance on training data alone is unreliable for predicting future performance because the model may have overfitted to the training data and won't generalize well to new, unseen data."
      },
      {
        id: "eval-2",
        question: "What is a True Positive (TP)?",
        options: [
          "Predicted positive, actually negative",
          "Predicted positive, actually positive",
          "Predicted negative, actually positive",
          "Predicted negative, actually negative"
        ],
        correct: 1,
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
          "Percentage of actual positives found",
          "Accuracy of positive predictions: $\\frac{TP}{TP + FP}$",
          "Overall accuracy",
          "True negative rate"
        ],
        correct: 1,
        explanation: "Precision measures the accuracy of positive predictions: $\\frac{TP}{TP + FP}$. It focuses on minimizing False Positives."
      },
      {
        id: "eval-5",
        question: "What does Recall (Sensitivity) measure?",
        options: [
          "Accuracy of positive predictions",
          "Percentage of actual positives found: $\\frac{TP}{TP + FN}$",
          "Overall accuracy",
          "True negative rate"
        ],
        correct: 1,
        explanation: "Recall (Sensitivity or True Positive Rate) measures the percentage of actual positives that were correctly identified: $\\frac{TP}{TP + FN}$. It focuses on minimizing False Negatives."
      },
      {
        id: "eval-6",
        question: "What is the F1 score?",
        options: [
          "The sum of precision and recall",
          "The harmonic mean of precision and recall",
          "The arithmetic mean of precision and recall",
          "The maximum of precision and recall"
        ],
        correct: 1,
        explanation: "The F1 score (F-score) is the harmonic mean of precision and recall, providing a single metric that balances both measures."
      },
      {
        id: "eval-7",
        question: "Why can accuracy be misleading?",
        options: [
          "It's difficult to compute",
          "It can be misleading with imbalanced datasets",
          "It only works for binary classification",
          "It requires too much data"
        ],
        correct: 1,
        explanation: "Accuracy can be misleading in imbalanced datasets. For example, if 95% of samples are negative, a model that always predicts negative achieves 95% accuracy but is useless."
      },
      {
        id: "eval-8",
        question: "What does the ROC curve plot?",
        options: [
          "Accuracy vs. threshold",
          "True Positive Rate vs. False Positive Rate",
          "Precision vs. threshold",
          "Training error vs. test error"
        ],
        correct: 1,
        explanation: "The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate (TPR) against the False Positive Rate (FPR) across a range of thresholds."
      },
      {
        id: "eval-9",
        question: "What does AUC = 1.00 indicate in a ROC curve?",
        options: [
          "The model is random",
          "The model is perfect",
          "The model is overfitted",
          "The model is biased"
        ],
        correct: 1,
        explanation: "AUC (Area Under the Curve) = 1.00 indicates a perfect model that can perfectly separate positive and negative classes at some threshold."
      },
      {
        id: "eval-10",
        question: "When are Precision-Recall curves more useful than ROC curves?",
        options: [
          "For balanced datasets",
          "For imbalanced datasets where the positive class is rare",
          "For regression problems",
          "They are never more useful"
        ],
        correct: 1,
        explanation: "Precision-Recall curves are often more useful than ROC curves when dealing with imbalanced datasets where the positive class is rare, as they focus more on the minority class performance."
      },
      {
        id: "eval-11",
        question: "What is the purpose of cross-validation?",
        options: [
          "To increase training data size",
          "To get robust internal validation by partitioning data into k folds",
          "To test the final model",
          "To clean the data"
        ],
        correct: 1,
        explanation: "Cross-validation (e.g., k-fold) involves randomly partitioning the non-test data into k folds for robust internal validation, reducing the variance of performance estimates."
      },
      {
        id: "eval-12",
        question: "What is required for unbiased estimation?",
        options: [
          "Using all data for training",
          "Setting aside a test set before experimentation and using it only once on the final model",
          "Using cross-validation on all data",
          "Training multiple models"
        ],
        correct: 1,
        explanation: "Unbiased estimation requires that the test set be set aside before any experimentation begins and used only for a single analysis on the final model, preventing information leakage."
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
          "Labeled data (x and y)",
          "Unlabeled data (only x)",
          "Reward signals",
          "Bi-text data"
        ],
        correct: 1,
        explanation: "Unsupervised learning works with unlabeled data where we only have feature vectors x (no labels y), and the goal is to discover patterns or structure."
      },
      {
        id: "unsup-2",
        question: "What is the goal of k-means clustering?",
        options: [
          "To predict labels",
          "To group data into k clusters based on similarity",
          "To reduce dimensionality",
          "To generate new data"
        ],
        correct: 1,
        explanation: "K-means clustering is an unsupervised learning algorithm that groups data into k clusters based on similarity, without using any labels."
      },
      {
        id: "unsup-3",
        question: "What is the purpose of dimensionality reduction?",
        options: [
          "To increase the number of features",
          "To represent data in lower dimensions while preserving important information",
          "To classify data",
          "To clean the data"
        ],
        correct: 1,
        explanation: "Dimensionality reduction aims to represent data in a lower dimension while preserving important information, making it easier to visualize and process."
      },
      {
        id: "unsup-4",
        question: "What is an autoencoder used for?",
        options: [
          "Classification",
          "Data compression and learning compressed representations",
          "Optimization",
          "Selection"
        ],
        correct: 1,
        explanation: "Autoencoders are neural networks used for data compression, learning to encode data into a compressed representation and then decode it back."
      },
      {
        id: "unsup-5",
        question: "What is a generative model?",
        options: [
          "A model that classifies data",
          "A model that learns to generate similar data to the training data",
          "A model that compresses data",
          "A model that evaluates performance"
        ],
        correct: 1,
        explanation: "A generative model learns the underlying distribution of the training data and can generate new, similar data samples."
      },
      {
        id: "unsup-6",
        question: "Which of the following is NOT an unsupervised learning task?",
        options: [
          "Clustering",
          "Dimensionality reduction",
          "Classification with labeled data",
          "Density estimation"
        ],
        correct: 2,
        explanation: "Classification with labeled data is a supervised learning task, not unsupervised. The others (clustering, dimensionality reduction, density estimation) are unsupervised tasks."
      },
      {
        id: "unsup-7",
        question: "What is PCA (Principal Component Analysis)?",
        options: [
          "A clustering algorithm",
          "A dimensionality reduction technique that finds principal components",
          "A classification method",
          "An optimization algorithm"
        ],
        correct: 1,
        explanation: "PCA (Principal Component Analysis) is a dimensionality reduction technique that identifies the principal components (directions of maximum variance) in the data."
      },
      {
        id: "unsup-8",
        question: "What are self-organizing maps used for?",
        options: [
          "Classification",
          "Dimensionality reduction and visualization",
          "Regression",
          "Optimization"
        ],
        correct: 1,
        explanation: "Self-organizing maps are a type of neural network used for dimensionality reduction and visualization, mapping high-dimensional data to lower dimensions while preserving topology."
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
          "The activation of node j in layer k",
          "The weighted sum in node j in layer k",
          "The output of the neural network",
          "The gradient of the loss function"
        ],
        correct: 1,
        explanation: "This is the weighted sum formula for node j in layer k. It sums the products of weights and activations from the previous layer."
      },
      {
        id: "form-2",
        question: "What does this formula represent?\n\n$$a_j^{[k]} = g(z_j^{[k]})$$",
        options: [
          "The weighted sum in node j",
          "The activation/output of node j in layer k after applying activation function g",
          "The loss function",
          "The learning rate"
        ],
        correct: 1,
        explanation: "This represents the activation of node j in layer k, obtained by applying the activation function g to the weighted sum."
      },
      {
        id: "form-3",
        question: "What is this formula?\n\n$$\\text{ReLU}(x) = \\max(x, 0)$$",
        options: [
          "Sigmoid activation function",
          "Softmax function",
          "Rectified Linear Unit (ReLU) activation function",
          "Tanh activation function"
        ],
        correct: 2,
        explanation: "This is the ReLU (Rectified Linear Unit) activation function, the preferred activation in deep networks. It outputs x if x > 0, otherwise 0."
      },
      {
        id: "form-4",
        question: "What does this formula calculate?\n\n$$\\text{MSE} = \\frac{1}{N} \\sum_{j=1}^{N} (t_j - y_j)^2$$",
        options: [
          "Cross-entropy loss",
          "Mean Squared Error for regression",
          "Precision",
          "Recall"
        ],
        correct: 1,
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

