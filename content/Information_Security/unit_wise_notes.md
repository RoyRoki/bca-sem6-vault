# 📚 Information Security — Unit-wise Exam Notes
> BCA Sem 6 | UBCAMAJ36016 | Theory: 60 marks

---

## UNIT 1: Introduction (5 Lectures)
**Topics:** Security, Attacks, Computer Criminals, Security Services, Security Mechanisms, User Authentication

---

### 🔑 Information Security (IS)
- **Definition:** Protection of information + systems from unauthorized access, use, disclosure, disruption, modification or destruction
- **CIA Triad (Core Principles):**
  - **C**onfidentiality — only authorized users can access
  - **I**ntegrity — data is accurate & unmodified
  - **A**vailability — data is accessible when needed
- **Other properties:** Non-repudiation, Authentication, Authorization, Accountability

### 🔑 Types of Attacks
| Type | Description | Example |
|---|---|---|
| **Passive** | Observe/listen without modification | Eavesdropping |
| **Active** | Modify/disrupt data | DoS, Replay attack |
| **Insider** | From within organization | Disgruntled employee |
| **Outsider** | External attacker | Hacker |
| **Direct** | Attacker directly attacks victim | Ping flood |
| **Indirect** | Uses intermediate system | Botnet |

### 🔑 Computer Criminals
- **Hackers** — break into systems for challenge/curiosity (not always malicious)
- **Crackers** — malicious hackers, intent to damage
- **Script Kiddies** — use existing tools without deep knowledge
- **Insiders** — employees who misuse access
- **Industrial Spies** — steal trade secrets
- **Cybercriminals** — for financial gain

### 🔑 Security Services (X.800)
1. Authentication — verifying identity
2. Access Control — preventing unauthorized use
3. Data Confidentiality — protecting from disclosure
4. Data Integrity — detecting modification
5. Non-repudiation — preventing denial of action
6. Availability — ensuring resource access

### 🔑 Security Mechanisms
- **Encipherment** — encryption of data
- **Digital Signature** — verifying authenticity
- **Access Control** — rules who can access what
- **Data Integrity** — detect unauthorized modification
- **Authentication Exchange** — verify identity via protocol
- **Traffic Padding** — inserting fake traffic to prevent analysis
- **Routing Control** — selecting secure paths
- **Notarization** — trusted third party for records

### 🔑 User Authentication
- **Something you know** — password, PIN
- **Something you have** — smart card, token
- **Something you are** — biometrics (fingerprint)
- **Multi-factor** — combination of above

---

## UNIT 2: Cryptography (10 Lectures)
**Topics:** Substitution, Transposition, Confusion/Diffusion, Symmetric/Asymmetric, DES, Hash, Key Exchange, Digital Signatures, Certificates

---

### 🔑 Cryptography Basics
- **Plaintext** — original readable message
- **Ciphertext** — encrypted message
- **Key** — secret value used for encryption/decryption
- **Encryption** — plaintext → ciphertext
- **Decryption** — ciphertext → plaintext
- **Cryptanalysis** — breaking cipher without key
- **Confusion** — makes relationship between key and ciphertext complex
- **Diffusion** — spreads influence of plaintext over ciphertext

---

### 🔑 Substitution Ciphers
**Principle:** Replace each letter with another letter/symbol

**Caesar Cipher:**
- Shift each letter by fixed number (key)
- Example: Key = 3 → A→D, B→E, C→F
- Encrypt "HELLO" → "KHOOR"
- Formula: C = (P + K) mod 26

**Monoalphabetic:** Each letter maps to unique letter (fixed mapping)

**Polyalphabetic (Vigenère):** Uses keyword, different shifts at different positions

---

### 🔑 Transposition Ciphers
**Principle:** Rearrange/permute positions of letters (no substitution)

**Columnar Transposition:**
- Write plaintext in rows, read column by column
- Example: "HELLO WORLD" → rearranged columns

**Key Difference:**
| Substitution | Transposition |
|---|---|
| Letters REPLACED | Letters REARRANGED |
| Caesar, Vigenère | Columnar, Rail fence |
| Changes what | Changes where |

