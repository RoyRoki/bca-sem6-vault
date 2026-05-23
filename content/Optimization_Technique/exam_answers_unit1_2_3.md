# 📊 Optimization Technique — Exam Answers: Units 1, 2 & 3
> Smart topper notes | Exam-ready | High retention

---

# 🔥 Q1. Operations Research — Definition, Phases, Characteristics

## Definition
**Operations Research (OR)** = Scientific method of providing quantitative basis for decision-making in complex operational problems to optimize the use of limited resources.

## Characteristics of OR 🔥

```
+─────────────────────────────────────────+
|          OR CHARACTERISTICS             |
+─────────────────────────────────────────+
  1. INTERDISCIPLINARY approach
  2. Scientific METHOD (mathematical models)
  3. Team APPROACH (experts from multiple fields)
  4. Decision under UNCERTAINTY
  5. Optimizes OBJECTIVES (max/min)
  6. Uses MODELS (not real systems)
  7. Improves EFFICIENCY
+─────────────────────────────────────────+
```

## Phases of OR 🔥

```
Phase 1: PROBLEM FORMULATION
         Define objective, constraints, variables
                    ↓
Phase 2: MATHEMATICAL MODEL BUILDING
         Convert real problem to equations
                    ↓
Phase 3: SOLUTION OF THE MODEL
         Solve using algorithms (Simplex, etc.)
                    ↓
Phase 4: MODEL VALIDATION & TESTING
         Check if model reflects real problem
                    ↓
Phase 5: IMPLEMENTATION
         Apply solution to real situation
                    ↓
Phase 6: CONTROL & REVIEW
         Monitor, update if environment changes
```

## OR Techniques (Applications)

| Technique | Use |
|---|---|
| **Linear Programming** | Optimize with linear constraints |
| **Transportation** | Minimize shipping costs |
| **Assignment** | Match workers to jobs optimally |
| **Game Theory** | Decision under competition |
| **PERT/CPM** | Project scheduling |
| **Queuing** | Optimize waiting lines |
| **Integer Programming** | Whole-number solutions |

## Conclusion
> OR = scientific decision-making using math models. 6 phases: Formulate → Model → Solve → Validate → Implement → Control. Goal: optimize resources.

---

# 🔥 Q2. Linear Programming Problem (LPP) — Formulation and Graphical Method

## LPP Structure

```
Objective Function:   Maximize Z = c₁x₁ + c₂x₂
                      OR
                      Minimize Z = c₁x₁ + c₂x₂

Subject to Constraints:
  a₁₁x₁ + a₁₂x₂ ≤ b₁
  a₂₁x₁ + a₂₂x₂ ≤ b₂
  x₁, x₂ ≥ 0    (Non-negativity)
```

## Assumptions of LPP

| Assumption | Meaning |
|---|---|
| **Proportionality** | Objective/constraints are linear |
| **Additivity** | Total = sum of individual contributions |
| **Divisibility** | Variables can be fractions |
| **Certainty** | All parameters are known |

## Graphical Method Steps (2 variables only)

```
Step 1: Plot each constraint as a line (treat ≤ as =)
Step 2: Identify feasible region (satisfies ALL constraints + x₁,x₂ ≥ 0)
Step 3: Find CORNER POINTS of feasible region
Step 4: Evaluate Z at each corner point
Step 5: Pick maximum/minimum Z → OPTIMAL SOLUTION
```

## Full Example 🔥

```
Maximize Z = 5x₁ + 4x₂
Subject to:
  6x₁ + 4x₂ ≤ 24     ... Constraint 1
  x₁ + 2x₂ ≤ 6       ... Constraint 2
  x₁, x₂ ≥ 0

Step 1: Find intercepts:
  C1: (4, 0) and (0, 6)
  C2: (6, 0) and (0, 3)

Step 2: Find intersection of C1 and C2:
  6x₁ + 4x₂ = 24
  x₁ + 2x₂ = 6 → x₁ = 6 - 2x₂
  6(6-2x₂) + 4x₂ = 24
  36 - 12x₂ + 4x₂ = 24
  -8x₂ = -12 → x₂ = 1.5, x₁ = 3

Corner Points:
+──────────────────────────────+
| Corner  | x₁ | x₂ | Z=5x₁+4x₂ |
+─────────+────+────+────────────+
| O(0,0)  |  0 |  0 |     0      |
| A(4,0)  |  4 |  0 |    20      |
| B(3,1.5)| 3  |1.5 |  15+6=21   | ← OPTIMAL
| C(0,3)  |  0 |  3 |    12      |
+──────────────────────────────+

Max Z = 21 at x₁=3, x₂=1.5
```

