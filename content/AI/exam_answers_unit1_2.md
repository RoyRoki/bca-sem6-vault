# 🤖 Artificial Intelligence — Exam Answers: Units 1 & 2
> Smart topper notes | Exam-ready | High retention

---

# ⭐ Q1. What is Artificial Intelligence? Explain Turing Test and Rational Agent.

## Definition
**AI** = Branch of computer science that makes machines perform tasks that require **human-like intelligence**.

## Father of AI
> **John McCarthy** — coined the term "Artificial Intelligence" in **1956** at the Dartmouth Conference.

## Turing Test

```
         +----------+
         | HUMAN    |
         | Interrogat|
         +----------+
         /           \
        /             \
+----------+     +----------+
|  HUMAN   |     | MACHINE  |
| (Person A)|    | (Computer)|
+----------+     +----------+

If interrogator CANNOT tell which is human → Machine PASSES Turing Test
```

- Proposed by **Alan Turing** in 1950
- Test is **text-based** (no visual clues)
- Machine passes = artificial intelligence achieved

## Four Approaches to AI

| Approach | Description | Example |
|---|---|---|
| **Think Humanly** | Cognitive modeling, like a brain | Neural networks |
| **Think Rationally** | Logic and reasoning | Theorem provers |
| **Act Humanly** | Behave like humans | Turing test goal |
| **Act Rationally** | Best action to achieve goal | Rational agent |

## Rational Agent

```
      Environment
           ↓
    [Sensors/Perception]
           ↓
       AGENT
    (Decision Maker)
           ↓
    [Actuators/Action]
           ↓
      Environment
```

- **Agent** = anything that perceives environment and acts
- **Rational** = acts to achieve **best expected outcome**
- PEAS description:
  - **P**erformance measure
  - **E**nvironment
  - **A**ctuators
  - **S**ensors

## Applications of AI
| Domain | Example |
|---|---|
| NLP | Siri, Alexa, Google Translate |
| Vision | Face recognition, self-driving cars |
| Expert Systems | Medical diagnosis (MYCIN) |
| Game Playing | Chess (Deep Blue), Go (AlphaGo) |
| Robotics | Industrial arms, surgical robots |
| ML | Spam filter, recommendation systems |

## Conclusion
> AI makes machines intelligent. Turing Test = behave like human. Rational Agent = act to achieve best outcome.

---

# 🔥 Q2. Compare BFS and DFS with Examples.

## Definition
Both are **uninformed (blind) search** strategies for exploring a state space tree.

## BFS — Breadth First Search

```
Tree:
         A
        / \
       B   C
      / \ / \
     D  E F  G

BFS order: A → B → C → D → E → F → G
(Level by level — left to right)
```

```
Algorithm:
1. Add start node to QUEUE
2. While queue not empty:
   a. Dequeue node N
   b. If N = goal → FOUND
   c. Add all unvisited neighbors of N to QUEUE
3. If queue empty → NOT FOUND
```

## DFS — Depth First Search

```
Tree:
         A
        / \
       B   C
      / \ / \
     D  E F  G

DFS order: A → B → D → E → C → F → G
(Go deep first, backtrack when stuck)
```

```
Algorithm:
1. Push start node to STACK
2. While stack not empty:
   a. Pop node N
   b. If N = goal → FOUND
   c. Push all unvisited neighbors of N to STACK
3. If stack empty → NOT FOUND
```

## BFS vs DFS Comparison Table 🔥

| Feature | BFS | DFS |
|---|---|---|
| **Data Structure** | Queue (FIFO) | Stack (LIFO) |
| **Search Order** | Level by level | Deep, then backtrack |
| **Completeness** | Yes (finite graph) | No (may loop infinitely) |
| **Optimality** | Yes (unit cost) | No |
| **Time Complexity** | O(b^d) | O(b^m) |
| **Space Complexity** | O(b^d) — HIGH | O(b×m) — LOW |
| **Best for** | Shortest path | Memory-limited, deep solutions |

