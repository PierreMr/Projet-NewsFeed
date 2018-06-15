console.log('App.js loaded')

import {news} from './news'
import {messages} from './messages'

const w = new WebSocket('ws://localhost:8888')

console.log(w)