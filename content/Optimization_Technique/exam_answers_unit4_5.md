# 📊 Optimization Technique — Exam Answers: Units 4 & 5
> Smart topper notes | Exam-ready | High retention

---

# 🔥 Q1. Duality in Linear Programming — Definition, Rules, and Properties

## Definition
Every LPP (called **Primal**) has a corresponding LPP called the **Dual**.

```
PRIMAL                          DUAL
Maximize Z                      Minimize W
Subject to ≤ constraints        Subject to ≥ constraints

If Primal has n variables       Dual has n constraints
If Primal has m constraints     Dual has m variables
```

## Rules for Primal to Dual Conversion 🔥

```
PRIMAL (Maximize)               DUAL (Minimize)
Objective coefficients (cⱼ) → RHS of constraints
RHS of constraints (bᵢ)     → Objective coefficients
Constraint matrix [A]        → Transpose [Aᵀ]
≤ constraints               → ≥ constraints
Variables (xⱼ ≥ 0)          → Variables (yᵢ ≥ 0)
```

### Quick Conversion Table

| Primal | Dual |
|---|---|
| Max Z = cᵀx | Min W = bᵀy |
| Ax ≤ b | Aᵀy ≥ c |
| x ≥ 0 | y ≥ 0 |
| m constraints | m dual variables |
| n variables | n constraints |

## Full Worked Example 🔥

```
PRIMAL:
Maximize Z = 5x₁ + 4x₂
Subject to:
  6x₁ + 4x₂ ≤ 24   ... Constraint 1 → dual var y₁
  x₁ + 2x₂ ≤ 6    ... Constraint 2 → dual var y₂
  x₁, x₂ ≥ 0

DUAL:
Minimize W = 24y₁ + 6y₂
Subject to:
  6y₁ + y₂ ≥ 5    ... (column 1 of A → constraint for x₁)
  4y₁ + 2y₂ ≥ 4   ... (column 2 of A → constraint for x₂)
  y₁, y₂ ≥ 0
```

## Duality Properties (Theorems) 🔥

| Property | Statement |
|---|---|
| **Weak Duality** | For any primal feasible x and dual feasible y: Z ≤ W |
| **Strong Duality** | At optimum: Z* = W* (primal optimal = dual optimal) |
| **Complementary Slackness** | If primal variable xⱼ > 0 → dual constraint j is tight |
| **Dual of Dual** | Dual of Dual = Primal |
| **Infeasibility** | If primal unbounded → dual infeasible (and vice versa) |

```
Primal Optimal (Z*) = Dual Optimal (W*)
This is the STRONG DUALITY THEOREM
```

## Why Duality is Useful?

1. **Sensitivity Analysis** — dual variables = shadow prices (value of one more unit of resource)
2. **Computational advantage** — solve smaller problem
3. **Economic interpretation** — dual vars = marginal value of constraints

## Economic Interpretation (Shadow Price)

```
If constraint is: 6x₁ + 4x₂ ≤ 24 (resource limit)
Dual variable y₁ = shadow price of that resource

If y₁ = 0.75:
  One more unit of resource → objective increases by 0.75
  This is the MARGINAL VALUE of the constraint
```

## Conclusion
> Primal and Dual are mirror problems. Convert by transposing A, swapping b and c, flipping ≤/≥. At optimum, both give same value. Dual vars = marginal resource values (shadow prices).

---

# ⭐ Q2. Dual Simplex Method

## When to Use
- When initial solution is **dual feasible** but **primal infeasible** (some b < 0)
- More efficient than Big-M for certain problems
- Useful when adding new constraints

## Dual Simplex vs Primal Simplex

| Feature | Primal Simplex | Dual Simplex |
|---|---|---|
| **Starting point** | Primal feasible (b ≥ 0) | Dual feasible (Z-row ≥ 0) |
| **Leaving variable** | Min ratio test | Most negative b |
| **Entering variable** | Most negative Z-row | Ratio test on Z-row |
| **Direction** | Improve Z, maintain feasibility | Restore feasibility, maintain dual |

