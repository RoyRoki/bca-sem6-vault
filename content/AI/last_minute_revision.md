# ⚡ Artificial Intelligence — Last Minute Revision
> Read this 30 minutes before exam

---

## 🔑 FATHER OF AI = John McCarthy (1956)
## 🔑 TURING TEST = Machine indistinguishable from human by interrogator

---

## 🔑 BFS vs DFS (MUST MEMORIZE TABLE)
| | BFS | DFS |
|---|---|---|
| Uses | Queue | Stack |
| Complete? | Yes | No |
| Optimal? | Yes | No |
| Space | HIGH O(b^d) | LOW O(bm) |
| When | Shortest path | Space-limited |

---

## 🔑 A* ALGORITHM
- **f(n) = g(n) + h(n)**
- g(n) = actual cost from start to n
- h(n) = heuristic estimate from n to goal
- **Admissible** = h never overestimates → A* is optimal
- **Overestimate h** → may miss optimal path (not optimal)
- **h = 0** → Dijkstra's algorithm
- **h = actual** → perfect, minimum nodes expanded

---

## 🔑 ALPHA-BETA PRUNING
- Prune when **α ≥ β**
- α = best MAX can guarantee (updated at MAX nodes)
- β = best MIN can guarantee (updated at MIN nodes)
- Best case: O(b^(d/2)) vs MinMax O(b^d)

---

## 🔑 HILL CLIMBING PROBLEMS (3)
1. **Local maximum** — can't go up, not at global peak
2. **Plateau** — all neighbors same value
3. **Ridge** — narrow peak, hard to navigate

---

## 🔑 RESOLUTION (3 steps)
1. Negate the goal
2. Convert everything to CNF
3. Resolve complementary literals until empty clause → proved!

---

## 🔑 KNOWLEDGE REPRESENTATIONS
- **Semantic Net** = nodes + arcs (IS-A, AKO relationships)
- **Frames** = slots + fillers + inheritance + defaults
- **Scripts** = event sequences (Restaurant, Doctor visit)
- **Production Rules** = IF...THEN rules

---

## 🔑 EXPERT SYSTEM COMPONENTS (4)
1. Knowledge Base (facts + rules)
2. Inference Engine (forward/backward chaining)
3. User Interface
4. Explanation Facility

**Forward chaining** = data driven (facts → conclusion)  
**Backward chaining** = goal driven (goal → find supporting facts)

---

## 🔑 PROLOG BASICS
- Fact: `parent(tom, bob).`
- Rule: `grandparent(X,Z) :- parent(X,Y), parent(Y,Z).`
- Query: `?- grandparent(tom, ann).`
- Uses backward chaining

---

## 🔑 BAYESIAN THEOREM
**P(A|B) = P(B|A) × P(A) / P(B)**
- Prior = P(A), Posterior = P(A|B)

---

## 🔑 GROUP A QUICK ANSWERS
- Father of AI → John McCarthy
- Blind search → when no heuristic (BFS/DFS)
- Common AI language → LISP / PROLOG
- Quantification types → 2 (Universal ∀, Existential ∃)
- Complete algorithm → finds solution if one exists
- ML methods → Supervised, Unsupervised, Reinforcement

---

## ✅ EXAM STRATEGY
**Group A:** Father of AI, blind search, quantification types, Turing test, production rules  
**Group B:** BFS vs DFS, Hill Climbing algorithm, Expert System architecture  
**Group C:** A* algorithm with over/underestimation | Resolution with example
