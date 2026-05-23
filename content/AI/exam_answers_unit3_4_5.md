# 🤖 Artificial Intelligence — Exam Answers: Units 3, 4 & 5
> Smart topper notes | Exam-ready | High retention

---

# 🔥 Q1. Resolution Principle — Reasoning in Predicate Logic (with example)

## Definition
**Resolution** = Automated theorem proving technique using **proof by refutation**.

> If goal G follows from premises → assume ¬G, apply resolution, derive contradiction (empty clause) → G is proved.

## Steps to Apply Resolution

```
Step 1: Negate the conclusion
Step 2: Convert ALL statements to CNF (Conjunctive Normal Form)
Step 3: Apply resolution rule
Step 4: Derive empty clause {} → CONTRADICTION → Proof complete
```

## CNF Conversion Steps

```
1. Eliminate implications: A→B ≡ ¬A ∨ B
2. Push negations inward (De Morgan's):
   ¬(A∧B) = ¬A∨¬B
   ¬(A∨B) = ¬A∧¬B
3. Distribute OR over AND
4. Result: Conjunction of disjunctions (clauses)
```

## Resolution Rule

```
Clause 1:  {A  ∨  B}
Clause 2:  {¬A ∨  C}
               ↑
     Complementary literal (A and ¬A)
               ↓
  Resolvent:  {B  ∨  C}
```

## Full Example 🔥

```
Premises:
P1: "All men are mortal"     → ∀x: MAN(x) → MORTAL(x)
P2: "Socrates is a man"      → MAN(Socrates)

Goal: "Socrates is mortal"   → MORTAL(Socrates)

Step 1: Negate goal → ¬MORTAL(Socrates)

Step 2: Convert to CNF:
P1 → ¬MAN(x) ∨ MORTAL(x)   ... Clause 1
P2 → MAN(Socrates)           ... Clause 2
Neg → ¬MORTAL(Socrates)      ... Clause 3

Step 3: Resolve Clause 1 + Clause 2:
{¬MAN(x) ∨ MORTAL(x)} + {MAN(Socrates)}
Substitute x = Socrates:
{¬MAN(Socrates) ∨ MORTAL(Socrates)} + {MAN(Socrates)}
= {MORTAL(Socrates)}          ... Clause 4

Step 4: Resolve Clause 4 + Clause 3:
{MORTAL(Socrates)} + {¬MORTAL(Socrates)}
= {} ← EMPTY CLAUSE = CONTRADICTION!

∴ Goal is PROVED ✅
```

## Unification
- Process of finding substitutions to make two expressions equal
- Example: `LOVES(x, Mary)` and `LOVES(John, y)` → unify with `{x=John, y=Mary}`
- Used in resolution to match complementary literals

## Conclusion
> Resolution = negate goal, convert to CNF, resolve clauses, empty clause = proof. The key is finding complementary literals and unifying variables.

---

# 🔥 Q2. Knowledge Representation — Semantic Nets, Frames, Scripts

## Why Knowledge Representation?
AI systems need to **store and use knowledge** about the world efficiently.

---

## 1. Semantic Networks ⭐

```
Structure: NODES (concepts) + ARCS (relationships)

Example: "A sparrow is a bird that can fly and is yellow"

     +----------+           +----------+
     | SPARROW  |--IS-A--→  |  BIRD    |
     +----------+           +----------+
          |                      |
          |                      |
     +----+----+          +------+------+
     |  CAN    |          |   HAS       |
     +----+----+          +------+------+
          |                      |
         FLY                   WINGS
```

**Common relationships:**
| Arc | Meaning |
|---|---|
| **IS-A** | Instance of (Sparrow IS-A Bird) |
| **AKO** | A-Kind-Of (Bird AKO Animal) |
| **HAS** | Property (Bird HAS Wings) |
| **CAN** | Ability (Bird CAN Fly) |