## Dual Simplex Steps

```
Step 1: Set up tableau (may have negative b values)
         Ensure all Z-row coefficients ≥ 0 (dual feasible)

Step 2: LEAVING VARIABLE → row with most negative b (most infeasible)

Step 3: ENTERING VARIABLE → for negative elements in leaving row:
         Ratio = |Z-row coefficient| / |row element|
         Choose minimum ratio → that column enters

Step 4: Perform row operations (same as primal simplex)

Step 5: Repeat until all b ≥ 0 (primal feasible = optimal)

If no negative element in leaving row → INFEASIBLE problem
```

## Example

```
Minimize Z = 2x₁ + x₂
Subject to:
  3x₁ + x₂ ≥ 6
  x₁ + x₂ ≥ 4
  x₁, x₂ ≥ 0

Multiply constraints by -1 to get ≤:
  -3x₁ - x₂ ≤ -6   → -3x₁ - x₂ + s₁ = -6
  -x₁ - x₂ ≤ -4    → -x₁ - x₂ + s₂ = -4

For minimize: Z - 2x₁ - x₂ = 0

Initial Tableau (dual feasible since Z-row: -2,-1 are "costs" in minimize):

+────+──────+──────+─────+─────+──────+
| BV |  x₁  |  x₂  |  s₁ | s₂  |   b  |
+────+──────+──────+─────+─────+──────+
| s₁ |  -3  |  -1  |  1  |  0  |  -6  | ← most negative
| s₂ |  -1  |  -1  |  0  |  1  |  -4  |
+────+──────+──────+─────+─────+──────+
|  Z |  -2  |  -1  |  0  |  0  |   0  |
+────+──────+──────+─────+─────+──────+

Leaving: s₁ (b = -6)
Entering: Ratios = |Z-row|/|pivot row| for negative elements:
  x₁: |-2|/|-3| = 2/3
  x₂: |-1|/|-1| = 1
  Min = 2/3 → x₁ enters

Pivot on -3 (Row 1, Col x₁)
Divide Row 1 by -3: [1, 1/3, -1/3, 0, 2]
Row 2 = Row 2 - (-1)×Row1: [0, -2/3, -1/3, 1, -2]
Z-row = Z-row - (-2)×Row1: [0, -1/3, -2/3, 0, 4]

Iteration 2: s₂ leaves (b=-2)
x₂ enters (only negative in leaving row)
...Final solution: x₁=2, x₂=0 or continue till optimal.
```

## Conclusion
> Dual Simplex maintains dual feasibility (Z-row ≥ 0) while restoring primal feasibility (b ≥ 0). Leaving = most negative b; Entering = min ratio of |Z-row|/|row element|.

---

# 🔥 Q3. Integer Programming — Branch and Bound Method

## Definition
**Integer Programming (IP)** = LPP where some/all variables must be **integers**.

```
Types:
  Pure Integer LP   = ALL variables must be integers
  Mixed Integer LP  = Some variables integer
  Binary/0-1 LP     = Variables can only be 0 or 1
```

## Why Not Round LP Optimal?
```
LP optimal: x₁ = 2.7, x₂ = 1.3
Round down: x₁ = 2, x₂ = 1 → May not be optimal integer solution
Round up:   x₁ = 3, x₂ = 2 → May not be feasible!

Example of why rounding fails:
  LP says x₁=3.5 maximizes Z=10
  Rounding to x₁=3 gives Z=8
  But x₁=4 (round up) might be infeasible
  True IP optimum might be at x₁=2, Z=9 (better than rounding)
```

## Branch and Bound Algorithm 🔥

