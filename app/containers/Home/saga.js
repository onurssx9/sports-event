import { take, call, fork, put } from 'redux-saga/effects';
import { eventChannel as EventChannel } from 'redux-saga';
import io from 'socket.io-client';

import { insertData, setFilter } from './actions';
import { START_CONNECTION, SWITCH_FILTER } from './constants';

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

const generateAthleteObject = data => {
  const raceData = data.shift();
  const timestamp = Date.parse(raceData.captured);
  const date = new Date(timestamp);
  return {
    position: raceData.reader_id % 2 !== 0 ? 'Start' : 'Finish',
    time: date.toLocaleTimeString(),
    ...raceData.athlete,
  };
};

export function* subscribe(socket) {
  return new EventChannel(emit => {
    const captures = data => {
      const athlete = generateAthleteObject(data);
      return emit(insertData(athlete));
    };
    socket.on('captures', captures);
    return () => {};
  });
}

export default function* start() {
  yield take(START_CONNECTION);
  const socket = yield call(connect);
  yield fork(read, socket);
  yield fork(switchFilterWatcher);
}

function* switchFilterWatcher() {
  while (true) {
    yield take(SWITCH_FILTER);
    yield put(setFilter('Start'));
    yield take(SWITCH_FILTER);
    yield put(setFilter('Finish'));
    yield take(SWITCH_FILTER);
    yield put(setFilter(''));
  }
}