## Conclusion
> LPP = maximize/minimize linear objective with linear constraints. Graphical method: plot lines, find feasible region, test corner points, pick best Z.

---

# 🔥 Q3. Simplex Method — Algorithm and Tableau

## When to Use
- More than 2 variables (Graphical method fails)
- Systematic algebraic approach

## Key Terms

```
Basic Variables = variables currently in the solution (BFS)
Non-Basic Variables = variables set to ZERO
Basis = set of basic variables
BFS = Basic Feasible Solution
Pivot = element used to perform row operations
```

## Standard Form

```
Maximize Z = c₁x₁ + c₂x₂ + ... + 0·s₁ + 0·s₂

Add SLACK VARIABLES (s₁, s₂, ...) to convert ≤ to =:
  6x₁ + 4x₂ + s₁ = 24
  x₁ + 2x₂ + s₂ = 6
  Z - 5x₁ - 4x₂ = 0
```

## Simplex Algorithm Steps 🔥

```
Step 1: Convert to standard form (add slack variables)
Step 2: Set up initial tableau
Step 3: Find ENTERING variable → most negative coefficient in Z-row
Step 4: Find LEAVING variable → minimum ratio test (b/pivot column)
Step 5: Perform ROW OPERATIONS to make pivot element = 1
Step 6: Update Z-row and all other rows
Step 7: Repeat Steps 3-6 until no negative in Z-row
Step 8: Read solution: basic vars = b values, non-basic = 0
```

## Full Simplex Tableau Example 🔥

```
Problem: Max Z = 5x₁ + 4x₂
         6x₁ + 4x₂ ≤ 24
         x₁ + 2x₂ ≤ 6

Standard Form:
  6x₁ + 4x₂ + s₁ = 24
  x₁ + 2x₂ + s₂ = 6

Initial Tableau:
+────+────────────────────────────────────────+──────+
| BV | x₁  | x₂  | s₁  | s₂  |  b  | Ratio  |
+────+─────+─────+─────+─────+─────+────────+
| s₁ |  6  |  4  |  1  |  0  |  24 | 24/6=4 |
| s₂ |  1  |  2  |  0  |  1  |   6 | 6/1=6  |
+────+─────+─────+─────+─────+─────+────────+
|  Z | -5  | -4  |  0  |  0  |   0 |        |
+────+─────+─────+─────+─────+─────+────────+
  ↑
Most negative → x₁ enters
Min ratio → 4 (row 1) → s₁ leaves

Divide Row 1 by 6 (pivot=6):
Row 1 new: [1, 2/3, 1/6, 0, 4]

Row 2 = Row 2 - 1×(new Row 1):
Row 2 new: [0, 4/3, -1/6, 1, 2]

Z-row = Z-row + 5×(new Row 1):
Z-row new: [0, -2/3, 5/6, 0, 20]

Iteration 2 Tableau:
+────+─────+──────+──────+─────+──────+──────────+
| BV | x₁  |  x₂  |  s₁  | s₂  |   b  |  Ratio   |
+────+─────+──────+──────+─────+──────+──────────+
| x₁ |  1  | 2/3  | 1/6  |  0  |   4  | 4/(2/3)=6|
| s₂ |  0  | 4/3  |-1/6  |  1  |   2  |2/(4/3)=1.5|
+────+─────+──────+──────+─────+──────+──────────+
|  Z |  0  |-2/3  | 5/6  |  0  |  20  |          |
+────+─────+──────+──────+─────+──────+──────────+
        ↑
x₂ enters, min ratio = 1.5 (row 2) → s₂ leaves

Divide Row 2 by 4/3:
Row 2 new: [0, 1, -1/8, 3/4, 1.5]

Row 1 = Row 1 - (2/3)×new Row 2:
Row 1 new: [1, 0, 1/4, -1/2, 3]

Z-row = Z-row + (2/3)×new Row 2:
Z-row: [0, 0, 3/4, 1/2, 21]

Final Tableau:
+────+─────+─────+──────+──────+─────+
| BV | x₁  | x₂  |  s₁  |  s₂  |  b  |
+────+─────+─────+──────+──────+─────+
| x₁ |  1  |  0  | 1/4  | -1/2 |  3  |
| x₂ |  0  |  1  |-1/8  |  3/4 | 1.5 |
+────+─────+─────+──────+──────+─────+
|  Z |  0  |  0  | 3/4  |  1/2 | 21  |
+────+─────+─────+──────+──────+─────+

No negatives in Z-row → OPTIMAL!
Solution: x₁ = 3, x₂ = 1.5, Z = 21 ✅
```

