'use strict';

// result表示する画像の配置位置を定義
const RESULT_FIELD = [
  {
    position : "left",
    pos_code : 0,
    width : 100,
    height : 200,
  },
  {
    position : "right",
    pos_code : 1,
    width : 100,
    height : 200, 
  },
];

const nowFeeling = [
  {
    id: "01",
    question: "今のあなたは",
    answer01: "明るい。",
    answer02: "暗い。",
  },
  {
    id: "02",
    question: "今食べるなら",
    answer01: "肉。",
    answer02: "魚。",
  },
  {
    id: "03",
    question: "今戯れるなら",
    answer01: "犬。",
    answer02: "猫。",
  },
  {
    id: "04",
    question: "どちらか言えば",
    answer01: "誰かと話したい。",
    answer02: "一人でいたい。",
  },
  {
    id: "05",
    question: "今の自分を天気で言うと",
    answer01: "晴れ。",
    answer02: "曇り。",
  },
  {
    id: "06",
    question: "自然と足が向きそうなのは",
    answer01: "森。",
    answer02: "海。",
  },
  {
    id: "07",
    question: "感情の波が",
    answer01: "激しい。",
    answer02: "凪いでいる。",
  },
  {
    id: "08",
    question: "今の気分の服装は",
    answer01: "ミニマル。",
    answer02: "派手。",
  },
  {
    id: "09",
    question: "容姿のコンディションは",
    answer01: "かわいい。",
    answer02: "かっこいい。",
  },
  {
    id: "10",
    question: "今眠りに就くなら",
    answer01: "ハンモックの上。",
    answer02: "布団の中。",
  },
];