> b = branching factor, d = depth of solution, m = maximum depth

## When to Use

| Use BFS when... | Use DFS when... |
|---|---|
| Need shortest path | Memory is limited |
| Solution is shallow | Solution is deep |
| Graph is not very wide | Don't need optimal solution |

## Conclusion
> BFS = explore all neighbors first (wide). DFS = go as deep as possible first. BFS finds shortest path; DFS uses less memory.

---

# 🔥 Q3. Hill Climbing — Algorithm, Types, and Problems.

## Definition
**Hill Climbing** = Local search algorithm that always moves to a **better neighboring state**.

Analogy: Climbing a hill in fog — take each step upward, stop when no better step exists.

## Simple Hill Climbing Algorithm ⭐

```
Algorithm:
1. Start at initial state S
2. Evaluate S using heuristic h(S)
3. Generate neighbors of S
4. Pick neighbor N with h(N) > h(S)
5. Move to N → set S = N
6. Repeat from step 2
7. Stop when no neighbor is better than current
   → Return current as solution (may be local max)
```

## Types of Hill Climbing

| Type | Selection Rule |
|---|---|
| **Simple HC** | Move to first BETTER neighbor |
| **Steepest Ascent HC** | Move to BEST neighbor (maximum h) |
| **Stochastic HC** | Move to random better neighbor |

## Three Problems (🔥 always asked)

```
1. LOCAL MAXIMUM:
   Value
     |      *
     |    *   *
     |   *     *          *
     |  *       *        * *
     |           *      *   *
     +---------------------------------→ State
              ↑              ↑
          Local max       Global max
          (stuck here)

2. PLATEAU (flat area):
   Value
     |           ___________
     |     _____|           |_____
     |    |                       |
     +-------------------------------------→ State
              (all same h value — where to go?)

3. RIDGE:
   Value
     |         /\
     |        /  \
     |       /    \
     |      (narrow peak — steps miss it)
```

| Problem | Description | Solution |
|---|---|---|
| **Local Maximum** | Better than neighbors but NOT global best | Random restart |
| **Plateau** | All neighbors same value, no progress | Random sideways moves |
| **Ridge** | Peak in one direction, flat in another | Move in multiple directions |

## Conclusion
> Hill Climbing = greedy local search. Fast but gets stuck. Problems: local max, plateau, ridge. Fix with random restarts.

---

# 🔥 Q4. A* Algorithm — With Overestimation Effect.

## Definition
**A*** = Best-first search using **f(n) = g(n) + h(n)**.

| Symbol | Meaning |
|---|---|
| **g(n)** | Actual cost from start to node n |
| **h(n)** | Heuristic estimate from n to goal |
| **f(n)** | Total estimated cost through n |

## How A* Works

```
Start Node S

1. Open List = {S}, Closed List = {}
2. Pick node with LOWEST f(n) from Open
3. If it's GOAL → done, return path
4. Move it to Closed List
5. Expand its neighbors:
   - Calculate f(neighbor) = g(neighbor) + h(neighbor)
   - If not in Closed, add to Open
6. Repeat from step 2
```

## Visual Example (Grid)

```
S = Start, G = Goal, # = Wall

+---+---+---+---+
| S |   | # |   |
+---+---+---+---+
|   |   | # | G |
+---+---+---+---+
|   |   |   |   |
+---+---+---+---+

A* explores nodes in order of f = g + h
Finds shortest path around wall
```

## Admissibility & Effect of h(n) 🔥

| h(n) condition | Effect on A* |
|---|---|
| **h(n) = 0** | A* becomes Dijkstra's (explores everything — slow) |
| **h(n) ≤ actual** (Admissible) | A* is **OPTIMAL** (guaranteed best path) |
| **h(n) = actual (perfect)** | A* expands minimum nodes (fastest) |
| **h(n) > actual** (Inadmissible) | A* may **MISS optimal path** (not guaranteed) |

