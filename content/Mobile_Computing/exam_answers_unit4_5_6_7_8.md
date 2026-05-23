# 📱 Mobile Computing — Exam Answers: Units 4–8
> Smart topper notes | Exam-ready | High retention

---

# 🔥 Q1. Mobile TCP — Operation, Types, Compare with Traditional TCP.

## The Core Problem

```
Traditional TCP assumes:
  Packet Loss = Network Congestion → Slow Down!

In Wireless:
  Packet Loss = Bad Signal, Handoff, Interference
  (NOT congestion! But TCP doesn't know this)

Result: TCP unnecessarily slows down over wireless
        → Poor performance on mobile networks
```

## Traditional TCP (Baseline)

```
Sender → [Internet + Wireless] → Receiver

Normal TCP behavior:
- Packet lost → Sender assumes congestion
- Reduces congestion window (cwnd)
- Slows down transmission
- Takes time to recover speed
```

## Mobile TCP Variants 🔥

### 1. Indirect TCP (I-TCP)

```
CN ──────[Standard TCP]──────── FA ───[Optimized TCP]──── MN
         Wired                  |          Wireless
         Connection             | Proxy
                                |
                         FA acts as PROXY
                         Two separate TCP connections
```

| Feature | I-TCP |
|---|---|
| **Key idea** | Split TCP at FA into 2 connections |
| **Advantage** | Wireless errors don't disturb wired part |
| **Disadvantage** | Breaks end-to-end semantics (FA sees all data) |
| **Handoff** | FA must transfer state to new FA |

---

### 2. Snooping TCP ⭐

```
CN ──────────────────────── FA ─────── MN
                            |
                          SNOOP
                         (monitor + buffer)

FA "snoops" on packets:
- Buffers packets sent to MN
- If NAK from MN → FA locally retransmits (fast!)
- CN doesn't know about wireless loss
→ No congestion signal to CN
```

| Feature | Snooping TCP |
|---|---|
| **Key idea** | FA snoops and locally retransmits |
| **Advantage** | Transparent to CN; end-to-end semantics preserved |
| **Disadvantage** | No security (FA sees data); fails with encrypted traffic |
| **Handoff** | Buffer lost during handoff |

---

### 3. Mobile TCP

```
Normal TCP                Mobile TCP
Packet loss → SLOW DOWN   Packet loss →
                            ↓
                         Is it wireless?
                            ↓
                         YES → Freeze timer (don't slow)
                         NO  → Congestion → Slow down
```

| Feature | Mobile TCP |
|---|---|
| **Key idea** | Freeze sender timer during wireless disruption |
| **Advantage** | Distinguishes wireless vs congestion loss |
| **How** | Supervisor detects disruption, sends ACK to freeze |

---

### 4. Transaction-Oriented TCP (T/TCP) ✅

```
Normal TCP:  SYN → SYN-ACK → ACK → Data → FIN...
             3-way handshake + data = many round trips

T/TCP:       SYN + Data → (combined!)
             Much faster for short request-response
```
- Ideal for HTTP-like short interactions
- Reduces connection setup overhead

## Master Comparison Table 🔥

| Feature | Traditional TCP | Indirect TCP | Snooping TCP | Mobile TCP |
|---|---|---|---|---|
| **Loss assumption** | All = congestion | N/A | Wireless handled locally | Distinguishes types |
| **End-to-end** | ✅ Yes | ❌ Broken | ✅ Yes | ✅ Yes |
| **FA involvement** | None | Heavy (proxy) | Buffer only | Supervisor |
| **Security** | OK | OK (split) | ❌ FA sees data | OK |
| **Handoff** | Slow recovery | State transfer needed | Buffer lost | Freezes |
| **Complexity** | Low | High | Medium | Medium |

## Conclusion
> Traditional TCP suffers in wireless because it confuses signal loss with congestion. I-TCP splits the connection, Snooping buffers locally, Mobile TCP freezes the sender. Each trades off end-to-end semantics vs performance.

---

# ⭐ Q2. Tunneling and Encapsulation in Mobile IP

## Definition
**Tunneling** = Wrapping a packet inside another packet to transport it through an intermediate network.

**Encapsulation** = Adding outer IP header to the original packet.

