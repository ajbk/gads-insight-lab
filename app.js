const events = [
  {
    code: "A",
    label: "Card Code A",
    group: "support",
    title: "เหตุการณ์หลัก",
    desc: "เหตุการณ์ที่ส่งผลกระทบต่อการเดินเครื่องเพื่อจ่ายไฟฟ้าเข้าระบบ และถูกนำไปคำนวณ Performance Index",
    source: "หน้า 18"
  },
  {
    code: "C",
    label: "Card Code C",
    group: "support",
    title: "เหตุการณ์รอง",
    desc: "งานเพิ่มเติมระหว่างเหตุการณ์หลัก ไม่ถูกนำไปคำนวณ Performance Index และต้องไม่กระทบ Generation Mode",
    source: "หน้า 19"
  },
  {
    code: "RS",
    label: "Reserved Shutdown",
    group: "support",
    title: "พร้อมแต่ไม่ได้ถูกสั่งเดินเครื่อง",
    desc: "โรงไฟฟ้าพร้อมเดินเครื่อง แต่ไม่ได้ขนานเครื่องเพราะไม่มีความต้องการไฟฟ้าจากโรงไฟฟ้านั้น",
    source: "หน้า 24"
  },
  {
    code: "PO",
    label: "Planned Outage",
    group: "planned",
    title: "หยุดเครื่องตามแผน",
    desc: "งานที่มีแผนชัดเจน ระบุวันเริ่มต้นและสิ้นสุด เช่น Major Overhaul, Inspection, งานตามกฎหมาย/EIA/EHIA",
    source: "หน้า 26"
  },
  {
    code: "PE",
    label: "Planned Outage Extension",
    group: "planned",
    title: "ขยายงาน PO",
    desc: "ชั่วโมงที่เกินกำหนดเสร็จของ Planned Outage โดยไม่รวมปัญหานอก Original Scope of Work",
    source: "หน้า 26"
  },
  {
    code: "MO",
    label: "Maintenance Outage",
    group: "unplanned",
    title: "หยุดนอกแผนที่วางแผนได้",
    desc: "หยุดเครื่องนอก Planned Outage แต่สามารถกำหนดวันหยุดได้ล่วงหน้าเกิน 7 วัน",
    source: "หน้า 29"
  },
  {
    code: "ME",
    label: "Maintenance Outage Extension",
    group: "unplanned",
    title: "ขยายงาน MO",
    desc: "ชั่วโมงที่เกินกำหนดเสร็จของ Maintenance Outage โดยไม่รวมปัญหานอก Original Scope of Work",
    source: "หน้า 29"
  },
  {
    code: "U1",
    label: "Immediate",
    group: "unplanned",
    title: "Forced Outage ทันที",
    desc: "ต้องปลดเครื่องทันที หรือเครื่อง Trip off จากอุปกรณ์ป้องกันเครื่องหรือระบบส่ง",
    source: "หน้า 31"
  },
  {
    code: "U2",
    label: "Delayed",
    group: "unplanned",
    title: "Forced Outage ภายใน 6 ชั่วโมง",
    desc: "ไม่ต้องปลดทันที แต่ต้องนำเครื่องออกจากการใช้งานภายใน 6 ชั่วโมง",
    source: "หน้า 31"
  },
  {
    code: "U3",
    label: "Postponed",
    group: "unplanned",
    title: "Forced Outage ภายใน 7 วัน",
    desc: "ชะลอการนำเครื่องออกได้เกิน 6 ชั่วโมง แต่ต้องนำออกภายใน 7 วัน",
    source: "หน้า 31"
  },
  {
    code: "SF",
    label: "Startup Failure",
    group: "unplanned",
    title: "Startup ไม่สำเร็จ",
    desc: "อยู่ระหว่าง Startup แล้วไม่สามารถขนานเครื่องเข้าระบบได้สำเร็จ หากขนานแล้วแต่ขึ้น Load ไม่ได้ ให้พิจารณา U1",
    source: "หน้า 31"
  },
  {
    code: "PD",
    label: "Planned Derating",
    group: "derating",
    title: "ลดกำลังผลิตตามแผน",
    desc: "มีการวางแผนชัดเจนและกำหนดระยะเวลาไว้ล่วงหน้า เช่น ทดสอบก่อน/หลัง Planned Outage",
    source: "หน้า 34"
  },
  {
    code: "D1",
    label: "Immediate Derating",
    group: "derating",
    title: "ลดกำลังผลิตทันที",
    desc: "ต้องลดขีดความสามารถในการจ่ายไฟฟ้าทันทีทันใด",
    source: "หน้า 34"
  },
  {
    code: "D2",
    label: "Delayed Derating",
    group: "derating",
    title: "ลดภายใน 6 ชั่วโมง",
    desc: "ไม่ต้องลดทันที แต่ต้องลดกำลังผลิตภายใน 6 ชั่วโมง",
    source: "หน้า 34"
  },
  {
    code: "D3",
    label: "Postponed Derating",
    group: "derating",
    title: "ลดภายใน 7 วัน",
    desc: "เลื่อนการลดกำลังผลิตได้เกิน 6 ชั่วโมง แต่ต้องไม่เกิน 7 วัน",
    source: "หน้า 34"
  },
  {
    code: "D4",
    label: "Maintenance Derating",
    group: "derating",
    title: "ลดหลัง 7 วันก่อน PO",
    desc: "ลดกำลังผลิตได้หลัง 7 วัน แต่ต้องทำก่อน PO ครั้งหน้า มักเกิดจากการทดสอบอุปกรณ์ตามระยะเวลา",
    source: "หน้า 34"
  },
  {
    code: "GDC",
    label: "Seasonal Derating",
    group: "derating",
    title: "Ambient Loss",
    desc: "การลดกำลังผลิตจากสภาพแวดล้อมตามฤดูกาล รายงานแบบค่าเฉลี่ยและใช้ Gross Dependable Capacity",
    source: "หน้า 34"
  }
];

