# 🛡️ Information Security — Exam Answers: Unit 1 & 2
> Smart topper notes | Exam-ready | High retention

---

# 🔥 Q1. What is Information Security? Explain its principles.

## Definition
Information Security = **Protecting information** from unauthorized access, use, disclosure, disruption, modification, or destruction.

## Core Principles — CIA Triad + 3 more

```
        +------------------+
        |   INFORMATION    |
        |    SECURITY      |
        +------------------+
              |
    +---------+---------+
    |         |         |
    ▼         ▼         ▼
+-------+ +-------+ +-------+
|  C    | |  I    | |  A    |
|Confid-| |Integr-| |Avail- |
|ential-| | ity   | |abilty |
| ity   | |       | |       |
+-------+ +-------+ +-------+
```

| Principle | Meaning | Example |
|---|---|---|
| **Confidentiality** | Only authorized users can access | Encrypted files |
| **Integrity** | Data is accurate, not tampered | Hash verification |
| **Availability** | System accessible when needed | No downtime |
| **Authentication** | Verify who you are | Login password |
| **Non-repudiation** | Cannot deny an action | Digital signature |
| **Authorization** | Control what you can do | File permissions |

## Key Points
- CIA is the **foundation** of all security
- Each principle protects a different aspect of data
- Breaking any one → security failure

## Conclusion
> Information Security ensures data is **safe (C), accurate (I), and accessible (A)** — the CIA triad is the core.

---

# 🔥 Q2. What are the different types of Security Attacks? Explain with examples.

## Definition
**Attack** = Any action that compromises the security of information owned by an organization.

## Classification of Attacks

```
                    ATTACKS
                      |
          +-----------+-----------+
          |                       |
       PASSIVE                  ACTIVE
    (Observe only)           (Modify/Disrupt)
          |                       |
    +-----+-----+          +------+------+
    |           |           |            |
 Eavesdrop  Traffic       DoS        Modification
            Analysis    Replay      Masquerade
```

## Passive vs Active Attacks

| Feature | Passive | Active |
|---|---|---|
| **What happens** | Only observe | Modify or disrupt |
| **Detection** | Hard to detect | Easier to detect |
| **Goal** | Steal information | Damage/disrupt |
| **Examples** | Sniffing, wiretapping | DoS, Replay, Spoofing |

## Types of Active Attacks

| Attack | Description | Example |
|---|---|---|
| **DoS** | Overwhelm system with requests | Ping flood |
| **DDoS** | DoS from many machines | Botnet attack |
| **Replay** | Resend captured valid data | Resend login packet |
| **Masquerade** | Pretend to be another user | IP spoofing |
| **Man-in-Middle** | Intercept + modify communication | Wi-Fi sniffing |
| **Phishing** | Fake site to steal credentials | Fake bank login |
| **SQL Injection** | Insert malicious SQL code | `'; DROP TABLE users;` |
| **Salami** | Steal tiny amounts repeatedly | Round-off fraud |

## Direct vs Indirect Attacks

| Direct | Indirect |
|---|---|
| Attacker targets victim **directly** | Uses **intermediary** (hacked machine) |
| Easy to trace | Hard to trace |
| Example: Hacker floods your server | Example: Botnet from 1000 machines |

## Conclusion
> Passive attacks **steal** information silently. Active attacks **damage** or **disrupt** systems. Direct attacks are traceable; indirect are not.

---

# ⭐ Q3. What are Security Services and Security Mechanisms?

## Security Services (X.800 Standard)

```
Security Services
        |
+-------+-------+-------+-------+-------+
|       |       |       |       |       |
Auth  Access  Confid  Integr  Non-rep  Avail
```

| Service | What it does |
|---|---|
| **Authentication** | Confirms identity of sender/receiver |
| **Access Control** | Prevents unauthorized use |
| **Data Confidentiality** | Protects data from disclosure |
| **Data Integrity** | Detects unauthorized modification |
| **Non-Repudiation** | Prevents denial of action |
| **Availability** | Ensures resource is accessible |

