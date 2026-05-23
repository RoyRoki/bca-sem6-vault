# 🎯 Artificial Intelligence — Most Important Questions

---

## 🔥 10 Mark Questions (Group C)

### Q1. A* Algorithm — Admissibility & Effect of Overestimation/Underestimation 🔥
**Key points to cover:**
- **f(n) = g(n) + h(n)** — definition of each
- **Admissible heuristic:** h(n) ≤ actual cost to goal → A* is optimal
- **Underestimation:** A* still finds optimal solution (safe but explores more nodes)
- **Overestimation (h > actual):** A* may miss optimal path → not guaranteed optimal
- **h = 0:** Degenerates to Dijkstra's — always optimal but inefficient
- **h = perfect:** Minimum nodes expanded
- **Example:** 8-puzzle — Manhattan distance is admissible, Euclidean is also admissible

---

### Q2. Resolution Principle — Predicate Logic 🔥
**Key points:**
- Purpose: Automated theorem proving
- Requires: Convert to Conjunctive Normal Form (CNF)
- Rule: From {A ∨ B} and {¬A ∨ C} derive {B ∨ C}
- Method: Proof by refutation — negate goal, derive contradiction (empty clause)

**Steps for exam:**
1. State all premises in predicate logic
2. Negate the conclusion
3. Convert all to CNF (eliminate ∨, →, use De Morgan's)
4. Apply resolution rule
5. If empty clause derived → original statement proven

---

### Q3. Four Informed Search Techniques ⭐
1. **Best First Search** — expand node with lowest h(n)
2. **A* Search** — f(n) = g(n) + h(n), optimal + complete
3. **Hill Climbing** — local search, always move to better neighbor
4. **Beam Search** — keep only best k nodes at each level

---

### Q4. Heuristics for Travelling Salesman Problem ✅
- **Nearest Neighbor:** Start anywhere, always go to nearest unvisited city
- **Cheapest Insertion:** Build tour by inserting cheapest city each time
- **Greedy Algorithm:** Add shortest edges without creating sub-tour/degree>2
- **2-opt / 3-opt:** Swap edges to improve tour iteratively

---

## ⭐ 5 Mark Questions (Group B)

### Q1. BFS vs DFS — Distinguish 🔥
| Feature | BFS | DFS |
|---|---|---|
| Data structure | Queue (FIFO) | Stack (LIFO) |
| Search strategy | Level-by-level | Go deep first |
| Complete | Yes (finite) | No (infinite paths) |
| Optimal | Yes (unit cost) | No |
| Time complexity | O(b^d) | O(b^m) |
| Space complexity | O(b^d) — High | O(bm) — Low |
| Best for | Shortest path | Memory constraint |

---

### Q2. Hill Climbing Algorithm ⭐
```
Algorithm Simple_Hill_Climbing:
1. current ← initial state
2. loop do:
   a. neighbors ← generate all neighbors of current
   b. best ← neighbor with highest h value
   c. if h(best) ≤ h(current) → return current (local max)
   d. current ← best
```
**Problems:** Local maximum, Plateau, Ridge

---

### Q3. Expert System Architecture + Applications 🔥
**Components:**
1. **Knowledge Base** — domain facts + production rules
2. **Inference Engine** — forward/backward chaining logic
3. **Working Memory** — current facts/goals
4. **User Interface** — how user interacts
5. **Explanation Facility** — why/how reasoning occurred

**3 Application Areas:** Medical diagnosis (MYCIN), Financial analysis, Fault diagnosis

---

## ✅ 1 Mark Quick Answers

| Q | A |
|---|---|
| Father of AI | John McCarthy |
| When is blind search used? | When no heuristic information is available |
| Common language for AI | LISP (also PROLOG) |
| Logic symbols in AI | ∧ (AND), ∨ (OR), ¬ (NOT), → (implies), ↔ (iff), ∀ (all), ∃ (exists) |
| Types of quantification | 2: Universal (∀) and Existential (∃) |
| Complete algorithm | One that finds solution if solution exists |
| ML methods | Supervised, Unsupervised, Reinforcement Learning |
| Procedural domain knowledge form | IF condition THEN action (production rule) |
