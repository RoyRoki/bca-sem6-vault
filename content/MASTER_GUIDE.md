# 🎓 BCA Semester 6 — MASTER EXAM GUIDE
### Student: Roki Roy | University of North Bengal | NEP Curriculum
> Built from 6-year PYQ analysis + Official Syllabus | Last Updated: 2026

---

## 📋 SUBJECTS OVERVIEW

| Subject | Code | Theory | Practical | CE | Priority Rank |
|---|---|---|---|---|---|
| **Information Security** | UBCAMAJ36016 | 60 | 0 | 10+5 | 🥇 #1 |
| **Optimization Technique** | UBCAMAJ36014 | 60 | 0 | 10+5 | 🥈 #2 |
| **Mobile Computing** | UBCAMAJ36015 | 40 | 20 | 10+5 | 🥉 #3 |
| **Artificial Intelligence** | UBCAMAJ36013 | 40 | 20 | 10+5 | 🏅 #4 |

---

## 🔥 MOST IMPORTANT TOPICS — ACROSS ALL SUBJECTS

### 🔴 CRITICAL (Appeared 4–6 times in PYQs)

| Topic | Subject | Times Repeated |
|---|---|---|
| Types of Attacks + examples | Info Security | **6/6 years** |
| Cryptography — Substitution/Transposition | Info Security | **5/6 years** |
| Digital Signature — process + purpose | Info Security | **6/6 years** |
| IDS types (NIDS/HIDS) | Info Security | **4/6 years** |
| Simplex Method (numerical) | Optimization | **Both years** |
| Transportation Problem (VAM) | Optimization | **Both years** |
| Assignment Problem (Hungarian) | Optimization | **Both years** |
| GSM Architecture + Handover | Mobile Computing | **Both years** |
| SDMA/FDMA/TDMA/CDMA | Mobile Computing | **Both years** |
| Mobile IP (entities, goals) | Mobile Computing | **Both years** |
| A* Algorithm | AI | Syllabus + PYQ |
| BFS vs DFS | AI | Syllabus + PYQ |

---

## 📅 STUDY PRIORITY ORDER (if you have limited time)

### If you have 7+ days:
Study everything in priority order listed below.

### If you have 3–4 days:
1. **Day 1:** Information Security — Cryptography + Attacks + IDS
2. **Day 2:** Information Security — IS definition, mechanisms, IT Act + Optimization — Simplex + Transportation
3. **Day 3:** Mobile Computing — GSM + MAC + Mobile IP + TCP variants
4. **Day 4:** AI — BFS/DFS + A* + Resolution + Expert Systems

### If you have 1–2 days (EMERGENCY):
Read only the `last_minute_revision.md` files in this order:
1. `/Information_Security/last_minute_revision.md`
2. `/Optimization_Technique/last_minute_revision.md`
3. `/Mobile_Computing/last_minute_revision.md`
4. `/AI/last_minute_revision.md`

---

## 📊 SUBJECT-WISE SCORING STRATEGY

### 🛡️ Information Security (60 marks)
**Easiest to score — most PYQ data available (6 years)**

| Group | Marks | Strategy |
|---|---|---|
| Group A (5×1) | 5 | Answer: IS definition, cryptography, digital signature, malware, trap door |
| Group B (3×5) | 15 | Choose: Digital Signature, Firewall, Security Mechanisms |
| Group C (2×10) | 20 | Choose: Types of Attacks + Substitution/Transposition Ciphers |
| **Total** | **40** | + CE 10 + Attendance 5 = **75 marks** |

**Avoid:** NIST Model (appeared only once), OS Security in detail

---

### 📊 Optimization Technique (60 marks)
**Must practice numericals — theory alone won't score well**

| Group | Marks | Strategy |
|---|---|---|
| Group A (5×1) | 5 | Answer: feasible, optimal, unbounded, objective function, CPM vs PERT |
| Group B (3×5) | 15 | Choose: Graphical method numerical, Dual of LPP, Degeneracy |
| Group C (2×10) | 20 | Choose: Simplex Method + Transportation (VAM) OR Assignment |
| **Total** | **40** | + CE 10 + Attendance 5 = **75 marks** |

**Must practice:** At least 2-3 complete simplex problems, 2 transportation problems, 1 assignment problem

---

### 📱 Mobile Computing (40 marks theory + 20 practical)
**Focus on concepts — diagram-based questions are scoring**

| Group | Marks | Strategy |
|---|---|---|
| Group A (5×1) | 5 | Answer: GSM expand, SDMA expand, Mobile TCP, Hoarding, Snooping |
| Group B (3×5) | 15 | Choose: MC Limitations, MAC techniques, Mobile IP entities, GSM handover |
| Group C (2×10) | 20 | Choose: Mobile TCP comparison + DHCP diagram |
| **Total** | **40** | + CE 10 + Practical 20 + Attendance 5 = **75 marks** |

---

