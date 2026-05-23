# ⚡ Information Security — Last Minute Revision
> Read this 30 minutes before exam | Maximum retention

---

## 🔑 CIA TRIAD
**C**onfidentiality → only authorized access  
**I**ntegrity → data is accurate/unmodified  
**A**vailability → accessible when needed  
**+** Non-repudiation, Authentication, Authorization

---

## 🔑 ATTACKS (Write in exam with table)
- **Passive** = observe (eavesdrop, traffic analysis)
- **Active** = modify (DoS, replay, MITM, spoofing)
- **Direct** = attacker → victim | **Indirect** = attacker → proxy → victim

---

## 🔑 CAESAR CIPHER (Always appears)
- Key = 3 → A→D, B→E ... Z→C
- Encrypt: C = (P + K) mod 26
- Decrypt: P = (C - K + 26) mod 26
- Example: "CAT" with K=3 → "FDW"

---

## 🔑 SUBSTITUTION vs TRANSPOSITION
| | Substitution | Transposition |
|---|---|---|
| What changes | Letter identity | Letter position |
| Method | Replace | Rearrange |
| Example | Caesar, Vigenère | Columnar, Rail fence |

---

## 🔑 DES QUICK FACTS
- 64-bit block | 56-bit key | 16 rounds | Feistel structure
- Steps: IP → (Expand→XOR→S-box→P-box) ×16 → IP⁻¹
- Problem: 56-bit key = brute-forceable

---

## 🔑 SYMMETRIC vs ASYMMETRIC
- Symmetric = **1 key** | Fast | DES, AES | Key distribution problem
- Asymmetric = **2 keys** | Slow | RSA | Solves key distribution

---

## 🔑 DIGITAL SIGNATURE PROCESS
1. Sender: Hash(message) → encrypt with **PRIVATE** key = signature
2. Attach signature to message → send
3. Receiver: Decrypt signature with sender's **PUBLIC** key → get hash
4. Hash received message → compare → ✅ match = authentic

**Ensures:** Authentication + Integrity + Non-repudiation

---

## 🔑 IDS TYPES
| | NIDS | HIDS |
|---|---|---|
| Location | Network | Single host |
| Monitors | Traffic | OS logs/files |
| Advantage | Wide coverage | Sees encrypted data |
| Disadvantage | Can't see encrypted | One host only |

---

## 🔑 MALWARE QUICK LIST
- **Virus** = needs host file, spread by execution
- **Worm** = no host, self-spread via network
- **Trojan** = looks legit, hides malicious code
- **Trap Door** = secret backdoor by developer
- **Logic Bomb** = triggers on condition/time
- **Salami** = steal tiny amounts repeatedly

---

## 🔑 FIREWALL FUNCTIONS (4 points)
1. Packet filtering (IP/port rules)
2. Stateful inspection (connection tracking)
3. Application-layer filtering (deep inspection)
4. Logging & monitoring

---

## 🔑 SECURITY MECHANISMS (8 - memorize list)
1. Encipherment
2. Digital Signature
3. Access Control
4. Data Integrity
5. Authentication Exchange
6. Traffic Padding
7. Routing Control
8. Notarization

---

## 🔑 IT ACT 2000 KEY NUMBERS
- Sec 43 → Unauthorized access → ₹1 crore compensation
- Sec 65 → Tampering source code → 3 yrs
- Sec 66 → Hacking → 3 yrs / ₹5 lakh
- Sec 67 → Obscene content → 5 yrs / ₹10 lakh

---

## ✅ EXAM STRATEGY
**Group A (5×1=5):** Always answer: IS definition, cryptography, digital signature, malware, trap door, characteristics of IS  
**Group B (3×5=15):** Choose: Digital Signature, Firewall, Security Mechanisms, Direct/Indirect attacks, CIA characteristics  
**Group C (2×10=20):** Choose: Types of attacks, Substitution/Transposition ciphers, IDS types