const glossary = [
  ["GADS", "Generating Availability Data System", "ระบบฐานข้อมูลกลางสำหรับข้อมูลการผลิต เชื้อเพลิง และเหตุการณ์ที่กระทบกำลังผลิต"],
  ["PH", "Period Hours", "จำนวนชั่วโมงทั้งหมดในช่วงที่พิจารณา เช่น วัน เดือน หรือปี"],
  ["SH", "Service Hours", "จำนวนชั่วโมงที่โรงไฟฟ้าขนานเครื่องและจ่ายไฟเข้าระบบ"],
  ["RH", "Reserved Shutdown Hours", "จำนวนชั่วโมงที่พร้อมเดินเครื่อง แต่ไม่ได้ถูกขนานเพราะไม่มี dispatch"],
  ["AH", "Available Hours", "จำนวนชั่วโมงที่โรงไฟฟ้าพร้อมเดินเครื่อง คำนวณได้จาก SH + RH"],
  ["UH", "Unavailable Hours", "จำนวนชั่วโมงที่โรงไฟฟ้าไม่พร้อมเดินเครื่อง"],
  ["POH", "Planned Outage Hours", "ชั่วโมงรวมของ PO และ PE"],
  ["UOH", "Unplanned Outage Hours", "ชั่วโมงหยุดเครื่องนอกแผน Planned Outage"],
  ["MOH", "Maintenance Outage Hours", "ชั่วโมงรวมของ MO และ ME"],
  ["FOH", "Forced Outage Hours", "ชั่วโมงรวมของ SF, U1, U2 และ U3"],
  ["ESEDH", "Equivalent Seasonal Derated Hours", "ชั่วโมงเทียบเท่าการลดกำลังผลิตจาก Seasonal Derating"],
  ["EPDH", "Equivalent Planned Derated Hours", "ชั่วโมงเทียบเท่าการลดกำลังผลิตจาก PD"],
  ["EUDH", "Equivalent Unplanned Derated Hours", "ชั่วโมงเทียบเท่าการลดกำลังผลิตจาก D1-D4"],
  ["EUNDH", "Equivalent Unit Derated Hours", "EPDH + EUDH"],
  ["GWEAF", "Gross Weighted Equivalent Availability Factor", "(AH - EUNDH) / PH x 100 ไม่หัก Seasonal Derating"],
  ["EAF", "Equivalent Availability Factor", "100 - POF - UOF - UDF - SEDF"],
  ["NOF", "Net Output Factor", "NAG / (SH x CC) x 100 โดยแปลง MkWh เป็น MWh ก่อน"],
  ["NAG", "Net Actual Generation", "GAG - Station Service และอาจติดลบได้"],
  ["MSTUO", "Mean Service Time to Unplanned Outage", "SH / #UO ถ้า #UO = 0 ให้ใช้ค่า SH"],
  ["AFoEE", "Availability Factor OEE", "AH / (PH - POHOEE) x 100 ใช้ประเมินความพร้อมจ่ายโดยยกเว้น Planned Outage ตามเป้าหมาย"],
  ["POHOEE", "Planned Outage Hours OEE", "ชั่วโมง Planned Outage ที่นำมายกเว้นในการประเมิน AFoEE โดยต้องไม่เกินแผนที่กำหนด"],
  ["PEHOEE", "Planned Outage Extension Hours OEE", "ชั่วโมงที่ขยายเกินกำหนดเสร็จของ Planned Outage และกระทบ AFoEE"],
  ["DF", "Dispatch Factor", "ใช้คัดเลือกโรงไฟฟ้าที่นำมาประเมิน AFoEE ในปี 2567 โดยเกณฑ์คือมากกว่า 0.1"],
  ["PMAS", "Power Plant Monitoring and Analytics System", "ระบบติดตามสัญญาณและทำ predictive analytics เพื่อแจ้งเตือนความผิดปกติก่อนเกิดความเสียหายรุนแรง"]
];