## Special Cases in Simplex 🔥

| Case | Sign | How to Detect | What to Do |
|---|---|---|---|
| **Degeneracy** | ⚠ | Minimum ratio tie | Use Bland's rule or arbitrary choice |
| **Alternative Optima** | ✅ | Z-row has 0 for non-basic var | Multiple solutions — all are optimal |
| **Unbounded** | ❌ | No positive element in pivot column | Problem has no bounded max |
| **Infeasible** | ❌ | Artificial variable remains in basis | Problem has no feasible solution |

## Conclusion
> Simplex = systematic algebraic corner-point search. Add slacks, build tableau, find entering (most negative Z-row) and leaving (min ratio) variables, pivot, repeat. No negatives = optimal.

---

# 🔥 Q4. Big-M Method and Two-Phase Method

## When Are These Needed?
For LPPs with **≥ constraints** or **= constraints** — adding just slacks creates a non-feasible starting basis.

**Solution:** Add **Artificial Variables** to get initial BFS.

```
≤ constraint: Add SLACK (s)
= constraint: Add ARTIFICIAL (A)
≥ constraint: Subtract SURPLUS (s), Add ARTIFICIAL (A)
```

---

## Big-M Method ⭐

```
Penalize artificial variables with large M in objective:
  Maximize: Z = ... - M·A₁ - M·A₂
  Minimize: Z = ... + M·A₁ + M·A₂

If artificial variable remains in basis at optimum:
  → Problem is INFEASIBLE
If artificial variable leaves basis:
  → We have found feasible region, continue normally
```

### Example Setup

```
Minimize Z = 2x₁ + 3x₂
Subject to: x₁ + x₂ ≥ 4
            2x₁ + x₂ ≥ 6
            x₁, x₂ ≥ 0

Standard Form:
x₁ + x₂ - s₁ + A₁ = 4
2x₁ + x₂ - s₂ + A₂ = 6

Big-M Objective (minimize):
Z = 2x₁ + 3x₂ + 0s₁ + 0s₂ + MA₁ + MA₂
```

---

## Two-Phase Method ⭐

```
PHASE 1: Minimize sum of artificial variables
         If min = 0 → feasible solution found
         If min > 0 → Problem is INFEASIBLE

PHASE 2: Drop artificial variables from basis
         Use solution from Phase 1 as starting BFS
         Now solve original problem
```

## Comparison: Big-M vs Two-Phase

| Feature | Big-M | Two-Phase |
|---|---|---|
| **Approach** | Single tableau with large M | Two separate tableaux |
| **Simplicity** | Simpler to set up | Cleaner mathematically |
| **Numerical issues** | M can cause instability | No M — more stable |
| **Detection of infeasibility** | Artificial stays in basis | Phase 1 min > 0 |

## Conclusion
> Big-M = penalty artificial variables with cost M. Two-Phase = Phase 1 removes artificials, Phase 2 optimizes original. Both handle ≥ and = constraints.

---

# 🔥 Q5. Transportation Problem — NW Corner and VAM

## Definition
**Transportation Problem** = Find minimum cost plan to transport goods from **m sources** to **n destinations**.

```
           Destinations
           D1   D2   D3   Supply
     S1 [ c11  c12  c13 ]  a1
Sources S2 [ c21  c22  c23 ]  a2
     S3 [ c31  c32  c33 ]  a3
  Demand   b1   b2   b3

Min Z = Σ Σ cᵢⱼ xᵢⱼ
Subject to: Row sums = Supply, Column sums = Demand
```

## Basic Feasible Solution (BFS) Methods

---

### Method 1: North-West Corner (NW Corner) ⭐

