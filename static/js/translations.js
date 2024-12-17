// Dicionário de traduções temporário, em breve implementarei um sistema de traduções mais eficiente.
const translations = {
  Homepage: {
    en: "Homepage",
    br: "Pagina Inicial",
    jp: "ホームページ",
  },
  Streaming: {
    en: "Streaming",
    br: "Streaming",
    jp: "ストリーミング",
  },
  About: {
    en: "About",
    br: "Sobre",
    jp: "私について",
  },
  News: {
    en: "News",
    br: "Notícias",
    jp: "ニュース",
  },
  checkOut: {
    en: "Check Out",
    br: "Confira",
    jp: "チェックアウト",
  },
  Translations: {
    en: "Languages",
    br: "Idiomas",
    jp: "言語",
  },
  greeting: {
    en: "Hello, world!",
    br: "Olá, mundo!",
    jp: "こんにちは、世界！",
  },
  mainMessage: {
    en: "Welcome to my first Django project. It is in constant development and I'm always looking for improvements.",
    br: "Bem-vindo(a) ao meu primeiro projeto em Django. O site está em constante desenvolvimento e estou sempre buscando melhorias.",
    jp: "私の最初のDjangoプロジェクトへようこそ。このサイトは常に進化していて、私はいつも改善を目指しています。",
  },
  subMessage: {
    en: "For now, there are just a few things to check: some videos, an about page, a news page with articles, and you can visit my social media in the footer of the website.",
    br: "Por enquanto, há apenas algumas coisas para conferir: alguns vídeos, uma página sobre, uma página de notícias com artigos, e você pode visitar minhas redes sociais no rodapé do site.",
    jp: "今のところ、チェックするべきことがいくつかあります。いくつかの動画、概要ページ、記事が載ったニュースページ、そしてウェブサイトのフッターから私のソーシャルメディアにアクセスできます。",
  },
  highlight: {
    en: "Highlights",
    br: "Destaque",
    jp: "ハイライト",
  },
  hDescription: {
    en: "A list of YouTube videos to watch here or on my Official Artist Channel.",
    br: "Uma lista de vídeos do YouTube para assistir aqui ou no meu Canal Oficial do Artista.",
    jp: "ここでまたは公式アーティストチャンネルで視聴できるYouTubeビデオのリスト。",
  },
  streaming: {
    en: "Streaming",
    br: "Streaming",
    jp: "ストリーミング",
  },
  prdBy: {
    en: "Powered by IamSHIUBA",
    br: "Desenvolvido por IamSHIUBA",
    jp: "開発者：IamSHIUBA",
  },
  footer: {
    en: "All rights reserved.",
    br: "Todos os direitos reservados.",
    jp: "全著作権所有。",
  },
  follow: {
    en: "Check out:",
    br: "Confira:",
    jp: "チェックアウト:",
  },
  aboutTitle: {
    en: "About",
    br: "Sobre",
    jp: "概要",
  },
  aboutMessage: {
    en: "After struggling to create my basic website using only HTML, CSS, and JavaScript, I decided to take on a new challenge and build a version using the Django framework. It wasn't easy, but I learned a lot from the experience. I had to troubleshoot some issues and figure out why things weren't working as expected. But eventually, I got it done! I'm proud to say that I now have a more robust and scalable website. Thanks for stopping by and taking a look around.",
    br: "Depois de quebrar muito a cabeça com meu site básico usando apenas html, css e javascript, resolvi fazer uma versão usando o framework Django. Demorei um tempo pra conseguir fazê-lo, e mais tempo ainda pra entender porque não conseguia implementá-lo corretamente. Porém, depois descobri que não havia configurado o django pra achar meus arquivos estaticos, e após isso pude fazer a implementação sem maiores problemas.<br>Obrigado pela visita ao meu site!",
    jp: "HTML、CSS、JavaScriptのみで作成した基本的なサイトに苦労した後、Djangoフレームワークを使用して新しいバージョンを作成することにしました。実現するのに時間がかかりましたが、問題を解決するために時間を費やしました。ただし、Djangoが私の静的ファイルを認識していないことに気づき、設定を変更することで問題を解決することができました。<br>私のサイトを訪ねてくれてありがとうございます。",
  },
  newsTitle: {
    en: "News",
    br: "Notícias",
    jp: "ニュース",
  },
  newsMessage: {
    en: "More news coming soon! <br> Enjoy!",
    br: "Mais novidades em breve! <br> Divirta-se!",
    jp: "もっとニュースが来ます! <br> お楽しみに!",
  },
  tos: {
    en: "Terms of Service",
    br: "Termos de Serviço",
    jp: "利用規約",
  },
  ToSdate: {
    en: "Last updated: 2024-11-26",
    br: "Atualizado em: 26/11/2024",
    jp: "最終更新日：2024年11月26日",
  },
  tosDesc: {
    en: "Welcome to iSHIUBA! These Terms of Service govern your use of this website.<br>By accessing it, you agree to the terms outlined below.",
    br: "Bem-vindo ao iSHIUBA! Estes Termos de Serviço governam o uso deste site.<br> Ao acessar, concorda com os termos abaixo.",
    jp: "iSHIUBAへようこそ！これらの利用規約は、このウェブサイトの利用に関する規約ですね。これらを利用するには、下記の規約に同意します。",
  },
  tosAU: {
    en: "1. Acceptable Use",
    br: "1. Uso Adequado",
    jp: "1. 適切な使用",
  },
  tosAUdesc: {
    en: "You agree to use the site solely for lawful purposes and in compliance with these Terms.<br />The following is prohibited: Attempting to gain unauthorized access to the site or disrupting its functionality. Using the site to distribute illegal, offensive, or copyright-infringing content.",
    br: "Você concorda em usar o site apenas para fins legais e em conformidade com esses Termos.<br />O seguinte é proibido: tentar obter acesso não autorizado ao site ou perturbar sua funcionalidade. Usar o site para distribuir conteúdo ilegal, ofensivo ou violador de direitos autorais.",
    jp: "このサイトは、法令に準拠して、単に合法的な目的にのみ使用することに同意します。<br />以下は禁止されています：このサイトに不正アクセスを試みるか、機能を妨げること。このサイトを使用して、不法、有害、著作権侵害のコンテンツを配布すること。",
  },
  tosCO: {
    en: "2. Content Ownership",
    br: "2. Propriedade do Conteúdo",
    jp: "2. コンテンツの所有権",
  },
  tosCOdesc: {
    en: "All content provided on this site, except for embedded videos from external platforms, is owned by iSHIUBA. You may not copy, reproduce, or distribute any content without permission.",
    br: "Todo conteúdo fornecido neste site, exceto vídeos incorporados de plataformas externas, pertence a iSHIUBA. Vocês não pode copiar, reproduzir ou distribuir qualquer conteúdo sem permissão.",
    jp: "このサイトで提供される全てのコンテンツは、iSHIUBAによって所有されています。権限がない場合があります。",
  },
  tosEL: {
    en: "3. External Links",
    br: "3. Links Externos",
    jp: "3. 外部リンク",
  },
  tosELdesc: {
    en: "Our site contains links to external platforms (e.g., YouTube, SoundCloud). We are not responsible for the content or practices of these platforms.",
    br: "Nosso site contém links para plataformas externas (por exemplo, YouTube, SoundCloud). Nós não nos responsabilizamos pelo conteúdo ou práticas dessas plataformas.",
    jp: "私たちは、外部プラットフォームのコンテンツやプラクティクスに対して責任を負いません。",
  },
  tosLoL: {
    en: "4. Limitation of Liability",
    br: "4. Limitação de Responsabilidade",
    jp: "4. 責任の制限",
  },
  tosLoLdesc: {
    en: 'This site is provided "as is." We do not guarantee uninterrupted availability or freedom from errors. We are not liable for any damages resulting from the use of this site.',
    br: 'Este site é fornecido "como é." Nós não garantimos disponibilidade ininterrupta ou livre de erros. Nós não nos responsabilizamos por quaisquer danos resultantes do uso deste site.',
    jp: "このサイトは、「現状であります。」私たちは、サイトの使用によって生じる損害に対して責任を負いません。",
  },
  tosCttT: {
    en: "5. Changes to the Terms",
    br: "5. Alterações aos Termos",
    jp: "5. 利用規約の変更",
  },
  tosCttTdesc: {
    en: "We may revise these Terms of Service at any time. Changes will be posted on this page. It is your responsibility to review the Terms periodically.",
    br: "Podemos revisar estes Termos de Serviço em qualquer momento. As alterações serão publicadas nesta página. é sua responsabilidade revisar os Termos periodicamente.",
    jp: "これらの利用規約は、時に変更することがあります。これらが更新される場合があります。これらが更新される場合があります。",
  },
  tosCONTACT: {
    en: "6. Contact",
    br: "6. Contato",
    jp: "6. コンタクト",
  },
  tosCONTACTdesc: {
    en: "If you have questions, please contact us at: t.me/contactishiubagithub.",
    br: "Se vocês tiverem perguntas, por favor, entre em contato conosco em: t.me/contactishiubagithub.",
    jp: "問い合わせは、t.me/contactishiubagithubにお願いします。",
  },
  privacy: {
    en: "Privacy Policy",
    br: "Política de Privacidade",
    jp: "プライボシィパリティ",
  },
  PPdate: {
    en: "Last updated: 2024-11-26",
    br: "Atualizado em: 26/11/2024",
    jp: "最終更新日: 2024年11月26日",
  },
  ppDesc: {
    en: "At iSHIUBA, we respect your privacy. This Privacy Policy explains how we handle visitor information.",
    br: "Em iSHIUBA, respeitamos sua privacidade. Esta Política de Privacidade explica como tratamos as informações dos visitantes.",
    jp: "iSHIUBAでは、お客様の個人情報を尊重します。このプライボシィパリティは、訪問者の情報の処理方法を説明します。",
  },
  ppDC: {
    en: "1. Data Collection",
    br: "1. Coleta de Dados",
    jp: "1. データコレクション",
  },
  ppDCdesc: {
    en: "This site does not collect or store personal data from visitors. The only data accessed is related to the functionality of embedded videos and theme or language selectors.",
    br: "Este site não coleta ou armazena dados pessoais dos visitantes. Apenas os dados acessados são relacionados a funcionalidade dos vídeos incorporados e temas ou seletores de idioma.",
    jp: "このサイトは、訪問者からの個人データの収集と格納はありません。アプリケーションの機能に関係するのみのデータのみを取得します。",
  },
  ppCOOKIE: {
    en: "2. Cookies",
    br: "2. Cookies",
    jp: "2. クッキーの使用",
  },
  ppCOOKIEdesc: {
    en: "We do not use cookies or any tracking technologies directly. However, embedded videos from external platforms (such as YouTube) may use cookies. We recommend reviewing the privacy policies of these platforms to understand their practices.",
    br: "Não usamos cookies ou quaisquer tecnologias de rastreamento diretamente. No entanto, vídeos incorporados de plataformas externas (como o YouTube) podem usar cookies. Recomendamos revisar as políticas de privacidade dessas plataformas para entender suas práticas.",
    jp: "私たちは、直接的にクッキーや追跡技術を使用していません。ただし、外部プラットフォーム（YouTubeなど）から埋め込まれたビデオはクッキーを使用する場合があります。これらのプラットフォームのプライバシーポリシーを確認して、その実践を理解することをお勧めします。",
  },
  ppDS: {
    en: "3. Data Sharing",
    br: "3. Compartilhamento de Dados",
    jp: "3. データシェア",
  },
  ppDSdesc: {
    en: "We do not collect or share any visitor information. We are committed to providing a secure environment for our visitors.",
    br: "Nossa equipe de desenvolvimento não coleta ou divulga informações de visitantes. Estamos comprometidos em fornecer um ambiente seguro para nossos visitantes.",
    jp: "私たちは、訪問者情報を収集または共有していません。私たちは、訪問者の安全な環境を提供するために努力しています。",
  },
  ppCttP: {
    en: "4. Changes to the Policy",
    br: "4. Alterações na Política",
    jp: "4. プライバシーポリシィの変更",
  },
  ppCttPdesc: {
    en: "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
    br: "Podemos atualizar esta Política de Privacidade de vez em quando. Qualquer alteração será publicada nesta página.",
    jp: "私たちは、時にこのプライバシーポリシィを更新する場合があります。変更は、このページで公開されます。",
  },
  ppCONTACT: {
    en: "Contact",
    br: "Contato",
    jp: "お問い合わせ",
  },
  ppCONTACTdesc: {
    en: "If you have questions about this Policy, please contact us at: t.me/contactishiubagithub.",
    br: "Se vocês tiverem perguntas sobre esta Política, por favor, entre em contato conosco em: t.me/contactishiubagithub.",
    jp: "このプライバシーポリシィに関する質問がある場合は、t.me/contactishiubagithubまでお問い合わせください。",
  },
};

// Inicialização eficiente do idioma
function initializeLanguage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(selectedLanguage);

  const button = document.querySelector(
    `button[data-language="${selectedLanguage}"]`
  );
  if (button) button.classList.add("active");
}

// Alteração para acessar o objeto organizado por chaves
function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  for (const element of elementsToTranslate) {
    const translationKey = element.getAttribute("data-translate");
    const translation =
      translations[translationKey]?.[language] || translationKey;
    element.innerHTML = translation;
  }

  localStorage.setItem("selectedLanguage", language);
  document.documentElement.setAttribute("lang", language);
}

// Eventos e Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguage();
  document.getElementById("language").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      setLanguage(e.target.dataset.language);
      document
        .querySelectorAll("#language button")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
    }
  });
});