const glossaryLookup = new Map(
  glossary.map(([term, full, desc]) => [term.toUpperCase(), { term, full, desc }])
);

const glossaryPattern = new RegExp(
  `\\b(${[...glossaryLookup.values()]
    .map((item) => item.term)
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})\\b`,
  "gi"
);

function enhanceGlossaryTerms(root = document) {
  const blockedTags = new Set(["SCRIPT", "STYLE", "INPUT", "SELECT", "TEXTAREA", "BUTTON"]);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || blockedTags.has(parent.tagName) || parent.closest(".glossary-term")) {
        return NodeFilter.FILTER_REJECT;
      }
      if (!glossaryPattern.test(node.nodeValue)) {
        glossaryPattern.lastIndex = 0;
        return NodeFilter.FILTER_REJECT;
      }
      glossaryPattern.lastIndex = 0;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    node.nodeValue.replace(glossaryPattern, (match, _term, offset) => {
      const key = match.toUpperCase();
      const item = glossaryLookup.get(key);
      if (!item) return match;
      fragment.append(document.createTextNode(node.nodeValue.slice(lastIndex, offset)));
      const span = document.createElement("span");
      span.className = "glossary-term";
      span.tabIndex = 0;
      span.textContent = match;
      span.dataset.glossary = `${item.term}: ${item.full} - ${item.desc}`;
      fragment.append(span);
      lastIndex = offset + match.length;
      return match;
    });
    fragment.append(document.createTextNode(node.nodeValue.slice(lastIndex)));
    node.parentNode.replaceChild(fragment, node);
    glossaryPattern.lastIndex = 0;
  });
}

const afoeeCompare = [
  {
    title: "AF",
    desc: "วัดสัดส่วนชั่วโมงพร้อมจ่ายไฟฟ้าเข้าระบบต่อชั่วโมงทั้งหมดที่พิจารณา",
    formula: "AF = AH / PH x 100",
    note: "AH = SH + RH หรือ PH - POH - UOH"
  },
  {
    title: "GWEAF",
    desc: "วัดความพร้อมจ่ายโดยหักผลของ Planned/Unplanned Derating เป็นชั่วโมงเทียบเท่า",
    formula: "GWEAF = (AH - EUNDH) / PH x 100",
    note: "ไม่หัก Seasonal Derating ตามสไลด์ GADS"
  },
  {
    title: "AFoEE",
    desc: "วัดความพร้อมจ่ายสำหรับ PA โดยยกเว้นช่วง Planned Outage ตามเป้าหมาย และไม่พิจารณา Derating",
    formula: "AFoEE = AH / (PH - POHOEE) x 100",
    note: "AH = PH - POHOEE - PEHOEE - UOH"
  }
];

const afoeeRules = [
  {
    title: "ขยายเวลาหยุดเครื่อง",
    desc: "ค่าเป้าหมาย PO ไม่ปรับเพิ่ม หากเกินแผนจะเกิด PE / MO / FO ตามสาเหตุ",
    source: "AFOEE slide หน้า 20"
  },
  {
    title: "ลดระยะเวลาหยุดเครื่อง",
    desc: "ค่าเป้าหมายจะถูกปรับลดตามระยะเวลาใหม่ที่โรงไฟฟ้าแจ้ง โดยต้องแจ้งก่อนเริ่มงาน PO",
    source: "AFOEE slide หน้า 21"
  },
  {
    title: "เลื่อนแผนงาน",
    desc: "ค่าเป้าหมายรายเดือนเปลี่ยนตามแผนใหม่ แต่ระยะเวลาดำเนินงานเท่าเดิม",
    source: "AFOEE slide หน้า 22"
  },
  {
    title: "แยกแผนภายหลัง",
    desc: "แยกเป้าตามงาน งานแรกเสร็จเร็วไม่ทดเวลาให้งานถัดไป และงานแรกช้าไม่นำเวลางานถัดไปมาชดเชย",
    source: "AFOEE slide หน้า 23"
  },
  {
    title: "LTSA แนะนำหยุดเพิ่ม",
    desc: "ปรับเป้าหมายได้เฉพาะกรณีคู่สัญญา LTSA แจ้งเป็น UOD ตามสัญญา และตามกรอบเวลาที่แจ้งเพิ่มเท่านั้น",
    source: "AFOEE slide หน้า 20"
  },
  {
    title: "UOH margin",
    desc: "เป้าหมายระดับ 5 ที่ 94.51% เท่ากับมีกรอบ Unplanned 5.49% ก่อนแจกแจงตาม (PH - POHOEE) x GMC",
    source: "AFOEE slide หน้า 16"
  }
];

