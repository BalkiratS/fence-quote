const lengthInput = document.getElementById('length');
const postDimensions = document.getElementById('post-dimension');
const hrBoards = document.getElementById('horizontal-board');
const fenceBoardsResult = document.getElementById('NoFenceBoards');
const postResult = document.getElementById('NoPosts');
const hrResult = document.getElementById('NoHrBoards');
const concreteResult = document.getElementById('NoConcreteBags');
const screwResult = document.getElementById('NoDeckScrews');
const totalCostResult = document.getElementById('totalCost');
const fenceBoardsCost = document.getElementById('fenceBoardCost');
const postCost = document.getElementById('postCost');
const hrCost = document.getElementById('hrCost');
const concreteCost = document.getElementById('concreteCost');

const getQuote = () => {
    const lengthFt = parseFloat(lengthInput.value);
    const lengthIn = lengthFt * 12;
    const postWidth = parseFloat(postDimensions.value);

    const noOfPosts =  Math.ceil(lengthFt/8) + 1;
    const noOfFenceBoards = Math.ceil((lengthIn - (noOfPosts*postWidth))/5.5)
    const hrBoardsOption = parseFloat(hrBoards.value);
    const noOfHrBoards = Math.ceil(lengthFt/8) * hrBoardsOption;

    const concrete = noOfPosts * 2;

    const screwCost = 50;


    const totalCost = Math.ceil((noOfFenceBoards * parseFloat(fenceBoardsCost.value)) + (noOfPosts * parseFloat(postCost.value)) + (noOfHrBoards * parseFloat(hrCost.value)) + (concrete * parseFloat(concreteCost.value)) + screwCost);

    screwResult.textContent = `3-inch Deck Screws`
    totalCostResult.textContent = `Total Cost: $${totalCost}`

    const strongFenceBoard = document.createElement('strong');
    strongFenceBoard.textContent = noOfFenceBoards;

    fenceBoardsResult.textContent = 'Fence Boards: ';
    fenceBoardsResult.appendChild(strongFenceBoard);

    const strongPost = document.createElement('strong');
    strongPost.textContent = noOfPosts;

    postResult.textContent = 'Posts: ';
    postResult.appendChild(strongPost);

    const strongHrBoard = document.createElement('strong');
    strongHrBoard.textContent = noOfHrBoards;

    hrResult.textContent = 'Horizontal boards (2x4 or 2x6): ';
    hrResult.appendChild(strongHrBoard);

    const strongConcrete = document.createElement('strong');
    strongConcrete.textContent = concrete;

    concreteResult.textContent = 'Concrete Bags: ';
    concreteResult.appendChild(strongConcrete);

}