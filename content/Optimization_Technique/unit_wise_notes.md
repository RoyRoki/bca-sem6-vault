# 📚 Optimization Technique — Unit-wise Exam Notes
> BCA Sem 6 | UBCAMAJ36014 | Theory: 60 marks | 5 Units

---

## UNIT 1: Introduction to OR (5L)
**Topics:** Origin, Definition, Phases, Mathematical Modeling, Optimization

---

### 🔑 Operational Research — Definition
- **OR:** Application of scientific methods to complex decision-making problems
- Uses mathematical models to find **optimal solutions**
- Originated in WWII for military logistics optimization

### 🔑 Characteristics of OR
1. Systems approach — considers whole system
2. Interdisciplinary — math, statistics, economics, CS
3. Uses models — mathematical representation
4. Uses scientific method — analysis → solution → verify
5. Aimed at finding OPTIMUM (not just any) solution

### 🔑 Phases of OR Study
1. **Formulation** — define problem
2. **Model Construction** — build mathematical model
3. **Model Solution** — solve using appropriate technique
4. **Model Validation** — check if model reflects reality
5. **Implementation** — implement solution

### 🔑 Mathematical Model
- **Objective Function:** What to maximize/minimize (e.g., profit, cost)
- **Decision Variables:** What we control (e.g., x₁, x₂)
- **Constraints:** Limitations (e.g., resources, time)
- **Non-negativity:** Variables ≥ 0

---

## UNIT 2: Transportation Model (8L)
**Topics:** Transportation Problem, Northwest Corner, VAM, Assignment, Hungarian Method

---

### 🔑 Transportation Problem
- Minimize cost of shipping from **m sources** to **n destinations**
- **Balanced problem:** Total supply = Total demand
- **Unbalanced:** Add dummy row/column with 0 cost

### 🔑 Methods to Find Initial Feasible Solution

**1. Northwest Corner Method:**
- Start top-left (northwest corner)
- Allocate as much as possible → move right or down
- Simple but doesn't consider costs → poor initial solution

**2. Vogel's Approximation Method (VAM)** 🔥
- Calculate **penalty** for each row/column (difference between 2 lowest costs)
- Allocate to cell with lowest cost in row/column with highest penalty
- Repeat until all allocations done
- Gives near-optimal solution

### 🔑 Optimality Test: MODI Method (UV Method)
- Compute u_i (row values) and v_j (column values)
- For basic cells: u_i + v_j = c_ij
- For non-basic cells: d_ij = c_ij - u_i - v_j
- If all d_ij ≥ 0 → optimal
- If any d_ij < 0 → improve by bringing that cell into basis (loop method)

### 🔑 Assignment Problem 🔥
- Special case of transportation (supply=demand=1)
- **Goal:** Assign n jobs to n workers to minimize cost/time
- **Hungarian Method:**
  1. Row reduction: subtract row minimum from each row
  2. Column reduction: subtract column minimum from each column
  3. Cover all zeros with minimum number of lines
  4. If #lines = n → optimal; if not → modify matrix
  5. Find zero with a single zero in row/column → assign

---

## UNIT 3: Linear Programming (15L)
**Topics:** Problem Formulation, Graphical Method, Simplex, Big-M, Two-Phase, Special Cases

---

### 🔑 Standard Form of LPP
- Objective: Maximize Z = c₁x₁ + c₂x₂ + ... + cₙxₙ
- Subject to: a₁₁x₁ + a₁₂x₂ + ... ≤ b₁ (all ≤)
- All variables: xᵢ ≥ 0
- Convert ≥ to ≤ by multiplying by -1
- Convert = to two inequalities

### 🔑 Graphical Method 🔥
- Works for **2 variables only**
- Steps:
  1. Plot each constraint as line/inequality
  2. Identify **feasible region** (satisfies all constraints)
  3. Identify **corner points** of feasible region
  4. Evaluate objective function at each corner
  5. Maximum (or minimum) at one of the corners

### 🔑 Simplex Method 🔥
- Systematic algebraic method for n variables
- **Standard form:** Add slack variables (≤) → equality
  - ≤ constraint: add **slack variable** (s_i ≥ 0)
  - ≥ constraint: subtract surplus, add artificial variable
  - = constraint: add artificial variable

