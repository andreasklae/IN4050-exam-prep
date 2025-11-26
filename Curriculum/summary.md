This comprehensive text synthesizes the material covered in the sources, focusing on Artificial Intelligence (AI), Machine Learning (ML), optimization techniques, deep learning architectures, evolutionary computation, and the philosophical and ethical considerations of AI.

---

# Comprehensive Guide to Artificial Intelligence and Machine Learning

## 1. Introduction and Motivation (Lecture 1)

This course, IN3050/IN4050 – Introduction to Artificial Intelligence and Machine Learning (Fall 2025), is taught by Pooya Zakeri and Ali Ramezani-Kebrya.

### A. State-of-the-Art Achievements
Current state-of-the-art AI and ML can achieve sophisticated tasks, including:
*   Teaching robots to interact with complex objects (e.g., solving a Rubik's cube).
*   Teaching computers to play complex games like Chess, Go, Starcraft II, and Dota 2. Minecraft is also a popular testbed due to its open-ended nature.
*   Self-driving cars.
*   Teaching computers to describe images.
*   Robots that can adapt.
*   Speech recognition and machine translation.

### B. Course Practical Information
The course focuses heavily on **algorithms**. Necessary background includes three programming courses (including recursion) and knowledge of mathematics such as vectors, matrices, derivatives, and probabilities. Python, NumPy, and Jupyter notebooks are used.

**Exercises and Evaluation:**
*   There are **two mandatory exercises** that must reflect the student's own individual effort; code parts from other sources must be cited, and code cannot be shared between students.
*   Non-mandatory exercises are provided weekly with suggested solutions posted later.
*   The overall course includes optimization, which is tested in Mandatory Exercise 1.

## 2. Fundamentals of AI and Intelligence (Lecture 1, 13, 14)

### A. Defining Intelligence and AI
**Intelligence (in humans)** lacks a consensus definition but generally refers to "mental abilities" and aptitude (not acquired knowledge). Key questions include whether animals or machines can be intelligent.
**Intelligence (in AI)** is defined primarily as the **capacity for flexible, goal-oriented action in diverse environments**. AI measures intelligence based on success in achieving goals, rooted in maximizing utility from classical decision theory.

**Artificial Intelligence (AI)** is traditionally defined as the study of how to make computers do things that, for the moment, humans do better.

### B. Goals and Approaches of AI
The goals of AI are categorized as:
1.  **Theoretical:** Building models of how humans think and act, in an effort to understand ourselves (e.g., the Turing Test).
2.  **Practical:** Replacing human activities that demand intelligence or assisting humans (e.g., self-driving cars).

The main historical approaches to AI are:
*   **Rule-based:** Relies on logic, deduction, and explicit coding of knowledge as formulas or rules (e.g., Expert Systems). This approach dominated AI books until the late 20th century.
*   **Machine Learning (ML):** Focuses on **induction** rather than deduction, allowing systems to adapt to the environment. This is the main focus of the course.

### C. The Turing Test and Philosophical Debates
The question of whether machines can think is central to the philosophical inquiry into the **Mind–Body Problem**.

**The Turing Test (Alan Turing, 1950):**
*   This test defines machine intelligence behaviorally: A human judge (C) interacts with an unseen entity (A, machine, or B, human). If the judge cannot reliably distinguish the machine from the human, the machine passes.
*   The point is to focus on behavioral evidence rather than the inner essence of thought.
*   **Recent Developments:** Since the mid-2020s, several Large Language Models (LLMs), such as GPT-4.5 (scoring 73% when prompted to act human in a 2025 study), have passed modern, rigorous variants of the Turing Test, sometimes outperforming human participants.
*   **Criticism:** Passing the Turing Test suggests intelligence or human-like behavior, but it is insufficient for proving genuine understanding or consciousness.

**Chinese Room Argument (Searle):**
*   This strong criticism of the "Strong AI" hypothesis argues that a person manipulating symbols based on rules (like a computer program) does not genuinely understand the meaning, only simulates comprehension.

**Strong AI (Two Meanings):**
1.  **Searle's Philosophical "Strong AI":** The claim that a program literally possesses a mind, consciousness, and intentionality (rejected by most philosophers).
2.  **Futurist/Popular "Strong AI":** Refers to **Artificial General Intelligence (AGI)**—a hypothetical machine with human-level ability across any cognitive task, featuring transfer learning, autonomous goal-setting, and flexible reasoning. Mainstream AI research focuses on behavior and performance, viewing simulation vs. a "real mind" as irrelevant.

**Other Philosophical Concepts:**
*   **Multiple Realizability:** If the mind equals function, then mental states can be realized in different physical systems (carbon, silicon, alien physiology), provided the system is embodied in some causal medium.
*   **Anthropomorphic Language:** Attributing human traits ("think," "see") to AI is dangerous as it leads to false expectations and failures, masking the lack of genuine human abilities.
*   **The Frame Problem:** A core philosophical and computational challenge concerning how a rational agent can determine what is relevant versus irrelevant in a situation without having to exhaustively consider every possibility. This limitation persists in modern models like ChatGPT, which determine relevance based on pattern associations but lack deep situational understanding.

### D. Human vs. Machine Capabilities
Machines generally outperform humans in tasks like:
*   Maths/logic.
*   Board games (chess, go).
*   Some complex computer games (Starcraft II, Dota 2).
Humans are still better at communicating with other humans.

## 3. Optimization and Search (Lecture 2)

Optimization is a principle behind most course topics. It requires a numerical representation ($\mathbf{x}$), a quality function $f(\mathbf{x})$, and a way to find $\max f(\mathbf{x})$ (benefit) or $\min f(\mathbf{x})$ (cost).

### A. Optimization Types
*   **Continuous Optimization:** Concerned with finding maxima and minima of functions, possibly subject to constraints. Relevant in mechanics, economics (e.g., portfolio selection), and control engineering.
*   **Discrete Optimization:** Finding an item with specified properties among a collection of items. Relevant in chip design or timetabling.

### B. Search Methods
1.  **Exhaustive Search (Brute-Force):** Tests all possible solutions and guarantees finding the optimum. However, it is computationally infeasible for large problems (e.g., TSP with 70 cities, $N! > 10^{100}$ solutions).
2.  **Greedy Search:** Generates and evaluates only a single solution, making several locally optimal choices, hoping for a global optimum.
3.  **Hill Climbing:** (Implied search method in EA and Simulated Annealing context) Moves toward better local solutions.
4.  **Simulated Annealing:** Aims to escape local optima by accepting worse solutions (higher cost/lower benefit) probabilistically, with acceptance decreasing as temperature decreases.
5.  **Gradient Descent/Ascent:** Used in **continuous optimization**. The **gradient** $\nabla f(\mathbf{x})$ indicates the direction $f(\mathbf{x})$ increases the most. Iterative updates are calculated as $\mathbf{x}^{(k+1)} = \mathbf{x}^{(k)} + \gamma \nabla f(\mathbf{x}^{(k)})$ (for ascent) or subtraction (for descent). $\gamma$ is the learning rate.

### C. The No Free Lunch Theorem
This theorem states that **no search method is best for all problems**. The choice of method and search operators must suit the problem.

## 4. Machine Learning Paradigms (Lecture 3, 10)

Machine learning (ML) is the study of computer algorithms that improve automatically through experience, achieved by extracting relevant information from data and applying it to analyze new data, demonstrating generalization.

### A. Types of Machine Learning
| Paradigm | Training Data | Goal/Task | Example |
| :--- | :--- | :--- | :--- |
| **Supervised Learning** | Labeled data ($\mathbf{x}$ and $y$) | Learn the mapping $f: \mathbf{x} \mapsto y$ | Predicting the label on unseen items. |
| **Unsupervised Learning** | Unlabeled data (only $\mathbf{x}$) | Learn something interesting about the distribution of $\mathbf{x}$'s; identify similarities and categorize. | Clustering readers based on reading habits. |
| **Reinforcement Learning** | Training with rewards and punishments | Adapt behavior to maximize reward. | Complex game playing. |

### B. Supervised Learning: Classification and Features (Lecture 3)
A **Classifier** is a mapping from a domain of objects (inputs) to a finite set of unique labels.
*   **Binary classification** involves two classes (e.g., spam/no spam).
*   **Multiclass classification** involves three or more classes (e.g., recognizing 10 different handwritten digits in the MNIST dataset).

**Feature Representation:** To classify objects, they must be represented by a set of attributes/features, which can be **categorical** (e.g., format: html/text) or **numerical** (e.g., number of characters/lines). The task of predicting from an object is transformed into predicting a label $y$ from a numerical feature vector $\mathbf{x} = (x_1, x_2, \dots, x_m)$.

### C. Unsupervised Learning Tasks (Lecture 10)
For unsupervised learning, where samples only have feature vectors $\mathbf{x}$, the goals include:
*   **Density Estimation/Generative Models:** Learning how to generate similar data.
*   **Clustering:** Learning how data are grouped (e.g., hierarchical clustering, k-means clustering).
*   **Data Compression:** Learning how to compress the data (e.g., Autoencoders).
*   **Dimensionality Reduction/Visualization:** Learning how to represent data in a low dimension (e.g., PCA, self-organizing maps).

## 5. Classification Algorithms: Linear Models (Lecture 4, 7)

### A. Perceptron
The perceptron is a mathematical model inspired by the biological neuron (dendrites correspond to inputs, synapses to weighted inputs, cell body to weighted sum, axon to output).
1.  It computes a weighted sum of inputs: $z = b + \sum w_i x_i$.
2.  It applies a binary, threshold-based activation function to determine the output (0 or 1).
3.  The decision boundary is linear, $z=0$.

### B. Linear Regression
Linear regression is a supervised learning method for assigning a numerical value to an observation (a regression task).
*   The function outputs the weighted sum of inputs directly ($g(z_j) = z_j$).
*   The algorithm seeks to find the weights $\mathbf{w}$ that minimize the **Mean Squared Error (MSE)** loss function: $\frac{1}{N} \sum_{j=1}^{N} (t_j - \sum_{i=0}^{m} w_i x_{j,i})^2$.
*   Since the MSE function is convex, there is only one global minimum, avoiding local optima problems.
*   While a closed-form solution exists, it is computationally complex for high dimensions ($O(m^3)$), making gradient descent the preferred method for training.

### C. Multi-Class Strategies
Algorithms that are naturally binary (like the perceptron or logistic regression) must be adapted for multi-class classification.

1.  **One vs. Rest (OvR):** This approach trains $n$ independent binary classifiers, one for each class $j$. Class $j$ is considered positive, and all others are negative. To resolve ambiguity (when an item falls into multiple classes or no classes), the output label is the class with the **highest prediction score**.

2.  **Multinomial Logistic Regression:** This approach uses $n$ output nodes, where the input $z_j$ for each node is a weighted sum. It applies the **Softmax function** ($S$) to the linear outputs ($\mathbf{z}$) to produce a predicted probability distribution $\mathbf{y}$ over the $n$ classes:
    $$y_j = (S(z_1, \dots, z_n))_j = \frac{e^{z_j}}{\sum_{k=1}^{n} e^{z_k}}$$
    The resulting $\mathbf{y}$ values are between 0 and 1, and sum to 1. Training is performed using **Cross-Entropy (CE) loss**.

## 6. Deep Learning and Neural Networks (Lecture 8, 11)

### A. The Deep Learning Revolution
Deep learning is a sub-class of neural networks, rapidly advanced due to better models, more data, and more powerful machines (specifically **GPUs**). The breakthrough moment was the **2012 ImageNet competition**, where the AlexNet deep neural network won, significantly dropping the error rate from 26% to 16%. By 2015, winning deep learning models achieved better performance than humans.

### B. Deep Feed-Forward Networks
These networks have several **hidden layers** and are often **fully-connected** (edges from every node in one layer to every node in the next).
*   **Weight Matrices:** One matrix of weights is associated with each layer.
*   **Activation Function:** The **Rectified Linear Unit (ReLU)**, defined as $ReLU(x) = \max(x, 0)$, is the preferred activation function in deep networks due to its computational advantages and properties.
*   **Universal Approximation Theorem:** States that any continuous function can be approximated by a neural network with one hidden layer, a non-linear activation function, and an infinite number of nodes.

### C. Training Deep Networks
**Backpropagation** is the algorithm used to reduce the loss function (e.g., MSE or CE Loss) in neural networks. It is based on applying gradient descent iteratively across the layers. Software frameworks (like TensorFlow, PyTorch) handle the backpropagation once the forward architecture is defined.

**Learned Representations:** Each layer of a deep network transforms input data, learning **hierarchical representations**—early layers learn simple patterns like edges, while deeper layers capture abstract concepts.

### D. Convolutional Neural Networks (CNNs)
CNNs were originally developed for image tasks, such as image classification on the **MNIST data set** (hand-written digits, 10 classes) or **ImageNet** (15 million images, 22,000 classes).
*   In image classification, a color image can be represented as an $m \times n \times 3$ input vector.
*   CNNs are also applied to text classification, where the "window" is one-dimensional (sequences of words or characters).

### E. Recurrent Neural Networks (RNNs) for Language Processing
RNNs are designed to handle sequential data, like language.
*   The current state $h_t$ is determined by the current input $x_t$ and the state $h_{t-1}$ at time $t-1$.
*   The weights (matrices U, W, and V) are shared across all layers in the unfolded network.

**Language Modeling and Embeddings:**
*   The task of a language model is typically to predict the next word.
*   This is supervised learning (billions of training instances exist from raw text data, which are self-labeled).
*   **Word Representation:** Instead of inefficient **one-hot encoding** (e.g., 100,000 dimension vector with one '1'), **Word Embeddings** are used. These represent each word with a fixed-dimension vector of reals (typically 50–300 dimensions), clustered so that similar words (e.g., "milk," "water," "soda") have similar vectors because they appear in similar contexts.

**Machine Translation:**
*   Uses an **Encoder-Decoder** architecture, typically trained on large amounts of **bi-text** (sentence pairs aligned between two languages).
*   The network is trained auto-regressively on the sequence: source sentence $<\text{s}>$ target sentence, where $<\text{s}>$ is an end-of-sequence token.

## 7. Evolutionary Algorithms (EAs) (Lecture 5, 6)

EAs are meta-heuristics for optimization inspired by **Biological Evolution**, particularly **Natural Selection**, where traits providing a fitness advantage become more common through reproduction and survival.

### A. Biological Backgrounds
*   **DNA, Chromosomes, Genes:** DNA is the hereditary material. Chromosomes are strings of DNA containing genes. Genes encode traits, having variations called alleles.
*   **Genotype vs. Phenotype:** Genotype is the full set of genes; phenotype is the observable traits. **Fitness** reflects how well an organism reproduces before it dies.

### B. General Scheme of EAs
EAs evolve a **Population** (candidate solutions/individuals) over generations using the following components:
1.  **Initialization:** Creating the initial population.
2.  **Fitness Evaluation:** Assigns a single real-valued fitness score to each individual, representing the quality of the solution, which enables selection.
3.  **Parent Selection:** Selects individuals to become parents. This is usually probabilistic (higher fitness individuals are more likely to be selected) to push the population toward higher fitness, but stochastic nature helps escape local optima.
    *   **Fitness-Proportionate Selection (FPS):** Probability is proportional to fitness.
    *   **Uniform Selection:** Every individual has the same probability to be selected.
4.  **Recombination (Crossover):** Combines genetic material (chromosomes) from parents to create offspring.
5.  **Mutation:** Random changes introduced to the offspring's genes for diversity.
6.  **Survivor Selection (Replacement):** Determines which individuals form the next generation from the set of old solutions ($\mu$) and offspring ($\lambda$).
    *   **Elitism:** Always keeps the $N$ fittest solution(s) so far.
    *   **$(\mu, \lambda)$-selection:** Chooses the best $\mu$ individuals *only* from the offspring ($\lambda$).
    *   **$(\mu+\lambda)$-selection:** Chooses the best $\mu$ individuals from both parents ($\mu$) and offspring ($\lambda$) (an elitist strategy).
7.  **Termination:** Stops the algorithm (e.g., at maximum generations or desired solution quality).

**Representation Example (TSP):** For the Traveling Salesman Problem (TSP), where the solution is a permutation (order/adjacency matters), **Cycle Crossover** is a complex recombination operator that preserves the absolute positions of alleles belonging to identified cycles between parents.

## 8. Evaluation and Metrics (Lecture 3, 9)

Evaluation is critical as performance on training data alone is unreliable for predicting future performance.

### A. Data Splitting and Unbiased Estimation
*   For development, data should be split into at least a **Training Set** and a **Test Set**.
*   For repeated development (model tuning), the data should be split into a large **Training and Validation set** for iterative development, and a final **Test set**.
*   **Unbiased Estimation** requires that the test set be set aside before any experimentation begins and used only for a **single analysis** on the final model.
*   **Cross-validation** (e.g., k-fold) involves randomly partitioning the non-test data into $k$ folds for robust internal validation.

### B. Classification Metrics (Binary)
For binary classification, the outcome is measured using the **Confusion Matrix**, which captures the four fundamental outcomes:
*   **True Positives (TP):** Predicted positive, actually positive.
*   **True Negatives (TN):** Predicted negative, actually negative.
*   **False Positives (FP):** Predicted positive, actually negative (Type I error).
*   **False Negatives (FN):** Predicted negative, actually positive.

**Key Metrics:**
*   **Accuracy:** Proportion of correctly classified samples: $(TP + TN) / N$. (Accuracy can be misleading in imbalanced datasets).
*   **Precision:** Accuracy of positive predictions: $TP / (TP + FP)$. Focuses on minimizing False Positives.
*   **Recall (Sensitivity or True Positive Rate - TPR):** Percentage of actual positives found: $TP / (TP + FN)$. Focuses on minimizing False Negatives.
*   **F-score (F1 score):** The harmonic mean of precision and recall, often used to balance the two.

### C. Advanced Evaluation Methods
**ROC Curve (Receiver Operating Characteristic):**
*   Plots the **True Positive Rate (TPR)** against the **False Positive Rate (FPR)** across a range of thresholds.
*   The **Area Under the Curve (AUC)** summarizes the performance independent of threshold selection. A perfect model achieves AUC = 1.00. AUC is notably invariant to score transformations (e.g., scaling all scores by $1/10$).

**Precision-Recall (PR) Curve:**
*   Plots **Precision** against **Recall** across a range of thresholds.
*   Often more useful than ROC curves when dealing with **imbalanced datasets** where the positive class is rare.
*   The **AUC-PR (Area Under the PR Curve)**, or Average Precision (AP), summarizes performance; higher is better.