const getFenceQuote = () => {
    const result = document.getElementById('fence-result');
    result.classList.remove('hidden');

    const lengthInput = document.getElementById('length');
    const postDimensions = document.getElementById('post-dimension');
    const hrBoards = document.getElementById('horizontal-board');
    const fenceBoardsResult = document.getElementById('NoFenceBoards');
    const postResult = document.getElementById('NoPosts');
    const hrResult = document.getElementById('NoHrBoards');
    const concreteResult = document.getElementById('NoConcreteBags');
    const screwResult = document.getElementById('NoDeckScrews');
    const totalCostResult = document.getElementById('totalFenceCost');
    const fenceBoardsCost = document.getElementById('fenceBoardCost');
    const postCost = document.getElementById('postCost');
    const hrCost = document.getElementById('hrCost');
    const concreteCost = document.getElementById('concreteCost');

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

const getShingleQuote = () => {
    const result = document.getElementById('shingle-result');
    result.classList.remove('hidden');

    const roofSize = parseFloat(document.getElementById('roof-size').value);
    const roofEdge = parseFloat(document.getElementById('roof-edge').value);
    const roofRidge = parseFloat(document.getElementById('roof-ridge').value);
    const underlayment = parseFloat(document.getElementById('underlaymemt').value);
    const starterKit = parseFloat(document.getElementById('starter').value);


    const underlaymentRolls = Math.ceil(roofSize/underlayment);
    const starterBoxes = Math.ceil(roofEdge/starterKit);
    const shingleBundlels = Math.ceil(roofSize/33.3);
    const ridgeBundles = Math.ceil(roofRidge/25);

    const underlaymentResult = document.getElementById('underlaymentRolls');
    const starterResult = document.getElementById('starterKit');
    const shingleResult = document.getElementById('shingleBundles');
    const ridgeResult = document.getElementById('ridgeBundles');
    const totalShingleCostResult = document.getElementById('totalShingleCost');


    const shingleCost = 39.98;
    const ridgeCost = 58.30;

    const underlaymentCost = (underlayment == 200) ? 89.87 : 146.00;
    const starterCost = (starterKit == 33) ? 36.94 : 64.75;

    const totalShingleCost = Math.ceil((shingleCost * shingleBundlels) + (ridgeCost * ridgeBundles) + (underlaymentCost * underlaymentRolls) + (starterCost * starterBoxes));

    const strongUnderlayment = document.createElement('strong');
    strongUnderlayment.textContent = underlaymentRolls;

    underlaymentResult.textContent = 'Underlayment Rolls: ';
    underlaymentResult.appendChild(strongUnderlayment);

    const strongStarter = document.createElement('strong');
    strongStarter.textContent = starterBoxes;

    starterResult.textContent = 'Starter Kit Bundles: '
    starterResult.appendChild(strongStarter);

    const strongShingle = document.createElement('strong');
    strongShingle.textContent = shingleBundlels;

    shingleResult.textContent = 'Shingle Bundles: '
    shingleResult.appendChild(strongShingle);

    const strongRidge = document.createElement('strong');
    strongRidge.textContent = ridgeBundles;

    ridgeResult.textContent = 'Ridge Cap Bundles: '
    ridgeResult.appendChild(strongRidge);

    totalShingleCostResult.textContent = `Total Cost: $${totalShingleCost}`

}

const showCalculator = (calculatorType) => {
    const fenceCalc = document.getElementById('fence-calculator');
    const shingleCalc = document.getElementById('shingle-calculator');

    fenceCalc.classList.add('hidden');
    shingleCalc.classList.add('hidden');


    const selectedCalc = document.getElementById(`${calculatorType}-calculator`);
    selectedCalc.classList.remove('hidden')

    // Update navigation link classes (optional, for visual feedback)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    const selectedLink = document.querySelector(`nav a[href="#${calculatorType}-calculator"]`);
    selectedLink.classList.add('active');
  
}

showCalculator('fence')

const postDimensionSelect = document.getElementById('post-dimension');
const postCostInput = document.getElementById('postCost');

// Define an object to store post costs based on dimensions (value)
const postCosts = {
  '3.5': 16.80, // Cost for 4x4 post
  '5.5': 25.98, // Cost for 4x6 post
};

// Update post cost on selection change
postDimensionSelect.addEventListener('change', () => {
  const selectedDimension = postDimensionSelect.value;
  const cost = postCosts[selectedDimension]; // Access cost based on selected value
  postCostInput.value = cost.toFixed(2); // Set the input value with formatted price (2 decimal places)
});

// Set the initial cost based on the default selected value (optional)
postCostInput.value = postCosts[postDimensionSelect.value].toFixed(2);


const resetResult = () => {
    const result = document.getElementsByClassName('result-container');
    result[0].classList.add('hidden');
    result[1].classList.add('hidden')
}