## Security Mechanisms

> **Mnemonic: E-DA-DAT-RN**
> **E**ncipherment, **D**igital Sig, **A**ccess Control, **D**ata Integrity, **A**uth Exchange, **T**raffic Padding, **R**outing Control, **N**otarization

| # | Mechanism | Purpose |
|---|---|---|
| 1 | **Encipherment** | Encrypt data |
| 2 | **Digital Signature** | Authenticity + non-repudiation |
| 3 | **Access Control** | Who can access what |
| 4 | **Data Integrity** | Detect modification |
| 5 | **Auth Exchange** | Verify identity via protocol |
| 6 | **Traffic Padding** | Insert fake traffic (prevent analysis) |
| 7 | **Routing Control** | Use secure paths |
| 8 | **Notarization** | Trusted 3rd party records |

## Conclusion
> Services define **what** to protect. Mechanisms define **how** to protect it.

---

# 🔥 Q4. Compare Substitution Cipher and Transposition Cipher with examples.

## One-line Difference
- **Substitution** → Change **WHAT** the letter is (replace it)
- **Transposition** → Change **WHERE** the letter is (rearrange it)

## Substitution Cipher

**Caesar Cipher** (most common example):
- Shift each letter by **key = K**
- Formula: **C = (P + K) mod 26**

```
Key = 3:
A → D
B → E
C → F
...
Z → C

Encrypt "HELLO":
H → K
E → H
L → O
L → O
O → R
Result: "KHOOR"
```

**Decrypt:** P = (C - K + 26) mod 26

## Transposition Cipher

**Columnar Transposition** example:
```
Key = 3, 1, 2  (column order)
Plaintext: ATTACK AT DAWN

Write in rows:
Col:  1  2  3
Row1: A  T  T
Row2: A  C  K
Row3: A  T  D
Row4: A  W  N

Read by column order (3,1,2):
Col 3: T K D N
Col 1: A A A A
Col 2: T C T W
Cipher: TKDNAAATCTW
```

## Comparison Table

| Feature | Substitution | Transposition |
|---|---|---|
| **Operation** | Replace letters | Rearrange letters |
| **Letter identity** | CHANGES | Stays same |
| **Letter position** | Stays same | CHANGES |
| **Examples** | Caesar, Vigenère, Playfair | Columnar, Rail fence |
| **Key** | Shift value / alphabet | Permutation |
| **Frequency analysis** | Vulnerable | Partially vulnerable |

## Conclusion
> Substitution **masks identity** of letters. Transposition **masks position** of letters. Both can be combined for stronger encryption.

---

# 🔥 Q5. Explain DES — Data Encryption Standard.

## Definition
DES = **symmetric block cipher** using a **56-bit key** to encrypt **64-bit blocks** in **16 rounds**.

## Quick Facts
| Property | Value |
|---|---|
| Block size | 64 bits |
| Key size | 56 bits (64 - 8 parity) |
| Number of rounds | 16 |
| Structure | Feistel network |
| Year introduced | 1977 |
| Status | Deprecated (weak key) |

## DES Architecture

```
64-bit Plaintext
       ↓
  Initial Permutation (IP)
       ↓
  +-----------+
  | Round 1   |  ← 48-bit subkey K1
  +-----------+
       ↓
  +-----------+
  | Round 2   |  ← 48-bit subkey K2
  +-----------+
       ↓
      ...
       ↓
  +-----------+
  | Round 16  |  ← 48-bit subkey K16
  +-----------+
       ↓
  Final Permutation (IP⁻¹)
       ↓
64-bit Ciphertext
```

## One Round of DES

```
  32-bit Left (L)    32-bit Right (R)
       |                   |
       |          +--------+
       |          |        ↓
       |          |    Expand: 32→48 bits
       |          |        ↓
       |          |    XOR with 48-bit subkey
       |          |        ↓
       |          |    S-boxes (8 × 6→4 bit)
       |          |        ↓
       |          |    P-box permutation
       |          |        ↓ (32 bits)
       +----XOR←--+
       ↓
  New Right = L XOR f(R, K)
  New Left  = Old Right
```

