/* //////////////////////////
    ** COLOR SCHEMES **
////////////////////////// */

const opt1 = {
  color1: `#978897`,
  color2: `#494850`,
  color3: `#B18FCF`,
  color4: `#2C2C34`,
  color5: `#D8D8F6`,
};
const opt2 = {
  color1: `#EEF1BD`,
  color2: `#C4A381`,
  color3: `#B2675E`,
  color4: `#BBD686`,
  color5: `#644536`,
};
const opt3 = {
  color1: `#92AC86`,
  color2: `#55251D`,
  color3: `#696047`,
  color4: `#A7D49B`,
  color5: `#5A1807`,
};
const opt4 = {
  color1: `#00171f`,
  color2: `#003459`,
  color3: `#FFFFFF`,
  color4: `#007EA7`,
  color5: `#00A7E1`,
};
const opt5 = {
  color1: `#E8E9F3`,
  color2: `#A6A6A8`,
  color3: `#272635`,
  color4: `#000000`,
  color5: `#CECECE`,
};
const opt6 = {
  color1: `#B48B7D`,
  color2: `#DFEFCA`,
  color3: `#AFC2D5`,
  color4: `#CCDDD3`,
  color5: `#FFF9A5`,
};
const opt7 = {
  color1: `#EBCFB2`,
  color2: `#B38D97`,
  color3: `#424B54`,
  color4: `#D5ACA9`,
  color5: `#C5BAAF`,
};
const opt8 = {
  color1: `#DBDBDB`,
  color2: `#D1D1D1`,
  color3: `#636363`,
  color4: `#85c7f2`,
  color5: `#4c4c4c`,
};
const opt9 = {
  color1: `#D3BCC0`,
  color2: `#A5668B`,
  color3: `#0E103D`,
  color4: `#69306D`,
  color5: `#F2D7EE`,
};
const opt10 = {
  color1: `#FAE1DF`,
  color2: `#472836`,
  color3: `#E4C3AD`,
  color4: `#9EA3B0`,
  color5: `#463F3A`,
};

$(() => {
  /* //////////////////////////
      ** CALLING CSS PROPS**
  ////////////////////////// */
  $body = $(`body`);
  $nav = $(`nav`);
  $name = $(`#name`);
  $h4 = $(`h4`);
  $container = $(`.container`);
  $headshot = $(`#headshot`);
  $linkcontainer = $(`.linkcontainer`);
  $link = $(`.link`);
  $icon = $(`.icon`);
  $btn1 = $(`.btn1`);
  $btn2 = $(`.btn2`);
  $btn3 = $(`.btn3`);
  $btn4 = $(`.btn4`);
  $btn5 = $(`.btn5`);
  $btn6 = $(`.btn6`);
  $btn7 = $(`.btn7`);
  $btn8 = $(`.btn8`);
  $btn9 = $(`.btn9`);
  $btn10 = $(`.btn10`);

  /* //////////////////////////
      ** COLORCHANGE FUNCTION **
  ////////////////////////// */

  const colorChange = (scheme) => {
    $body.css(`background-color`, `${scheme.color1}`);
    $nav.css(`background-color`, `${scheme.color2}`);
    $name.css(`color`, `${scheme.color1}`);
    $h4.css(`color`, `${scheme.color1}`);
    $container.css(`background-color`, `${scheme.color3}`).css(`border`, `.5px solid ${scheme.color4}`).css(`color`, `${scheme.color2}`);
    $headshot.css(`border`, `.5px solid ${scheme.color4}`);
    $linkcontainer.css(`background-color`, `${scheme.color3}`);
    $link.css(`color`, `${scheme.color4}`)
    $icon.css(`color`, `${scheme.color4}`)
    $(`.link`).hover(function(){
      $(this).css(`color`, `${scheme.color5}`);
    }, function(){
      $(this).css(`color`, `${scheme.color4}`);
    });
    $(`.icon`).hover(function(){
      $(this).css(`color`, `${scheme.color5}`);
    }, function(){
      $(this).css(`color`, `${scheme.color4}`);
    });
  }

  /* //////////////////////////
      ** EVENT LISTENERS **
  ////////////////////////// */

  $btn1.click(function() {
    colorChange(opt1);
  });
  $btn2.click(function() {
    colorChange(opt2);
  });
  $btn3.click(function() {
    colorChange(opt3);
  });
  $btn4.click(function() {
    colorChange(opt4);
  });
  $btn5.click(function() {
    colorChange(opt5);
  });
  $btn6.click(function() {
    colorChange(opt6);
  });
  $btn7.click(function() {
    colorChange(opt7);
  });
  $btn8.click(function() {
    colorChange(opt8);
  });
  $btn9.click(function() {
    colorChange(opt9);
  });
  $btn10.click(function() {
    colorChange(opt10);
  });
})
