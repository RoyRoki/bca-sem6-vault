# 🎯 Optimization Technique — Most Important Questions

---

## 🔥 10 Mark Questions (Group C) — Must Practice

### Q1. Simplex Method — Solve LPP 🔥 (appeared BOTH years)
**Typical question format:**
```
Maximize Z = 3x₁ + 2x₂ + 5x₃
Subject to: x₁ + 4x₂ ≤ 420
            3x₁ + 2x₃ ≤ 460
            x₁ + 2x₂ + x₃ ≤ 430
            x₁, x₂, x₃ ≥ 0
```
**Answer approach:** Add slack variables s₁, s₂, s₃ → Initial BFS: s₁=420, s₂=460, s₃=430 → Iterate

---

### Q2. Transportation Problem (VAM + Optimal) 🔥
**Typical question format:**
```
       D1   D2   D3   Supply
O1 [  2    2    3  ]   10
O2 [  4    1    2  ]   15
O3 [  1    3    1  ]   40
Demand: 20   15   30
```
**Steps:** Check balance (∑supply=65, ∑demand=65 ✓) → Apply VAM → Check optimality (MODI/UV method)

---

### Q3. Assignment Problem — Hungarian Method 🔥
**Steps to write in exam:**
1. Row reduction (subtract row min)
2. Column reduction (subtract col min)
3. Draw minimum lines covering all zeros
4. If lines = n → optimal → assign
5. Else → modify (min uncovered - subtract from uncovered, add to doubly covered)

---

### Q4. PERT — Find Critical Path 🔥
**Given table of activities with to, tm, tp:**
- Calculate te = (to + 4tm + tp)/6 for each
- Draw network diagram
- Find earliest/latest times for each event
- Critical path = zero slack activities
- Project duration = longest path

---

## ⭐ 5 Mark Questions (Group B)

### Q1. Graphical Method ⭐ (both years)
**Steps for 2-variable LPP:**
1. Convert constraints to equalities, find 2 points each
2. Plot lines, shade feasible region
3. Mark corner points
4. Calculate Z at each corner → select max/min

### Q2. Write the Dual of LPP ⭐ (both years)
**Remember:**
- Primal MAX → Dual MIN
- Primal ≤ constraints → Dual ≥ 0 variables
- Number of dual constraints = number of primal variables
- Number of dual variables = number of primal constraints

**Example:**
```
Primal MAX: Z = 4x₁ + 2x₂
Subject to: x₁ - 2x₂ ≥ 2
            x₁ + 2x₂ = 8
            x₁ - x₂ ≤ 10

Dual MIN: W = 2y₁ + 8y₂ + 10y₃
Subject to: y₁ + y₂ + y₃ ≥ 4
            -2y₁ + 2y₂ - y₃ ≥ 2
            y₁ ≤ 0 (from ≥ constraint), y₂ unrestricted (=), y₃ ≥ 0 (from ≤)
```

### Q3. Degeneracy in LPP ⭐
- **Definition:** Basic feasible solution is degenerate if one or more basic variables = 0
- **Cause:** Tie in minimum ratio test during simplex iteration
- **Problem:** Cycling (infinite loop possible)
- **Resolution:** Bland's Rule — always pick smallest subscript for pivot

---

## ✅ 1 Mark Definitions

| Term | Definition |
|---|---|
| Feasible solution | Solution satisfying ALL constraints |
| Optimal solution | Feasible solution giving best objective value |
| Basic solution | Solution with at most m non-zero variables (m = constraints) |
| Slack variable | Added to ≤ constraint to convert to equality |
| Surplus variable | Subtracted from ≥ constraint |
| Artificial variable | Temporary variable for Big-M/two-phase (must be 0 at optimum) |
| Unbounded solution | Objective can be improved indefinitely |
| Infeasible | No point satisfies all constraints simultaneously |
| CPM | Critical Path Method — uses single time estimate |
| PERT | Program Evaluation Review Technique — three time estimates |
| Dummy activity | Zero-duration, zero-cost arc for precedence logic |
| Assignment problem | Special transportation: 1 unit supply/demand each |
