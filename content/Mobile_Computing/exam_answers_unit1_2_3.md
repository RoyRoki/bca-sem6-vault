# 📱 Mobile Computing — Exam Answers: Units 1, 2 & 3
> Smart topper notes | Exam-ready | High retention

---

# 🔥 Q1. GSM Architecture — Explain with Diagram.

## Definition
**GSM** (Global System for Mobile Communications) = Digital cellular network standard used worldwide for 2G mobile communication.

## GSM Architecture Diagram 🔥

```
+--------+     Radio     +--------+          +-----------+
|        |◄────────────► |  BTS   |          |    MSC    |
|  MS    |    Interface  |Base    |          |  Mobile   |
|(Phone) |               |Txceiver|          | Switching |
+--------+               |Station |          |  Center   |
                         +---+----+          +-----+-----+
                             |                     |
                         +---+----+          +-----+-----+
                         |  BSC   |          |    HLR    |
                         |Base Stn|◄────────►|(Home Loc  |
                         |Control |    SS7   |  Register)|
                         +---+----+          +-----+-----+
                             |                     |
                         BSS Layer            +-----+-----+
                                              |    VLR    |
                             NSS Layer        |(Visitor   |
                                              |  Loc Reg) |
                                              +-----+-----+
                                                    |
                                              +-----+-----+
                                              |    AUC    |
                                              |(Authenticat|
                                              |  Center)  |
                                              +-----+-----+
```

## Component Table

| Component | Full Form | Function |
|---|---|---|
| **MS** | Mobile Station | User device = phone + SIM card |
| **BTS** | Base Transceiver Station | Radio antenna/tower — talks to phone |
| **BSC** | Base Station Controller | Manages multiple BTSs, handles handover |
| **MSC** | Mobile Switching Center | Core — routes calls, manages mobility |
| **HLR** | Home Location Register | Permanent subscriber database |
| **VLR** | Visitor Location Register | Temp database for roaming users |
| **AUC** | Authentication Center | Authenticates users, generates keys |
| **EIR** | Equipment Identity Register | Tracks stolen/blocked devices (IMEI) |

## Two Layers

```
BSS (Base Station Subsystem) = BTS + BSC
NSS (Network Switching Subsystem) = MSC + HLR + VLR + AUC + EIR
```

## GSM Handover — Two Basic Reasons ⭐

```
Reason 1: Signal Strength
Phone moving away → Signal weakens → BTS notifies BSC → Hand over to closer BTS

Reason 2: Load Balancing
Current BTS overloaded → Move call to less-loaded BTS (even if signal OK)
```

## Conclusion
> GSM has 2 layers: BSS (radio) and NSS (switching/DB). MS talks to BTS, BSC controls BTSs, MSC routes calls. Handover: signal drops OR BTS overloaded.

---

# ⭐ Q2. Applications and Limitations of Mobile Computing.

## Applications of Mobile Computing

| Category | Examples |
|---|---|
| **Communication** | Voice calls, video calls, messaging |
| **Business** | Remote work, mobile CRM, inventory |
| **E-commerce** | Shopping apps, mobile payments |
| **Healthcare** | Patient monitoring, telemedicine |
| **Navigation** | GPS, maps, vehicle tracking |
| **Education** | E-learning, digital classrooms |
| **Entertainment** | Streaming, gaming |
| **Government** | M-governance, digital ID |

## Limitations of Mobile Computing 🔥 (8 points — memorize)

```
+---------------------------+
|  MOBILE COMPUTING         |
|  LIMITATIONS              |
+---------------------------+
  1. Low BANDWIDTH
  2. SECURITY risks
  3. POWER constraints
  4. CONNECTIVITY issues
  5. HETEROGENEITY
  6. INTERFERENCE
  7. Complex HANDOFF
  8. LIMITED resources
+---------------------------+
```

| Limitation | Explanation |
|---|---|
| **Bandwidth** | Wireless < wired; data rates fluctuate |
| **Security** | Signal easily intercepted; open air medium |
| **Power** | Battery life limits continuous use |
| **Connectivity** | Signal drops in tunnels, buildings |
| **Heterogeneity** | Many different networks (2G/3G/4G/WiFi) |
| **RF Interference** | Radio waves from multiple sources |
| **Handoff** | Seamless roaming is technically complex |
| **Limited Resources** | Smaller screen, storage, CPU compared to desktop |

## Conclusion
> Mobile computing is powerful but limited by wireless medium. Main problems: battery, bandwidth, security, and signal reliability.

---

# 🔥 Q3. Wireless MAC — Hidden Terminal, Exposed Terminal, SDMA/FDMA/TDMA/CDMA

## Why Special MAC for Wireless?

Traditional wired Ethernet uses CSMA/CD (Collision Detection), but **wireless can't detect collisions while transmitting** → Need specialized protocols.

## Hidden Terminal Problem 🔥