## Why Tunneling in Mobile IP?

```
Problem:
CN sends packet to MN's Home IP (192.168.1.10)
MN is actually at Foreign Network with CoA (10.0.0.5)
Normal routing would fail — 192.168.1.10 not at foreign network!

Solution: HA intercepts + TUNNELS to CoA
```

## Encapsulation Process

```
ORIGINAL PACKET:
+──────────────────────────────────────────+
| IP Header            | Data              |
| Src: CN              |                   |
| Dst: MN's Home IP    |                   |
+──────────────────────────────────────────+

AFTER ENCAPSULATION BY HA:
+────────────────────────────────────────────────────────+
| OUTER IP Header  | INNER IP Header      | Data         |
| Src: HA          | Src: CN              |              |
| Dst: FA (CoA)    | Dst: MN's Home IP    |              |
+────────────────────────────────────────────────────────+
       ↑                    ↑
 Added by HA          Original (unchanged)
```

## Decapsulation at FA

```
FA receives packet with Dst = CoA (its address)
FA strips OUTER IP header
Delivers original packet to MN
MN sees: Src = CN, Dst = Home IP (looks like normal packet!)
```

## Types of Encapsulation in Mobile IP

| Type | Description |
|---|---|
| **IP-in-IP** | Standard: Full IP header inside IP header |
| **Minimal Encapsulation** | Smaller overhead: only includes changed fields |
| **GRE (Generic Routing Encapsulation)** | More flexible, supports multiple protocols |

## Conclusion
> Tunneling = wrap packet in packet. Encapsulation = add outer header. HA adds outer header (FA as dst), FA strips it and delivers to MN. Transparent to CN and MN.

---

# ⭐ Q3. MANETs — Mobile Ad Hoc Networks

## Definition
**MANET** = Self-configuring network of mobile devices without fixed infrastructure.

```
Traditional Network:           MANET:
Phone → Tower → Server         Phone ↔ Phone ↔ Phone
  (centralized)                  (decentralized, multi-hop)
```

## Properties of MANET

```
+─────────────────────────────────+
|         MANET PROPERTIES        |
+─────────────────────────────────+
  ✓ No infrastructure (no towers)
  ✓ Self-configuring
  ✓ Multi-hop routing
  ✓ Dynamic topology (nodes move)
  ✓ Distributed control
  ✗ Limited bandwidth
  ✗ Battery constraints
  ✗ Security challenges
+─────────────────────────────────+
```

## Applications
- Military battlefield communication
- Disaster relief (infrastructure destroyed)
- Vehicular networks (V2V)
- Sensor networks
- Conference/event networking

## Routing Protocols

```
                MANET Routing
                     |
          +──────────+──────────+
          |                     |
       PROACTIVE               REACTIVE
     (Table-driven)          (On-demand)
          |                     |
        DSDV                  AODV
     DSR (hybrid)              DSR
```

| Protocol | Type | How it works |
|---|---|---|
| **DSDV** | Proactive | Maintains routing tables always; sends updates |
| **AODV** | Reactive | Finds route only when needed (Route Discovery) |
| **DSR** | Reactive | Full route stored in packet header |

### AODV Route Discovery

```
Source → [RREQ floods network] → Destination
         ← [RREP travels back] ←

RREQ = Route Request
RREP = Route Reply
```

## Security Issues in MANET

| Attack | Description |
|---|---|
| **Black Hole** | Node claims shortest route, drops all packets |
| **Wormhole** | Two nodes create tunnel, replay messages |
| **Sybil** | One node pretends to be multiple nodes |
| **DoS** | Flood control messages |

## Conclusion
> MANET = no infrastructure, self-organizing, multi-hop. Proactive routing (DSDV) maintains tables always; Reactive (AODV) finds routes on demand. Security is challenging without central authority.

---

# ✅ Q4. Data Dissemination — Push, Pull, Hybrid; Hoarding; Caching

## Data Dissemination Approaches

```
SERVER                              CLIENT
  |                                   |
  |  PUSH approach:                   |
  |──────── Broadcast data ──────────►|
  |  (server sends without request)   |
  |                                   |
  |  PULL approach:                   |
  |◄────── "Give me X" ───────────────|
  |─────── Here is X ────────────────►|
  |  (client requests specifically)   |
  |                                   |
  |  HYBRID approach:                 |
  |──────── Broadcast INDEX ─────────►|
  |◄─────── "I want item #3" ─────────|
  |─────── Item #3 data ─────────────►|
```

