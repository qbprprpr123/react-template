import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  // 设置切片的名字
  name: "task",
  // 设置此切片对应的reducer中的初始状态
  initialState: {
    taskList: null,
  },
  // 编写不同业务逻辑下对公共状态的更改
  reducers: {
    getAllTaskList(state, action) {
      // state: redux中的公共状态信息「基于immer库管理，无需再自己克隆」
      // action: 派发的行为对象，无需再考虑行为标识的问题，传递的其他信息，都是以action.payload传递进来的值
      state.taskList = action.payload;
    },
    removeTask(state, { payload }) {
      const taskList = state.taskList;
      if (!Array.isArray(taskList)) return;
      state.taskList = taskList.filter((item) => {
        return +item.id !== +payload;
      });
    },
    updateTask(state, { payload }) {
      const taskList = state.taskList;
      if (!Array.isArray(taskList)) return;
      state.taskList = taskList.map((item) => {
        if (+item.id === +payload) {
          item.state = 2;
          item.complete = new Date().toLocaleDateString("zh-CN");
        }
        return item;
      });
    },
  },
});

console.log(taskSlice);

export default taskSlice.reducer;