```
Step 1: Solve LP RELAXATION (ignore integer constraint)
        If solution is already integer → DONE
        Otherwise → go to Step 2

Step 2: BRANCH on a fractional variable xⱼ with value f
        Create two sub-problems:
          Branch 1: Add constraint xⱼ ≤ floor(f)
          Branch 2: Add constraint xⱼ ≥ ceil(f)

Step 3: Solve both sub-problems (LP relaxation with new constraint)

Step 4: BOUND
        Upper bound for maximization = best LP relaxation value in subtree
        If bound ≤ current best integer solution → PRUNE that branch

Step 5: Keep branching until all leaves are:
        - Integer solutions, OR
        - Pruned (infeasible or worse than current best)

Step 6: Best integer solution found = OPTIMAL
```

## Branch and Bound Tree Diagram 🔥

```
Problem: Maximize Z = 5x₁ + 4x₂
         6x₁ + 4x₂ ≤ 24
         x₁ + 2x₂ ≤ 6
         x₁, x₂ ≥ 0, integers

LP Relaxation (Node 0):
x₁ = 3, x₂ = 1.5, Z = 21
x₂ is fractional → Branch on x₂

                +──────────────────────────+
                | Node 0: Z*=21            |
                | x₁=3, x₂=1.5 (LP relax) |
                +──────────────────────────+
                           |
             +─────────────+──────────────+
             |                             |
  Add x₂ ≤ 1                          Add x₂ ≥ 2
             |                             |
+────────────────────+      +─────────────────────────+
| Node 1: x₂ ≤ 1    |      | Node 2: x₂ ≥ 2          |
| Solve LP...        |      | Solve LP...              |
| x₁=10/3, x₂=1     |      | x₁=2.67, x₂=2           |
| Z=19.67            |      | Z=21.33                  |
| x₁ fractional      |      | x₁ fractional            |
+────────────────────+      +─────────────────────────+
          |                              |
  Branch on x₁             Branch on x₁ again
  x₁≤3 or x₁≥4             x₁≤2 or x₁≥3

Node 1a: x₂≤1, x₁≤3        Node 2a: x₂≥2, x₁≤2
  x₁=3, x₂=1, Z=19 ✅         x₁=2, x₂=2, Z=18 ✅
  (INTEGER SOLUTION)           (INTEGER SOLUTION)

Node 1b: x₂≤1, x₁≥4        Node 2b: x₂≥2, x₁≥3
  Infeasible ❌                x₁=3, x₂=1.5... 
                               PRUNE: Z≤21 ≤ already found 19

Best integer solution: x₁=3, x₂=1, Z=19 ✅
```

## Pruning Rules

```
Prune a node if:
1. INFEASIBLE — no feasible solution in sub-tree
2. BOUNDED — LP bound ≤ current best integer solution
3. INTEGER — LP solution is already integer → update best
```

## B&B vs Total Enumeration

| | Branch and Bound | Total Enumeration |
|---|---|---|
| **Strategy** | Smart pruning | Try all possibilities |
| **Efficiency** | Much faster | Exponential |
| **Optimality** | Guaranteed | Guaranteed |

## Conclusion
> Branch & Bound: Solve LP relaxation → if fractional, branch on a fractional variable → bound/prune sub-trees → best integer solution is optimal. Pruning avoids full search.

---

# 🔥 Q4. PERT and CPM — Network Analysis

## Definitions

```
CPM (Critical Path Method):
  - Deterministic activity times (single estimate)
  - Focus on time-cost trade-off
  - Used in construction, industrial projects

PERT (Program Evaluation and Review Technique):
  - Probabilistic activity times (3 estimates)
  - Focus on uncertainty in time
  - Used in R&D, new product development
```

## PERT Time Estimates 🔥

```
For each activity, get 3 estimates:

tₒ = Optimistic time  (best case)
tₘ = Most Likely time  (most probable)
tₚ = Pessimistic time  (worst case)

Expected time formula:
   tₑ = (tₒ + 4tₘ + tₚ) / 6

Variance formula:
   σ² = ((tₚ - tₒ) / 6)²
```

## Network Diagram — AOA (Activity on Arrow)

