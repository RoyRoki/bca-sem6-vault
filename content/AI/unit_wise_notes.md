# 📚 Artificial Intelligence — Unit-wise Exam Notes
> BCA Sem 6 | UBCAMAJ36013 | Theory: 40 marks | 5 Units

---

## UNIT 1: Introduction (5L)
**Topics:** What is AI, Background, Applications, Turing Test, Rational Agent, Intelligent Agents

---

### 🔑 What is AI?
- **Definition:** Branch of CS concerned with making computers behave intelligently
- **Goal:** Create machines that can perform tasks that normally require human intelligence
- **Father of AI:** **John McCarthy** (coined the term in 1956)
- **Turing Test:** Proposed by Alan Turing — a machine passes if a human interrogator cannot distinguish machine responses from human responses

### 🔑 Approaches to AI
| Approach | Description |
|---|---|
| **Thinking Humanly** | Cognitive modeling — simulates human thought |
| **Thinking Rationally** | Logic-based — uses formal rules |
| **Acting Humanly** | Turing test — behaves like human |
| **Acting Rationally** | Rational agent — acts to achieve best outcome |

### 🔑 Rational Agent
- **Agent:** Anything that perceives environment and acts on it
- **Rational Agent:** Acts to achieve best expected outcome given its knowledge
- **PEAS:** Performance measure, Environment, Actuators, Sensors

### 🔑 Types of Environments
| Property | Options |
|---|---|
| Observable | Fully / Partially |
| Deterministic | Deterministic / Stochastic |
| Episodic | Episodic / Sequential |
| Static | Static / Dynamic |
| Discrete | Discrete / Continuous |
| Single-agent | Single / Multi-agent |

### 🔑 Applications of AI
1. Natural Language Processing (NLP) — Siri, Google Translate
2. Computer Vision — Face recognition, autonomous cars
3. Expert Systems — Medical diagnosis, MYCIN
4. Robotics — Industrial automation
5. Game Playing — Chess (Deep Blue), Go (AlphaGo)
6. Machine Learning — Spam filters, recommendations
7. Speech Recognition — Alexa, Google Assistant

---

## UNIT 2: Problem Solving and Searching (15L)
**Topics:** Production Systems, BFS, DFS, Hill Climbing, Best First, A*, AO*, CSP, Min-Max, Alpha-Beta

---

### 🔑 Production Systems
- **State Space:** Set of all possible states
- **Initial State:** Starting configuration
- **Goal State:** Desired configuration
- **Operators:** Actions to move between states
- **Control Strategy:** How to select next operator

### 🔑 BFS vs DFS 🔥

| | BFS | DFS |
|---|---|---|
| Strategy | Level by level (breadth first) | Go deep, backtrack |
| Data Structure | Queue | Stack (or recursion) |
| Complete? | Yes (finite) | Not always |
| Optimal? | Yes (uniform cost) | No |
| Time Complexity | O(b^d) | O(b^m) |
| Space Complexity | O(b^d) — HIGH | O(bm) — LOW |
| Use | Shortest path | Space limited |

b = branching factor, d = depth of solution, m = max depth

### 🔑 Hill Climbing ⭐
- **Local search** — always move to better neighbor
- **Simple Hill Climbing:** Move to first better neighbor
- **Steepest Ascent:** Move to BEST neighbor
- **Problems:**
  - **Local maximum** — stuck at non-global peak
  - **Plateau** — flat area, no better neighbor
  - **Ridge** — steep sides, hard to navigate

**Algorithm (Simple):**
```
1. Start with initial state
2. Evaluate neighbors
3. If neighbor is better, move to it
4. If no better neighbor found, STOP (local maximum)
```

### 🔑 Best First Search
- Uses **heuristic function h(n)** to estimate cost to goal
- Always expands node with **lowest h(n)**
- Uses **priority queue**
- Not complete (can loop), not optimal

### 🔑 A* Algorithm 🔥
- **Combines:** g(n) [actual cost from start] + h(n) [heuristic to goal]
- **f(n) = g(n) + h(n)**
- Optimal if h(n) is **admissible** (never overestimates)
- Complete for finite graphs

**Effect of h(n) accuracy:**
- **Underestimation (h < actual):** A* is still optimal (admissible)
- **Overestimation (h > actual):** A* may not find optimal path (inadmissible)
- **h = 0:** Degenerates to Dijkstra's
- **h = actual:** Optimal expansion

### 🔑 AO* Algorithm
- Used for **AND-OR graphs** (problem decomposition)
- AND nodes: ALL children must be solved
- OR nodes: ANY one child must be solved
- Useful for problems that decompose into subproblems

### 🔑 Constraint Satisfaction Problem (CSP)
- **Variables** + **Domains** + **Constraints**
- Example: Map coloring — variables=regions, domain={colors}, constraints=adjacent≠same color
- N-Queens, Sudoku, scheduling
- **Backtracking** is standard solution approach

### 🔑 Means-End Analysis
- Used in **General Problem Solver (GPS)**
- Compare current state to goal → identify differences → apply operators to reduce differences
- **Steps:** 1) Find difference 2) Find operator to reduce difference 3) Apply operator 4) Repeat

### 🔑 Game Playing — Min-Max Algorithm
- **Two players:** MAX (tries to maximize score), MIN (tries to minimize)
- Build complete game tree
- MAX chooses highest value, MIN chooses lowest
- **Minimax value:** Best achievable value assuming opponent plays optimally

