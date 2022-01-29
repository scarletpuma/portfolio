$(() => {
  currentTopProjIndex = 0;
  numOfTopProj = $(`.topimg`).children().length - 1;
  $(`#next`).on(`click`, () => {
    $(`.topimg`)
      .children()
      .eq(currentTopProjIndex)
      .css(`display`, `none`)
    if(currentTopProjIndex < numOfTopProj) {
        currentTopProjIndex++
      } else {
        currentTopProjIndex = 0;
      }
    $(`.topimg`)
      .children()
      .eq(currentTopProjIndex)
      .css(`display`, `block`)
  })
  $(`#prev`).on(`click`, () => {
    $(`.topimg`)
      .children()
      .eq(currentTopProjIndex)
      .css(`display`, `none`)
    if(currentTopProjIndex > 0) {
        currentTopProjIndex--
      } else {
        currentTopProjIndex = numOfTopProj;
      }
    $(`.topimg`)
      .children()
      .eq(currentTopProjIndex)
      .css(`display`, `block`)
  })

  currentBotProjIndex = 0;
  numOfBotProj = $(`.botimg`).children().length - 1;
  $(`#next`).on(`click`, () => {
    $(`.botimg`)
      .children()
      .eq(currentBotProjIndex)
      .css(`display`, `none`)
    if(currentBotProjIndex < numOfBotProj) {
        currentBotProjIndex++
      } else {
        currentBotProjIndex = 0;
      }
    $(`.botimg`)
      .children()
      .eq(currentBotProjIndex)
      .css(`display`, `block`)
  })
  $(`#prev`).on(`click`, () => {
    $(`.botimg`)
      .children()
      .eq(currentBotProjIndex)
      .css(`display`, `none`)
    if(currentBotProjIndex > 0) {
        currentBotProjIndex--
      } else {
        currentBotProjIndex = numOfBotProj;
      }
    $(`.botimg`)
      .children()
      .eq(currentBotProjIndex)
      .css(`display`, `block`)
  })
});
