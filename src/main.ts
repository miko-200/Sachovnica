const chessboardContainer = document.getElementById("chessboard") as HTMLDivElement;

onload = () => {
    console.log("Page loaded. Ready to create chessboard.");
    createChessboard();
}

function createChessboard() {
    console.log("Creating chessboard...");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            if ((i + j) % 2 === 0) {
                tile.classList.add("white-tile");
            } else {
                tile.classList.add("black-tile");
            }
            tile.setAttribute("data-position", `${i},${j}`);
            tile.onclick = () => {
                console.log(`Tile clicked at position (${tile.getAttribute("data-position")})
                with class ${tile.className}`);
                
                const tiles = chessboardContainer.getElementsByClassName("tile");
                for (let k = 0; k < tiles.length; k++) {
                    const otherTile = tiles[k] as HTMLElement;
                    if (otherTile !== tile) {
                        otherTile.classList.remove("selected-tile");
                    }
                }
                tile.classList.toggle("selected-tile");
                console.log(`Tile class after click: ${tile.className}`);
            }
            chessboardContainer.appendChild(tile);
            console.log(`Tile created at position (${tile.getAttribute("data-position")}) with class ${tile.className}`);
        }
    }
}