```
   A ←────────────────────────────────→ B ←───────────────────────────────→ C
      (A's range)                           (C's range)
      |←────────────────────────────→|   |←────────────────────────────→|

A and C both want to send to B
A cannot hear C (and vice versa)
Both send simultaneously → COLLISION at B!
A is "hidden" from C
```

**Problem:** A thinks channel is free (can't hear C) → sends → collision at B

**Solution:** RTS/CTS (Request-to-Send / Clear-to-Send)
```
A → B: RTS (Request to Send)
B → ALL: CTS (Clear to Send) ← C hears this, stays silent
A → B: Data ✅
```

## Exposed Terminal Problem 🔥

```
   A ←──────────────────────────────→ B    C ←──────────────────────────────→ D

   B is sending to A
   C can hear B's transmission
   C wants to send to D (which B can't reach)
   C waits unnecessarily — C is "exposed" to B
```

**Problem:** C thinks channel is busy because it hears B, but C's transmission to D would NOT cause collision.

**Result:** Wasted capacity — C waits when it could transmit to D.

## Comparison

| | Hidden Terminal | Exposed Terminal |
|---|---|---|
| **Who is hidden/exposed** | Sender is hidden from other sender | Sender is exposed to unrelated sender |
| **Effect** | Collision at receiver | Unnecessary waiting |
| **Problem type** | Too many transmissions | Too few transmissions |
| **Solution** | RTS/CTS | Busy-tone or directional antenna |

---

## SDMA, FDMA, TDMA, CDMA 🔥

### Overview

```
Multiple Access = How to share the channel among many users

SDMA: Divide SPACE     (different areas)
FDMA: Divide FREQUENCY (different frequencies)
TDMA: Divide TIME      (different time slots)
CDMA: Divide by CODE   (different codes, same freq+time)
```

### SDMA (Space Division Multiple Access)

```
         Base Station
        /      |      \
       /       |       \
 Sector 1   Sector 2   Sector 3
 (User A)   (User B)   (User C)
   120°        120°       120°

Each sector = separate beam → separate user
```

- Uses **directional antennas** to separate users by location
- Same frequency reused in spatially separated cells

### FDMA (Frequency Division Multiple Access)

```
Frequency (MHz):
|──User A──|──User B──|──User C──|──User D──|
 890-890.2  890.2-890.4  890.4-890.6 ...

Each user gets a dedicated frequency band
Simultaneous transmission on different frequencies
Used in: 1G (AMPS), radio broadcasting
```

### TDMA (Time Division Multiple Access)

```
Time:
Frame = [Slot1|Slot2|Slot3|Slot4|Slot5|Slot6|Slot7|Slot8]
         User1 User2 User3 User4 User1 User2 User3 User4

Each user transmits in their assigned time slot
Frame repeats → continuous call
Used in: GSM (2G), DECT
```

### CDMA (Code Division Multiple Access)

```
ALL users transmit at SAME time on SAME frequency
But each has a UNIQUE spreading code (orthogonal)

Receiver uses code to "filter out" one user's signal

User A: Data × Code_A = Spread Signal_A ─┐
User B: Data × Code_B = Spread Signal_B ─┤─→ Combined Signal
User C: Data × Code_C = Spread Signal_C ─┘
                                              ↓
                                    Receiver wants User A:
                                    Combined × Code_A = Data_A
```

### Comparison Table

| Feature | SDMA | FDMA | TDMA | CDMA |
|---|---|---|---|---|
| **Divides** | Space | Frequency | Time | Code |
| **Simultaneous TX** | Yes (different space) | Yes (diff freq) | No (take turns) | Yes (same freq) |
| **Interference** | Low | Low (if guard bands) | Low | Requires careful power control |
| **Flexibility** | Low | Medium | High | Very High |
| **Generation** | All | 1G | 2G (GSM) | 3G |
| **Bandwidth efficiency** | Medium | Low | Medium | High |

## Conclusion
> Hidden terminal = collision because sender can't hear rival sender. Exposed = wasted capacity. Fix: RTS/CTS. MAC techniques divide channel by space/frequency/time/code for multiple users.

---

# 🔥 Q4. Mobile IP — Goals, Entities, Operation.

## Problem Mobile IP Solves

```
Normal IP:
Home Network: Phone gets IP = 192.168.1.10
           ↓
Phone moves to different network
New Network: Phone needs new IP
           ↓
All connections BREAK! (TCP connections use IP address)
```

**Mobile IP** allows phone to keep same IP while moving.

## Mobile IP Entities 🔥

```
+─────────────────────────────────────────────────────────────+
|                     INTERNET                                 |
+─────────────────────────────────────────────────────────────+
         |                              |
+────────+──────────+        +──────────+──────────+
|   HOME NETWORK    |        |  FOREIGN NETWORK    |
|                   |        |                     |
|  +-----------+    |        |  +-----------+      |
|  | Home Agent|    |        |  |Foreign    |      |
|  |    (HA)   |    |        |  | Agent(FA) |      |
|  +-----------+    |        |  +-----------+      |
|                   |        |         |            |
|                   |        |  +-----------+      |
|                   |        |  | Mobile    |      |
|                   |        |  | Node (MN) |      |
|                   |        |  +-----------+      |
+───────────────────+        +─────────────────────+
                                      ↑
                             Correspondent Node (CN)
                             (communicates with MN)
```

| Entity | Role |
|---|---|
| **Mobile Node (MN)** | The moving device (phone/laptop) |
| **Home Agent (HA)** | Router at MN's home network — tracks MN location |
| **Foreign Agent (FA)** | Router at visited network — serves MN |
| **Care-of-Address (CoA)** | MN's temporary address at foreign network |
| **Correspondent Node (CN)** | Any node communicating with MN |

## Goals of Mobile IP

1. **Same IP address** while roaming anywhere
2. **Transparent** to applications (apps don't know about mobility)
3. No modification to **intermediate routers**
4. Support **simultaneous connections** during roaming
5. **Security** — authentication of binding updates

## How Packets Reach MN — Process

```
STEP 1: MN arrives at foreign network
         FA advertises its presence (ICMP Agent Advertisement)
         MN obtains Care-of-Address (CoA)

STEP 2: MN REGISTERS with HA
         MN → FA → HA: "I'm now at CoA"
         HA creates binding: [Home IP → CoA]

STEP 3: CN sends packet to MN's HOME IP
         CN → HA (packet arrives at home network)

STEP 4: HA TUNNELS packet to CoA
         HA wraps packet in new IP header (destined to CoA)
         This is ENCAPSULATION

STEP 5: FA receives tunneled packet
         FA decapsulates → delivers to MN

STEP 6: MN replies DIRECTLY to CN (no tunneling needed)
         This is called TRIANGLE ROUTING
```

```
Packet Flow:

CN ──────────────────────────────────→ HA
                                        |
                                    [Tunnel]
                                        |
                                        ↓
                                       FA
                                        |
                                        ↓
                                        MN

Reply: MN ─────────────────────────→ CN (direct)
```

## Agent Advertisement

```
FA broadcasts ICMP Router Advertisement message
Contains:
- FA's IP address
- CoA options
- Registration lifetime
MN listens for these to detect foreign network
```

## Conclusion
> Mobile IP lets device keep same address while moving. HA = home base, FA = temp host, CoA = temp address. Packets go: CN→HA→tunnel→FA→MN. Replies go direct: MN→CN.

---

# ⭐ Q5. DHCP — Dynamic Host Configuration Protocol

## Definition
**DHCP** = Protocol that automatically assigns **IP addresses and network configuration** to devices joining a network.

## DHCP DORA Process 🔥

```
Client                              DHCP Server
  |                                      |
  |──── DISCOVER ────────────────────→  |
  |    (Broadcast: "I need an IP!")      |
  |                                      |
  |  ←──── OFFER ──────────────────────|
  |   (Here's IP: 192.168.1.50,         |
  |    lease time: 24h, gateway, DNS)   |
  |                                      |
  |──── REQUEST ────────────────────→  |
  |    (I accept IP 192.168.1.50)        |
  |                                      |
  |  ←──── ACK ────────────────────────|
  |    (Confirmed! Use it for 24 hours)  |
  |                                      |
```

**Mnemonic: DORA** = **D**iscover → **O**ffer → **R**equest → **A**cknowledge

## DHCP State Diagram

```
       Start
         |
         ↓
    +--------+    Broadcast DISCOVER
    |  INIT  |─────────────────────────→
    +--------+                          ↓
         ↑                         Server sends
         |                            OFFER
         |                              ↓
    +----------+              +────────────────+
    | SELECTING|◄─────────────| Wait for OFFERs|
    +----------+              +────────────────+
         |
         | Send REQUEST
         ↓
    +-----------+
    |REQUESTING |
    +-----------+
         |
         | Receive ACK
         ↓
    +--------+
    | BOUND  |  ← IP active, lease timer starts
    +--------+
         |
         | 50% of lease time passes
         ↓
    +-----------+
    | RENEWING  |  ← Unicast REQUEST to server
    +-----------+
         |
         | 87.5% of lease time (no response)
         ↓
    +------------+
    | REBINDING  |  ← Broadcast to find ANY server
    +------------+
         |
         | Lease expires
         ↓
       INIT  (start over)
```

## What DHCP Provides
1. **IP address** (from pool)
2. **Subnet mask**
3. **Default gateway**
4. **DNS server addresses**
5. **Lease time**

## Conclusion
> DHCP auto-assigns IP addresses. DORA process: discover → offer → request → acknowledge. Lease expires → renew or get new IP.
