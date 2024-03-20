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

// Set the initial cost based on the default selected value
postCostInput.value = postCosts[postDimensionSelect.value].toFixed(2);


const getFenceQuote = () => {
    const result = document.getElementById('fence-result');
    result.classList.remove('hidden');

    const lengthFt = parseFloat(document.getElementById('length').value);
    const lengthIn = lengthFt * 12;
    const postWidth = parseFloat(document.getElementById('post-dimension').value);

    const noOfPosts =  Math.ceil(lengthFt/8) + 1;
    const noOfFenceBoards = Math.ceil((lengthIn - (noOfPosts*postWidth))/5.5)
    const hrBoardsOption = parseFloat(document.getElementById('horizontal-board').value);
    const noOfHrBoards = Math.ceil(lengthFt/8) * hrBoardsOption;

    const concrete = noOfPosts * 2;

    const screwCost = 50;

    const fenceBoardsCost = document.getElementById('fenceBoardCost');
    const postCost = document.getElementById('postCost');
    const hrCost = document.getElementById('hrCost');
    const concreteCost = document.getElementById('concreteCost');

    const totalCost = Math.ceil((noOfFenceBoards * parseFloat(fenceBoardsCost.value)) + (noOfPosts * parseFloat(postCost.value)) + (noOfHrBoards * parseFloat(hrCost.value)) + (concrete * parseFloat(concreteCost.value)) + screwCost);
    const totalCostGST = totalCost + (totalCost * 0.05)
    
    const fenceBoardsResult = document.getElementById('NoFenceBoards');
    const postResult = document.getElementById('NoPosts');
    const hrResult = document.getElementById('NoHrBoards');
    const concreteResult = document.getElementById('NoConcreteBags');
    const totalCostResult = document.getElementById('totalFenceCost');

    totalCostResult.textContent = `Total Cost: $${totalCostGST}`
    fenceBoardsResult.textContent = noOfFenceBoards;
    postResult.textContent = noOfPosts;
    hrResult.textContent = noOfHrBoards;
    concreteResult.textContent = concrete;
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
    const totalShingleCostGST = totalShingleCost + (totalShingleCost * 0.05);

    underlaymentResult.textContent = underlaymentRolls;
    starterResult.textContent = starterBoxes;
    shingleResult.textContent = shingleBundlels;
    ridgeResult.textContent = ridgeBundles;

    totalShingleCostResult.textContent = `Total Cost: $${totalShingleCostGST}`

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

const resetResult = () => {
    const result = document.getElementsByClassName('result-container');
    result[0].classList.add('hidden');
    result[1].classList.add('hidden')
}