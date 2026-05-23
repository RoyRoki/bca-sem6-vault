# 🎯 Mobile Computing — Most Important Questions

---

## 🔥 10 Mark Questions (Group C)

### Q1. Mobile TCP: Operation + Compare with Traditional TCP 🔥
**Answer structure:**
- Traditional TCP problem: assumes loss = congestion → slows down (wrong in wireless)
- Indirect TCP: split connection at FA → 2 separate TCP sessions
- Snooping TCP: FA monitors, locally retransmits, preserves end-to-end semantics
- **Comparison table:** Traditional vs Mobile TCP (latency, loss handling, handoff behavior)

### Q2. DHCP with State Chart ⭐
- DORA process (Discover → Offer → Request → ACK)
- Draw state diagram: INIT → SELECTING → REQUESTING → BOUND → RENEWING → REBINDING
- Lease time concept

### Q3. SDMA/FDMA/TDMA/CDMA 🔥
- Define each with diagram
- How each divides the channel
- Advantages + disadvantages of each
- Which generation uses which (2G=TDMA, 3G=CDMA, 4G=OFDMA)

### Q4. IP Packet Transfer: Fixed → Mobile Node (diagram) 🔥
- Draw diagram showing CN → HA → FA → MN path
- Explain tunneling/encapsulation at HA
- Show CoA registration process

---

## ⭐ 5 Mark Questions (Group B)

### Q1. Limitations of Mobile Computing ⭐ (both years)
8 limitations: bandwidth, security, power, connectivity, heterogeneity, interference, handoff complexity, limited resources

### Q2. Mobile IP Entities ⭐ (both years)
Table: MN, HA, FA, CN, CoA — role of each + how they interact

### Q3. GSM Handover Reasons ⭐ (2022)
Two reasons: (1) Signal below threshold (2) Load balancing at BTS

### Q4. MAC Layer Techniques ⭐
SDMA, FDMA, TDMA, CDMA — brief explanation + comparison

---

## ✅ 1 Mark Quick Answers

| Q | A |
|---|---|
| Expand GSM | Global System for Mobile Communications |
| Expand SDMA | Space Division Multiple Access |
| What is Mobile TCP? | Modified TCP for wireless — distinguishes wireless loss from congestion |
| What is Snooping? | FA monitors packets, caches, handles local retransmission |
| What is Hoarding? | Pre-fetching data locally before going offline |
| What is Selective Tuning? | Client wakes up only for relevant broadcast data using index |
| What is Context-free computing? | System adapts behavior based on context (location, time, user) |
| What protocol used in MC? | WAP (Wireless Application Protocol) |
| What is Handoff? | Transfer of active call from one BTS to another |
