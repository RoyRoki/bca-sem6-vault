# ⚡ Optimization Technique — Last Minute Revision
> Read this 30 minutes before exam

---

## 🔑 SIMPLEX STEPS (memorize sequence)
1. Convert to standard form → add slack variables (s ≥ 0)
2. Set up tableau (Z row + constraint rows)
3. Pick pivot column → **most negative Z-row entry**
4. Pick pivot row → **min ratio (b_i / a_ij), a_ij > 0**
5. Pivot: divide pivot row by pivot element → row reduce all others
6. Repeat until **no negative in Z-row** → OPTIMAL

**Entering variable** = most negative Z coefficient  
**Departing variable** = minimum ratio rule

---

## 🔑 SPECIAL SIMPLEX CASES
| Problem | Signal |
|---|---|
| Degeneracy | Tie in minimum ratio |
| Alternative optima | Non-basic has 0 in Z-row at optimal |
| Unbounded | No positive a_ij in pivot column |
| Infeasible | Artificial variable in final basis |

---

## 🔑 DUALITY QUICK CONVERSION
**Primal MAX → Dual MIN**
- Each constraint (≤) → dual variable (≥0)
- Each variable (≥0) → constraint (≥)
- Objective coefficients ↔ RHS values

**Key theorem:** Optimal primal value = Optimal dual value (Strong Duality)

---

## 🔑 TRANSPORTATION — VAM STEPS
1. Find 2 smallest costs in each row and column
2. Calculate penalty = difference between 2 smallest
3. Select row/column with **highest penalty**
4. Allocate to **minimum cost cell** in that row/column
5. Eliminate satisfied row/column → repeat

---

## 🔑 HUNGARIAN METHOD STEPS (Assignment)
1. Row reduction: subtract row minimum from each row
2. Column reduction: subtract column minimum from each column
3. Cover all zeros with minimum lines
4. If lines = n → **OPTIMAL** → assign zeros
5. Else: Find minimum uncovered value → subtract from uncovered, add to doubly-covered
6. Go to step 3

---

## 🔑 PERT FORMULAS
- **Expected time:** te = (to + 4tm + tp) / 6
- **Variance:** σ² = [(tp - to)/6]²
- **Critical Path:** Longest path (maximum ∑te)
- **Slack:** LS - ES = LF - EF (should be 0 for critical activities)

---

## 🔑 BRANCH & BOUND CONCEPT
1. Solve LP relaxation first
2. Non-integer fractional value → branch (floor ≤ or ≥ ceiling)
3. Prune when: infeasible OR LP ≤ best integer found
4. Best integer found = answer

---

## 🔑 BIG-M METHOD
- Add **artificial variable** to ≥ and = constraints
- Penalize in objective: **subtract M × (artificial)** from Z
- Artificial variable in final basis with value > 0 → **infeasible problem**

---

## 🔑 OR PHASES (5 phases)
1. Formulation → 2. Model Construction → 3. Solution → 4. Validation → 5. Implementation

---

## 🔑 1-MARK DEFINITIONS
| Term | Answer |
|---|---|
| Feasible solution | Solution satisfying all constraints |
| Optimal solution | Best feasible solution (max/min objective) |
| Unbounded solution | Objective can increase indefinitely |
| Infeasible | No solution satisfies all constraints |
| Degenerate | One or more basic variables = 0 |
| Objective function | Mathematical expression to maximize/minimize |
| CPM | Critical Path Method — deterministic activity times |
| PERT | Program Evaluation Review Technique — probabilistic times |
| Dummy activity | Zero-duration activity for network logic only |
| Assignment problem | Assign n workers to n jobs to minimize cost |

---

## ✅ EXAM STRATEGY
**Group A:** Feasible solution, objective function, CPM vs PERT, unbounded, degeneracy  
**Group B:** Graphical method (solve numerical), dual of LPP, degeneracy resolution  
**Group C:** Simplex method (full numerical) | Transportation (VAM + optimal) | Assignment (Hungarian)
