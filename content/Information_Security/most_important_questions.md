# 🎯 Information Security — Most Important Questions
> Based on 6-year PYQ analysis | All questions that appeared 3+ times

---

## 🔥 MUST PREPARE — 10 Mark Questions (Group C)

### Q1. Types of Attacks in Information Security 🔥 (6/6 years)
**Key points to write:**
- Define attack
- **Passive vs Active attacks** (table with examples)
- **Direct vs Indirect attacks** (differentiate clearly)
- Types: DoS, DDoS, Replay, Man-in-Middle, Eavesdropping, Phishing, Spoofing, SQL Injection
- Impact on each type
- **Answer Structure:** Definition → Categories (passive/active) → Each type with example → Impact

---

### Q2. Substitution & Transposition Ciphers 🔥 (5/6 years)
**Key points:**
- Substitution: letters **replaced** — Caesar cipher (formula + example)
- Transposition: letters **rearranged** — Columnar example
- Comparison table (5 points)
- **Memory trigger:** "Sub = Swap letter identity | Trans = Swap letter position"

---

### Q3. DES Algorithm ⭐ (3/6 years)
**Key points:**
- Input: 64-bit block, Key: 56-bit, Rounds: 16
- Steps: IP → 16 Feistel rounds → Final IP⁻¹
- Each round: Expand 32→48 bits → XOR with 48-bit subkey → 8 S-boxes → P-box
- Weakness: 56-bit key vulnerable to brute force
- Modes: ECB, CBC

---

### Q4. Symmetric Key Cryptography + Caesar Cipher 🔥 (appeared in 2022, 2023)
**Key points:**
- Definition of symmetric key
- How it works (same key, both ways)
- Challenges: key distribution, key management
- Algorithms: DES, 3DES, AES, RC4, Blowfish
- **Caesar cipher:** Shift cipher, formula C=(P+K) mod 26, example with K=3

---

### Q5. IDS — Types with Merits and Demerits 🔥 (4/6 years)
**Key points:**
- Definition of IDS
- **NIDS vs HIDS** table
- **Signature-based vs Anomaly-based** table
- IPS vs IDS difference (IPS can block, IDS only detects)

---

### Q6. Public Key vs Private Key Cryptography ⭐ (3/6 years)
**Key points:**
- Symmetric = same key | Asymmetric = key pair
- How public key encryption works (diagram flow)
- How digital signature uses keys (private to sign, public to verify)
- Key management differences
- Algorithms: RSA, Diffie-Hellman vs DES, AES

---

## ⭐ HIGH PRIORITY — 5 Mark Questions (Group B)

### Q1. Digital Signature — Role in Data Security 🔥 (appeared 4/6 years)
- Definition + purpose
- Process: Hash → Encrypt with private key → Append to message
- Verification: Decrypt with public key → Compare hashes
- Properties it ensures: Authentication, Integrity, Non-repudiation

### Q2. Firewall — Definition + Functions ⭐ (3/6 years)
- Definition: network security barrier
- 4 functions: packet filter, stateful inspection, app-layer filter, logging
- Types: Packet filter, Stateful, Proxy, NGFW

### Q3. Security Mechanisms ⭐ (4/6 years)
- List all 8 mechanisms (memorize list)
- Explain each in 1-2 lines
- Map mechanisms to services

### Q4. Direct vs Indirect Attacks ⭐ (2022, 2023)
| Direct | Indirect |
|---|---|
| Attacker directly targets victim | Uses intermediate system |
| Easy to trace | Hard to trace |
| Example: ping flood to server | Example: botnet attack |

### Q5. IS Components / Critical Characteristics ⭐
- Hardware, Software, Data, Procedures, People
- Critical characteristics: CIA + Authentication + Non-repudiation

---

## ✅ GROUP A — 1 Mark Definitions (Memorize All)

| Term | One-line answer |
|---|---|
| Information Security | Protecting information from unauthorized access/use/modification |
| Cryptography | Science of securing communication using codes |
| Plain text | Original readable message before encryption |
| Cipher text | Encrypted unreadable message |
| Digital Signature | Encrypted hash proving author identity |
| Malware | Malicious software designed to damage/exploit |
| Trojan Horse | Program appearing legitimate but containing malicious code |
| Trap Door | Secret undocumented entry point in program |
| Salami Attack | Stealing tiny amounts from many transactions |
| E-mail Spoofing | Forging email sender address |
| DoS | Denial of Service — overwhelming a system with requests |
| Phishing | Fraudulent attempt to steal credentials via fake site/email |
| Residual Risk | Risk remaining after applying security controls |
| Data Integrity | Ensuring data is accurate and unmodified |
| Hash Function | One-way function producing fixed-size digest from any input |
| Virus | Malicious code attaching to files, replicates on execution |
| Worm | Self-replicating malware spreading across networks |
| CIA Triad | Confidentiality, Integrity, Availability |
| Non-repudiation | Inability to deny sending a message |
| Authentication | Process of verifying identity |
