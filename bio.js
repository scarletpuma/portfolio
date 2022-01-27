$(() => {
  currentFactIndex = 0;
  numOfFacts = $(`.facts`).children().length - 1;
  $(`#next`).on(`click`, () => {
    $(`.facts`)
      .children()
      .eq(currentFactIndex)
      .css(`display`, `none`)
    if(currentFactIndex < numOfFacts) {
        currentFactIndex++
      } else {
        currentFactIndex = 0;
      }
    $(`.facts`)
      .children()
      .eq(currentFactIndex)
      .css(`display`, `block`)
  })
  $(`#prev`).on(`click`, () => {
    $(`.facts`)
      .children()
      .eq(currentFactIndex)
      .css(`display`, `none`)
    if(currentFactIndex > 0) {
        currentFactIndex--
      } else {
        currentFactIndex = numOfFacts;
      }
    $(`.facts`)
      .children()
      .eq(currentFactIndex)
      .css(`display`, `block`)
  })
});