const afoeeActions = [
  {
    title: "PMAS Early Warning",
    group: "support",
    tag: "PMAS",
    desc: "ใช้ DCS/PI database และ Neural Network เทียบค่าจริงกับค่าคาดการณ์ เพื่อแจ้ง deviation ก่อน DCS alarm",
    detail: "กรณี NB-C1 ตรวจพบ Compressor Efficiency ลดลงจาก Cooling Water รั่ว ช่วยหลีกเลี่ยงความเสียหายและบทปรับได้",
    source: "Slide หน้า 33-39"
  },
  {
    title: "Trip Event to Failure KPI",
    group: "support",
    tag: "RCA/FMEA",
    desc: "วิเคราะห์ Trip Event แล้วพิจารณาว่าสัญญาณใดสร้าง Monitoring Indicator ได้ จากนั้นขยาย KPI ไปทุกโรงไฟฟ้า",
    detail: "แนวทางประกอบด้วย RCA, ปิด gap จาก logic trip ทั้งหมด และหาเครื่องมือตรวจจับ failure ที่ PMAS ยังไม่ครอบคลุม",
    source: "Slide หน้า 41-43"
  },
  {
    title: "HV Bushing Risk Control",
    group: "planned",
    tag: "Bushing",
    desc: "ระยะสั้นใช้ Thermoscan, Electrical Test ช่วง PO, ทดสอบ PD ของ spare และพิจารณา Online Monitoring",
    detail: "ระยะยาวเปลี่ยน OIP เป็น RIP/RIS เพื่อลดความเสี่ยงไฟไหม้และจำกัดขอบเขตความเสียหาย",
    source: "Slide หน้า 55-63"
  },
  {
    title: "Bushing Online Monitoring",
    group: "support",
    tag: "Monitoring",
    desc: "ติดตาม C1, delta C1, tan delta, delta tan delta และ voltage reference แบบ online",
    detail: "เกณฑ์ตัวอย่าง: delta C1 ไม่ควรเกิน 2%, delta tan delta เทียบ 0.3% ไม่ควรเกิน 0.5%",
    source: "Slide หน้า 70-78"
  },
  {
    title: "Boiler Tube Leak Playbook",
    group: "unplanned",
    tag: "Boiler",
    desc: "จัดทำ failure mapping แยก Soot Erosion, Thermal Fatigue, Welding Defect, Overheat, Slag Impact, Fly Ash Erosion และ Fire Side Corrosion",
    detail: "มาตรการเช่นเพิ่มเกณฑ์ตัดเปลี่ยนความหนา, thermal spray, overlay, refractory, CFD และ combustion tuning",
    source: "Slide หน้า 81-95"
  },
  {
    title: "Compressor Blade Damage",
    group: "unplanned",
    tag: "Compressor",
    desc: "กรณี WN-C41 Trip จาก Compressor Surge Protection พบความเสียหาย Compressor Blade/Vane Stage 7-15",
    detail: "ปัจจัยสำคัญคือ spare parts, de-stacking tools, manpower และ daily meeting กับ OEM/หน่วยงานเกี่ยวข้อง",
    source: "Slide หน้า 99-108"
  },
  {
    title: "UTPA Vane Hook Inspection",
    group: "planned",
    tag: "Lesson Learned",
    desc: "กรณี compressor เสียหายมีสมมติฐานจาก wear/crack ของ vane hook จึงแนะนำตรวจ vane hook ด้วย UTPA ทุก HGPI และ MO",
    detail: "ควร review history และพิจารณา replace เมื่อพบ wear ใน segment จำนวนมาก",
    source: "Slide หน้า 117-123"
  },
  {
    title: "Pending / Backlog Priority",
    group: "support",
    tag: "Workshop",
    desc: "จัดลำดับ critical parts, ทำ action plan, เตรียม spare/gำลังคน และนำงาน pending เข้า Planned Outage เท่าที่เหมาะสม",
    detail: "เสริม online monitoring, operator/maintenance inspection และ roll in-roll out spare สำหรับอุปกรณ์เสี่ยง",
    source: "Workshop หน้า 2, 9"
  },
  {
    title: "Planned Outage Extension 4M",
    group: "planned",
    tag: "PE",
    desc: "ปัจจัย PE แบ่งเป็น Man, Machine, Method, Material เช่น ความเชี่ยวชาญ, อุปกรณ์อายุสูง, สรุปแนวทางงาน unforeseen ช้า, spare/special tool ชำรุด",
    detail: "แนวทางคือพัฒนาทักษะ, นโยบาย critical parts, ยืดหยุ่นหลักเกณฑ์ PO และจัดหา NDT/Monitoring/Robot/AI",
    source: "Workshop หน้า 5-7"
  },
  {
    title: "Maintenance Management",
    group: "support",
    tag: "Long Term",
    desc: "Review & Optimize Worklist, พัฒนา CBM ต่อเนื่อง, ทบทวน Turnaround Management และสร้าง feedback loop ข้ามโรงไฟฟ้า",
    detail: "รวมถึงสร้าง inspector, sharing เทคโนโลยีบำรุงรักษา, หา partner และปรับการเดินเครื่องให้เหมาะกับสภาพเครื่องจักร",
    source: "Workshop หน้า 10"
  }
];