**Steps:**
1. Set up initial simplex tableau
2. Find most **negative coefficient in Z-row** → entering variable (pivot column)
3. Find minimum ratio (b_i/a_ij, a_ij>0) → departing variable (pivot row)
4. **Pivot operation** → row reduction
5. Repeat until no negative in Z-row → optimal

**Special Cases:**
| Case | Symptom | Meaning |
|---|---|---|
| Degeneracy | Min ratio tie | Cycling possible, use Bland's rule |
| Alternative Optima | Zero coefficient in optimal Z-row for non-basic | Multiple optimal solutions |
| Unbounded Solution | No positive a_ij in pivot column | Problem is unbounded |
| Infeasible | Artificial variable remains in basis | No feasible solution exists |

### 🔑 Big-M Method ⭐
- Handle ≥ and = constraints
- Add **artificial variables** to each such constraint
- Penalize artificials in objective: Z - M·A₁ - M·A₂...
- M = very large positive number
- If artificials become zero → feasible solution found

### 🔑 Two-Phase Method
- **Phase 1:** Minimize sum of artificial variables
  - If min = 0 → feasible, use as starting BFS
  - If min > 0 → infeasible
- **Phase 2:** Use Phase 1 solution as start, optimize original objective

---

## UNIT 4: Duality (5L)
**Topics:** Dual Problem, Primal-Dual relationship, Dual Simplex

---

### 🔑 Duality 🔥
**Every LPP (primal) has a corresponding dual**

**Conversion Rules:**
| Primal (Max) | Dual (Min) |
|---|---|
| ≤ constraint | ≥ 0 dual variable |
| ≥ constraint | ≤ 0 dual variable |
| = constraint | unrestricted dual variable |
| ≥ 0 variable | ≤ constraint |
| ≤ 0 variable | ≥ constraint |
| Unrestricted variable | = constraint |

**Why use Duality?**
1. Sometimes dual is easier to solve
2. Economic interpretation (shadow prices)
3. Sensitivity analysis
4. Check optimality

**Primal-Dual Relationship:**
- **Weak Duality:** For any primal feasible x and dual feasible y: cx ≤ yb
- **Strong Duality:** At optimality: optimal primal value = optimal dual value

### 🔑 Dual Simplex Method
- Used when solution is **dual feasible but primal infeasible**
- Starts with negative RHS (infeasible but optimal z)
- **Pivot rule:** Choose most negative b_i (leaving), then minimum ratio for entering

---

## UNIT 5: Integer Programming (12L)
**Topics:** Branch and Bound Algorithm

---

### 🔑 Integer Programming
- LP where some/all variables must be **integers**
- **Pure IP:** All variables integer
- **Mixed IP:** Some integer, some continuous
- **Binary IP (0-1):** Variables can only be 0 or 1

**Why not just round LP solution?** Rounded solution may be infeasible or far from optimal.

### 🔑 Branch and Bound Method 🔥
- Most popular algorithm for integer programming

**Algorithm:**
1. Solve LP relaxation (ignore integer constraint)
2. If all variables are integers → done!
3. Select non-integer variable xⱼ with fractional value f
4. **Branch:** Create two subproblems:
   - Branch 1: xⱼ ≤ ⌊f⌋ (floor)
   - Branch 2: xⱼ ≥ ⌈f⌉ (ceiling)
5. Solve each subproblem (recursively)
6. **Bound:** If LP relaxation ≤ best integer solution found → prune (fathom)
7. Continue until all branches explored or pruned

**Termination:** When best integer solution found and all other nodes bounded or infeasible

**Example concepts:**
- **Upper bound** (maximization): LP relaxation value
- **Lower bound** (maximization): Best integer solution found so far
- **Fathom node** when: LP infeasible OR LP value ≤ current best OR LP gives integer solution

---

## 🧮 Quick Formula Reference

### Transportation
- Balanced: Total supply = Total demand
- Unbalanced: Add dummy (row if supply>demand, col if demand>supply) with 0 cost
- Optimal condition: All d_ij = c_ij - u_i - v_j ≥ 0

### Simplex
- Pivot column: Most negative Z-row coefficient
- Pivot row: Min (b_i/a_ij) where a_ij > 0
- Number of basic variables = number of constraints

### PERT (from OR PYQ — may appear in tutorials)
- **te = (to + 4tm + tp) / 6** (expected time)
- **Variance = [(tp - to)/6]²**
- Critical path = longest path (sum of te)
- Slack = Latest - Earliest time for each event