```
Rule: Always fill the TOP-LEFT (north-west) corner first

Algorithm:
1. Start at (1,1) — top-left cell
2. Allocate min(supply_i, demand_j) to current cell
3. Reduce supply/demand by allocated amount
4. If supply exhausted → move DOWN (next row)
5. If demand satisfied → move RIGHT (next column)
6. Repeat until all supply/demand satisfied
```

### NW Corner Example 🔥

```
Problem:
           D1   D2   D3   Supply
     S1 [  2    3    1  ]   30
     S2 [  5    4    8  ]   40
     S3 [  5    6    8  ]   30
  Demand  20   30   50

Step 1: Cell (1,1): min(30,20) = 20 → x₁₁=20
         S1 supply left = 10, D1 satisfied

Step 2: Cell (1,2): min(10,30) = 10 → x₁₂=10
         S1 exhausted, D2 left = 20

Step 3: Cell (2,2): min(40,20) = 20 → x₂₂=20
         D2 satisfied, S2 left = 20

Step 4: Cell (2,3): min(20,50) = 20 → x₂₃=20
         S2 exhausted, D3 left = 30

Step 5: Cell (3,3): min(30,30) = 30 → x₃₃=30
         Done!

Allocation Table:
         D1    D2    D3   Supply
S1    [  20   10     -  ]   30
S2    [   -   20    20  ]   40
S3    [   -    -    30  ]   30
Demand  20    30    50

Cost = 20×2 + 10×3 + 20×4 + 20×8 + 30×8
     = 40 + 30 + 80 + 160 + 240 = 550
```

---

### Method 2: Vogel's Approximation Method (VAM) 🔥 (Better initial solution)

```
Key Idea: Calculate PENALTY for each row/column
Penalty = Difference between lowest and 2nd lowest cost in that row/column

Allocate to the MINIMUM COST cell in the row/column with MAXIMUM PENALTY

Algorithm:
1. Calculate row penalties and column penalties
2. Find max penalty (row or column)
3. In that row/column, allocate to minimum cost cell
4. Allocate min(supply, demand), reduce accordingly
5. Cross out satisfied row/column
6. Recalculate penalties for remaining rows/columns
7. Repeat until done
```

### VAM Example 🔥

```
Same problem as above:
           D1   D2   D3   Supply  Row Penalty
     S1 [  2    3    1  ]   30    |3-1|=2* → Highest
     S2 [  5    4    8  ]   40    |5-4|=1
     S3 [  5    6    8  ]   30    |6-5|=1
  Demand  20   30   50
Col Pen:   3    1    7*

Iteration 1: Max column penalty = 7 (D3)
             Min cost in D3 = 1 (S1)
             Allocate min(30,50) = 30 → x₁₃=30
             S1 exhausted, D3 left = 20

Remaining:
           D1   D2   D3   Supply  Row Penalty
     S2 [  5    4    8  ]   40    |8-4|=4*
     S3 [  5    6    8  ]   30    |8-5|=3
  Demand  20   30   20
Col Pen:   0    2    0

Iteration 2: Max row penalty = 4 (S2)
             Min cost in S2 = 4 (D2)
             Allocate min(40,30) = 30 → x₂₂=30
             D2 satisfied, S2 left = 10

Remaining:
           D1   D3   Supply  Row Penalty
     S2 [  5    8  ]   10    3
     S3 [  5    8  ]   30    3
  Demand  20   20
Col Pen:   0    0

Allocate arbitrarily (tie): x₂₁=10, x₃₁=10, x₃₃=20

Final Allocation:
         D1    D2    D3   Supply
S1    [   -    -    30  ]   30
S2    [  10   30     -  ]   40
S3    [  10    -    20  ]   30
Demand  20    30    50

VAM Cost = 30×1 + 10×5 + 30×4 + 10×5 + 20×8
         = 30 + 50 + 120 + 50 + 160 = 410
(Better than NW Corner cost of 550!)
```

## Optimality Test — MODI Method (UV Method) ⭐

```
After finding initial BFS, check if optimal:

1. Assign u values to rows, v values to columns
2. For basic cells: uᵢ + vⱼ = cᵢⱼ
3. Set u₁ = 0, calculate others
4. For non-basic cells: dᵢⱼ = cᵢⱼ - uᵢ - vⱼ
5. If all dᵢⱼ ≥ 0 → OPTIMAL
6. If any dᵢⱼ < 0 → Not optimal; enter that cell via loop

Balanced problem: Total Supply = Total Demand
Number of basic variables = m + n - 1
```