const cases = [
  {
    title: "PO test แล้ว Trip ใน scope",
    summary: "GT-11 ขนานเครื่องทดสอบระหว่าง PO แล้ว Trip จากอุปกรณ์ที่อยู่ใน scope งานซ่อม จึงยังรายงานเป็น PO ได้",
    days: ["PO", "PO", "PD", "PO", "PO", "PO", "PD", "PO", "PO", "PO", "-", "-", "-", "-", "-"],
    remarks: [
      "Trip ระหว่าง Startup Test หรือ Shutdown เพื่อแก้ข้อผิดพลาดจากงานซ่อม รายงานเป็น PO ได้เมื่ออยู่ใน scope งาน PO",
      "POH นับตามชั่วโมงปลด/ขนานจริง",
      "ST-10 ที่อยู่สถานะ RS สามารถรายงาน Derating ซ้อนทับจาก GT-11 Outage ได้"
    ],
    totals: [
      ["GT-11", "6", "0", "9", "0", "4"],
      ["GT-12", "0", "15", "0", "0", "0"],
      ["ST-10", "0", "15", "0", "0", "13"]
    ],
    source: "หน้า 49"
  },
  {
    title: "เลื่อน PO มาทับ UO",
    summary: "GT-11 Trip ก่อน แล้วเลื่อนงาน PO มาทำระหว่าง UO ส่วนที่ทับ U1 ต้องรายงาน PO เป็น Code C ก่อน",
    days: ["U1", "U1", "U1", "U1", "U1", "U1", "U1", "U1", "U1", "U1", "PO", "PD", "PO", "RS", "RS"],
    remarks: [
      "Outage ซ้อนทับกันไม่ได้ เหตุการณ์ที่สองจะเป็น Code A ได้เมื่อ Outage แรกสิ้นสุด",
      "PO ที่ทับช่วง U1 ให้รายงานเป็น Code C จึงไม่กระทบ Performance Index",
      "Outage สิ้นสุดเมื่อขนานเครื่องกลับได้ หรือแก้ไขแล้วเสร็จโดยไม่มีแผน Startup ต่อ"
    ],
    totals: [
      ["GT-11", "1", "2", "2", "10", "1"],
      ["GT-12", "15", "0", "0", "0", "0"],
      ["ST-10", "15", "0", "0", "0", "13"]
    ],
    source: "หน้า 50"
  },
  {
    title: "Startup Failure",
    summary: "GT-11 มีแผน Startup เพื่อจ่ายไฟ แต่ไม่สามารถจ่าย Load ได้ทันตามกำหนดการ",
    days: ["RS", "RS", "RS", "SF", "SF", "SF", "SF", "-", "-", "-", "-", "-", "-", "-", "-"],
    remarks: [
      "SF สิ้นสุดเมื่อขนานเครื่องกลับเข้าระบบ หรือแก้ไขปัญหาแล้วเสร็จโดยไม่มีแผน Startup ต่อ",
      "ถ้าขนานเครื่องสำเร็จแล้วแต่ขึ้น Load ตามคำสั่งไม่ได้ ให้พิจารณาเป็น U1"
    ],
    totals: [
      ["GT-11", "8", "3", "0", "4", "0"],
      ["GT-12", "15", "0", "0", "0", "0"],
      ["ST-10", "15", "0", "0", "0", "4"]
    ],
    source: "หน้า 51"
  },
  {
    title: "Derating แล้วเกิด Outage",
    summary: "ลดกำลังผลิตจากอุปกรณ์ A/B แล้วมี Outage ภายหลัง เหตุการณ์ Derating จะสิ้นสุดทันทีเมื่อ Outage เริ่ม",
    days: ["D1", "D1", "D1", "D1", "D1", "D1", "U3", "U3", "U3", "U3", "U3", "U3", "-", "-", "-"],
    remarks: [
      "Derating รายงานแยกตามเหตุการณ์ หรือรายงานเป็นค่าเฉลี่ยรวมตลอดช่วงได้",
      "เมื่อ Derating แล้วเกิด Outage ภายหลัง ให้ถือว่า Derating สิ้นสุดเมื่อ Outage เริ่ม"
    ],
    totals: [
      ["GT-11", "9", "0", "0", "6", "6"],
      ["GT-12", "15", "0", "0", "0", "0"],
      ["ST-10", "15", "0", "0", "0", "12"]
    ],
    source: "หน้า 52"
  }
];

const navButtons = document.querySelectorAll(".nav-button");
const views = document.querySelectorAll(".view");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((item) => item.classList.remove("is-active"));
    views.forEach((view) => view.classList.remove("is-visible"));
    button.classList.add("is-active");
    document.getElementById(button.dataset.view).classList.add("is-visible");
  });
});

