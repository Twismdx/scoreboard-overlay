import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let props = { ...initialProps };

    return props;
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/public/assets/css/cuescore.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\t\nbody { background-color: transparent !important; }\nbody { /*background-image: url(cuescore.com/img/scoreboard/test-background.png); background-size: cover; */}\n    \n#infoBox { margin: 40px; display: flex; }\n.owner { position: relative; width: 84px; height: 97px; background: transparent urlpages/public/assets/img/hexagon.svg) center center / cover no-repeat; /*box-shadow: 8px 0px 13px -4px rgba(0, 0, 0, 0.3);*/ z-index: 10; filter: drop-shadow(0 1px 6px rgba(50,50,50,.5)); }\n.owner div { position: absolute; width: 83px; height: 96px; background: transparent url(/img/CS_logo.png) center center no-repeat; }    \n\n\n.tournament {  }\n.tournament .datelocation { padding-left: 15px; text-shadow: 1px 1px 4px #000000; font-size: 12px; line-height: 24px; max-width: 170px; white-space: nowrap;}\n.tournament .discipline { color: #FFF;  font-weight: 700; font-size: 15px;padding-left: 15px; text-shadow: 1px 1px 4px #000000; font-size: 14px; line-height: 24px;}\n.tournament .date { color: white; font-weight: 700; }\n.tournament .place { color: white; opacity: 0.8; }\n    \n.tournament .nameplace { padding-left: 15px; height: 48px; background-color: rgba(255,255,255,0.9); color: #000; }\n.tournament .namevenue { min-width: 170px; margin-top: 3px; text-transform: uppercase; font-weight: 700; font-size: 15px; white-space: nowrap; }\n.tournament .venue { text-transform: none; color: #000; opacity: 0.6; font-weight: normal; font-size: 14px; }\n.tournament .nameborder { display: flex; align-items: stretch; height: 100%;  }\n    \n\n.borders { display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-start; background: transparent url(pages/public/assets/img/scoreboard/triangle.svg) left top no-repeat; opacity: 0.9; padding-left: 26px; padding-right: 26px; height: 48px; }\n.border1 { width: 48px; height: 18px;  transform: skewX(-60deg) rotate(-90deg); margin-top: 15px; }\n.border2 { width: 48px; height: 12px;  transform: skewX(-60deg) rotate(-90deg); margin-top: 18px; margin-left: -34px;  }\n.border3 { width: 28px; }\n    \n#streamoverlay { }\n#scoreboardBox { transition: opacity 3s ease-in-out; opacity: 1;\n position: fixed; bottom: 0; left: 12.5%; width: 75%; height: 75px; color: #fff; font-size: 18px; line-height: 39px; text-align: center;\n background-image: url(pages/public/assets/img/scoreboard-left.svg), url(pages/public/assets/img/scoreboard-right.svg);\n background-position: left bottom, right bottom;\n background-repeat: no-repeat, no-repeat;\n background-size: 124px;\n padding-left: 123px;\n padding-right: 123px;  \n }\n#scoreboardBox.waiting { opacity: 1; }\n#scorePlayerA, #scorePlayerB { flex-basis: 72px; width: 72px; height: 39px; background: transparent url(https://cuescore.com/img/scoreboard/score-background.png) left top no-repeat; font-size: 24px; font-weight: 700; text-align: center; }\n  \n#namePlayerA, #namePlayerB { font-weight: 700; line-height: 46px; flex-basis:  30%; flex-grow: 2; padding: 0 20px; line-height: 39px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n#namePlayerA { text-align: right;}\n#namePlayerB { text-align: left; }\n#namePlayerA .handicap, #namePlayerB .handicap { font-weight: normal; color: rgba(255,255,255,0.54); }\n.separator { flex-basis: 20px; opacity: 0.54; font-weight: 900;}\n\ndiv.inning-line { position: absolute; top: 52px; height: 37px; color: #d4af37; font-size: 18px; font-weight: 600; line-height: 37px; }\ndiv.inning-line span { color: #d4af37; }\n#inningsA { right: 877px; text-align: right; }\n#inningsB { left: 877px; text-align: left; }\n    \ndiv.borderline { height: 4px; background-image: linear-gradient(to right, color: #45DBFE;));  }\ndiv.borderline div { position: relative; color: #d4af37; height: 4px; width: 100%; display: ; }\n\ndiv.line1 { position: relative; top: -48px; width: 100%; }\ndiv.line1 div.imgPlayerA {\n  background: url(pages/public/assets/img/hexagon.svg) no-repeat top left;\n  background-size: contain;  position: absolute; left: -48px; width: 68px; height: 78.5px; center center / cover no-repeat; filter: drop-shadow(0 1px 6px rgba(50,50,50,.8)); }\ndiv.line1 div.imgPlayerB { \n  background: url(pages/public/assets/img/hexagon.svg) no-repeat top left;\n  background-size: contain;  position: absolute; right: -48px; width: 68px; height: 78.5px; center center / cover no-repeat; filter: drop-shadow(0 1px 6px rgba(50,50,50,.8)); }\ndiv.line2 { display: flex; justify-content: space-between; background: #090909; width: 100%; }\ndiv.line3 { display: flex; justify-content: space-between; height: 32px; width: calc(100% + 96px); background-color: #020202; margin-left: -48px;  }\ndiv.line3 div { line-height: 32px; color: #d4af37; opacity: 0.54; font-size: 16px; font-weight: 900; text-transform: uppercase; flex-basis: 200px; }\n#table, #avgIngB { text-align: left; color: #d4af37; font-weight: 700; white-space: nowrap;}\n#matchinfo {color: #d4af37; font-weight: 700; white-space: nowrap; }\n#round, #avgIngA { text-align: right; }\n#avgIngA, #avgIngB { flex-grow: 2; text-transform: none; white-space: nowrap; opacity: 1; color: rgba(255,255,255,0.54); }\n#avgIngA span, #avgIngB span { color: #d4af37; }\n\n\t',
            }}
          />
        </body>
      </html>
    );
  }
}