**Advantage:** Supports **inheritance** (Sparrow inherits Bird's properties)

---

## 2. Frames ⭐

```
Frame: BIRD
+--------------------+
| Name: Bird         |
| AKO: Animal        |
| Legs: 2            |
| Covering: Feathers |
| Can-fly: True      |  ← Default (can be overridden)
+--------------------+

Frame: PENGUIN (inherits from BIRD)
+---------------------+
| AKO: Bird           |
| Can-fly: False      |  ← Overrides default
| Habitat: Antarctica |
+---------------------+
```

**Key Features:**
- **Slots** = attributes, **Fillers** = values
- Supports **default values** (unless overridden)
- **Procedural attachments:** if-added, if-needed, if-removed
- **Inheritance** through AKO links

---

## 3. Scripts ⭐

```
RESTAURANT SCRIPT:
+---------------------------+
| Entry Conditions:         |
| - Customer is hungry      |
| - Restaurant is open      |
+---------------------------+
| Props: menu, food, bill   |
| Roles: customer, waiter   |
+---------------------------+
| TRACK: Normal             |
+---------------------------+
| Scene 1: ENTERING         |
|   - Enter restaurant      |
|   - Find table            |
|   - Sit down              |
+---------------------------+
| Scene 2: ORDERING         |
|   - Get menu              |
|   - Order food            |
+---------------------------+
| Scene 3: EATING           |
|   - Food served           |
|   - Eat                   |
+---------------------------+
| Scene 4: LEAVING          |
|   - Get bill              |
|   - Pay                   |
|   - Leave                 |
+---------------------------+
| Results: Customer full,   |
| Restaurant earns money    |
+---------------------------+
```

**Scripts = Stereotypical event sequences** stored as knowledge

---

## Comparison Table

| | Semantic Net | Frame | Script |
|---|---|---|---|
| **Represents** | Relationships | Object properties | Event sequences |
| **Structure** | Graph (nodes + arcs) | Slot-filler table | Ordered scenes |
| **Best for** | Taxonomy, inheritance | Object descriptions | Causal reasoning |

---

# ⭐ Q3. Production Rules and Expert Systems

## Production Rules

```
Structure: IF <condition> THEN <action>

Examples:
Rule 1: IF fever > 38°C AND headache THEN suspect_infection
Rule 2: IF suspect_infection AND cough THEN could_be_flu
Rule 3: IF could_be_flu AND body_pain THEN diagnose_flu
```

## Inference Methods

```
FORWARD CHAINING (Data-driven):
Known Facts → Apply Rules → New Facts → ... → Goal

Input:  fever=39, headache=yes, cough=yes, body_pain=yes
Apply Rule 1 → suspect_infection=yes
Apply Rule 2 → could_be_flu=yes
Apply Rule 3 → diagnose_flu=yes ✅

BACKWARD CHAINING (Goal-driven):
Goal → Find rules that prove it → Check if premises hold

Goal: Is patient flu?
← Needs could_be_flu
   ← Needs suspect_infection + cough
      ← Check fever > 38 ✅ AND headache ✅ → YES
```

## Expert System Architecture 🔥

```
+------------------+        +------------------+
|  KNOWLEDGE BASE  |        |  WORKING MEMORY  |
|                  |        |                  |
| Facts:           |        | Current session  |
|  - Domain info   |←──────→| facts & goals    |
| Rules:           |        +------------------+
|  - IF/THEN rules |               ↑
+------------------+               |
        ↑                          ↓
        |               +------------------+
        |               | INFERENCE ENGINE |
        |               |                  |
        |               | Forward chaining |
        |               | or               |
        |               | Backward chaining|
        |               +------------------+
        |                          ↓
+------------------+     +------------------+
| KNOWLEDGE        |     |  USER INTERFACE  |
| ACQUISITION      |     |                  |
| (Domain expert   |     | Questions/Answers|
|  input)          |     | Explanations     |
+------------------+     +------------------+
```

## Expert System Components (5)

| Component | Purpose |
|---|---|
| **Knowledge Base** | Facts + IF-THEN rules |
| **Inference Engine** | Applies rules, draws conclusions |
| **Working Memory** | Current facts in session |
| **User Interface** | Interaction with user |
| **Explanation Facility** | WHY/HOW was conclusion reached |

## Applications of Expert Systems

1. **MYCIN** — Medical diagnosis (blood infections)
2. **DENDRAL** — Chemical structure analysis
3. **R1/XCON** — Computer configuration (DEC)
4. **Financial** — Credit risk assessment
5. **Engineering** — Fault diagnosis

## Conclusion
> Production rules = IF-THEN. Forward chaining: facts → conclusion. Backward chaining: goal → find support. Expert system uses these to mimic domain expert decisions.

---

# ⭐ Q4. PROLOG — Logic Programming Basics

## What is PROLOG?
**PROLOG** = PROgramming in LOGic
- Declarative language (say **what**, not **how**)
- Based on **first-order predicate logic**
- Uses **backward chaining** with **unification**
- Common AI language

## Basic Syntax

```prolog
% Facts (knowledge base)
parent(tom, bob).       % tom is parent of bob
parent(bob, ann).       % bob is parent of ann
parent(tom, liz).       % tom is parent of liz

% Rules
grandparent(X, Z) :- parent(X, Y), parent(Y, Z).
% "X is grandparent of Z if X is parent of Y AND Y is parent of Z"

ancestor(X, Y) :- parent(X, Y).
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).

% Queries
?- grandparent(tom, ann).
   → Yes

?- grandparent(X, ann).
   → X = tom
```

## Key PROLOG Features

| Feature | Description |
|---|---|
| **Unification** | Pattern matching to bind variables |
| **Backtracking** | Undo last choice and try another |
| **Cut (!)** | Stop backtracking at that point |
| **Recursion** | Main looping mechanism |

## Common Exam Programs

```prolog
% Factorial
factorial(0, 1).
factorial(N, F) :- N > 0, N1 is N-1, factorial(N1, F1), F is N * F1.

% Fibonacci
fib(0, 0).
fib(1, 1).
fib(N, F) :- N > 1, N1 is N-1, N2 is N-2, fib(N1, F1), fib(N2, F2), F is F1 + F2.

% Append
append([], L, L).
append([H|T], L, [H|R]) :- append(T, L, R).

% Reverse
reverse([], []).
reverse([H|T], R) :- reverse(T, RT), append(RT, [H], R).
```

## Conclusion
> PROLOG is logic-based. Define facts and rules, then query. Uses backward chaining + unification. Cut (!) stops backtracking.

---

# ✅ Q5. Dealing with Uncertainty — Bayesian Inference

## Why Uncertainty in AI?
- Real world is **incomplete** and **noisy**
- Perfect information rarely available
- AI must reason with probabilities

## Bayesian Theorem

```
P(A|B) = P(B|A) × P(A)
         ─────────────
               P(B)

Where:
P(A|B) = Posterior probability (belief after seeing B)
P(B|A) = Likelihood (probability of B given A)
P(A)   = Prior probability (initial belief)
P(B)   = Evidence (marginal probability)
```

## Example

```
Disease D affects 1% of population → P(D) = 0.01
Test for D has 99% accuracy:
  P(Positive | D) = 0.99
  P(Positive | ¬D) = 0.02

Patient tests positive. What is P(D | Positive)?

P(D|+) = P(+|D) × P(D) / P(+)
P(+) = P(+|D)P(D) + P(+|¬D)P(¬D)
     = 0.99×0.01 + 0.02×0.99 = 0.0099 + 0.0198 = 0.0297

P(D|+) = 0.99 × 0.01 / 0.0297 ≈ 0.333

Only 33% chance of disease despite positive test!
```

## Default Reasoning

```
Default: "Birds can fly" (unless exception)

If we know: Bird(Tweety) → Conclude: Can-fly(Tweety)
If we learn: Penguin(Tweety) → Retract: Can-fly(Tweety)

Non-monotonic: New info can REMOVE old conclusions
```

## Truth Maintenance System (TMS)
```
Belief: "Bird(Tweety)" ← justified by "Tweety is animal type bird"
Belief: "Can-fly(Tweety)" ← justified by "Bird(Tweety) + default birds fly"

If Bird(Tweety) retracted:
  → Can-fly(Tweety) also retracted automatically
```

## Conclusion
> Bayesian inference = update beliefs with evidence. Prior + Likelihood → Posterior. TMS tracks belief justifications. Non-monotonic = old conclusions can be retracted.

---

# ✅ Q6. Natural Language Processing — Parsing & Grammars

## NLP in AI
Making computers understand and generate **human language**.

## Context-Free Grammar (CFG)

```
Grammar rules:
S  → NP VP          (Sentence = Noun Phrase + Verb Phrase)
NP → Det N           (NP = Determiner + Noun)
VP → V NP            (VP = Verb + NP)
Det → "the" | "a"
N  → "dog" | "cat"
V  → "chases" | "sees"

Sentence: "the dog chases a cat"

Parse Tree:
         S
        / \
       NP  VP
      / \  / \
    Det  N V   NP
    |    | |  / \
   the dog chases a cat
```

## Augmented Transition Networks (ATN)

```
State Machine + Memory (registers) for complex sentences

S ──→ [NP]──→ [VP]──→ END

At each state, actions can:
- Check grammatical constraints
- Store information in registers
- Handle long-distance dependencies
```

## Parsing Strategies

| Strategy | Direction | Method |
|---|---|---|
| **Top-Down** | Start → Symbol | Expand non-terminals |
| **Bottom-Up** | Words → Start | Reduce to non-terminals |
| **Chart Parsing** | Both | Dynamic programming, no repeated work |

## Conclusion
> NLP uses grammars to parse sentences into trees. CFG defines rules. ATN adds memory for complex structures. Top-down starts from grammar; bottom-up starts from words.
