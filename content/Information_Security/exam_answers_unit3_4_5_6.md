# 🛡️ Information Security — Exam Answers: Units 3–6
> Smart topper notes | Exam-ready | High retention

---

# 🔥 Q1. Explain Malicious Codes — Virus, Worm, Trojan, Trap Door, Salami

## Definition
**Malicious Code** = Software written to cause damage, steal data, or gain unauthorized access.

## Types of Malicious Code

```
            MALICIOUS CODE
                  |
    +------+------+------+------+------+
    |      |      |      |      |      |
  Virus  Worm  Trojan Trap  Logic  Salami
               Horse  Door  Bomb  Attack
```

## 1. Virus 🔥
```
Normal File → [Virus attaches] → Infected File
                                       ↓
                               User opens file
                                       ↓
                              Virus executes + spreads
```
- Needs **host file** to survive
- Spreads when **infected file is executed**
- Types: Boot sector, File, Macro, Polymorphic

## 2. Worm
```
 Machine A → [Worm copies itself] → Machine B → Machine C → ...
             (via network, no user action needed)
```
- **No host file needed** — self-contained
- Spreads **automatically** via network vulnerabilities
- Consumes bandwidth, crashes systems

## 3. Trojan Horse
```
User downloads "Free Game" → Appears normal
                                  ↓ (secretly)
                         Opens backdoor / steals data
```
- Looks **legitimate**, hides malicious code
- Does not self-replicate (unlike virus/worm)
- Example: RAT (Remote Access Trojan)

## 4. Trap Door (Backdoor) ⭐
- **Secret entry point** left by developer in software
- Bypasses normal authentication
- Originally for debugging — dangerous if discovered
- **Prevention:** Code reviews, security audits

## 5. Salami Attack ⭐
```
Account Balance: $1000.005 → rounds to $1000.00
Stolen: $0.005
× 1,000,000 accounts = $5,000 stolen!
```
- Steal **tiny amounts** from many transactions
- So small victims don't notice
- **Prevention:** Anomaly detection, audit logs

## Comparison Table

| Type | Needs Host | Self-Replicates | Spreads via | Detected |
|---|---|---|---|---|
| Virus | ✅ Yes | ✅ Yes | File execution | Medium |
| Worm | ❌ No | ✅ Yes | Network | Hard |
| Trojan | ❌ No | ❌ No | Download | Hard |
| Trap Door | N/A | N/A | In source code | Very Hard |
| Salami | N/A | N/A | Financial systems | Very Hard |

## Conclusion
> Viruses need hosts, worms don't. Trojans pretend to be safe. Trap doors are hidden. Salami attacks steal pennies from millions.

---

# 🔥 Q2. Explain Intrusion Detection System (IDS) — Types with Merits and Demerits

