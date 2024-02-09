// Start the market
const coins = [];
let coinsContainer = document.querySelector("#coins");
let coinsIco = ["./media/icons/c1.png", "./media/icons/c2.png", "./media/icons/c3.png",
"./media/icons/c4.png", "./media/icons/c5.png", "./media/icons/c6.png", "./media/icons/c7.png",
"./media/icons/c8.png", "./media/icons/c9.png", "./media/icons/c10.png"]



async function GetCoins(url, stack) {
    const api = await fetch(url);
    const data = await api.json();

    for (let i = 0; i < 10; i++) {
        stack.push(data[i])
    }
}



// a function that create columns in row and attach data to it
function createColumn(...data) {
    let col = document.createElement("div");
    let element = document.createElement("h6");
    element.textContent = `${data}`;
    col.appendChild(element);
    col.classList.add("col", "coin-data", "mt-3", "mb-3");
    return col;
}



async function settingLayout() {
    for (let i = 0; i < 10; i++) {
        let coinRow = document.createElement("div");

        // Get the coin data for the current row
        let coinData = coins[i];
        if (!coinData) {
            break; 
        }

        // Display coin name & icon
        let ico = document.createElement("img")
        ico.setAttribute("src", coinsIco[i])
        ico.classList.add("img-fluid", "cic")

        let coinNameCol = createColumn(coinData["name"]);
        coinNameCol.appendChild(ico)
        coinRow.appendChild(coinNameCol);


        // Display coin rank 
        let coinRankCol = createColumn(coinData["rank"]);
        coinRow.appendChild(coinRankCol);

        // Display coin price 
        let coinPriceCol = createColumn(`$ ${Math.round(coinData["quotes"]["USD"]["price"])}`);
        coinRow.appendChild(coinPriceCol);

        // Display coin total net
        let coinTotalCol = createColumn(`$ ${Math.round(coinData["total_supply"])}`);
        coinRow.appendChild(coinTotalCol);

        // Display coin value on 24 hour 
        let coinValueCol = createColumn(`$ ${Math.round(coinData["quotes"]["USD"]["volume_24h"])}`);
        coinRow.appendChild(coinValueCol);

        // styling all the rows and add them to the page
        coinRow.classList.add("row", "coin", "mt-3", "border-top", "p-2");
        coinsContainer.appendChild(coinRow);
    }
}


(async () => {
    const apiUrl = 'https://api.coinpaprika.com/v1/tickers';
    await GetCoins(apiUrl, coins);
    settingLayout();
})();