```
Events (circles) represent start/end of activities
Arrows represent activities

      2
   A ─────→ ●
   ↑       ╱ ↘ C
   ●  B   ╱    ↘
  (1)    ●      ● (4) ─→ ●(5)
          (3)  ↗    D   FINISH
              E
```

## Critical Path Method Steps 🔥

```
Step 1: List all activities with durations
Step 2: Draw network diagram
Step 3: Calculate FORWARD PASS (Earliest times)
         ES = max(EF of all predecessors)
         EF = ES + duration
Step 4: Calculate BACKWARD PASS (Latest times)
         LF = min(LS of all successors)
         LS = LF - duration
Step 5: Calculate FLOAT (Slack)
         Float = LF - EF = LS - ES
Step 6: Critical Path = activities with Float = 0
```

## Full PERT/CPM Example 🔥

```
Activity | Predecessor | Duration
A        |    -        |    4
B        |    -        |    3
C        |    A        |    5
D        |    B        |    7
E        |    A,B      |    3
F        |    C,D,E    |    2

Network:
      A(4)    C(5)
 ●──────→●──────→●
 |    1  2       3 \
 |      ↗E(3)       F(2)
 |   B(3)  D(7)      ●
 ●────→●──────→●──→/
 1    4       5    6

Forward Pass (ES, EF):
Activity A: ES=0, EF=4
Activity B: ES=0, EF=3
Activity C: ES=4, EF=9
Activity D: ES=3, EF=10
Activity E: ES=max(4,3)=4, EF=7
Activity F: ES=max(9,10,7)=10, EF=12

Project Duration = 12

Backward Pass (LF, LS):
Activity F: LF=12, LS=10
Activity E: LF=10, LS=7
Activity D: LF=10, LS=3
Activity C: LF=10, LS=5
Activity B: LF=min(3,7)=3, LS=0
Activity A: LF=min(5,7)=5, LS=1

Float Table:
Activity | ES | EF | LS | LF | Float | Critical?
A        |  0 |  4 |  1 |  5 |   1   |   No
B        |  0 |  3 |  0 |  3 |   0   |   YES ✅
C        |  4 |  9 |  5 | 10 |   1   |   No
D        |  3 | 10 |  3 | 10 |   0   |   YES ✅
E        |  4 |  7 |  7 | 10 |   3   |   No
F        | 10 | 12 | 10 | 12 |   0   |   YES ✅

CRITICAL PATH: B → D → F
Critical Path Duration = 3 + 7 + 2 = 12 days
```

## PERT Probability Calculation ⭐

```
For critical path activities:
  Total Expected time = Σ tₑ
  Total Variance = Σ σ²
  Standard Deviation σ = √(Total Variance)

P(project ≤ T) = P(Z ≤ (T - tₑ) / σ)
  where Z is standard normal distribution
```

## CPM Crashing (Time-Cost Trade-off) ⭐

```
Normal Time ─────────────────→ Crash Time
Normal Cost                    Crash Cost (higher)

Cost Slope = (Crash Cost - Normal Cost) / (Normal Time - Crash Time)

To reduce project duration:
1. Find critical activity with MINIMUM cost slope
2. Crash that activity first
3. Recalculate critical path (new path may emerge)
4. Repeat
```

## PERT vs CPM Comparison 🔥

| Feature | PERT | CPM |
|---|---|---|
| **Activity times** | 3 estimates (tₒ, tₘ, tₚ) | Single deterministic |
| **Focus** | Time uncertainty | Time-cost trade-off |
| **Application** | R&D, uncertain projects | Construction, repetitive |
| **Crashing** | Not typically used | Yes, used for crashing |
| **Float** | Not typically used | Yes, Total Float, Free Float |

## Total Float vs Free Float

```
Total Float (TF) = LS - ES = LF - EF
  Maximum time an activity can be delayed without delaying project

Free Float (FF) = ES(successor) - EF
  Time activity can be delayed without delaying successor
```

