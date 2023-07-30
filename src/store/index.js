import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import taskSlice from './features/taskSlice';

const store = configureStore({
  // 指定reducer
  reducer: {
    // 按照模块管理各个切片
    taskSlice
  },
  middleware: [reduxLogger, reduxThunk]
})

export default store;