## Conclusion
> NW Corner = start top-left, go right/down. VAM = penalty-based, gives better starting solution. MODI method tests optimality.

---

# ⭐ Q6. Assignment Problem — Hungarian Method

## Definition
**Assignment Problem** = Special transportation problem where:
- **n workers** to **n jobs** (1:1 assignment)
- Minimize total cost/time

## Hungarian Method Steps 🔥

```
Step 1: ROW REDUCTION
         Subtract minimum of each row from all elements in that row

Step 2: COLUMN REDUCTION
         Subtract minimum of each column from all elements

Step 3: OPTIMALITY TEST
         Draw minimum number of lines to cover all zeros
         If lines = n → OPTIMAL → make assignment
         If lines < n → NOT OPTIMAL → go to Step 4

Step 4: FIND SMALLEST UNCOVERED ELEMENT (say k)
         Subtract k from all uncovered elements
         Add k to doubly covered elements
         Elements covered by exactly one line = unchanged
         Go to Step 3
```

## Full Example 🔥

```
Workers → Jobs Assignment (minimize cost)

Cost Matrix:
       J1   J2   J3   J4
W1  [   9    2    7    8  ]
W2  [   6    4    3    7  ]
W3  [   5    8    1    8  ]
W4  [   7    6    9    4  ]

Step 1: Row Reduction (subtract row min):
  W1: min=2 → [7, 0, 5, 6]
  W2: min=3 → [3, 1, 0, 4]
  W3: min=1 → [4, 7, 0, 7]
  W4: min=4 → [3, 2, 5, 0]

After Row Reduction:
       J1   J2   J3   J4
W1  [   7    0    5    6  ]
W2  [   3    1    0    4  ]
W3  [   4    7    0    7  ]
W4  [   3    2    5    0  ]

Step 2: Column Reduction (subtract column min):
  J1: min=3 → subtract 3
  J2: min=0 → subtract 0
  J3: min=0 → subtract 0
  J4: min=0 → subtract 0

After Column Reduction:
       J1   J2   J3   J4
W1  [   4    0    5    6  ]
W2  [   0    1    0    4  ]
W3  [   1    7    0    7  ]
W4  [   0    2    5    0  ]

Step 3: Cover zeros with minimum lines:
Line 1: Row W2 (covers W2-J1, W2-J3)
Line 2: Row W4 (covers W4-J1, W4-J4)
Line 3: Column J2 (covers W1-J2)
Lines = 3, need 4 → NOT OPTIMAL

Uncovered elements: W1(J1,J3,J4), W3(J1,J2,J3,J4) → Wait
Let me recheck...

Uncovered by any line:
- W1: J3=5, J4=6 (J1=4 uncovered, J3=5 uncovered, J4=6 uncovered)
- W3: J2=7 uncovered, rest...

Min uncovered = 1 (W3-J1)

Step 4: k = 1 (minimum uncovered)
  Subtract 1 from all uncovered
  Add 1 to doubly covered (intersection of lines)

After Step 4:
       J1   J2   J3   J4
W1  [   3    0    4    5  ]
W2  [   0    2    0    4  ]
W3  [   0    7    0    6  ]
W4  [   0    3    5    0  ]

Now cover zeros:
Column J1 → covers W2,W3,W4
Row W1 via J2 (1 line)
Column J3 → covers W2,W3

Lines = 4 = n → OPTIMAL!

Assignment (find unique zeros):
W1 → J2 (only zero in W1)
W2 → J3 (after W1-J2 taken)
W3 → J1 (after J3 taken by W2)
W4 → J4

Total Cost = Cost[W1,J2] + Cost[W2,J3] + Cost[W3,J1] + Cost[W4,J4]
           = 2 + 3 + 5 + 4 = 14 ✅
```

## Special Cases

| Case | Description |
|---|---|
| **Maximization** | Convert: New matrix = Max value − each element |
| **Unbalanced** | Add dummy row/column with 0 costs |
| **Multiple assignments** | Select zeros avoiding conflicts |
| **Restricted assignment** | Set that cost = very large M |

## Conclusion
> Hungarian Method: Row reduce → Column reduce → Cover zeros with min lines → if lines=n done, else step 4. Min cost assignment in O(n³).