---

### 🔑 Symmetric Encryption (Secret Key)
- **Same key** for encrypt and decrypt
- Fast, good for bulk data
- **Problem:** Key distribution (how to share key securely?)
- **Algorithms:** DES, 3DES, AES, Blowfish

### 🔑 DES (Data Encryption Standard) ⭐
- **Block size:** 64 bits
- **Key size:** 56 bits (64 bits - 8 parity)
- **Rounds:** 16 rounds of Feistel structure
- **Steps:**
  1. Initial Permutation (IP)
  2. 16 rounds of: Expansion → XOR with subkey → S-box substitution → Permutation
  3. Final Permutation (IP⁻¹)
- **Modes:** ECB (Electronic Codebook), CBC (Cipher Block Chaining), CFB, OFB
- **Weakness:** 56-bit key too short → replaced by AES

---

### 🔑 Asymmetric Encryption (Public Key)
- **Two keys:** Public key (share freely) + Private key (keep secret)
- **Encrypt** with recipient's PUBLIC key
- **Decrypt** with recipient's PRIVATE key
- **Slow** but solves key distribution problem
- **Algorithms:** RSA, Diffie-Hellman, ECC

| Symmetric | Asymmetric |
|---|---|
| 1 key | 2 keys (public + private) |
| Fast | Slow |
| Key distribution problem | Solves key distribution |
| DES, AES | RSA, ECC |
| Bulk data | Key exchange, signatures |

---

### 🔑 Hash Function
- **One-way function:** input → fixed-size digest
- **Cannot reverse** hash to get original
- **Properties:** Deterministic, fast, avalanche effect, collision-resistant
- **Uses:** Password storage, data integrity, digital signatures
- **Algorithms:** MD5 (128-bit), SHA-1 (160-bit), SHA-256 (256-bit)

---

### 🔑 Digital Signature
- **Purpose:** Authenticity + Non-repudiation + Integrity
- **How it works:**
  1. Sender hashes message → creates digest
  2. Sender **encrypts digest with PRIVATE key** = signature
  3. Receiver decrypts signature with sender's PUBLIC key
  4. Receiver hashes received message
  5. Compare both hashes → match = authentic

**Difference: Digital Signature vs Digital Certificate vs DSC**
| Term | Definition |
|---|---|
| Digital Signature | Encrypted hash proving authorship |
| Digital Certificate | CA-issued document binding public key to identity |
| Digital Signature Certificate (DSC) | Legal term used in India (IT Act) for certificate used to sign |

---

## UNIT 3: Program Security (5 Lectures)
**Topics:** Secure programs, Non-malicious errors, Malicious codes, Virus, Trap doors, Salami attacks

---

### 🔑 Malicious Code Types
| Type | Definition |
|---|---|
| **Virus** | Attaches to files, replicates when file executed |
| **Worm** | Self-replicates across networks (no host file needed) |
| **Trojan Horse** | Appears legitimate but hides malicious code |
| **Trap Door (Backdoor)** | Secret undocumented entry point left by developer |
| **Logic Bomb** | Malicious code triggered by specific condition/time |
| **Salami Attack** | Stealing small amounts repeatedly (financial fraud) |
| **Ransomware** | Encrypts victim's files, demands ransom |
| **Spyware** | Secretly monitors user activity |

**Virus vs Worm:**
| Virus | Worm |
|---|---|
| Needs host file | Self-contained |
| Needs human action to spread | Spreads automatically |
| Attaches to .exe, .doc | Travels via network |

**Trap Doors:**
- Secret code left by developer for maintenance/debugging
- Bypasses normal authentication
- Can be exploited by attacker who discovers it
- **Prevention:** Code reviews, security audits, pair programming

**Salami Attack:**
- Take tiny amounts from many accounts (too small to notice)
- Example: Round down 0.0003 cents to 0, collect the difference
- **Prevention:** Regular audits, anomaly detection

---

## UNIT 4: Database Security (5 Lectures)
**Topics:** Requirements, Reliability, Integrity, Sensitive data, Inference, Multilevel Security

---