function renderEvents(query = "") {
  const grid = document.getElementById("eventGrid");
  const needle = query.trim().toLowerCase();
  const filtered = events.filter((item) =>
    [item.code, item.label, item.title, item.desc].join(" ").toLowerCase().includes(needle)
  );
  grid.innerHTML = filtered
    .map(
      (item) => `
        <article class="event-card">
          <div class="code-title">
            <strong>${item.code}</strong>
            <span class="badge ${item.group}">${item.label}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="source">${item.source}</div>
        </article>
      `
    )
    .join("");
  enhanceGlossaryTerms(grid);
}

function renderGlossary(query = "") {
  const grid = document.getElementById("glossaryGrid");
  const needle = query.trim().toLowerCase();
  const filtered = glossary.filter((item) => item.join(" ").toLowerCase().includes(needle));
  grid.innerHTML = filtered
    .map(
      ([term, full, desc]) => `
        <article class="glossary-card">
          <div class="code-title">
            <strong>${term}</strong>
          </div>
          <h3>${full}</h3>
          <p>${desc}</p>
        </article>
      `
    )
    .join("");
  enhanceGlossaryTerms(grid);
}

function renderAfoeeCompare() {
  const container = document.getElementById("afoeeCompare");
  container.innerHTML = afoeeCompare
    .map(
      (item) => `
        <article class="compare-card">
          <strong>${item.title}</strong>
          <p>${item.desc}</p>
          <code>${item.formula}</code>
          <div class="source">${item.note}</div>
        </article>
      `
    )
    .join("");
  enhanceGlossaryTerms(container);
}

function renderAfoeeRules() {
  const container = document.getElementById("afoeeRules");
  container.innerHTML = afoeeRules
    .map(
      (item) => `
        <article class="rule-card">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="source">${item.source}</div>
        </article>
      `
    )
    .join("");
  enhanceGlossaryTerms(container);
}