```
Underestimate: Safe but explores more
               (Always optimal ✅)

Overestimate: Faster but may skip optimal path
              (NOT guaranteed optimal ❌)

Perfect h: Minimum work, optimal result ✅
```

## A* Properties

| Property | Value |
|---|---|
| **Complete** | Yes (finite search space) |
| **Optimal** | Yes (if h is admissible) |
| **Time** | O(b^d) in worst case |
| **Space** | O(b^d) — stores all nodes |

## Common Heuristics
- **8-puzzle:** Manhattan distance (sum of moves per tile)
- **Maps:** Euclidean distance, Haversine
- **TSP:** Nearest neighbor, minimum spanning tree

## Conclusion
> A* = BFS + heuristic. f(n) = g(n) + h(n). If h never overestimates (admissible), A* always finds the optimal path. Overestimating h breaks optimality.

---

# 🔥 Q5. Min-Max Algorithm and Alpha-Beta Pruning.

## Definition
**Min-Max** = Algorithm for two-player games. MAX player maximizes score, MIN player minimizes it.

## Game Tree Example

```
         MAX
          |
    +-----+-----+
    3           2
   MIN         MIN
   / \         / \
  3   5       2   9
MAX  MAX      MAX  MAX

MAX picks: 3 (left subtree, MIN gives min of 3,5 = 3)
           2 (right subtree, MIN gives min of 2,9 = 2)
MAX picks max(3,2) = 3
```

## Alpha-Beta Pruning 🔥

**Purpose:** Cut off branches that won't affect final decision → faster!

| Variable | Meaning |
|---|---|
| **α (Alpha)** | Best value MAX can guarantee (starts -∞) |
| **β (Beta)** | Best value MIN can guarantee (starts +∞) |
| **Prune when** | α ≥ β |

## How Pruning Works

```
         MAX (α=-∞, β=+∞)
         /        \
       MIN          MIN
      (3)          (?)
      / \           / \
     3   5     [3]   [PRUNE!]
     ↑
  α becomes 3

When right MIN sees first child = 2 < α(3):
MIN would choose ≤2, which is worse for MAX than α=3
→ PRUNE remaining children of right MIN
```

## Benefits

| Without Alpha-Beta | With Alpha-Beta |
|---|---|
| O(b^d) | O(b^(d/2)) best case |
| Explores all nodes | Prunes useless branches |
| Slower | Up to 2× deeper search possible |

## Conclusion
> Min-Max = game strategy (MAX wants high, MIN wants low). Alpha-Beta = smart Min-Max that skips useless branches. Cuts time from O(b^d) to O(b^(d/2)).

---

# ⭐ Q6. Constraint Satisfaction Problem (CSP) and Means-End Analysis

## CSP Definition
A problem with:
- **Variables:** X = {x₁, x₂, ..., xₙ}
- **Domains:** D = {d₁, d₂, ..., dₙ} (possible values)
- **Constraints:** Relations between variables

## Example — Map Coloring

```
     WA — NT — Q
     |  \ / \  |
     SA—NSW—VIC
        |
       TAS

Variables: WA, NT, Q, SA, NSW, VIC, TAS
Domain: {Red, Green, Blue}
Constraint: Adjacent states ≠ same color

Solution: WA=R, NT=G, Q=R, SA=B, NSW=G, VIC=R, TAS=G
```

## Solution Method — Backtracking
```
1. Pick unassigned variable
2. Try each value in domain
3. If value consistent with constraints → assign
4. Recurse on remaining variables
5. If contradiction → backtrack
```

## Means-End Analysis

**Idea:** Compare current state to goal → find the **difference** → apply **operator** to reduce it.

```
Current State: "Dog is in room A"
Goal State:    "Dog is in room B"

Step 1: Find difference = Location (A vs B)
Step 2: Find operator = MOVE(dog, A, B)
Step 3: Apply operator
Step 4: Check → goal reached?
```

Used in **GPS (General Problem Solver)**.

## Conclusion
> CSP = constraints + variables + domains. Solve by backtracking. Means-End Analysis = find difference between current + goal, reduce it step by step.