## Conclusion
> PERT uses 3 estimates (tₑ = (to+4tm+tp)/6). CPM uses single estimates. Forward pass gives earliest times; backward pass gives latest times. Float=0 → Critical Path. Crash minimum cost-slope activities to reduce duration.

---

# ✅ Q5. Gomory's Cutting Plane Method (Integer Programming — Alternative to B&B)

## Concept

```
Start with LP optimal solution (may have fractions)
Add a "cut" constraint that:
  - REMOVES the fractional LP optimal
  - Does NOT remove any integer feasible points

Repeat until integer solution found
```

## Generating a Gomory Cut

```
For a fractional variable in the optimal tableau:
  If row is: x₁ + 0.75x₂ + 0.5s₁ = 3.6

  Express as: x₁ = 3 + 0.6, where
     Integer part: 3
     Fractional part (f₀): 0.6

  For each coefficient aⱼ in the row:
     fⱼ = fractional part of aⱼ

  Gomory Cut: Σ fⱼ xⱼ ≥ f₀
              (for non-basic variables)

  Add this as a new constraint with slack variable
```

## Summary of Integer Programming Methods

| Method | Idea | Best for |
|---|---|---|
| **Branch & Bound** | Partition + prune search tree | General IP |
| **Gomory's Cut** | Add constraints to remove fractions | Pure IP |
| **B&B + Cuts** | Combined approach | Large-scale IP |
| **Enumeration** | Try all → impractical | Small problems only |

## Conclusion
> Gomory cut = special constraint that cuts off LP fractional optimal without removing integer points. Repeat until integer solution. Works for pure IP; B&B is more general.

---

# ✅ Q6. Sensitivity Analysis in LPP

## Definition
**Sensitivity Analysis** = Study of how changes in parameters (objective coefficients, RHS values) affect the optimal solution.

## Why Needed?
```
Real problems have uncertain data:
  - Costs may change (supply disruption)
  - Resources may increase/decrease (budget change)
Sensitivity analysis gives RANGES of stability
```

## Types of Changes Analyzed

### 1. Change in Objective Coefficients (cⱼ)

```
How much can cⱼ change without changing optimal BASIS?
  → Find range [cⱼ_lower, cⱼ_upper]
  → Solution values (x*) stay same
  → Objective value Z* changes
```

### 2. Change in RHS (bᵢ) — Shadow Prices

```
Shadow Price (yᵢ*) = ΔZ* / Δbᵢ
= Dual variable value at optimum
= How much Z changes per unit increase in bᵢ

For binding constraint: shadow price > 0 (more resource = better Z)
For non-binding constraint: shadow price = 0 (unused resource has no value)
```

### 3. Allowable Range for RHS

```
Find range [bᵢ_lower, bᵢ_upper] where:
  - Same basis remains optimal
  - Shadow price remains valid
  - Solution values change but stay feasible
```

## Reading Sensitivity from Final Simplex Tableau

```
From final tableau:
+────+─────+─────+──────+──────+─────+
| BV | x₁  | x₂  |  s₁  |  s₂  |  b  |
+────+─────+─────+──────+──────+─────+
| x₁ |  1  |  0  | 1/4  | -1/2 |  3  |
| x₂ |  0  |  1  |-1/8  |  3/4 | 1.5 |
+────+─────+─────+──────+──────+─────+
|  Z |  0  |  0  | 3/4  |  1/2 | 21  |
+────+─────+─────+──────+──────+─────+

Shadow prices: y₁* = 3/4 (for constraint 1)
               y₂* = 1/2 (for constraint 2)

Both constraints binding (b values positive in basis)
One more unit of Resource 1 → Z increases by 3/4
One more unit of Resource 2 → Z increases by 1/2
```

## Conclusion
> Sensitivity analysis finds how much parameters can change before optimal basis changes. Shadow prices (dual variables) = value of relaxing a constraint by one unit. Use ranges to guide managerial decisions.
