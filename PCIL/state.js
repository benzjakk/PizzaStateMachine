let machine = {
    current_State:  {
        name : 'Start_state',
        key : 0
    },
    prev_State : {
        name : 'none',
        key : -1
    },
    input_String: [],
    StateMetrix : {
        Start_state : {
            name : 'Start_state',
            เผ็ดน้อย : 'ตำไทย_เผ็ดน้อย',
            เผ็ดมาก : 'ตำไทย_เผ็ดมาก',
            ปูเค็ม : 'Start_state',
            หมูยอ : 'Start_state',
            ไข่เค็ม : 'Start_state',
            ปลาร้า : 'Start_state',
            Confirm : 'Start_state',
            Reset : 'Start_state',
            key : 0
        },
        ตำไทย_เผ็ดน้อย : {
            name : 'ตำไทย_เผ็ดน้อย',
            เผ็ดน้อย : 'ตำไทย_เผ็ดน้อย',
            เผ็ดมาก : 'ตำไทย_เผ็ดมาก',
            ปูเค็ม : 'ปูเค็ม_เผ็ดน้อย',
            หมูยอ : 'หมูยอ_เผ็ดน้อย',
            ไข่เค็ม : 'ไข่เค็ม_เผ็ดน้อย',
            ปลาร้า : 'ตำไทย_เผ็ดน้อย',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 1
        },
        ตำไทย_เผ็ดมาก : {
            name : 'ตำไทย_เผ็ดมาก',
            เผ็ดน้อย : 'ตำไทย_เผ็ดน้อย',
            เผ็ดมาก : 'ตำไทย_เผ็ดมาก',
            ปูเค็ม : 'ปูเค็ม_เผ็ดมาก',
            หมูยอ : 'หมูยอ_เผ็ดมาก',
            ไข่เค็ม : 'ไข่เค็ม_เผ็ดมาก',
            ปลาร้า : 'ตำไทย_เผ็ดมาก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 2
        },
        ปูเค็ม_เผ็ดน้อย :{
            name : 'ปูเค็ม_เผ็ดน้อย',
            เผ็ดน้อย : 'ปูเค็ม_เผ็ดน้อย',
            เผ็ดมาก : 'ปูเค็ม_เผ็ดมาก',
            ปูเค็ม : 'ตำไทย_เผ็ดน้อย',
            หมูยอ : 'หมูยอ_เผ็ดน้อย',
            ไข่เค็ม : 'ไข่เค็ม_เผ็ดน้อย',
            ปลาร้า : 'ตำปู_ปลาร้า_เผ็ดน้อย',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 3
        },
        หมูยอ_เผ็ดน้อย : {
            name : 'หมูยอ_เผ็ดน้อย',
            เผ็ดน้อย : 'หมูยอ_เผ็ดน้อย',
            เผ็ดมาก : 'หมูยอ_เผ็ดมาก',
            ปูเค็ม : 'ปูเค็ม_เผ็ดน้อย',
            หมูยอ : 'ตำไทย_เผ็ดน้อย',
            ไข่เค็ม : 'ไข่เค็ม_เผ็ดน้อย',
            ปลาร้า : 'ตำหมูยอ_ปลาร้า_เผ็ดน้อย',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 4
        },
        ไข่เค็ม_เผ็ดน้อย : {
            name : 'ไข่เค็ม_เผ็ดน้อย',
            เผ็ดน้อย : 'ไข่เค็ม_เผ็ดน้อย',
            เผ็ดมาก : 'ไข่เค็ม_เผ็ดมาก',
            ปูเค็ม : 'ปูเค็ม_เผ็ดน้อย',
            หมูยอ : 'หมูยอ_เผ็ดน้อย',
            ไข่เค็ม : 'ตำไทย_เผ็ดน้อย',
            ปลาร้า : 'ไข่เค็ม_เผ็ดน้อย',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 5
        },
        ปูเค็ม_เผ็ดมาก : {
            name : 'ปูเค็ม_เผ็ดมาก',
            เผ็ดน้อย : 'ปูเค็ม_เผ็ดน้อย',
            เผ็ดมาก : 'ปูเค็ม_เผ็ดมาก',
            ปูเค็ม : 'ตำไทย_เผ็ดมาก',
            หมูยอ : 'หมูยอ_เผ็ดมาก',
            ไข่เค็ม : 'ไข่เค็ม_เผ็ดมาก',
            ปลาร้า : 'ตำปู_ปลาร้า_เผ็ดมาก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 6
        },
        หมูยอ_เผ็ดมาก : {
            name : 'หมูยอ_เผ็ดมาก',
            เผ็ดน้อย : 'หมูยอ_เผ็ดน้อย',
            เผ็ดมาก : 'หมูยอ_เผ็ดมาก',
            ปูเค็ม : 'ปูเค็ม_เผ็ดมาก',
            หมูยอ : 'ตำไทย_เผ็ดมาก',
            ไข่เค็ม : 'ไข่เค็ม_เผ็ดมาก',
            ปลาร้า : 'ตำหมูยอ_ปลาร้า_เผ็ดมาก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 7
        },
        ไข่เค็ม_เผ็ดมาก : {
            name : 'ไข่เค็ม_เผ็ดมาก',
            เผ็ดน้อย : 'ไข่เค็ม_เผ็ดน้อย',
            เผ็ดมาก : 'ไข่เค็ม_เผ็ดมาก',
            ปูเค็ม : 'ปูเค็ม_เผ็ดมาก',
            หมูยอ : 'หมูยอ_เผ็ดมาก',
            ไข่เค็ม : 'ตำไทย_เผ็ดมาก',
            ปลาร้า : 'ไข่เค็ม_เผ็ดมาก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 8
        },
        ตำปู_ปลาร้า_เผ็ดน้อย : {
            name : 'ตำปู_ปลาร้า_เผ็ดน้อย',
            เผ็ดน้อย : 'ตำปู_ปลาร้า_เผ็ดน้อย',
            เผ็ดมาก : 'ตำปู_ปลาร้า_เผ็ดมาก',
            ปูเค็ม : 'ตำปู_ปลาร้า_เผ็ดน้อย',
            หมูยอ : 'ตำหมูยอ_ปลาร้า_เผ็ดน้อย',
            ไข่เค็ม : 'ตำปู_ปลาร้า_เผ็ดน้อย',
            ปลาร้า : 'ปูเค็ม_เผ็ดน้อย',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 9
        },
        ตำหมูยอ_ปลาร้า_เผ็ดน้อย : {
            name : 'ตำหมูยอ_ปลาร้า_เผ็ดน้อย',
            เผ็ดน้อย : 'ตำหมูยอ_ปลาร้า_เผ็ดน้อย',
            เผ็ดมาก : 'ตำหมูยอ_ปลาร้า_เผ็ดมาก',
            ปูเค็ม : 'ตำปู_ปลาร้า_เผ็ดน้อย',
            หมูยอ : 'ตำหมูยอ_ปลาร้า_เผ็ดน้อย',
            ไข่เค็ม : 'ตำหมูยอ_ปลาร้า_เผ็ดน้อย',
            ปลาร้า : 'หมูยอ_เผ็ดน้อย',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 10
        },
        ตำปู_ปลาร้า_เผ็ดมาก : {
            name : 'ตำปู_ปลาร้า_เผ็ดมาก',
            เผ็ดน้อย : 'ตำปู_ปลาร้า_เผ็ดน้อย',
            เผ็ดมาก : 'ตำปู_ปลาร้า_เผ็ดมาก',
            ปูเค็ม : 'ตำปู_ปลาร้า_เผ็ดมาก',
            หมูยอ : 'ตำหมูยอ_ปลาร้า_เผ็ดมาก',
            ไข่เค็ม : 'ตำปู_ปลาร้า_เผ็ดมาก',
            ปลาร้า : 'ปูเค็ม_เผ็ดมาก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 11
        },
        ตำหมูยอ_ปลาร้า_เผ็ดมาก : {
            name : 'ตำหมูยอ_ปลาร้า_เผ็ดมาก',
            เผ็ดน้อย : 'ตำปู_ปลาร้า_เผ็ดน้อย',
            เผ็ดมาก : 'ตำหมูยอ_ปลาร้า_เผ็ดมาก',
            ปูเค็ม : 'ตำปู_ปลาร้า_เผ็ดมาก',
            หมูยอ : 'ตำหมูยอ_ปลาร้า_เผ็ดมาก',
            ไข่เค็ม : 'ตำหมูยอ_ปลาร้า_เผ็ดมาก',
            ปลาร้า : 'หมูยอ_เผ็ดมาก',
            Confirm : 'Confirm',
            Reset : 'Start_state',
            key : 12
        },
        Confirm : {
            name : 'Confirm',
            เผ็ดน้อย : 'Trap_state',
            เผ็ดมาก : 'Trap_state',
            ปูเค็ม : 'Trap_state',
            หมูยอ : 'Trap_state',
            ไข่เค็ม : 'Trap_state',
            ปลาร้า : 'Trap_state',
            Confirm : 'Trap_state',
            Reset : 'Trap_state',
            key : 13
        },
        Trap_state : {
            name : 'Trap_state',
            เผ็ดน้อย : 'Trap_state',
            เผ็ดมาก : 'Trap_state',
            ปูเค็ม : 'Trap_state',
            หมูยอ : 'Trap_state',
            ไข่เค็ม : 'Trap_state',
            ปลาร้า : 'Trap_state',
            Confirm : 'Trap_state',
            Reset : 'Trap_state',
            key : 14
        }

    },
    getNext : function (target) {
        let next = this.StateMetrix[this.current_State.name][target]
        return {name : next , key : this.StateMetrix[next].key}
    },
    setCurrentState : function (next) {
        this.current_State = next
    }
}


