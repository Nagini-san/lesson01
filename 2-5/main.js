const arga = process.argv[2];

const hundred = Math.floor(arga/100);
const ten = Math.floor((arga%100)/10);
const one = Math.floor((arga%100)%10);
//Math.floor()関数は数値以下の最大の整数を返す
//小数点は表示されない

console.log(`100円玉${hundred}枚、10円玉${ten}枚、1円玉${one}`);
//`${定数名}`のことをテンプレート構文という