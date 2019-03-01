(() => {
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	let dropZones = document.querySelectorAll(".drop-zone");

	function createPuzzlepieces(pictureIndex){
		// debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;
 		})

 		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;
 		
 		initDrag();
	}

	// drag and drop

	function initDrag() {
		piecesBoard.querySelectorAll("img").forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log("dragging...");

				e.dataTransfer.setData("text/plain", this.id);
			});
		});
	}

	// handle dragover and drop
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!");
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("you dropped sumpin on me."); 

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));		
		});

	});

	function resetPuzzlePieces(){
		// debugger;
		piecesBoard.innerHTML = "";
		createPuzzlepieces(this.dataset.puzzleref)
		dropZones.forEach(zone => {
			zone.innerHTML = "";
		});

	}

	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlepieces(0);

	// function resetDropZones(){

	// }

})();