### 🤖 Artificial Intelligence (40 marks theory + 20 practical)
**Unit 2 (Searching) and Unit 3 (Knowledge Rep.) = 15L each — highest priority**

| Group | Marks | Strategy |
|---|---|---|
| Group A (5×1) | 5 | Answer: Father of AI, blind search, quantification types, Turing Test |
| Group B (3×5) | 15 | Choose: BFS vs DFS, Hill Climbing, Expert System architecture |
| Group C (2×10) | 20 | Choose: A* Algorithm + Resolution Principle |
| **Total** | **40** | + CE 10 + Practical 20 + Attendance 5 = **75 marks** |

---

## 📁 VAULT STRUCTURE

```
/BCA_SEM6/
│
├── MASTER_GUIDE.md  ← YOU ARE HERE
│
├── /Information_Security/
│   ├── PYQ_analysis.md              ← Frequency table, repeated questions
│   ├── unit_wise_notes.md           ← All 6 units with key notes
│   ├── most_important_questions.md  ← Exam-ready Q&A
│   ├── last_minute_revision.md      ← 30-min cheatsheet
│   ├── exam_answers_unit1_2.md      ← Full answers: CIA/Attacks/Crypto/DES/Digital Sig
│   └── exam_answers_unit3_4_5_6.md  ← Full answers: Malware/IDS/Firewall/DB/IT Act
│
├── /Optimization_Technique/
│   ├── PYQ_analysis.md
│   ├── unit_wise_notes.md           ← All formulas + methods
│   ├── most_important_questions.md
│   ├── last_minute_revision.md
│   ├── exam_answers_unit1_2_3.md    ← Full answers: OR Phases/Graphical/Simplex/Big-M/Transportation/Assignment
│   └── exam_answers_unit4_5.md      ← Full answers: Duality/Dual Simplex/Branch&Bound/PERT/CPM
│
├── /Mobile_Computing/
│   ├── PYQ_analysis.md
│   ├── unit_wise_notes.md           ← All 8 units
│   ├── most_important_questions.md
│   ├── last_minute_revision.md
│   ├── exam_answers_unit1_2_3.md    ← Full answers: GSM/MAC/SDMA-CDMA/Mobile IP/DHCP
│   └── exam_answers_unit4_5_6_7_8.md ← Full answers: Mobile TCP/Tunneling/MANET/Push-Pull/WAP/BT
│
└── /AI/
    ├── PYQ_analysis.md
    ├── unit_wise_notes.md           ← All 5 units
    ├── most_important_questions.md
    ├── last_minute_revision.md
    ├── exam_answers_unit1_2.md      ← Full answers: Turing/BFS-DFS/Hill Climbing/A*/MinMax/CSP
    └── exam_answers_unit3_4_5.md    ← Full answers: Resolution/KR/Expert Systems/PROLOG/Bayes/NLP
```

---

## 🧠 HOW TO USE THESE NOTES

### Phase 1: Understanding (3–5 days before exam)
→ Read `unit_wise_notes.md` for each subject
→ Focus on highlighted 🔑 sections

### Phase 2: Practice (2–3 days before exam)
→ Read `most_important_questions.md` (IS)
→ Solve numerical problems from `PYQ_analysis.md`
→ Practice Simplex, Transportation, Assignment by hand

### Phase 3: Revision (1 day before exam)
→ Read ALL `last_minute_revision.md` files
→ Write out key formulas once
→ Memorize definition lists

### Phase 4: Exam Day (30 min before paper)
→ Re-read relevant `last_minute_revision.md`
→ Review the Strategy section for that subject

---

## 📝 EXAM WRITING TIPS

1. **Always start answers** with a clean definition
2. **Use tables** for comparisons — saves time, earns marks
3. **Label diagrams** clearly (GSM architecture, Simplex tableau)
4. **For numericals:** Show ALL steps — partial marks are given
5. **For 10-mark questions:** Aim for 3-4 points × 2-3 lines each
6. **For 1-mark questions:** One sentence is enough — don't overwrite

---

## ⚠️ TOPICS TO SKIP (if time is critically low)

| Topic | Subject | Reason |
|---|---|---|
| NIST Model | Info Security | Appeared only once (2021) |
| PROLOG practical programs | AI | Practical exam content |
| WML programs | Mobile Computing | Practical exam content |
| Cobweb Models | (not in 6th sem) | 5th sem topic |
| Numerical Methods (Newton-Raphson etc.) | (not in scope) | Different subject |

---

## 🔗 CROSS-SUBJECT CONNECTIONS

- **Cryptography** (IS) ↔ **Network Security** (IS) — both use encryption concepts
- **CSP** (AI) ↔ **Integer Programming** (OT) — both involve constraint satisfaction
- **Mobile IP** (MC) ↔ **Network Security** (IS) — both involve IP-level concerns
- **Bayesian** (AI) ↔ **Probabilistic** (IS/OT) — probability fundamentals shared

---

*Generated by AI-powered exam analysis system | BCA Sem 6 NEP | University of North Bengal*
