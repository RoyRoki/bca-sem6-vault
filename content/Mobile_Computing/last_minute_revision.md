# ⚡ Mobile Computing — Last Minute Revision
> Read this 30 minutes before exam

---

## 🔑 GSM COMPONENTS (memorize acronyms)
**MS** → **BTS** → **BSC** → **MSC** → (HLR/VLR/AUC/EIR)
- MS = Mobile Station (phone)
- BTS = Base Transceiver Station (tower)
- BSC = Base Station Controller (controls BTSs)
- MSC = Mobile Switching Center (core router)
- HLR = Home Location Register (permanent subscriber DB)
- VLR = Visitor Location Register (temporary roaming DB)

**2 reasons for handover:** (1) Signal strength drops (2) Load balancing

---

## 🔑 MAC TECHNIQUES TABLE
| | SDMA | FDMA | TDMA | CDMA |
|---|---|---|---|---|
| Divides by | Space | Frequency | Time | Code |
| Example | Antenna sectors | GSM (original) | GSM (digital) | 3G networks |

---

## 🔑 MOBILE IP — KEY ENTITIES & FLOW
- **MN** = Mobile Node | **HA** = Home Agent | **FA** = Foreign Agent | **CoA** = Care-of-Address
- Flow: MN moves → FA assigns CoA → MN registers with HA → CN sends to home IP → HA tunnels to CoA → FA delivers to MN

**Goals:** (1) Same IP while moving (2) Transparent to apps (3) No router changes

---

## 🔑 DHCP = DORA
**D**iscover → **O**ffer → **R**equest → **A**cknowledge

---

## 🔑 TCP VARIANTS QUICK DIFF
- **Traditional TCP:** Loss = congestion → slow down (wrong in wireless!)
- **I-TCP:** Split at FA — 2 separate connections
- **Snooping:** FA buffers + local retransmit (end-to-end preserved)
- **Mobile TCP:** Freeze sender during disruption

---

## 🔑 HIDDEN vs EXPOSED TERMINAL
- **Hidden:** A & C can't hear each other → both send to B → **collision** at B
- **Exposed:** B sends to A → C thinks channel busy → **C unnecessarily waits**
- Solution for hidden: **RTS/CTS**

---

## 🔑 TUNNELING
- Wrap packet inside another packet
- Mobile IP uses it: HA wraps original packet, addresses to FA/CoA
- Remove outer header at FA → original packet delivered to MN

---

## 🔑 MANET
- No infrastructure, multi-hop, self-configuring
- Routing: **DSDV** (proactive/table) | **AODV** (reactive/on-demand)

---

## 🔑 BLUETOOTH PICONET
- 1 master + up to 7 active slaves
- Range: 10m (Class 2), Frequency: 2.4 GHz
- **Scatternet** = multiple piconets linked

---

## ✅ EXAM STRATEGY
**Group A:** GSM expand, SDMA expand, Mobile TCP/Snooping definition, Hoarding, Selective tuning  
**Group B:** Limitations of MC, MAC techniques, Mobile IP entities, GSM handover  
**Group C:** Mobile TCP (operation + compare), DHCP with state chart, SDMA/TDMA/FDMA/CDMA
