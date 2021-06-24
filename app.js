const quiz = [
{
  question: 'コンプライアンスの「法規範、社内規範、（　　）規範」について　括弧に当てはまる語句を選べ',
  answers: [
    '倫理',
    '生活',
    '道徳',
    '人倫'
  ],
  correct:'倫理'
},{
  question: '「実際に対応していないお客様に対応したという嘘の結果登録をしてしまう」次のうち該当する選択肢を選べ',
  answers: [
    '不正転入',
    '架空契約',
    '代筆',
    'ナビタンの空打ち'
  ],
  correct:'ナビタンの空打ち'
},{
  question: '代筆をした際の罪は次のうちどれか？',
  answers: [
    '電子計算機損壊等業務妨害罪',
    '強要罪',
    '私文書偽装罪',
    '詐欺罪'
  ],
  correct:'私文書偽装罪'
},{
question: '「オートロックマンション訪問時、宅急便の人が入ると同時にマンションの中に入って訪問活動をした。」この不正に該当する選択肢を選べ',
answers: [
  '裏口侵入',
  '住居侵入',
  '共連れ',
  '横歩き'
],
correct:'共連れ'
},{
question: '「オートロックマンション訪問時、お住いの方からロックを解除していただき新規でお手続きをして頂いた。ついでなので下の階の未契約を訪問した。」この不正に該当する選択肢を選べ',
answers: [
　'横歩き',
  '共連れ',
  '裏口侵入',
  '住居侵入'
],
correct:'横歩き'
},{
question: '次のうち、該当する罪罰をを選べ「帰れと言われたのに居座ること」',
answers: [
  '不法侵入',
  '不退去罪',
  '器物損壊罪',
  '住居侵入罪'
],
correct:'不退去罪'
},{
question: '「コロナ禍のお客様との対応時間」の正しい選択肢を選べ',
answers: [
  '10分',
  '15分',
  '20分',
  '30分'
],
correct:'15分'
},{
question: 'FLD管理の「大管理官様」と呼ばれる人物ば誰？',
answers: [
  'ジャックナイフ',
  'ぬっくん',
  '功刀雅也',
  'クヌギダマ'
],
correct:'功刀雅也'
},{
question: '「管理界のP」と呼ばれる人物は誰？',
answers: [
  '秋元康',
  '内村孝裕',
  'デーブ・スペクター',
  'つんく♂'
],
correct:'内村孝裕'
},{
question: '今戸さんが最近ハマっている口癖は次のうちどれか？',
answers: [
  '一応ね？',
  '駄目だ、待てねぇ。うちは10日5割だ。',
  '失せろ、バーカ！',
  'キレすぎて頭から血流して倒れてるから'
],
correct:'失せろ、バーカ！'
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const ClickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

quizIndex++;

if(quizIndex < quizLength){
  //問題数がまだあればこちらを実行
  setupQuiz();
}else {
  //問題数がもうなければこちらを実行
  window.alert('終了！あなたの正解数は' + score + '/' +quizLength + 'です！');
}
};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
   ClickHandler(e);
 });
  handlerIndex++;
}