### 🔑 Alpha-Beta Pruning 🔥
- **Optimization of Min-Max** — prune branches that won't affect outcome
- **Alpha (α):** Best value MAX can guarantee (starts -∞)
- **Beta (β):** Best value MIN can guarantee (starts +∞)
- **Prune when α ≥ β**
- Reduces tree from O(b^d) to O(b^(d/2)) in best case

---

## UNIT 3: Knowledge Representation (15L)
**Topics:** Predicate Logic, Resolution, Unification, Semantic Nets, Frames, Scripts, Production Rules, PROLOG

---

### 🔑 First Order Predicate Logic (FOPL)
- Extends propositional logic with **quantifiers** and **predicates**
- **Universal quantifier (∀):** "For all x..."
- **Existential quantifier (∃):** "There exists x..."
- **Predicate:** Property or relationship — e.g., PARENT(John, Mary)
- **Types of quantification:** 2 — Universal and Existential

### 🔑 Resolution Principle 🔥
- Used for **automated theorem proving**
- Convert all formulas to **Conjunctive Normal Form (CNF)**
- Find two clauses with **complementary literals** → resolve to new clause
- If empty clause derived → contradiction found (proof by refutation)

**Steps:**
1. Negate the goal
2. Convert all to CNF
3. Apply resolution rule: {A ∨ B} and {¬A ∨ C} → {B ∨ C}
4. If empty clause derived → original goal is TRUE

### 🔑 Unification
- Process of finding substitution that makes two expressions **identical**
- Used in resolution and PROLOG
- Example: LOVES(x, Mary) and LOVES(John, y) → {x=John, y=Mary}

### 🔑 Semantic Networks
- **Nodes** = objects/concepts, **Arcs** = relationships
- **IS-A** relationship: inheritance hierarchy
- **AKO** (A-Kind-Of): subclass relationship
- Example: Tweety IS-A Bird, Bird AKO Animal, Animal HAS legs

### 🔑 Frames
- **Data structure** capturing all knowledge about an object
- Slots = attributes, Fillers = values
- Supports **inheritance** through AKO links
- Default values + procedural attachments (if-added, if-needed)

### 🔑 Scripts
- Represent **stereotypical sequences** of events
- Components: Entry conditions, Roles, Props, Track, Scenes, Results
- Example: Restaurant script → Enter → Sit → Order → Eat → Pay → Leave

### 🔑 Production Rules
- **IF condition THEN action**
- Used in expert systems
- **Forward chaining:** Start with facts → apply rules → derive conclusions (data-driven)
- **Backward chaining:** Start with goal → find rules to prove it (goal-driven)

### 🔑 PROLOG Basics
- Logic programming language
- **Facts:** parent(tom, bob).
- **Rules:** grandparent(X,Z) :- parent(X,Y), parent(Y,Z).
- **Queries:** ?- grandparent(tom, ann).
- Uses **backward chaining** with unification
- **Cut predicate (!):** Prevents backtracking

---

## UNIT 4: Dealing with Uncertainty (5L)
**Topics:** Truth Maintenance, Default Reasoning, Probabilistic Reasoning, Bayesian Inference

---

### 🔑 Truth Maintenance System (TMS)
- Keeps track of **beliefs and their justifications**
- When belief is retracted → remove all derived beliefs
- **JTMS:** Justification-based TMS
- **ATMS:** Assumption-based TMS

### 🔑 Default Reasoning
- Reasoning with **incomplete information** using defaults
- "If no evidence to the contrary, assume..."
- Example: Birds fly by default (unless told it's a penguin)
- **Non-monotonic reasoning** — conclusions can be retracted

### 🔑 Bayesian Inference ⭐
- **Bayes' Theorem:** P(A|B) = P(B|A) × P(A) / P(B)
- **Prior probability:** Initial belief before evidence
- **Posterior probability:** Updated belief after evidence
- **Bayesian Network:** DAG representing probabilistic dependencies

---

## UNIT 5: Natural Language Processing (5L)
**Topics:** Parsing, Context-Free Grammars, Transformational Grammars, Transition Nets

---

### 🔑 Parsing
- **Syntactic analysis** of sentences
- **Top-Down Parsing:** Start from start symbol, expand using rules
- **Bottom-Up Parsing:** Start from words, reduce using rules
- **Chart Parsing:** Efficient dynamic programming approach

### 🔑 Context-Free Grammar (CFG)
- Rules: Non-terminal → sequence of terminals/non-terminals
- Example: S → NP VP, NP → Det N, VP → V NP
- **Parse tree:** Shows syntactic structure

### 🔑 Augmented Transition Networks (ATN)
- Extension of Finite State Automaton
- States + transitions + **registers** (memory)
- Can handle complex linguistic structures
- More powerful than simple CFG parsers

### 🔑 Expert Systems
- AI program that emulates domain expert's decision making
- **Architecture:**
  - **Knowledge Base** — facts + rules
  - **Inference Engine** — applies rules (forward/backward chaining)
  - **User Interface** — interaction
  - **Explanation Facility** — explains reasoning
- **Applications:** Medical diagnosis (MYCIN), financial analysis, fault diagnosis
- **Knowledge types:** Procedural, Declarative, Meta-knowledge