### 🔑 Database Security
- **Goal:** Protect data from unauthorized access, modification, or destruction
- **Key Aspects:**
  - **Confidentiality** — prevent unauthorized reading
  - **Integrity** — prevent unauthorized modification
  - **Availability** — authorized users can access data
  - **Consistency** — ACID properties

**Sensitive Data:**
- Data that if disclosed causes harm
- Inherently sensitive: medical, financial, personal
- Sensitive by aggregation: combining non-sensitive fields reveals sensitive info

**Inference Attack:**
- Deriving confidential info from non-confidential queries
- Example: Average salary query reveals individual salary if only 1 person in group
- **Prevention:** Query auditing, cell suppression, data perturbation

**Multilevel Security (MLS):**
- Different access levels: Unclassified → Confidential → Secret → Top Secret
- User can only access data at their level or below
- **Bell-LaPadula Model:** "No read up, no write down"

---

## UNIT 5: Security in Networks (10 Lectures)
**Topics:** Threats in Networks, Security Controls, Firewalls, IDS, Secure e-mails

---

### 🔑 Network Threats
- **Eavesdropping/Sniffing** — intercept network traffic
- **IP Spoofing** — fake source IP address
- **DoS/DDoS** — overwhelm server with traffic
- **Man-in-the-Middle (MITM)** — intercept communication
- **Phishing** — fake website/email to steal credentials
- **Session Hijacking** — steal active session token

---

### 🔑 Firewall ⭐
- **Definition:** Hardware/software barrier between internal network and internet
- **Functions:**
  - Packet filtering (IP/port based rules)
  - Stateful inspection (tracks connection state)
  - Application-layer filtering
  - NAT (Network Address Translation)
  - Logging and monitoring

**Types of Firewalls:**
| Type | Description |
|---|---|
| Packet Filter | Checks IP/port headers only |
| Stateful | Tracks connection state |
| Application Layer (Proxy) | Deep packet inspection |
| Next-Gen (NGFW) | DPI + IDS/IPS integrated |

---

### 🔑 IDS — Intrusion Detection System 🔥
**Definition:** System that monitors network/host for malicious activity or policy violations

**Types:**
| Type | Description | Advantage | Disadvantage |
|---|---|---|---|
| **NIDS** (Network-based) | Monitors entire network traffic | Wide coverage | Can't see encrypted traffic |
| **HIDS** (Host-based) | Monitors single host/OS logs | Sees inside encryption | Limited to one host |
| **Signature-based** | Matches known attack patterns | Accurate for known attacks | Misses zero-day attacks |
| **Anomaly-based** | Detects deviation from normal | Detects new attacks | High false positives |

---

## UNIT 6: IT Act 2000 and Cyber Crimes (10 Lectures)
**Topics:** Digital signature, E-governance, Attribution, Certifying Authorities, Penalties, Offences

---

### 🔑 IT Act 2000 Key Points
- Enacted to provide **legal framework for e-commerce and cybercrime** in India
- **Amended in 2008** (IT Amendment Act)

**Key Definitions:**
- **Digital Signature** — authentication of electronic records using asymmetric crypto
- **Electronic Governance** — use of IT in government functioning
- **Certifying Authority (CA)** — issues digital signature certificates
- **Cyber Café** — place offering internet access

**Key Offences & Penalties:**
| Section | Offence | Penalty |
|---|---|---|
| Sec 43 | Unauthorized access/damage | Compensation up to ₹1 crore |
| Sec 65 | Tampering source code | 3 yrs jail / ₹2 lakh fine |
| Sec 66 | Hacking | 3 yrs jail / ₹5 lakh fine |
| Sec 66A | Offensive messages (struck down) | — |
| Sec 67 | Publishing obscene content | 5 yrs jail / ₹10 lakh fine |
| Sec 72 | Breach of confidentiality | 2 yrs jail / ₹1 lakh fine |

**Cyber Crimes:**
- Hacking, Phishing, Identity Theft, Cyberbullying
- Credit card fraud, Online pornography, Cyber terrorism
- Email spoofing, Ransomware, Denial of Service