function renderAfoeeActions(query = "") {
  const needle = query.trim().toLowerCase();
  const filtered = afoeeActions.filter((item) =>
    [item.title, item.tag, item.desc, item.detail].join(" ").toLowerCase().includes(needle)
  );
  const container = document.getElementById("afoeeActions");
  container.innerHTML = filtered
    .map(
      (item) => `
        <article class="event-card">
          <div class="code-title">
            <strong>${item.tag}</strong>
            <span class="badge ${item.group}">${item.source}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
  enhanceGlossaryTerms(container);
}

function renderAfoeeCalculator() {
  const fields = [
    ["PH", 720],
    ["POHOEE", 120],
    ["PEHOEE", 12],
    ["UOH", 24],
    ["EUNDH", 8]
  ];
  const form = document.getElementById("afoeeCalc");
  form.innerHTML = fields
    .map(
      ([label, value]) => `
        <label>${label}
          <input class="number-input" name="${label}" type="number" step="0.000001" value="${value}" />
        </label>
      `
    )
    .join("");

  const update = () => {
    const values = Object.fromEntries(new FormData(form));
    const ph = n(values.PH);
    const pohoee = n(values.POHOEE);
    const pehoee = n(values.PEHOEE);
    const uoh = n(values.UOH);
    const eundh = n(values.EUNDH);
    const ah = ph - pohoee - pehoee - uoh;
    const denominator = ph - pohoee;
    const af = (ah / ph) * 100;
    const gweaf = ((ah - eundh) / ph) * 100;
    const afoee = (ah / denominator) * 100;
    const peImpact = (pehoee / denominator) * 100;
    const uohImpact = (uoh / denominator) * 100;

    document.getElementById("afoeeResults").innerHTML = [
      ["AH", ah.toFixed(2)],
      ["AF", percent(af)],
      ["GWEAF", percent(gweaf)],
      ["AFoEE", percent(afoee)],
      ["PE impact", percent(peImpact)],
      ["UOH impact", percent(uohImpact)]
    ]
      .map(([label, value]) => `<div class="result-box"><span>${label}</span><strong>${value}</strong></div>`)
      .join("");
    enhanceGlossaryTerms(document.getElementById("afoeeResults"));
  };

  form.addEventListener("input", update);
  update();
  enhanceGlossaryTerms(form.closest(".calculator-panel"));
}

function wizardDecision() {
  const form = document.getElementById("eventWizard");
  const data = Object.fromEntries(new FormData(form));
  let code = "ตรวจเงื่อนไขเพิ่ม";
  let title = "ยังไม่สามารถฟันธงจากข้อมูลที่ให้";
  const reasons = [];

  if (data.kind === "secondary") {
    code = "Card Code C";
    title = "เหตุการณ์รอง ไม่คำนวณ Performance Index";
    reasons.push("ใช้กับงานเพิ่มเติมระหว่างเหตุการณ์หลัก และต้องไม่กระทบ Generation Mode");
  } else if (data.kind === "reserved") {
    code = "RS";
    title = "Reserved Shutdown";
    reasons.push("โรงไฟฟ้าพร้อมเดินเครื่อง แต่ศูนย์ควบคุมไม่ได้สั่งเดินเครื่อง");
  } else if (data.startup === "testInScope") {
    code = "PO";
    title = "Trip/Shutdown ระหว่าง Startup Test ใน scope งาน PO";
    reasons.push("สไลด์ case study ระบุว่ารายงานเป็น PO ได้เมื่อเป็นผลจากอุปกรณ์ใน scope งาน Planned Outage");
  } else if (data.startup === "failBeforeSync") {
    code = "SF";
    title = "Startup Failure";
    reasons.push("เกิดระหว่าง Startup และขนานเครื่องไม่สำเร็จ");
  } else if (data.startup === "failAfterSync") {
    code = "U1";
    title = "ขนานแล้วแต่ขึ้น Load ไม่ได้";
    reasons.push("นิยาม SF ระบุว่าหากขนานเครื่องแล้วและไม่สามารถขึ้น Load ตามสั่ง ให้ถือเป็น U1");
  } else if (data.kind === "derating") {
    if (data.deratingRule === "no") {
      code = "ไม่เป็น Derating";
      title = "ยังไม่เข้าเกณฑ์รายงาน Derating";
      reasons.push("ต้องลด Load มากกว่า 2% ของ GMC หรือเหตุการณ์ยาวเกิน 30 นาที");
    } else if (data.deratingRule === "ambient") {
      code = "Seasonal Derating / GDC";
      title = "Ambient Loss";
      reasons.push("เกิดจากสภาพแวดล้อมตามฤดูกาล ให้รายงานแบบค่าเฉลี่ยและใช้ GDC");
    } else {
      const map = { planned: "PD", lt6: "D1/D2", lt7: "D3", after7: "D4", gt7: "D4", none: "D1" };
      code = map[data.planning] || "D1";
      title = "Derating ตามระดับความเร่งด่วน";
      reasons.push("เลือก D1-D4 ตามเวลาที่ต้องลดกำลังผลิต และ PD เมื่อวางแผนชัดเจนล่วงหน้า");
    }
  } else if (data.kind === "outage") {
    const map = { planned: "PO", gt7: "MO", lt6: "U1/U2", lt7: "U3", after7: "MO", none: "U1" };
    code = map[data.planning] || "U1";
    title = "Outage ตามแผนและความเร่งด่วน";
    reasons.push("PO คือแผนชัดเจน, MO คือวางแผนหยุดได้เกิน 7 วัน, U1-U3 คือ Forced Outage ตามเวลาที่ต้องนำเครื่องออก");
  }

  document.getElementById("wizardResult").innerHTML = `
    <p class="eyebrow">คำแนะนำ</p>
    <div class="decision-code">${code}</div>
    <h3>${title}</h3>
    <ul>${reasons.map((reason) => `<li>${reason}</li>`).join("")}</ul>
    <p class="note">ใช้เป็นตัวช่วยคิดเบื้องต้นเท่านั้น กรณีมี outage ซ้อนกันหรือ scope งานซ่อมไม่ชัด ควรยึด timeline และเอกสารงานจริงประกอบ</p>
  `;
  enhanceGlossaryTerms(document.getElementById("wizardResult"));
}

function n(value) {
  return Number.parseFloat(value) || 0;
}

function percent(value) {
  return `${value.toFixed(2)}%`;
}

const calculators = {
  time: {
    labels: [
      ["PH", 720],
      ["SH", 500],
      ["RH", 100],
      ["POH", 80],
      ["UOH", 40],
      ["EUNDH", 10],
      ["ESEDH", 5]
    ],
    render(values) {
      const ph = n(values.PH);
      return [
        ["SF", percent((n(values.SH) / ph) * 100)],
        ["RSF", percent((n(values.RH) / ph) * 100)],
        ["POF", percent((n(values.POH) / ph) * 100)],
        ["UOF", percent((n(values.UOH) / ph) * 100)],
        ["UDF", percent((n(values.EUNDH) / ph) * 100)],
        ["SEDF", percent((n(values.ESEDH) / ph) * 100)]
      ];
    },
    note: "Time Factor เทียบชั่วโมงเหตุการณ์กับ PH เช่น SF = SH / PH x 100"
  },
  gweaf: {
    labels: [
      ["PH", 696],
      ["AH", 491],
      ["POH", 205],
      ["UOH", 0],
      ["EUNDH", 18.64],
      ["ESEDH", 0.95]
    ],
    render(values) {
      const ph = n(values.PH);
      const pof = (n(values.POH) / ph) * 100;
      const uof = (n(values.UOH) / ph) * 100;
      const udf = (n(values.EUNDH) / ph) * 100;
      const sedf = (n(values.ESEDH) / ph) * 100;
      return [
        ["GWEAF", percent(((n(values.AH) - n(values.EUNDH)) / ph) * 100)],
        ["EAF", percent(100 - pof - uof - udf - sedf)],
        ["AF", percent(100 - pof - uof)],
        ["UDF", percent(udf)]
      ];
    },
    note: "GWEAF ไม่หัก Seasonal Derating ส่วน EAF หัก SEDF เพิ่มด้วย"
  },
  nof: {
    labels: [
      ["NAG (MkWh)", 228.39],
      ["SH", 439.88],
      ["CC", 580]
    ],
    render(values) {
      const nof = ((n(values["NAG (MkWh)"]) * 1000) / (n(values.SH) * n(values.CC))) * 100;
      return [
        ["NOF", percent(nof)],
        ["NAG (MWh)", (n(values["NAG (MkWh)"]) * 1000).toFixed(2)],
        ["Denominator", (n(values.SH) * n(values.CC)).toFixed(2)]
      ];
    },
    note: "NOF ใช้ NAG เป็น MWh จึงต้องคูณ 1,000 เมื่อกรอกเป็น MkWh"
  },
  station: {
    labels: [
      ["Unit GAG", 150],
      ["Plant GAG", 1300],
      ["Unit GMC", 100],
      ["Plant GMC", 700],
      ["Station Service", 200]
    ],
    render(values) {
      const byGag = (n(values["Unit GAG"]) / n(values["Plant GAG"])) * n(values["Station Service"]);
      const byGmc = (n(values["Unit GMC"]) / n(values["Plant GMC"])) * n(values["Station Service"]);
      return [
        ["SS by GAG", byGag.toFixed(6)],
        ["NAG by GAG", (n(values["Unit GAG"]) - byGag).toFixed(6)],
        ["SS by GMC", byGmc.toFixed(6)],
        ["NAG if no run", (0 - byGmc).toFixed(6)]
      ];
    },
    note: "ถ้าโรงไฟฟ้ามีการเดินเครื่อง แบ่ง Station Service ตาม GAG; ถ้าไม่มีทุก Unit แบ่งตาม GMC"
  }
};

function renderCalculator(type = "time") {
  const config = calculators[type];
  const panel = document.getElementById("calculatorPanel");
  const inputs = config.labels
    .map(([label, value]) => `
      <label>${label}
        <input class="number-input" name="${label}" type="number" step="0.000001" value="${value}" />
      </label>
    `)
    .join("");
  panel.innerHTML = `
    <form class="calc-grid" id="calcForm">${inputs}</form>
    <div class="result-grid" id="calcResults"></div>
    <p class="note">${config.note}</p>
  `;

  const form = document.getElementById("calcForm");
  const update = () => {
    const values = Object.fromEntries(new FormData(form));
    document.getElementById("calcResults").innerHTML = config
      .render(values)
      .map(([label, value]) => `<div class="result-box"><span>${label}</span><strong>${value}</strong></div>`)
      .join("");
    enhanceGlossaryTerms(document.getElementById("calcResults"));
  };
  form.addEventListener("input", update);
  update();
  enhanceGlossaryTerms(panel);
}

function renderCases(active = 0) {
  const list = document.getElementById("caseList");
  list.innerHTML = cases
    .map(
      (item, index) => `
        <button class="case-button ${index === active ? "is-active" : ""}" data-case="${index}">
          ${item.title}
        </button>
      `
    )
    .join("");
  list.querySelectorAll(".case-button").forEach((button) => {
    button.addEventListener("click", () => renderCases(Number(button.dataset.case)));
  });

  const item = cases[active];
  const detail = document.getElementById("caseDetail");
  detail.innerHTML = `
    <p class="eyebrow">${item.source}</p>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <div class="timeline">
      ${item.days
        .map((day, index) => `<div class="day ${day.toLowerCase()}"><strong>D${index + 1}</strong><span>${day}</span></div>`)
        .join("")}
    </div>
    <h3>ข้อสังเกต</h3>
    <ul class="check-list">${item.remarks.map((remark) => `<li>${remark}</li>`).join("")}</ul>
    <table class="totals">
      <thead><tr><th>Unit</th><th>SH</th><th>RH</th><th>POH</th><th>UOH</th><th>Derating</th></tr></thead>
      <tbody>${item.totals.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
  enhanceGlossaryTerms(detail);
}

document.getElementById("eventSearch").addEventListener("input", (event) => renderEvents(event.target.value));
document.getElementById("glossarySearch").addEventListener("input", (event) => renderGlossary(event.target.value));
document.getElementById("afoeeSearch").addEventListener("input", (event) => renderAfoeeActions(event.target.value));
document.getElementById("eventWizard").addEventListener("input", wizardDecision);

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCalculator(button.dataset.calc);
  });
});

renderEvents();
renderGlossary();
renderAfoeeCompare();
renderAfoeeRules();
renderAfoeeActions();
renderAfoeeCalculator();
wizardDecision();
renderCalculator();
renderCases();
enhanceGlossaryTerms(document.querySelector(".workspace"));
