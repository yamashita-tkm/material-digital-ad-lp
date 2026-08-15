const cases = {
  beauty:{category:'美容・化粧品',title:'「成分は良さそう」で止まった美容液。朝の使用場面を訴求へ。',problem:'商品への関心は集まる一方、使用感への不安が購入前に残っていた。',collect:'美容記事、紹介投稿、動画コメントから、成分への期待と朝の使用感への迷いを整理。',find:'成分説明より、洗顔後から化粧までの使い方を見せた投稿で商品ページへの移動が発生。',create:'「忙しい朝にも使いやすい」を軸に、質感が伝わる縦型動画と朝の3場面を見せる静止画へ。'},
  food:{category:'食品・飲料',title:'「おいしそう」を、平日の購入理由へ変えた冷凍食品。',problem:'投稿への反応は良いものの、商品検索や購入行動まで続いていなかった。',collect:'新商品記事、試食動画、投稿コメントから「帰宅後に助かる」「洗い物が少なそう」を抽出。',find:'味や素材より、帰宅から食卓までを見せた動画で保存や商品検索が生まれていると確認。',create:'「帰宅後10分の夕食」を中心に、短尺動画、売り場用バナー、商品ページ構成へ。'},
  apparel:{category:'アパレル・通販',title:'閲覧されるのに売れないパンツ。迷いの正体はサイズ感でした。',problem:'商品ページは見られているのに、サイズ選択前の離脱が多かった。',collect:'広告コメント、サイト内検索、離脱箇所から「丈はどこまで？」「着用例が見たい」を整理。',find:'価格訴求より、身長別着用投稿からの流入者がサイズ表まで進むと分析。',create:'身長別の全身写真、丈感比較、スタッフコメントを商品ページと広告へ追加。'},
  learning:{category:'オンライン学習',title:'機能説明では動かなかった申込。続けられる実感を見せる訴求へ。',problem:'教材や機能を説明しても、自分が続ける姿を想像できず申込につながらなかった。',collect:'比較記事、説明動画、体験者投稿から「仕事と両立できる？」「途中でやめそう」を収集。',find:'教材数より、平日の学習時間と講師への質問場面が体験ページ閲覧へつながると分析。',create:'帰宅後30分の受講風景、質問から解決までの動画と体験ページへ。'},
  travel:{category:'旅行・レジャー',title:'絶景だけでは決まらない宿選び。滞在の解像度を予約理由へ。',problem:'写真への反応は集まる一方、滞在中の過ごし方が伝わらず予約検討で止まっていた。',collect:'口コミ、旅行動画、紹介記事から、移動や夕食後の過ごし方への疑問を収集。',find:'絶景だけより、到着から翌朝までを時系列で見せた投稿がプラン閲覧へつながると分析。',create:'「到着から翌朝まで」を追う縦型動画と、移動・食事・過ごし方をまとめた予約ページへ。'}
};

document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
  const item=cases[button.dataset.case];
  document.querySelectorAll('[data-case]').forEach(x=>x.setAttribute('aria-selected',String(x===button)));
  ['category','title','problem','collect','find','create'].forEach(key=>document.getElementById(`case-${key}`).textContent=item[key]);
}));
