# 📚 Mobile Computing — Unit-wise Exam Notes
> BCA Sem 6 | UBCAMAJ36015 | Theory: 40 marks | 8 Units

---

## UNIT 1: Introduction to Mobile Computing (5L)
**Topics:** MC intro, Applications, Limitations, Architecture, GSM

---

### 🔑 Mobile Computing — Definition
- Performing computation while moving
- Users access data/services regardless of location
- Uses wireless networks + portable devices

### 🔑 Applications of MC
1. Vehicle tracking / GPS navigation
2. Mobile banking & payments
3. Healthcare monitoring (wearables)
4. Emergency / disaster relief
5. Remote access to corporate data
6. Mobile commerce (m-commerce)
7. Social media & messaging

### 🔑 Limitations of MC
1. **Bandwidth** — wireless is slower than wired
2. **Security** — wireless signals are easy to intercept
3. **Power** — battery life limits operation
4. **Connectivity** — signal drops in tunnels/buildings
5. **Heterogeneity** — multiple different networks
6. **Interference** — radio frequency interference
7. **Handoff** — seamless roaming is complex
8. **Limited resources** — smaller screen, storage, CPU

### 🔑 GSM Architecture 🔥
**GSM = Global System for Mobile Communications**

**Key components:**
| Component | Full Form | Function |
|---|---|---|
| **MS** | Mobile Station | User device (phone + SIM) |
| **BTS** | Base Transceiver Station | Radio transmission to/from MS |
| **BSC** | Base Station Controller | Controls multiple BTSs |
| **MSC** | Mobile Switching Center | Core — routes calls, manages mobility |
| **HLR** | Home Location Register | Database of subscriber info |
| **VLR** | Visitor Location Register | Temp DB for roaming subscribers |
| **AUC** | Authentication Center | Security/authentication |
| **EIR** | Equipment Identity Register | Tracks stolen/blocked phones |

**Architecture layers:** MS → BSS (BTS+BSC) → NSS (MSC+HLR+VLR+AUC+EIR)

### 🔑 GSM Handover (Handoff) ⭐
**Definition:** Process of transferring active call from one BTS to another

**Two basic reasons for handover:**
1. **Signal strength** — MS moves away from current BTS (signal drops below threshold)
2. **Load balancing** — current BTS is overloaded, distribute traffic

**Types:**
- **Intra-cell** — within same BTS
- **Inter-cell (Intra-BSC)** — different BTS, same BSC
- **Inter-BSC** — different BSC, same MSC
- **Inter-MSC** — different MSC (most complex)

---

## UNIT 2: Wireless MAC (4L)
**Topics:** Hidden/Exposed terminals, SDMA/FDMA/TDMA/CDMA

---

### 🔑 Hidden Terminal Problem
- Node A and C cannot hear each other, both transmit to B → **collision at B**
- A is "hidden" from C (and vice versa)
- **Solution:** RTS/CTS (Request to Send/Clear to Send) mechanism

### 🔑 Exposed Terminal Problem
- Node B transmits to A. Node C wants to transmit to D (different area)
- C hears B and waits unnecessarily — **C is unnecessarily blocked**
- Opposite of hidden terminal

### 🔑 MAC Techniques 🔥
| Technique | Full Form | How it works |
|---|---|---|
| **SDMA** | Space Division Multiple Access | Separate users by spatial area (directional antennas) |
| **FDMA** | Frequency Division Multiple Access | Assign different frequencies to each user |
| **TDMA** | Time Division Multiple Access | Divide time into slots, assign slots to users |
| **CDMA** | Code Division Multiple Access | All use same frequency/time but different codes |

**CDMA Key features:**
- Spread spectrum technology
- Each user has unique code (orthogonal)
- All users transmit simultaneously
- Very secure, handles interference well
- Used in 3G networks

---

## UNIT 3: Mobile Network Layer (6L)
**Topics:** Mobile IP, DHCP

---

### 🔑 Mobile IP 🔥
**Problem it solves:** Normal IP assumes static location. Mobile node changes network → IP changes → connections break.

**Key entities:**
| Entity | Role |
|---|---|
| **Mobile Node (MN)** | The moving device |
| **Home Agent (HA)** | Router at MN's home network |
| **Foreign Agent (FA)** | Router at visited network |
| **Care-of-Address (CoA)** | Temporary IP at visited network |
| **Correspondent Node (CN)** | Node communicating with MN |

**Goals of Mobile IP:**
1. Maintain same IP address while roaming
2. Transparent to applications
3. Work without router modifications
4. Support simultaneous connections

**How it works:**
1. MN moves to foreign network
2. FA gives MN a Care-of-Address
3. MN registers CoA with HA
4. CN sends packet to MN's home IP → HA intercepts
5. HA **tunnels** packet to CoA (FA) → FA delivers to MN
6. MN replies directly to CN (triangle routing)

**Agent Advertisement:** FA broadcasts its presence via ICMP messages

### 🔑 DHCP (Dynamic Host Configuration Protocol) ⭐
- Automatically assigns IP addresses to devices
- **Process:** DORA — **D**iscover → **O**ffer → **R**equest → **A**cknowledge
- Client broadcasts DHCP Discover
- Server responds with DHCP Offer (IP, subnet, gateway, DNS)
- Client sends DHCP Request
- Server confirms with DHCP ACK
- **Lease time** — IP assigned for a duration, must renew