## DES Modes

| Mode | Full Form | Description |
|---|---|---|
| **ECB** | Electronic Codebook | Each block encrypted independently |
| **CBC** | Cipher Block Chaining | Each block XOR'd with previous ciphertext |
| **CFB** | Cipher Feedback | Stream cipher mode |
| **OFB** | Output Feedback | Like CFB but uses keystream |

## Why DES is Weak
- **56-bit key** = only 2⁵⁶ possible keys
- Modern computers can **brute-force in hours**
- **Solution:** 3DES (triple DES) or AES (Advanced Encryption Standard)

## Conclusion
> DES uses 16 rounds of Feistel structure with a 56-bit key. It's now considered weak — AES replaced it.

---

# 🔥 Q6. Compare Symmetric and Asymmetric Encryption.

## Symmetric (Secret Key) Cryptography

```
 Sender                    Receiver
   |                           |
   |  [Same Secret Key K]       |
   |                           |
Encrypt(P, K) → Ciphertext → Decrypt(C, K) → Plaintext
```

## Asymmetric (Public Key) Cryptography

```
 Sender                           Receiver
   |                                 |
   |    Receiver's Public Key (Kpub)  |
   |◄--------------------------------|
   |                                 |
Encrypt(P, Kpub) → Cipher → Decrypt(C, Kprivate) → Plaintext
```

## Comparison Table

| Feature | Symmetric | Asymmetric |
|---|---|---|
| **Keys** | 1 (shared) | 2 (public + private) |
| **Speed** | Fast ✅ | Slow ❌ |
| **Key distribution** | Problem ❌ | Solved ✅ |
| **Key management** | Complex (n² keys) | Simple (2n keys) |
| **Use case** | Bulk data encryption | Key exchange, signatures |
| **Algorithms** | DES, AES, RC4 | RSA, ECC, Diffie-Hellman |
| **Security** | Less (key sharing risk) | More |

## Conclusion
> Symmetric is **fast but key-sharing is a problem**. Asymmetric **solves key distribution** but is slow. In practice, **both are combined** (asymmetric for key exchange, symmetric for data).

---

# 🔥 Q7. What is Digital Signature? Explain its role in data security.

## Definition
Digital Signature = **Electronic equivalent of a handwritten signature** that proves:
1. Who sent the message (Authentication)
2. Message wasn't modified (Integrity)
3. Sender can't deny sending it (Non-repudiation)

## How Digital Signature Works

```
SENDER SIDE:
Message → [Hash Function] → Digest
                                ↓
                    [Encrypt with PRIVATE Key]
                                ↓
                          Signature
                                ↓
Message + Signature  ──────────────────────► RECEIVER


RECEIVER SIDE:
Message + Signature  (received)
      |                    |
      ↓                    ↓
[Hash Function]   [Decrypt with SENDER'S PUBLIC Key]
      ↓                    ↓
   Digest 1            Digest 2
      |                    |
      +────── Compare ─────+
                 ↓
         Match? ✅ Valid
         No match? ❌ Tampered
```

## Key Points
- **Private key** → used to **sign** (create signature)
- **Public key** → used to **verify** (check signature)
- If even one bit of message changes → hash changes → signature invalid
- Based on **asymmetric cryptography**

## What it provides

| Property | How |
|---|---|
| **Authentication** | Only private key owner can create signature |
| **Integrity** | Any change breaks hash match |
| **Non-repudiation** | Cannot claim "I didn't send it" |

## Digital Signature vs Digital Certificate vs DSC

| Term | Meaning |
|---|---|
| **Digital Signature** | Encrypted hash proving authorship |
| **Digital Certificate** | CA-issued document binding public key to identity |
| **DSC (Digital Signature Certificate)** | Legal Indian term (IT Act 2000) for signing documents |

## Conclusion
> Digital Signature = Hash + Private Key encryption. It ensures you know **who sent it**, **it wasn't changed**, and **they can't deny it**.