## Definition
**IDS** = System that **monitors network/host** for suspicious activity and **raises alerts** (does NOT block — that's IPS).

```
Network Traffic / System Logs
              ↓
         +----------+
         |   IDS    |
         | Monitor  |
         +----------+
              ↓
      [Analyze for threats]
              ↓
     +--------+--------+
     |                 |
  Normal           Suspicious
  Traffic          Activity
                       ↓
                  Send ALERT
                  to Admin
```

## Types of IDS

### 1. Based on Location

| | NIDS | HIDS |
|---|---|---|
| **Full Form** | Network-based IDS | Host-based IDS |
| **Location** | On network (router/switch) | On individual host |
| **Monitors** | All network traffic | Single system logs/files |
| **Pros** | Wide coverage, one device protects all | Sees encrypted traffic, internal attacks |
| **Cons** | Can't see encrypted traffic | Only protects one host |
| **Example** | Snort | OSSEC |

### 2. Based on Detection Method

| | Signature-based | Anomaly-based |
|---|---|---|
| **How it works** | Match known attack patterns | Detect deviation from normal |
| **Pros** | High accuracy for known attacks | Detects new/zero-day attacks |
| **Cons** | Misses unknown attacks | High false positives |
| **Analogy** | Like antivirus database | Like "this behavior is unusual" |

## IDS vs IPS

| | IDS | IPS |
|---|---|---|
| Action | Only **detects + alerts** | **Detects + blocks** |
| Position | Passive (out-of-line) | Active (in-line) |
| Risk | Can miss | Can block legitimate traffic |

## Conclusion
> NIDS watches the whole network, HIDS watches one machine. Signature = knows old attacks, Anomaly = catches new ones. IDS alerts, IPS blocks.

---

# ⭐ Q3. What is Firewall? Explain its functions and types.

## Definition
**Firewall** = Hardware or software that **filters traffic** between internal (trusted) and external (untrusted) network using **security rules**.

```
Internet  ←→  [FIREWALL]  ←→  Internal Network
(Untrusted)                    (Trusted)

FIREWALL checks every packet:
  Allow? → Let through
  Block?  → Drop packet
```

## Functions of Firewall

1. **Packet Filtering** — check IP address, port, protocol
2. **Stateful Inspection** — track connection state, only allow valid responses
3. **Application-layer filtering** — deep inspection of HTTP, FTP, DNS
4. **NAT** — hide internal IPs from outside
5. **Logging & Monitoring** — record all traffic for audit
6. **VPN support** — secure remote connections

## Types of Firewalls

| Type | How it works | Pros | Cons |
|---|---|---|---|
| **Packet Filter** | Check IP/port headers only | Fast, simple | No state tracking |
| **Stateful** | Track connection state | Better security | More memory needed |
| **Proxy/Application** | Acts as middleman, full inspection | Most secure | Slow |
| **Next-Gen (NGFW)** | DPI + IDS/IPS + App control | Very comprehensive | Expensive |

## Conclusion
> Firewall = security guard at the gate. It checks who comes in and goes out. Stateful is most commonly used. NGFW is the modern standard.

---

# ⭐ Q4. Database Security — Requirements and Multilevel Security

## Definition
**Database Security** = Protecting database from unauthorized access, modification, or destruction while ensuring authorized users can access needed data.

## Requirements of Database Security

| Requirement | Meaning |
|---|---|
| **Confidentiality** | Sensitive data not revealed to unauthorized |
| **Integrity** | Data is accurate, consistent |
| **Availability** | Authorized users can always access |
| **Auditability** | Track all access and changes |
| **Authentication** | Verify user identity |
| **Authorization** | Control what user can do |

## Sensitive Data
- **Inherently sensitive**: Medical records, financial data, passwords
- **Sensitive by aggregation**: Combining non-sensitive data reveals sensitive info
  - Example: Name + Address + Salary individually OK, but combined = sensitive

## Inference Attack
```
Query: "What is average salary of IT dept?"
→ If only 1 person in IT → answer reveals individual salary!
```
**Prevention:** Query auditing, Cell suppression, Data perturbation

## Multilevel Security (Bell-LaPadula Model)

```
Level 4: TOP SECRET  ─────────────────────
Level 3: SECRET      ──────────────
Level 2: CONFIDENTIAL────────
Level 1: UNCLASSIFIED──

Rules:
- No READ UP (can't read higher level)
- No WRITE DOWN (can't write to lower level)
```

## Conclusion
> Database security = control who reads/writes data. MLS uses levels to enforce strict access. Inference attacks are subtle — prevent with query monitoring.

---

# 🔥 Q5. Security in Networks — Threats and Controls

## Common Network Threats

| Threat | Description |
|---|---|
| **Eavesdropping** | Intercept network traffic (passive) |
| **IP Spoofing** | Fake the source IP address |
| **DoS/DDoS** | Overwhelm server with traffic |
| **MITM** | Intercept + modify communication |
| **Phishing** | Fake website to steal credentials |
| **Session Hijacking** | Steal active session cookie |
| **DNS Spoofing** | Return fake DNS responses |
| **ARP Poisoning** | Map fake MAC to real IP |

## Network Security Controls

```
Internet → [Firewall] → [IDS/IPS] → [Internal Network]
                              ↓
                     [SIEM - Monitor all]
                              ↓
                    [Encryption - HTTPS/VPN]
```

1. **Firewalls** — filter packets
2. **IDS/IPS** — detect/prevent intrusions
3. **Encryption** — SSL/TLS, HTTPS, VPN
4. **Authentication** — 2FA, certificates
5. **Patch Management** — keep systems updated

## Secure Email
- **S/MIME** — encrypt + sign emails using certificates
- **PGP** — Pretty Good Privacy — peer-to-peer email encryption
- Protects against: Email spoofing, Interception, Phishing

## Conclusion
> Network security = layers of defense. No single tool is enough. Use firewall + IDS + encryption + strong authentication together.

---

# ⭐ Q6. IT Act 2000 — Key Provisions and Cyber Crimes

## Why IT Act 2000?
- India's law to handle **electronic records, digital signatures, and cyber crimes**
- Amended in **2008** to add cybercrime provisions
- Gives legal status to digital transactions

## Key Definitions (IT Act 2000)

| Term | Meaning |
|---|---|
| **Digital Signature** | Authentication of electronic record via asymmetric crypto |
| **Electronic Record** | Data generated, received, or stored electronically |
| **Certifying Authority** | Entity licensed to issue Digital Signature Certificates |
| **Subscriber** | Person to whom DSC is issued |
| **Cyber Café** | Place offering internet for public |

## Key Sections & Penalties

```
Section → Offence → Penalty

Sec 43  → Unauthorized access/damage → Up to ₹1 crore compensation
Sec 65  → Tampering with source code → 3 years jail / ₹2 lakh fine
Sec 66  → Hacking → 3 years jail / ₹5 lakh fine
Sec 66A → Offensive messages (struck down by Supreme Court 2015)
Sec 66B → Receiving stolen computer → 3 years jail / ₹1 lakh fine
Sec 66C → Identity theft → 3 years / ₹1 lakh
Sec 66D → Cheating using computer → 3 years / ₹1 lakh
Sec 67  → Obscene content → 5 years / ₹10 lakh
Sec 72  → Breach of confidentiality → 2 years / ₹1 lakh
Sec 79  → Intermediary exemption (safe harbor)
```

## Cyber Crimes Covered

1. **Hacking** — unauthorized system access
2. **Phishing** — fake sites to steal credentials
3. **Identity Theft** — stealing personal data
4. **Cyberbullying** — online harassment
5. **Ransomware** — encrypt files, demand ransom
6. **Cyber Terrorism** — attacks on national infrastructure
7. **Email Spoofing** — fake sender address
8. **Online fraud** — financial cyber crimes

## Electronic Governance
- Government services delivered electronically
- Examples: Aadhaar, e-filing, digital certificates
- IT Act gives legal backing to digital records

## Conclusion
> IT Act 2000 gives legal teeth to cybersecurity in India. Sec 66 (hacking) and Sec 67 (obscene content) are most commonly cited. Digital signature has full legal standing under this Act.

---

# ✅ Q7. User Authentication Methods

## Definition
**Authentication** = Process of verifying that someone is who they claim to be.

## Three Factors (3A)

```
+-------------------+-------------------+-------------------+
| Something you     | Something you     | Something you     |
|      KNOW         |      HAVE         |      ARE          |
+-------------------+-------------------+-------------------+
| Password          | Smart Card        | Fingerprint       |
| PIN               | Token             | Retina scan       |
| Security question | OTP device        | Face recognition  |
| Passphrase        | Mobile phone      | Voice print       |
+-------------------+-------------------+-------------------+
```

## Multi-Factor Authentication (MFA)
- Combine **2 or more factors**
- Example: ATM = Card (have) + PIN (know) = 2FA
- Very secure — one factor compromised, still needs others

## Password Security Best Practices
- Minimum 8 characters
- Mix uppercase, lowercase, numbers, symbols
- Don't reuse passwords
- Store as **salted hash** (never plain text)
- Use password managers

## Conclusion
> Authentication = Prove you are who you say. MFA combines "know + have + are" for strongest security.
