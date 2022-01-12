const initialState = {
  danhSachCuoc: [
    {
      ma: "bau",
      hinhAnh: "/img/bau.png",
      diemCuoc: 0,
    },
    {
      ma: "ga",
      hinhAnh: "/img/ga.png",
      diemCuoc: 0,
    },
    {
      ma: "ca",
      hinhAnh: "/img/ca.png",
      diemCuoc: 0,
    },
    {
      ma: "nai",
      hinhAnh: "/img/nai.png",
      diemCuoc: 0,
    },
    {
      ma: "cua",
      hinhAnh: "/img/cua.png",
      diemCuoc: 0,
    },
    {
      ma: "tom",
      hinhAnh: "/img/tom.png",
      diemCuoc: 0,
    },
  ],
  tongDiem: 1000,
  mangXucXac: [
    {
      ma: "nai",
      hinhAnh: "/img/nai.png",
      diemCuoc: 0,
    },
    {
      ma: "cua",
      hinhAnh: "/img/cua.png",
      diemCuoc: 0,
    },
    {
      ma: "tom",
      hinhAnh: "/img/tom.png",
      diemCuoc: 0,
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC_BAU_CUA": {
      const dsCuocUpdate = [...state.danhSachCuoc];
      let index = dsCuocUpdate.findIndex((qc) => qc.ma === action.quanCuoc.ma);
      if (index != -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            dsCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (dsCuocUpdate[index].diemCuoc > 0) {
            dsCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.danhSachCuoc = dsCuocUpdate;
      return { ...state };
    }

    case "XOC": {
      const mangXucXacRandom = [];

      for (let i = 0; i < 3; i++) {
        let soRandom = Math.floor(Math.random() * 6);
        const xucXacRandom = state.danhSachCuoc[soRandom];
        mangXucXacRandom.push(xucXacRandom);
      }
      state.mangXucXac = mangXucXacRandom;

      //tăng điểm thưởng
      mangXucXacRandom.forEach((xucXacRandom, index) => {
        let indexDSCuoc = state.danhSachCuoc.findIndex(
          (qc) => qc.ma === xucXacRandom.ma
        );
        if (index !== -1) {
          state.tongDiem += state.danhSachCuoc[index].diemCuoc;
        }
      });

      //hoàn tiền
      state.danhSachCuoc.forEach((qc, index) => {
        let indexXucXacRandom = mangXucXacRandom.findIndex(
          (xxnn) => xxnn.ma === qc.ma
        );
        if (indexXucXacRandom !== -1) {
          state.tongDiem += qc.diemCuoc;
        }
      });
      //xử lí làm mới game
      state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
        return { ...qc, diemCuoc: 0 };
      });

      return { ...state };
    }

    case "CHOI_LAI": {
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
        return { ...qc, diemCuoc: 0 };
      });
      return { ...state };
    }

    default:
      return state;
  }
};