---

## UNIT 4: Mobile Transport Layer (6L)
**Topics:** Traditional TCP, Mobile TCP variants

---

### 🔑 Traditional TCP Problems in Mobile
- TCP assumes **packet loss = congestion** → reduces transmission rate
- In wireless, **loss can be due to** bad signal (not congestion)
- TCP unnecessarily reduces rate → poor performance

### 🔑 Mobile TCP Variants 🔥

**Indirect TCP (I-TCP):**
- Split TCP connection at FA into two: wired + wireless
- Wired: CN ↔ FA (standard TCP)
- Wireless: FA ↔ MN (optimized TCP)
- ✅ Wireless errors don't affect wired part
- ❌ Breaks end-to-end semantics

**Snooping TCP:**
- FA "snoops" (monitors) wireless segment
- Buffers packets, handles local retransmission
- ✅ Transparent to CN | Maintains end-to-end semantics
- ❌ No security (FA can see all data)

**Mobile TCP:**
- Distinguishes wireless loss from congestion loss
- Uses **Supervisor** to freeze TCP sender during handoff
- Freezes timeout → no unnecessary rate reduction

**Transaction-oriented TCP (T/TCP):**
- Optimized for short request-response (like HTTP)
- Reduces connection overhead
- Combines SYN+data in one packet

| Variant | Key Idea | Advantage |
|---|---|---|
| I-TCP | Split connection | No wireless impact on wired |
| Snooping TCP | Monitor + local retransmit | End-to-end semantics preserved |
| Mobile TCP | Freeze sender during disruption | No congestion confusion |
| T/TCP | Merge SYN+data | Fast for short transactions |

---

## UNIT 5: Database Issues (6L)
**Topics:** Hoarding, Caching, Power-aware, Context-aware, Query Processing

---

### 🔑 Hoarding
- **Pre-fetching data** to local cache before going offline
- Client stores data anticipating future needs
- Example: Download emails, maps before losing connectivity

### 🔑 Caching Invalidation
- Server notifies clients when cached data changes
- Approaches:
  - **Push** — server proactively sends updates
  - **Pull** — client polls server to check freshness
  - **Invalidation reports** — server sends list of changed items

### 🔑 Context-Aware Computing
- System adapts behavior based on context (location, time, user activity)
- Example: Phone auto-silences in meetings, shows nearby restaurants

### 🔑 Power-Aware Computing
- Optimize to reduce battery consumption
- Techniques: reduce screen brightness, sleep modes, compress data

---

## UNIT 6: Data Dissemination (5L)
**Topics:** Selective tuning, Push/Pull/Hybrid mechanisms

---

### 🔑 Data Dissemination Approaches
| Approach | Description |
|---|---|
| **Push** | Server broadcasts data continuously (like TV/radio) |
| **Pull** | Client requests specific data when needed |
| **Hybrid** | Index is broadcast (push), data retrieved on demand (pull) |

### 🔑 Selective Tuning (Indexing)
- Server broadcasts index first → client wakes up only for relevant data
- Saves battery by not listening to all data
- Client checks index, sleeps when irrelevant data is coming

---

## UNIT 7: MANETs (5L)
**Topics:** Overview, Properties, Applications, Routing, Security

---

### 🔑 MANET — Mobile Ad Hoc Network
- **No fixed infrastructure** — devices communicate directly
- Each node acts as **router** for others
- Dynamic topology — nodes move freely

**Properties:**
1. Self-configuring
2. No central administration
3. Multi-hop routing
4. Dynamic topology
5. Bandwidth constrained

**Applications:** Military, disaster recovery, sensor networks, vehicular networks

**Routing Protocols:**
- **DSDV** (Destination Sequenced Distance Vector) — proactive (table-driven)
- **AODV** (Ad Hoc On-Demand Distance Vector) — reactive (on-demand)
- **DSR** (Dynamic Source Routing) — reactive, stores full route in packet

**Security Issues in MANET:**
- No central authority → harder to authenticate
- Black hole attack, Wormhole attack, Sybil attack

---

## UNIT 8: Protocols and Tools (8L)
**Topics:** WAP, Bluetooth, J2ME

---

### 🔑 WAP (Wireless Application Protocol)
- Protocol stack for accessing internet on mobile devices
- **Layers:** WAE → WSP → WTP → WTLS → WDP
- Uses WML (Wireless Markup Language) instead of HTML
- WAP Gateway converts between WAP and internet protocols

### 🔑 Bluetooth
- Short-range wireless (10m typically, 100m max)
- **Frequency:** 2.4 GHz ISM band
- **Piconet:** 1 master + up to 7 active slaves
- **Scatternet:** Multiple overlapping piconets
- **Layers:** L2CAP, RFCOMM, SDP
- **Security modes:** Non-secure, Service-level, Link-level

### 🔑 Tunneling & Encapsulation ⭐
- **Tunneling:** Wrapping a packet inside another packet for transmission
- **Encapsulation:** Adding headers from outer protocol
- Used in Mobile IP: HA encapsulates packet with MN's CoA as destination
- Types: IP-in-IP, Minimal Encapsulation, GRE
- **Outer IP header** has FA's address; **inner IP header** has MN's home address
