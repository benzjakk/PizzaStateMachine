let machine = {
    current_State: {
      name: "Start_state",
      key: 0,
    },
    prev_State: {
      name: "none",
      key: -1,
    },
    input_String: [],
    StateMetrix: {
      Start_state: {
        //
        name: "Start_state",
        ข้าว: "ข้าว",
        อาหารเม็ด: "อาหารเม็ด",
        ปลาดิบ: "Start_state",
        ปลาย่าง: "Start_state",
        ขนมแมว: "Start_state",
        ขนมแมว: "Start_state",
        Restart: "Start_state",
        key: 0,
        component: [],
      },
      ข้าว: {
        //
        name: "ข้าว",
        ข้าว: "Start_state", //back
        อาหารเม็ด: "อาหารเม็ด",
        ปลาดิบ: "ข้าวหน้าปลาดิบ",
        ปลาย่าง: "ข้าวหน้าปลาย่าง",
        ขนมแมว: "ข้าว",
        Confirm: "น้อนไม่กิน",
        Restart: "Start_state",
        key: 1,
        component: ["ข้าว"],
      },
      อาหารเม็ด: {
        //
        name: "อาหารเม็ด",
        ข้าว: "ข้าว",
        อาหารเม็ด: "Start_state", //back
        ปลาดิบ: "อาหารเม็ดใส่ปลาดิบ",
        ปลาย่าง: "อาหารเม็ดใส่ปลาย่าง",
        ขนมแมว: "อาหารเม็ด",
        Confirm: "น้อนถูกใจสิ่งนี้",
        Restart: "Start_state",
        key: 2,
        component: ["อาหารเม็ด"],
      },
      ข้าวหน้าปลาดิบ: {
        //
        name: "ข้าวหน้าปลาดิบ",
        ข้าว: "ข้าวหน้าปลาดิบ", //not change main
        อาหารเม็ด: "อาหารเม็ดใส่ปลาดิบ", //change main
        ปลาดิบ: "ข้าว", //back
        ปลาย่าง: "ข้าวหน้าปลาย่าง", //change fish
        ขนมแมว: "ข้าวหน้าปลาดิบ_ขนมแมว", //add-ons
        Confirm: "น้อนอ้วก",
        Restart: "Start_state",
        key: 3,
        component: ["ข้าว", "ปลาดิบ"],
      },
      ข้าวหน้าปลาย่าง: {
        name: "ข้าวหน้าปลาย่าง",
        ข้าว: "ข้าวหน้าปลาย่าง", //not change main
        อาหารเม็ด: "อาหารเม็ดใส่ปลาย่าง", //change main
        ปลาดิบ: "ข้าวหน้าปลาดิบ", //change fish
        ปลาย่าง: "ข้าว", //back
        ขนมแมว: "ข้าวหน้าปลาย่าง_ขนมแมว", //add-ons
        Confirm: "น้อนถูกใจสิ่งนี้",
        Restart: "Start_state",
        key: 4,
        component: ["ข้าว", "ปลาย่าง"],
      },
      อาหารเม็ดใส่ปลาดิบ: {
        name: "อาหารเม็ดใส่ปลาดิบ",
        ข้าว: "ข้าวหน้าปลาดิบ", //change main
        อาหารเม็ด: "อาหารเม็ดใส่ปลาดิบ", //not change main
        ปลาดิบ: "อาหารเม็ด", //back
        ปลาย่าง: "อาหารเม็ดใส่ปลาย่าง", //change fish
        ขนมแมว: "อาหารเม็ดใส่ปลาดิบ_ขนมแมว", //add-ons
        Confirm: "น้อนอ้วก",
        Restart: "Start_state",
        key: 5,
        component: ["อาหารเม็ด", "ปลาดิบ"],
      },
      อาหารเม็ดใส่ปลาย่าง: {
        name: "อาหารเม็ดใส่ปลาย่าง",
        ข้าว: "ข้าวหน้าปลาย่าง", //change main
        อาหารเม็ด: "อาหารเม็ดใส่ปลาย่าง", //not change main
        ปลาดิบ: "อาหารเม็ดใส่ปลาดิบ", //change fish
        ปลาย่าง: "อาหารเม็ด", //back
        ขนมแมว: "อาหารเม็ดใส่ปลาย่าง_ขนมแมว", //add-ons
        Confirm: "น้อนถูกใจสิ่งนี้",
        Restart: "Start_state",
        key: 6,
        component: ["อาหารเม็ด", "ปลาย่าง"],
      },
      ข้าวหน้าปลาดิบ_ขนมแมว: {
        name: "ข้าวหน้าปลาดิบ_ขนมแมว",
        ข้าว: "ข้าวหน้าปลาดิบ_ขนมแมว", //not change main
        อาหารเม็ด: "อาหารเม็ดใส่ปลาดิบ_ขนมแมว", //change main
        ปลาดิบ: "ข้าวหน้าปลาดิบ_ขนมแมว", //not change fish
        ปลาย่าง: "ข้าวหน้าปลาย่าง_ขนมแมว", //change fish
        ขนมแมว: "ข้าวหน้าปลาดิบ", //back
        Confirm: "น้อนอ้วก",
        Restart: "Start_state",
        key: 7,
        component: ["ข้าว", "ปลาดิบ", "ขนมแมว"],
      },
      ข้าวหน้าปลาย่าง_ขนมแมว: {
        name: "ข้าวหน้าปลาย่าง_ขนมแมว",
        ข้าว: "ข้าวหน้าปลาย่าง_ขนมแมว", //not change main
        อาหารเม็ด: "อาหารเม็ดใส่ปลาย่าง_ขนมแมว", //change main
        ปลาดิบ: "ข้าวหน้าปลาดิบ_ขนมแมว", //change fish
        ปลาย่าง: "ข้าวหน้าปลาย่าง_ขนมแมว", //not change fish
        ขนมแมว: "ข้าวหน้าปลาย่าง", //back
        Confirm: "น้อนถูกใจสิ่งนี้",
        Restart: "Start_state",
        key: 8,
        component: ["ข้าว", "ปลาย่าง", "ขนมแมว"],
      },
      อาหารเม็ดใส่ปลาดิบ_ขนมแมว: {
        name: "อาหารเม็ดใส่ปลาดิบ_ขนมแมว",
        ข้าว: "ข้าวหน้าปลาดิบ_ขนมแมว", //change main
        อาหารเม็ด: "อาหารเม็ดใส่ปลาดิบ_ขนมแมว", //not change main
        ปลาดิบ: "อาหารเม็ดใส่ปลาดิบ_ขนมแมว", //not change fish
        ปลาย่าง: "อาหารเม็ดใส่ปลาย่าง_ขนมแมว", //change fish
        ขนมแมว: "อาหารเม็ดใส่ปลาดิบ", //back
        Confirm: "น้อนอ้วก",
        Restart: "Start_state",
        key: 9,
        component: ["อาหารเม็ด", "ปลาดิบ", "ขนมแมว"],
      },
      อาหารเม็ดใส่ปลาย่าง_ขนมแมว: {
        name: "อาหารเม็ดใส่ปลาย่าง_ขนมแมว",
        ข้าว: "ข้าวหน้าปลาย่าง_ขนมแมว", //change main
        อาหารเม็ด: "อาหารเม็ดใส่ปลาย่าง_ขนมแมว", //not change main
        ปลาดิบ: "อาหารเม็ดใส่ปลาดิบ_ขนมแมว", //change fish
        ปลาย่าง: "อาหารเม็ดใส่ปลาย่าง_ขนมแมว", //not change fish
        ขนมแมว: "อาหารเม็ดใส่ปลาย่าง", //back
        Confirm: "น้อนถูกใจสิ่งนี้",
        Restart: "Start_state",
        key: 10,
        component: ["อาหารเม็ด", "ปลาย่าง", "ขนมแมว"],
      },
      น้อนอ้วก: {
        name: "น้อนอ้วก",
        ข้าว: "Trap_state",
        อาหารเม็ด: "Trap_state",
        ปลาดิบ: "Trap_state",
        ปลาย่าง: "Trap_state",
        ขนมแมว: "Trap_state",
        Confirm: "Trap_state",
        Restart: "Start_state",
        key: 11,
        component: [],
      },
      น้อนถูกใจสิ่งนี้: {
        name: "น้อนถูกใจสิ่งนี้",
        ข้าว: "Trap_state",
        อาหารเม็ด: "Trap_state",
        ปลาดิบ: "Trap_state",
        ปลาย่าง: "Trap_state",
        ขนมแมว: "Trap_state",
        Confirm: "Trap_state",
        Restart: "Start_state",
        key: 12,
        component: [],
      },
      น้อนไม่กิน: {
        name: "น้อนไม่กิน",
        ข้าว: "Trap_state",
        อาหารเม็ด: "Trap_state",
        ปลาดิบ: "Trap_state",
        ปลาย่าง: "Trap_state",
        ขนมแมว: "Trap_state",
        Confirm: "Trap_state",
        Restart: "Start_state",
        key: 13,
        component: [],
      },
      Trap_state: {
        name: "Trap_state",
        ข้าว: "Trap_state",
        อาหารเม็ด: "Trap_state",
        ปลาดิบ: "Trap_state",
        ปลาย่าง: "Trap_state",
        ขนมแมว: "Trap_state",
        Confirm: "Trap_state",
        Restart: "Start_state",
        key: 14,
        component: [],
      },
    },
    getNext: function (taget) {
      let next = this.StateMetrix[this.current_State.name][taget];
      let name = next;
      let key = this.StateMetrix[next].key;
      if (key > 10) {
        return {
          name,
          key,
          component: this.current_State.component,
        };
      } else if (key > -1) {
        return {
          name,
          key,
          component: this.StateMetrix[next].component,
        };
      }
      // let component = this.StateMetrix[next].component;
    },
    setCurrentState: function (next) {
      this.current_State = next;
    },
  };
  