const chessboardContainer = document.getElementById("chessboard") as HTMLDivElement;
let chessboardState: string[][] = Array.from({ length: 8 }, () => Array(8).fill(""));

const pawn = "♟";
const rook = "♜";
const knight = "♞";
const bishop = "♝";
const queen = "♛";
const king = "♚";

onload = () => {
    console.log("Page loaded. Ready to create chessboard.");
    createChessboard();
    resetChessboardState();
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

            if (i < 2) {
                console.log(`Adding black piece to tile at position (${i},${j}), i: ${i}`);
                tile.classList.add("black-piece");
            } 
            else if (i > 5) {
                console.log(`Adding white piece to tile at position (${i},${j}), i: ${i}`);
                tile.classList.add("white-piece");
            }

            tile.appendChild(document.createTextNode(chessboardState[i][j]));
            chessboardContainer.appendChild(tile);
            console.log(`Tile created at position (${tile.getAttribute("data-position")}) with class ${tile.className}`);
        }
    }
}


function resetChessboard() {
    console.log("Resetting chessboard...");
    while (chessboardContainer.firstChild) {
        chessboardContainer.removeChild(chessboardContainer.firstChild);
    }

    createChessboard();
}

function resetChessboardState() {
    console.log("Resetting chessboard state...");
    chessboardState = [[rook, knight, bishop, queen, king, bishop, knight, rook],
                       [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
                       ["", "", "", "", "", "", "", ""],
                       ["", "", "", "", "", "", "", ""],
                       ["", "", "", "", "", "", "", ""],
                       ["", "", "", "", "", "", "", ""],
                       [pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn],
                       [rook, knight, bishop, queen, king, bishop, knight, rook]];
    resetChessboard();
}
