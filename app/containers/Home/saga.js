import { take, call, fork, put } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import io from 'socket.io-client';

import { insertData } from './actions';
import { START_CONNECTION } from './constants';

const connect = () => {
  const socket = io('http://localhost:5000');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* subscribe(socket) {
  return new EventChannel(emit => {
    const captures = data => {
      const raceData = data.shift();
      const timestamp = Date.parse(raceData.captured);
      const date = new Date(timestamp);
      const athlete = {
        position: raceData.reader_id % 2 !== 0 ? 'Start' : 'Finish',
        time: date.toLocaleTimeString(),
        ...raceData.athlete,
      };
      return emit(insertData(athlete));
    };
    socket.on('captures', captures);
    return () => {};
  });
}

export default function* start() {
  while (true) {
    yield take(START_CONNECTION);
    const socket = yield call(connect);
    yield fork(read, socket);
  }
}