| Approach | How | Best for |
|---|---|---|
| **Push** | Server broadcasts continuously | Popular data, broadcasts |
| **Pull** | Client requests on demand | Specific/rare data |
| **Hybrid** | Index pushed, data pulled | Efficient mobile use |

## Selective Tuning (Indexing) ⭐

```
Without indexing:
Client ON for whole broadcast → wastes battery

With indexing:
Server broadcasts: [INDEX: item1 at t=2, item2 at t=5, item3 at t=8]
Client reads index → item3 is needed, at t=8
Client sleeps until t=7
Client wakes, reads item3 at t=8
Client sleeps again
→ Battery saved!
```

## Hoarding ⭐

```
Before going offline:
App predicts what user will need
Pre-fetches data to local storage

Example: Email client downloads all emails before entering tunnel
         Maps app caches map area before known destination
```

## Caching Invalidation

```
Client has cached data → Server data changes
How does client know?

Option 1: PUSH (server broadcasts "item X updated")
Option 2: PULL (client polls "is item X still valid?")
Option 3: Invalidation Reports (server broadcasts list of changed items periodically)
```

## Context-Aware Computing ✅

```
CONTEXT = user's situation (location, time, activity, device)

Context-Aware App adapts based on context:
- Location-aware: Show nearby restaurants
- Time-aware: Auto-silent during meetings
- Activity-aware: Fitness tracking on exercise
```

## Conclusion
> Push = server broadcasts. Pull = client requests. Hybrid = index pushed, data pulled. Hoarding = pre-fetch for offline. Selective tuning = index tells client when to wake up → saves battery.

---

# ✅ Q5. WAP, Bluetooth, and J2ME

## WAP (Wireless Application Protocol)

```
Internet (HTTP)                    Mobile (WAP)
   HTML ──────────────────────────► WML
   TCP/IP ─────────────────────────► WDP
   Server ───[WAP Gateway]──────────► Phone

WAP Protocol Stack:
+──────────+
|  WAE     | Wireless Application Environment
+──────────+
|  WSP     | Wireless Session Protocol
+──────────+
|  WTP     | Wireless Transaction Protocol
+──────────+
|  WTLS    | Wireless Transport Layer Security
+──────────+
|  WDP     | Wireless Datagram Protocol
+──────────+
| Bearers  | SMS, USSD, GPRS
+──────────+
```

- **WML** = Wireless Markup Language (like HTML for mobile)
- **WAP Gateway** converts between HTTP and WAP protocols

## Bluetooth

```
+────────────────────────────────+
|         PICONET                |
|                                |
|    [SLAVE 1]   [SLAVE 2]       |
|         \         /            |
|          [MASTER]              |
|         /         \            |
|    [SLAVE 3]   [SLAVE 4]       |
|                                |
+────────────────────────────────+

1 Master + up to 7 active slaves = PICONET
Multiple piconets connected = SCATTERNET
```

| Property | Value |
|---|---|
| **Frequency** | 2.4 GHz ISM band |
| **Range** | Class 1: 100m, Class 2: 10m |
| **Speed** | Up to 3 Mbps (Bluetooth 2.0) |
| **Network** | Piconet (1 master, 7 slaves) |
| **Security** | Pairing + encryption |

**Bluetooth Layers:**
- L2CAP (Logical Link Control)
- RFCOMM (Serial emulation)
- SDP (Service Discovery)

## J2ME (Java 2 Micro Edition) ✅

```
J2ME = Java platform for mobile/embedded devices

Profiles:
CLDC (Connected Limited Device Configuration)
    ↓
MIDP (Mobile Information Device Profile)
    ↓
  MIDlet (Mobile Application)
```

- Runs Java apps on phones, PDAs
- Write once, run on any MIDP device
- Used in feature phones (before Android/iOS)

## Conclusion
> WAP = internet for 2G phones using WML. Bluetooth = short-range wireless, piconet structure. J2ME = Java for mobile devices.
